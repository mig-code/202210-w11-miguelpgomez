import React from 'react';
import { render, screen } from '@testing-library/react';

import { FormPage } from './form.page';

describe('Given Home Page component', () => {
    test('renders Info', () => {
        render(<FormPage></FormPage>);

        const textElement = screen.getByText(/Personal Data/i);
        expect(textElement).toBeInTheDocument();
    });
});
