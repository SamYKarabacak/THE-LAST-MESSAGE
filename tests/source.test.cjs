/** Dependency-free smoke checks for the shipped single-file game. */
'use strict';
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/i);
assert.ok(match, 'Game JavaScript should be embedded');
const script = match[1];
const marker = 'root.TLM_ENGINE = engine;';
const engineStart = script.indexOf(marker);
assert.ok(engineStart >= 0, 'Narrative engine must be present');
const endMarker = "})(typeof globalThis !== 'undefined' ? globalThis : this);";
const endIndex = script.indexOf(endMarker, engineStart);
assert.ok(endIndex >= 0, 'Narrative engine module must close');
const ctx = vm.createContext({});
vm.runInContext(script.slice(0, endIndex + endMarker.length), ctx, {filename:'narrative.js'});
const story = ctx.TLM_STORY, engine = ctx.TLM_ENGINE;

test('The game has a title, creator credit and standalone HTML', () => {
 assert.match(html, /<title>THE LAST MESSAGE<\/title>/);
 assert.match(html, /SamYKar/);
 assert.match(html, /Game created by BravenDev/);
 assert.match(html, /<style>/);
 assert.ok(!/<script[^>]+src=/.test(html), 'No external scripts');
});

test('JavaScript parses and narrative graph validates', () => {
 new vm.Script(script, {filename:'index.html inline script'});
 assert.deepEqual(Array.from(engine.validate(story)), []);
});

test('Four distinct endings exist and all are reachable', () => {
 assert.deepEqual(Object.keys(story.endings).sort(), ['bad','false','good','secret']);
 const queue = [engine.create(story)];
 const seen = new Set();
 const completed = new Set();
 while (queue.length) {
  const state = queue.shift();
  const flagsKey = JSON.stringify(Object.entries(state.flags).sort());
  const key = state.scene + ':' + flagsKey;
  if (seen.has(key)) continue;
  seen.add(key);
  assert.ok(seen.size < 5000, 'Narrative traversal is unexpectedly large');
  while (engine.advance(story, state)) {}
  if (story.scenes[state.scene].ending) {
   completed.add(engine.finish(story, state));
   continue;
  }
  for (const option of engine.choices(story, state)) {
   const next = engine.clone(state);
   engine.choose(story, next, option.id);
   queue.push(next);
  }
 }
 assert.deepEqual(Array.from(completed).sort(), ['bad','false','good','secret']);
});

test('Progress is restorable, and an invalid save is rejected', () => {
 const state = engine.create(story);
 engine.advance(story,state);
 const restored = engine.restore(story,engine.pack(state));
 assert.ok(restored);
 assert.equal(restored.scene,state.scene);
 assert.equal(restored.cursor,state.cursor);
 assert.equal(engine.restore(story,{schema:999}),null);
});

test('Choices cannot be made before the current scene finishes', () => {
 const state = engine.create(story);
 assert.throws(() => engine.choose(story,state,'made-up-choice'));
});
