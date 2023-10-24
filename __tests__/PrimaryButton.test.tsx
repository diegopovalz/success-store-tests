import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PrimaryButton } from '@/components/commons/PrimaryButton';

describe('Home', () => {
  it('renders a heading', () => {
    render(<PrimaryButton text='hey' backgroundColor='white' />);

    const heading = screen.getByText('hey');

    expect(heading).toBeInTheDocument();
  });

  it('has text-white class', () => {
    const { container } = render(
      <PrimaryButton text='test' backgroundColor='cyan-600' />
    );
    expect(container.firstChild).toHaveClass('text-white');
  });
});
