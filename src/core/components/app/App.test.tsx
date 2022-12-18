import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given App component', () => {
    test('renders tittle', () => {
        render(<App />);
        const textElement = screen.getByText(/Header/i);
        expect(textElement).toBeInTheDocument();
    });
});
