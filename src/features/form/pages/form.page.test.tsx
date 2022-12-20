import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormPage } from './form.page';

describe('Given Form Page component', () => {
    test('renders Form Title', () => {
        render(<FormPage></FormPage>);

        const textElement = screen.getByText(/Datos personales/i);
        expect(textElement).toBeInTheDocument();
    });
});
