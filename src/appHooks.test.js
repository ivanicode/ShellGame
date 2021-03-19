import { renderHook, act } from '@testing-library/react-hooks';
import { useGame } from './appHooks';
import * as helpers from './helpers';


describe('App hooks', () => {
    describe('useGame function', () => {
        it('should change states if function buttonClicked was called', () => {
            
            const hookResult = renderHook(() => useGame())
            helpers.getRandomIntInclusive = jest.fn().mockImplementation(() => 1)
            helpers.calculateBallLeft = jest.fn().mockImplementation(() => 120)
        
            jest.useFakeTimers();
            expect(typeof hookResult.result.current.buttonClicked).toEqual('function')

            act(() => {
                hookResult.result.current.buttonClicked()
            })
            
            expect(hookResult.result.current.newKittyPosition).toEqual([100, 210, 320])
            expect(hookResult.result.current.disabledButton).toEqual(true)
            expect(hookResult.result.current.message).toEqual("")
            expect(hookResult.result.current.kittyWithBallIsVisible).toEqual(true)
            expect(hookResult.result.current.ballLeft).toEqual(120)

            act(() => {
                jest.advanceTimersByTime(1000);
            })

            expect(hookResult.result.current.kittyWithBallIsVisible).toEqual(false)

            act(() => {
                helpers.getRandomIntInclusive = jest.fn().mockImplementation(() => 2)
                jest.advanceTimersByTime(500);
            })

            expect(hookResult.result.current.newKittyPosition).toEqual([210, 320, 100])

            act(() => {
                helpers.getRandomIntInclusive = jest.fn().mockImplementation(() => 3)
                jest.advanceTimersByTime(5000);
            })

            expect(hookResult.result.current.newKittyPosition).toEqual([210, 100, 320])

            act(() => {
                helpers.getRandomIntInclusive = jest.fn().mockImplementation(() => 4)
                jest.advanceTimersByTime(400);
            })

            expect(hookResult.result.current.newKittyPosition).toEqual([210, 100, 320])
        })
        it('should set visible ball in position that was clicked and display win message', () => {

            jest.useFakeTimers();
            helpers.getRandomIntInclusive = jest.fn().mockImplementation(() => 2)
            const hookResult = renderHook(() => useGame())
            
            expect(typeof hookResult.result.current.clickedKitty).toEqual('function')

            act(() => {
                hookResult.result.current.buttonClicked()
            })
            act(() => {
              jest.runAllTimers()  
            })

            expect(hookResult.result.current.kittyWithBallIsVisible).toEqual(false)
            act(() => {
                hookResult.result.current.clickedKitty({target: {dataset: {nr: 2}}})
                
            })
            expect(hookResult.result.current.message).toEqual("You win!")
            expect(hookResult.result.current.kittyWithBallIsVisible).toEqual(true)
        })
        it('should display loose message', () => {

            jest.useFakeTimers();
            helpers.getRandomIntInclusive = jest.fn().mockImplementation(() => 3)
            const hookResult = renderHook(() => useGame())
            
            expect(typeof hookResult.result.current.clickedKitty).toEqual('function')

            act(() => {
                hookResult.result.current.buttonClicked()
            })
            act(() => {
              jest.runAllTimers()  
            })

            expect(hookResult.result.current.message).toEqual("")

            act(() => {
                hookResult.result.current.clickedKitty({target: {dataset: {nr: 2}}})
                
            })

            expect(hookResult.result.current.message).toEqual("You lose...")
        })
    })
})