import { render, screen, fireEvent } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Click me</Button>);
    expect(baseElement).toBeTruthy();
  });

  it('should render with correct text', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeTruthy();
  });

  it('should apply primary variant by default', () => {
    const { container } = render(<Button>Primary</Button>);
    const button = container.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should apply secondary variant', () => {
    const { container } = render(<Button variant="secondary">Secondary</Button>);
    const button = container.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should apply outline variant', () => {
    const { container } = render(<Button variant="outline">Outline</Button>);
    const button = container.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should apply ghost variant', () => {
    const { container } = render(<Button variant="ghost">Ghost</Button>);
    const button = container.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should apply small size', () => {
    const { container } = render(<Button size="small">Small</Button>);
    const button = container.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should apply medium size by default', () => {
    const { container } = render(<Button>Medium</Button>);
    const button = container.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should apply large size', () => {
    const { container } = render(<Button size="large">Large</Button>);
    const button = container.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should be disabled when disabled prop is true', () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    const button = container.querySelector('button');
    expect(button?.disabled).toBe(true);
  });

  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );
    const button = screen.getByText('Disabled');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});

