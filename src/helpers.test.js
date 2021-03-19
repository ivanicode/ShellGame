import * as helpers from './helpers';

describe('helpers functions', () => {
    describe('getRandomIntInclusive function', () => {
        it('should return number between max and min', () => {
            const number = helpers.getRandomIntInclusive(1, 4)
            expect(number).toBeGreaterThan(0, 10)
            expect(number).toBeLessThan(5, 10)
        })
    })
    describe('calculateBallLeft function', () => {
        it('should return proper data', () => {
            const ball = helpers.calculateBallLeft(1)
            expect(ball).toEqual(246)
        })
    })
})