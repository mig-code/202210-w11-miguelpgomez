import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './home.page';



describe('Given Home Page component', () => {
    
    
    test('renders Info', () => {
        render(<HomePage />);
        

        const textElement = screen.getByText(/Home Page/i);
        expect(textElement).toBeInTheDocument();
    });
   
});
