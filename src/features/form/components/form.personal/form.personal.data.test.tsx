import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormPersonalData } from './form.personal.data';
import userEvent from '@testing-library/user-event';
import { personalDataMock } from '../../mocks/form.data.mocks';

describe('Given Personal Data Form component', () => {
    const handleAdd = jest.fn();
    const handleNextStep = jest.fn();
    beforeEach(() => {
        render(
            <FormPersonalData
                handleAdd={handleAdd}
                handleNextStep={handleNextStep}
            ></FormPersonalData>
        );
    });

    describe('When it is call with a DOM implementation', () => {
        test(`Then component should be render with its title`, () => {
            const elementHeader = screen.getByRole('heading', {
                name: 'Datos personales',
            }); // <h2>

            expect(elementHeader).toBeInTheDocument();
        });

        describe('When data are provided in the form', () => {
            const userData = personalDataMock;

            let inputTextElements: Array<HTMLElement>;
            let inputDateElement: HTMLElement;
            let inputRadioElements: Array<HTMLElement>;
            let inputCheckboxElement: HTMLElement;
            let elementButton: HTMLElement;

            beforeEach(() => {
                inputTextElements = screen.getAllByRole('textbox'); // <input>
                // inputDateElement = screen.getByRole('date'); // <input>
                inputRadioElements = screen.getAllByRole('radio'); // <input>
                inputCheckboxElement = screen.getByRole('checkbox'); // <input>
            });

            test('Then form could be used for type content', () => {

                // NAME  LASTNAME  EMAIL

                userEvent.type(inputTextElements[0], userData.name as string);
                userEvent.type(
                    inputTextElements[1],
                    userData.lastName as string
                );
                expect(inputTextElements[0]).toHaveValue(userData.name);
                expect(inputTextElements[1]).toHaveValue(userData.lastName);

                userEvent.type(inputTextElements[2], userData.email as string);
                expect(inputTextElements[2]).toHaveValue(userData.email);

                //radio buttons
                userEvent.click(inputRadioElements[1]);
                expect(inputRadioElements[1]).toBeChecked();
                
                //checkbox
                userEvent.click(inputCheckboxElement);
                expect(inputCheckboxElement).toBeChecked();

                const elementYears = screen.getByText(/Edad/i);
                expect(elementYears).toBeInTheDocument();


                elementButton = screen.getByRole('button');
                expect(elementButton).toBeInTheDocument();

                userEvent.click(elementButton);
                expect(handleAdd).toHaveBeenCalled();
                expect(handleNextStep).toHaveBeenCalled();
            });

         
        });
    });
});
