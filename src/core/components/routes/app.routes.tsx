import { Routes, Route, Navigate } from 'react-router-dom';

import { FormPage } from '../../../features/form/pages/form.page';
import { LoginPage } from '../../../features/login/pages/login.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path={''} element={<FormPage></FormPage>}></Route>
            <Route path={'login'} element={<LoginPage></LoginPage>}></Route>

            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
