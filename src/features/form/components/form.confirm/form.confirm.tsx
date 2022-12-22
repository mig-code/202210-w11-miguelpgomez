import { Link } from 'react-router-dom';
import { PersonalInfo } from '../../../../core/components/personal.info/personal.info';
import { FormDataType } from '../../types/form.data';

export function FormComfirm({
    formData,
    handlePrevStep,
    saveUserData,
}: {
    formData: FormDataType;
    handlePrevStep: () => void;
    saveUserData: (userName: string, data: Array<FormDataType>) => void;
}) {
    function handleBack() {
        handlePrevStep();
    }
    function handleConfirm() {
        saveUserData(formData.userName, [formData]);
    }

    return (
        <>
            <h2>Confirma tus datos</h2>
            <PersonalInfo formData={formData} ></PersonalInfo>
            <div className="buttons-container">
                <button onClick={handleBack}>Atrás </button>
                <Link to={'login'}>
                    <button onClick={handleConfirm}>Acceder</button>
                </Link>
            </div>
        </>
    );
}
