import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from './form';
import userEvent from '@testing-library/user-event';
import { accessDataMock, personalDataMock } from '../../mocks/form.data.mocks';
import { BrowserRouter } from 'react-router-dom';

describe('Given Form Smart component', () => {
    test('renders title', () => {
        render(<Form></Form>);

        const textElement = screen.getByText(/Registro en la aplicación/i);
        expect(textElement).toBeInTheDocument();
    });
    describe('When data are provided in the form', () => {
        const userData = personalDataMock;

        let inputTextElements: Array<HTMLElement>;
        let inputDateElement: HTMLElement | null;
        let inputRadioElements: Array<HTMLElement>;
        let inputCheckboxElement: HTMLElement;
        let elementButton: HTMLElement;

        beforeEach(() => {
            render(
                <BrowserRouter>
                    <Form></Form>
                </BrowserRouter>
            );
           
        });

        test('Navigate to test prev and next step', () => {
            // STEP 1

            inputTextElements = screen.getAllByRole('textbox'); // <input>
            inputDateElement = screen.queryByLabelText(/Fecha de nacimiento/i); // <input>
            inputRadioElements = screen.getAllByRole('radio'); // <input>
            inputCheckboxElement = screen.getByRole('checkbox'); // <input>

            // COMPLETE PERSONAL FORM
            userEvent.type(inputTextElements[0], userData.name as string);
            userEvent.type(inputTextElements[1], userData.lastName as string);
            
            if (inputDateElement === null)
                throw new Error('Date element is null');
            userEvent.type(inputDateElement, userData.birthDate as string);
            userEvent.type(inputTextElements[2], userData.email as string);
            userEvent.click(inputRadioElements[1]);

            // GO TO NEXT STEP
            elementButton = screen.getByRole('button');
            userEvent.click(elementButton);

    
            // GOB BACK TO STEP 1
            elementButton = screen.getAllByRole('button')[0];
            expect(elementButton).toBeInTheDocument();
            userEvent.click(elementButton);

            // COMPLETE AGAIN
            inputTextElements = screen.getAllByRole('textbox'); // <input>
            inputDateElement = screen.queryByLabelText(/Fecha de nacimiento/i); // <input>
            inputRadioElements = screen.getAllByRole('radio'); // <input>
            inputCheckboxElement = screen.getByRole('checkbox');
            userEvent.type(inputTextElements[0], userData.name as string);
            userEvent.type(inputTextElements[1], userData.lastName as string);
            if (inputDateElement === null)
                throw new Error('Date element is null');
            userEvent.type(inputDateElement, userData.birthDate as string);
            userEvent.type(inputTextElements[2], userData.email as string);
            userEvent.click(inputRadioElements[1]);

            elementButton = screen.getByRole('button');
            expect(elementButton).toBeInTheDocument();

            userEvent.click(elementButton);

            // NEXT STEP COMPLETE ACCES DATA

            const accessData = accessDataMock;

            inputTextElements = screen.getAllByRole('textbox'); // <input>
            const passwordInputElement =
                screen.getAllByPlaceholderText('Contraseña'); // <input>
            const confirmPasswordInputElement = screen.getAllByPlaceholderText(
                'Confirmar contraseña'
            ); // <input>
            const inputSelectElement =
                screen.queryByLabelText(/Tipo de cuenta/i); //
            userEvent.type(inputTextElements[0], accessData.userName as string);
            
            userEvent.type(
                passwordInputElement[0],
                accessData.password as string
            );
         
            userEvent.type(
                confirmPasswordInputElement[0],
                accessData.confirmPassword as string
            );
         

            if (inputSelectElement === null)
                throw new Error('Select element is null');
            userEvent.selectOptions(
                inputSelectElement,
                accessData.accountType as string
            );
          

            // CLICK TO GO TO CONFIRM
            elementButton = screen.getAllByRole('button')[1];
            userEvent.click(elementButton);

            // CLICK TO SAVE DATA
            elementButton = screen.getAllByRole('button')[1];
            userEvent.click(elementButton);
        });
    });
});
