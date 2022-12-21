import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from './form';

describe('Given Form Smart component', () => {
    test('renders title', () => {
        render(<Form></Form>);

        const textElement = screen.getByText(/Registro en la aplicación/i);
        expect(textElement).toBeInTheDocument();
    });
});
