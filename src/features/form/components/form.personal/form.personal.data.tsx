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
    const [userAge, setUserAge] = useState(0);

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
    const maxDate = new Date().toISOString().split('T')[0];
    const getAge = (birthDate: string) => {
        const today = new Date();
        const birthDateDate = new Date(birthDate);
        const age = today.getFullYear() - birthDateDate.getFullYear();
        const month = today.getMonth() - birthDateDate.getMonth();
        if (
            month < 0 ||
            (month === 0 && today.getDate() < birthDateDate.getDate())
        ) {
            return age - 1;
        }
        return age;
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
    useEffect(() => {
        if (personalData.birthDate) setUserAge(getAge(personalData.birthDate));
    }, [personalData.birthDate]);

    return (
        <>
            <h2>Datos personales </h2>
            <form onSubmit={handleSubmit}>
                <div>
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
                    <p> {userAge ? `Edad: ${userAge} años` : ''}</p>
                    <input
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        max={maxDate}
                        placeholder="Fecha de nacimiento"
                        value={personalData.birthDate}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="hombre"
                        checked={personalData.gender === 'hombre'}
                        onChange={handleInput}
                    />
                    <label htmlFor="male">Hombre</label>

                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="mujer"
                        checked={personalData.gender === 'mujer'}
                        onChange={handleInput}
                    />
                    <label htmlFor="female">Mujer</label>

                    <input
                        type="radio"
                        id="others"
                        name="gender"
                        value="No contestar"
                        checked={personalData.gender === 'No contestar'}
                        onChange={handleInput}
                    />
                    <label htmlFor="others">No contestar</label>
                </div>
                <div>
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
                    <input
                        type="checkbox"
                        name="newsLetter"
                        id="newsLetter"
                        defaultChecked={personalData.newsLetter}
                        onInput={handleInput}
                    />
                    <label htmlFor="newsLetter">
                        Suscribirse al newsletter
                    </label>
                </div>
                <div>
                    {areFieldsValid && <button type="submit">Siguiente</button>}
                </div>
            </form>
        </>
    );
}
