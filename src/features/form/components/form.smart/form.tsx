import { useEffect, useState } from 'react';
import { FormDataType } from '../../types/form.data';
import { FormPersonalData } from '../form.personal/form.personal.data';

export function Form() {
    const initialFormData: FormDataType = {
        name: '',
        lastName: '',
        birthDate: '',
        email: '',
        gender: '',
        newsLetter: false,
        userName: '',
        password: '',
        confirmPassword: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    function handleAddFormData(data:Partial<FormDataType>) {
        setFormData({
            ...formData,
            ...data,
        });
        
    }
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <>
            <FormPersonalData handleAdd={handleAddFormData}></FormPersonalData>
        </>
    );
}
