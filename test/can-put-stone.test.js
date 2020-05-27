"use strict";
import { assert } from "chai";
const cps = require("../src/js/modules/canPutStone.js");

let playBoard;

describe("#canPutStone", () => {
  playBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0],
    [0, 0, 0, 2, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

  it("既に石が置いてある盤面には石が置けない", () => {
    assert.equal(cps(3, 3, playBoard), false);
    assert.equal(cps(3, 4, playBoard), false);
    assert.equal(cps(4, 3, playBoard), false);
    assert.equal(cps(4, 4, playBoard), false);
  });
  it("周囲に石の置いてある盤面に石が置ける", () => {
    assert.equal(cps(2, 2, playBoard), true);
    assert.equal(cps(3, 2, playBoard), true);
    assert.equal(cps(4, 2, playBoard), true);
    assert.equal(cps(5, 2, playBoard), true);
    assert.equal(cps(2, 3, playBoard), true);
    assert.equal(cps(5, 3, playBoard), true);

    assert.equal(cps(2, 4, playBoard), true);
    assert.equal(cps(5, 4, playBoard), true);

    assert.equal(cps(2, 5, playBoard), true);
    assert.equal(cps(3, 5, playBoard), true);
    assert.equal(cps(4, 5, playBoard), true);
    assert.equal(cps(5, 5, playBoard), true);
  });
});
