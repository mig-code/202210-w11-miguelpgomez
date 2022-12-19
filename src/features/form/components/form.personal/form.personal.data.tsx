import { SyntheticEvent, useState } from 'react';
import { FormDataType } from '../../types/form.data';

export function FormPersonalData({
    handleAdd,
}: {
    handleAdd: (data: Partial<FormDataType>) => void;
}) {
    const InitialPersonalData: Partial<FormDataType> = {
        name: '',
        lastName: '',
        birthDate: '',
        email: '',
        newsLetter: false,
    };
    const [personalData, setPersonalData] = useState(InitialPersonalData);
    const handleInput = (ev: SyntheticEvent) => {
        console.log("input")
        const element = ev.target as HTMLFormElement;
        setPersonalData({
            ...personalData,
            [element.name]: element.value,
        });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(personalData);
    };

    return (
        <>
            <h1>Personal Data Form </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre"
                        value={personalData.name}
                        onInput={handleInput}
                        required
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}
