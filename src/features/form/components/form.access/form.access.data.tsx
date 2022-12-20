import { SyntheticEvent, useEffect, useState } from 'react';
import { FormDataType } from '../../types/form.data';

export function FormAccessData({
    handleAdd,
    handleNextStep,
    handlePrevStep,
}: {
    handleAdd: (data: Partial<FormDataType>) => void;
    handleNextStep: () => void;
    handlePrevStep: () => void;
}) {
    const initialAccessData: Partial<FormDataType> = {
        userName: '',
        password: '',
        confirmPassword: '',
        accountType: '',
    };
    const [accessData, setAccessData] = useState(initialAccessData);
    const [areFieldsValid, setAreFieldsValid] = useState(false);

    const checkFieldsAreValid = () => {
        if (
            accessData.userName &&
            accessData.password &&
            accessData.confirmPassword &&
            accessData.accountType
        ) {
            setAreFieldsValid(true);
        } else {
            setAreFieldsValid(false);
        }
    };

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;

        setAccessData({
            ...accessData,
            [element.name]: element.value,
        });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(accessData);
        handleNextStep();
    };

    const handleBack = () => {
        handlePrevStep();
    };

    useEffect(() => {
        checkFieldsAreValid();
    });

    return (
        <>
            <h2>Datos de acceso </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <label htmlFor="userName">Nombre de Usuario</label> */}
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Nombre de Usuario"
                        value={accessData.userName}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    {/* <label htmlFor="password">Password</label> */}
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Contraseña"
                        value={accessData.password}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    {/* <label htmlFor="confirmPassword">Confirmar Password</label> */}
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirmar contraseña"
                        value={accessData.confirmPassword}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="accountType">Tipo de Cuenta</label>
                    <select
                        name="accountType"
                        id="accountType"
                        value={accessData.accountType}
                        onInput={handleInput}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="personal">Personal</option>
                        <option value="pro">Pro</option>
                        <option value="business">Business</option>
                    </select>
                </div>

                <div className="buttons-container">
                    <button type="button" onClick={handleBack}>
                        Atrás
                    </button>
                    {areFieldsValid && <button type="submit">Siguiente</button>}
                </div>
            </form>
        </>
    );
}
