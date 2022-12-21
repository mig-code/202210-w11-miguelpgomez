import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginPage } from './login.page';

describe('Given Login Page component', () => {
    test('renders Login Title', () => {
        render(<LoginPage></LoginPage>);

        const textElement = screen.getByText(/Login/i);
        expect(textElement).toBeInTheDocument();
    });
});
