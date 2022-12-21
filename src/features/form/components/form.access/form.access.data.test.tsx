import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormAccessData } from './form.access.data';

describe('Given Access Data Form component', () => {
    test('renders title', () => {
        const handleAddFormData = jest.fn();
        const handleNextStep = jest.fn();
        const handlePrevStep = jest.fn();
        render(
            <FormAccessData
                handleAdd={handleAddFormData}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
            ></FormAccessData>
        );

        const textElement = screen.getByText(/Datos de acceso/i);
        expect(textElement).toBeInTheDocument();
    });
});
