import { SyntheticEvent, useEffect, useState } from 'react';
import { FormDataType } from '../../types/form.data';

export function FormPersonalData({
    handleAdd,
    handleNextStep,
}: {
    handleAdd: (data: Partial<FormDataType>) => void;
    handleNextStep: () => void;
}) {
    const initialPersonalData: Partial<FormDataType> = {
        name: '',
        lastName: '',
        birthDate: '',
        gender: '',
        email: '',
        newsLetter: false,
    };
    const [personalData, setPersonalData] = useState(initialPersonalData);
    const [areFieldsValid, setAreFieldsValid] = useState(false);

    const checkFieldsAreValid = () => {
        if (
            personalData.name &&
            personalData.lastName &&
            personalData.birthDate &&
            personalData.gender &&
            personalData.email
        ) {
            setAreFieldsValid(true);
        } else {
            setAreFieldsValid(false);
        }
    };

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;

        setPersonalData(
            element.type === 'checkbox'
                ? {
                      ...personalData,
                      [element.name]: element.checked,
                  }
                : {
                      ...personalData,
                      [element.name]: element.value,
                  }
        );
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(personalData);
        handleNextStep();
    };

    useEffect(() => {
        checkFieldsAreValid();
    });

    return (
        <>
            <h2>Datos personales </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <label htmlFor="name">Nombre</label> */}
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre"
                        value={personalData.name}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    {/* <label htmlFor="lastName">Apellido</label> */}
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Apellido"
                        value={personalData.lastName}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="birthDate">Fecha de nacimiento</label>
                    <input
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        placeholder="Fecha de nacimiento"
                        value={personalData.birthDate}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="male">Hombre</label>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="hombre"
                        checked={personalData.gender === 'hombre'}
                        onChange={handleInput}
                    />
                    <label htmlFor="female">Mujer</label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="mujer"
                        checked={personalData.gender === 'mujer'}
                        onChange={handleInput}
                    />
                    <label htmlFor="others">Otros / No contestar</label>
                    <input
                        type="radio"
                        id="others"
                        name="gender"
                        value="Otros / No contestar"
                        checked={personalData.gender === 'Otros / No contestar'}
                        onChange={handleInput}
                    />
                </div>
                <div>
                    {/* <label htmlFor="email">Email</label> */}
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Dirección de email"
                        value={personalData.email}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="newsLetter">
                        Suscribirse al newsletter
                    </label>
                    <input
                        type="checkbox"
                        name="newsLetter"
                        id="newsLetter"
                        defaultChecked={personalData.newsLetter}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    {areFieldsValid && <button type="submit">Siguiente</button>}
                </div>
            </form>
        </>
    );
}
