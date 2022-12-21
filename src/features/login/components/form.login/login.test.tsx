import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from './login';
import userEvent from '@testing-library/user-event';
import { loginDataMock } from '../../mocks/login.data.mocks';

describe('Given Login Page component', () => {
    beforeEach(() => {
        render(<Login></Login>);
    });

    describe('When it is call with a DOM implementation', () => {
        test(`Then component should be render with its title`, () => {
            const elementHeader = screen.getByRole('heading', {
                name: 'Login',
            }); // <h2>

            expect(elementHeader).toBeInTheDocument();
        });
        test(`Then component should render access button`, () => {
            const elementButton = screen.getByRole('button');
            expect(elementButton).toBeInTheDocument();
        });
        describe('When data are provided in the form', () => {
            const userData = loginDataMock;
            let inputUserElement: HTMLElement;
            let passwordInputElement: HTMLElement;
            let elementButton: HTMLElement;

            beforeEach(() => {
                inputUserElement = screen.getByRole('textbox'); // <input>
                passwordInputElement =
                    screen.getByPlaceholderText('Contraseña'); // <input>
                elementButton = screen.getByRole('button');
            });

            test('User writes correct password', () => {
                userEvent.type(inputUserElement, userData.userName as string);
                expect(inputUserElement).toHaveValue(userData.userName);
                userEvent.type(
                    passwordInputElement,
                    userData.password as string
                );
                expect(passwordInputElement).toHaveValue(userData.password);
                // jest.spyOn(Storage.prototype, 'setItem');
                // Storage.prototype.setItem = jest.fn();
                // userEvent.click(elementButton);
            });
        });
    });
});
