import React from 'react';
import { render, fireEvent, waitFor, screen, getByRole } from '@testing-library/react'
import App from './App';
import * as appHooks from './appHooks'

describe('App component', () => {
    it('should return proper data', () => {
        render(<App />)

        const container2 = document.querySelector('.visibleWool')
        expect(container2).toBeFalsy()
        const container = document.querySelector('.wool')
        expect(container).toBeTruthy()
    })
    it('', () => {

        

        const clickedKitty = jest.fn()

         appHooks.useGame = jest.fn().mockImplementation(
            () => ({
                buttonClicked: jest.fn(), 
                clickedKitty,
                message: "", 
                disabledButton: true, 
                ballLeft: 0, 
                kittyWithBallIsVisible: true, 
                newKittyPosition: [],
                ableToClickKitty: true
            })
        )
        render(<App />)
        expect(clickedKitty).toHaveBeenCalledTimes(0)

        const img = screen.getByAltText('kittyOne')
        fireEvent.click(img)

        expect(clickedKitty).toHaveBeenCalledTimes(1)

        const container2 = document.querySelector('.wool')
        expect(container2).toBeFalsy()
        const container = document.querySelector('.visibleWool')
        expect(container).toBeTruthy()
    })
})
