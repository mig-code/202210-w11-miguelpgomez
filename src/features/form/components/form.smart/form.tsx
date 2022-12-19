import { useEffect, useState } from 'react';
import { FormDataType } from '../../types/form.data';
import { FormAccess } from '../form.access/form.access';
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
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <>
            {formStep === 0 && (
                <FormPersonalData
                    handleAdd={handleAddFormData}
                    handleNextStep={handleNextStep}
                ></FormPersonalData>
            )}
            {formStep === 1 && (
                <FormAccess handleAdd={handleAddFormData} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep}></FormAccess>
            )}
            {formStep === 2 && <FormComfirm formData={formData} handleNextStep={handleNextStep} handlePrevStep={handlePrevStep}></FormComfirm>}
        </>
    );
}
