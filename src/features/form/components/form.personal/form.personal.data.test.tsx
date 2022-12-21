import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormPersonalData } from './form.personal.data';

describe('Given Personal Data Form component', () => {
    test('renders title', () => {
        const handleAdd = jest.fn();
        const handleNextStep = jest.fn();
        render(
            <FormPersonalData
                handleAdd={handleAdd}
                handleNextStep={handleNextStep}
            ></FormPersonalData>
        );

        const textElement = screen.getByText(/Datos personales/i);
        expect(textElement).toBeInTheDocument();
    });
});
