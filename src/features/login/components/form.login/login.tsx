import { SyntheticEvent, useEffect, useState } from 'react';
import { FormDataType } from '../../../form/types/form.data';
export function Login() {
    const initialLoginData: Partial<FormDataType> = {
        userName: '',
        password: '',
    };
    const [loginData, setLoginData] = useState(initialLoginData);
    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;

        setLoginData({
            ...loginData,
            [element.name]: element.value,
        });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
    };

    useEffect(() => {
        console.log(loginData);
    }, [loginData]);

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
                        value={loginData.userName}
                        onInput={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={loginData.password}
                        onInput={handleInput}
                    />
                </div>

                <div>
                    <button onClick={handleSubmit} type="submit">
                        Acceder
                    </button>
                </div>
            </form>
        </>
    );
}
