import { FormDataType } from '../../../features/form/types/form.data';

export function PersonalInfo({ formData }: { formData: FormDataType }) {
    return (
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
                <span>Usuario:</span> {formData.userName}
            </p>
            <p>
                <span>Tipo de Cuenta:</span> {formData.accountType}
            </p>
        </div>
    );
}
