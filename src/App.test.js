import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
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
         appHooks.useGame = jest.fn().mockImplementation(
            () => ({
                buttonClicked: jest.fn(), 
                clickedKitty: jest.fn(), 
                message: "", 
                disabledButton: true, 
                ballLeft: 0, 
                kittyWithBallIsVisible: true, 
                newKittyPosition: []
            })
        )
        
        render(<App />)

        const container2 = document.querySelector('.wool')
        expect(container2).toBeFalsy()
        const container = document.querySelector('.visibleWool')
        expect(container).toBeTruthy()
    })
})
