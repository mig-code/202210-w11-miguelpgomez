import { SyntheticEvent, useEffect, useState } from 'react';
import { FormDataType } from '../../types/form.data';

export function FormAccess({
    handleAdd,
}: {
    handleAdd: (data: Partial<FormDataType>) => void;
}) {
    const initialAccessData: Partial<FormDataType> = {
        userName: '',
        password: '',
        confirmPassword: '',
        accountType: '',
    };
    const [accessData, setAccessData] = useState(initialAccessData);
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
    };

    useEffect(() => {
        console.log(accessData);
    }, [accessData]);

    return (
        <>
            <h2>Login </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Nombre de Usuario</label>
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
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        
                        value={accessData.password}
                        onInput={handleInput}
                        
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmar Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                     
                        value={accessData.confirmPassword}
                        onInput={handleInput}
                    />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}
