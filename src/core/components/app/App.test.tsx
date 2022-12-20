import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('Given App component', () => {
    test('renders tittle', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        const textElement = screen.getByText(/Personal Data Form/i);
        expect(textElement).toBeInTheDocument();
    });
});
