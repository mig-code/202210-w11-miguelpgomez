import { FormDataType } from "../../types/form.data";

export function FormComfirm({
    formData,
    handleNextStep,
    handlePrevStep,
}: {
    formData: FormDataType;
    handleNextStep: () => void;
    handlePrevStep: () => void;
}) {
    function handleBack() {
        handlePrevStep();
    }
    function handleConfirm() {
        handleNextStep();
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
            <button onClick={handleConfirm}>Acceder</button>
        </>
    );
}
