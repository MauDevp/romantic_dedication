// Card.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
    test('renders the title and image', () => {
        const title = 'Test Title';
        const urlPic = '/test.jpg';

        render(<Card title={title} urlPic={urlPic} />);

        // Verificar que el título se renderiza correctamente
        expect(screen.getByText(title)).toBeInTheDocument();

        // Verificar que la imagen se renderiza con el src correcto
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', urlPic);
        expect(img).toHaveAttribute('alt', 'imagen');
    });
});