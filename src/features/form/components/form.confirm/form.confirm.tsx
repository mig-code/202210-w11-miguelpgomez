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
                <p>Nombre: {formData.name}</p>
                <p>Apellido: {formData.lastName}</p>
                <p>Genero :{formData.gender}</p>
                <p>Fecha de nacimiento: {formData.birthDate}</p>
                <p>Email: {formData.email}</p>
                <p>Usuario: {formData.userName}</p>
                <p>Tipo de cuenta: {formData.accountType}</p>
            </div>
            <div className='buttons-container'>
                <button onClick={handleBack}>Atrás </button>
                <Link to={'login'}>
                    <button onClick={handleConfirm}>Acceder</button>
                </Link>
            </div>
        </>
    );
}
