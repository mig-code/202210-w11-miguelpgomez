import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormComfirm } from './form.confirm';
import { BrowserRouter } from 'react-router-dom';

describe('Given Confirm Form component', () => {
    test('renders title', () => {
        const mockFormData = {
            name: 'name',
            lastName: 'lastName',
            birthDate: 'birthDate',
            email: 'email',
            gender: 'gender',
            newsLetter: false,
            userName: 'userName',
            password: 'password',
            confirmPassword: 'confirmPassword',
            accountType: 'accountType',
        };
        const handlePrevStep = jest.fn();
        const saveUserData = jest.fn();
        render(
            <BrowserRouter>
                <FormComfirm
                    formData={mockFormData}
                    handlePrevStep={handlePrevStep}
                    saveUserData={saveUserData}
                ></FormComfirm>
            </BrowserRouter>
        );

        const textElement = screen.getByText(/Confirma tus datos/i);
        expect(textElement).toBeInTheDocument();
    });
});
