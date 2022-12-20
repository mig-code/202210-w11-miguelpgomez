import { Link } from 'react-router-dom';
import { FormDataType } from '../../types/form.data';

export function FormComfirm({
    formData,

    handlePrevStep,
}: {
    formData: FormDataType;

    handlePrevStep: () => void;
}) {
    function handleBack() {
        handlePrevStep();
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
            <button onClick={handleBack}>Atrás </button>
            <Link to={'login'}>
                <button>Acceder</button>
            </Link>
        </>
    );
}
