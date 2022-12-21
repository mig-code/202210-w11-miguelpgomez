import { FormDataType } from "../types/form.data";

export const fullFormDataMock: FormDataType = {
    name: 'Juan',
    lastName: 'Perez',
    birthDate: '1995-02-21',
    email: 'juanperez@gmail.com',
    gender: 'male',
    newsLetter: false,
    userName: 'juan',
    password: '1234',
    confirmPassword: '1234',
    accountType: 'personal',
};

export const personalDataMock: Partial<FormDataType> = {
    name: 'Juan',
    lastName: 'Perez',
    birthDate: '1995-02-21',
    email: 'juanperez@gmail.com',
    gender: 'male',
    newsLetter: false,
};

