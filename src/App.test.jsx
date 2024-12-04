import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Reservation from './pages/reservation.jsx';
import { initializeTimes } from './pages/reservation.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('Reservation Page', () => {
    it("should render the heading 'Reserve a Table' ", () => {
        render(
            <BrowserRouter>
                <Reservation />
            </BrowserRouter>
        );
        const heading = screen.getByRole('heading', { name: /reserve a table/i });
        expect(heading).toBeInTheDocument();
    });
});

describe('Initialize Times Function', () => {
    it('should return non empty array of available timeslots', () => {
        const result = initializeTimes();
        expect(Array.isArray(result)).toBe(true); // Check if it's an array
        expect(result.length).toBeGreaterThan(0); // Check if it's non empty
    });
});
