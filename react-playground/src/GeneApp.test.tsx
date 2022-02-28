import { getByText, render, screen } from '@testing-library/react';
import GeneApp from './GeneApp';

test('renders a message', () => {
    render(<GeneApp />);
    expect(screen.getByText("Hello Nadia!")).toBeInTheDocument();
});
