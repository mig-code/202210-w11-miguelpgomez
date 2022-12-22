import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormComfirm } from './form.confirm';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { fullFormDataMock } from '../../mocks/form.data.mocks';

describe('Given Confirm Form component', () => {
    const handlePrevStep = jest.fn();
    const saveUserData = jest.fn();

    beforeEach(() => {
        render(
            <BrowserRouter>
                <FormComfirm
                    formData={fullFormDataMock}
                    handlePrevStep={handlePrevStep}
                    saveUserData={saveUserData}
                ></FormComfirm>
            </BrowserRouter>
        );
    });

    describe('When it is call with a DOM implementation', () => {
        test(`Then component should be render with its title`, () => {
            const elementHeader = screen.getByRole('heading', {
                name: 'Confirma tus datos',
            }); // <h2>

            expect(elementHeader).toBeInTheDocument();
        });
        test(`Then component should be render with data`, () => {
            const elementName = screen.getByText(/Nombre:/i);
            expect(elementName).toBeInTheDocument();
            const elementEmail = screen.getByText(/juanperez@gmail.com/i);
            expect(elementEmail).toBeInTheDocument();
        });
    });
    describe('Check functionality of the buttons', () => {
        let elementButton: Array<HTMLElement>;

        test('Then button back should be in the document', () => {
            elementButton = screen.getAllByRole('button');
            expect(elementButton[0]).toBeInTheDocument();
            userEvent.click(elementButton[0]);
            expect(handlePrevStep).toHaveBeenCalled();
        });
        test('Then button access should be in the document', () => {
            elementButton = screen.getAllByRole('button');
            expect(elementButton[1]).toBeInTheDocument();
            userEvent.click(elementButton[1]);
            expect(saveUserData).toHaveBeenCalled();
        });
    });
});
