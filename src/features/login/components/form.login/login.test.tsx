import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from './login';

describe('Given Login Page component', () => {
    test('renders Login Title', () => {
        render(<Login></Login>);

        const textElement = screen.getByText(/Login/i);
        expect(textElement).toBeInTheDocument();
    });
});
