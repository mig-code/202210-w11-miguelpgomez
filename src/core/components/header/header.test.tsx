import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './header';


describe('Given Header component', () => {
    test('renders Header', () => {
        render(<Header />);

        const textElement = screen.getByText(/Registro/i);
        expect(textElement).toBeInTheDocument();
    });
});
