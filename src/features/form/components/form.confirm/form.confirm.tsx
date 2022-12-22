import { Link } from 'react-router-dom';
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
            <div>
                <p>
                    <span>Nombre:</span> {formData.name}
                </p>
                <p>
                    <span>Apellido:</span> {formData.lastName}
                </p>
                <p>
                    <span>Género:</span>
                    {formData.gender}
                </p>
                <p>
                    <span>Fecha de nacimiento:</span> {formData.birthDate}
                </p>
                <p>
                    <span>Email:</span> {formData.email}
                </p>
                <p>
                    <span>Usuario</span> {formData.userName}
                </p>
                <p>
                    <span>Tipo de Cuenta:</span> {formData.accountType}
                </p>
            </div>
            <div className="buttons-container">
                <button onClick={handleBack}>Atrás </button>
                <Link to={'login'}>
                    <button onClick={handleConfirm}>Acceder</button>
                </Link>
            </div>
        </>
    );
}
