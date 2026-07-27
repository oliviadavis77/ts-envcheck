import { missing } from "./envcheck.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
test("missing", () => {
  assert.deepEqual(missing(["A", "B"], { A: "x" }), ["B"]);
  assert.deepEqual(missing(["A"], { A: "" }), ["A"]);
});
