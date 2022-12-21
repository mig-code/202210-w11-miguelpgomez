import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormAccessData } from './form.access.data';
import { accessDataMock } from '../../mocks/form.data.mocks';
import userEvent from '@testing-library/user-event';

describe('Given Access Data Form component', () => {
    const handleAddFormData = jest.fn();
    const handleNextStep = jest.fn();
    const handlePrevStep = jest.fn();
    beforeEach(() => {
        render(
            <FormAccessData
                handleAdd={handleAddFormData}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
            ></FormAccessData>
        );
    });

    describe('When it is call with a DOM implementation', () => {
        test(`Then component should be render with its title`, () => {
            const elementHeader = screen.getByRole('heading', {
                name: 'Datos de acceso',
            }); // <h2>

            expect(elementHeader).toBeInTheDocument();
        });
    });

    describe('When data are provided in the form', () => {
        const userData = accessDataMock;
        let inputTextElements: Array<HTMLElement>;
        let passwordInputElement: Array<HTMLElement>;
        let confirmPasswordInputElement: Array<HTMLElement>;
        let inputSelectElement: HTMLElement | null;

        let elementButton: HTMLElement;

        beforeEach(() => {
            inputTextElements = screen.getAllByRole('textbox'); // <input>
            passwordInputElement = screen.getAllByPlaceholderText('Contraseña'); // <input>
            confirmPasswordInputElement = screen.getAllByPlaceholderText(
                'Confirmar contraseña'
            ); // <input>
            inputSelectElement = screen.queryByLabelText(/Tipo de cuenta/i); // <select>
        });

        test('Then button back should be in the document', () => {
            elementButton = screen.getByRole('button');
            expect(elementButton).toBeInTheDocument();
            userEvent.click(elementButton);
            expect(handlePrevStep).toHaveBeenCalled();
        });
        test('Then form could be used for type content and when content is complete we can click next step button', () => {
            userEvent.type(inputTextElements[0], userData.userName as string);
            expect(inputTextElements[0]).toHaveValue(userData.userName);
            userEvent.type(
                passwordInputElement[0],
                userData.password as string
            );
            expect(passwordInputElement[0]).toHaveValue(userData.password);
            userEvent.type(
                confirmPasswordInputElement[0],
                userData.confirmPassword as string
            );
            expect(confirmPasswordInputElement[0]).toHaveValue(
                userData.confirmPassword
            );

            if (inputSelectElement === null)
                throw new Error('Select element is null');
            userEvent.selectOptions(
                inputSelectElement,
                userData.accountType as string
            );
            expect(inputSelectElement).toHaveValue(userData.accountType);

            elementButton = screen.getAllByRole('button')[1];
            expect(elementButton).toBeInTheDocument();

            userEvent.click(elementButton);
            expect(handleNextStep).toHaveBeenCalled();
            expect(handleAddFormData).toHaveBeenCalled();
        });
    });
});
