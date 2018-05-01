import assert from 'assert'
import getScores from "./getScores";

describe('getScores', () => {
    it('gives the structure expected', () => {
        const scores = getScores([]);

        assert(scores.hasOwnProperty('drinkScores'));
        assert(scores.hasOwnProperty('dontEatScores'));
    });
});