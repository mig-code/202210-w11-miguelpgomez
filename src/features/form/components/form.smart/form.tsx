import { useState } from 'react';
import { setStore } from '../../../../services/storage';
import { FormDataType } from '../../types/form.data';
import { FormAccessData } from '../form.access/form.access.data';
import { FormComfirm } from '../form.confirm/form.confirm';
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
        accountType: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    const [formStep, setFormStep] = useState(0);

    function handleNextStep() {
        setFormStep(formStep + 1);
    }
    function handlePrevStep() {
        setFormStep(formStep - 1);
    }

    function handleAddFormData(data: Partial<FormDataType>) {
        setFormData({
            ...formData,
            ...data,
        });
    }
    function saveUserData(userName: string, data: Array<FormDataType>) {
        setStore(userName, data);
    }

    return (
        <>
            <h2 className="form-header">Registro en la aplicación</h2>
            {formStep === 0 && (
                <FormPersonalData
                    handleAdd={handleAddFormData}
                    handleNextStep={handleNextStep}
                ></FormPersonalData>
            )}
            {formStep === 1 && (
                <FormAccessData
                    handleAdd={handleAddFormData}
                    handleNextStep={handleNextStep}
                    handlePrevStep={handlePrevStep}
                ></FormAccessData>
            )}
            {formStep === 2 && (
                <FormComfirm
                    formData={formData}
                    handlePrevStep={handlePrevStep}
                    saveUserData={saveUserData}
                ></FormComfirm>
            )}
        </>
    );
}
