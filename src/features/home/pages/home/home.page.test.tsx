import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './home.page';



describe('Given Home Page component', () => {
    
    
    test('renders Info', () => {
        render(<HomePage />);
        

        const linkElement = screen.getByText(/gentlemen pointing at you/i);
        expect(linkElement).toBeInTheDocument();
    });
    test ('renders firt Gentleman', () => {
        render(<HomePage />);
        const linkElement = screen.getByText(/The Fary/i);
        expect(linkElement).toBeInTheDocument();
    });
});
