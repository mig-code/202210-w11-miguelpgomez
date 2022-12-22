import { SyntheticEvent, useEffect, useState } from 'react';
import { PersonalInfo } from '../../../../core/components/personal.info/personal.info';
import { getStoreData } from '../../../../services/storage';
import { FormDataType } from '../../../form/types/form.data';
import { LoginDataType } from '../../types/login.data';

export function Login() {
    const initialLoginData: LoginDataType = {
        userName: '',
        password: '',
    };
    const [loginData, setLoginData] = useState(initialLoginData);
    const [isUserValid, setIsUserValid] = useState(false);
    const [wrongPassword, setWrongPassword] = useState(false);
    const [userData, setUserData] = useState({} as FormDataType);
    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;

        setLoginData({
            ...loginData,
            [element.name]: element.value,
        });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const userDataFromStorage = getStoreData(loginData.userName);
        console.log('userDataFromStorage', userDataFromStorage);
        if (userDataFromStorage) {
            if (userDataFromStorage[0].password === loginData.password) {
                setIsUserValid(true);
                setWrongPassword(false);
                setUserData(userDataFromStorage[0] as FormDataType);
            } else {
                setWrongPassword(true);
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login </h2>
            {!isUserValid ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        {/* <label htmlFor="userName">Nombre de Usuario</label> */}
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
                        {/* <label htmlFor="password">Password</label> */}
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Contraseña"
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
            ) : (
                <>
                    <div>Has accedido correctamente</div>
                    <PersonalInfo formData={userData}></PersonalInfo>
                </>
            )}
            {wrongPassword && <div>Contraseña incorrecta</div>}
        </div>
    );
}
