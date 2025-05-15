import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Count from "./Count";

beforeAll(() => {
    jest.useFakeTimers();
});

afterAll(() => {
    jest.useRealTimers();
});

it('should get 1 when cliick + button', () => {
    render(<Count />);
    fireEvent.click(screen.getByTestId('button-up'));

    act(() => {
        jest.advanceTimersByTime(1000);
    });

    expect(screen.getByTestId('counter')).toHaveTextContent('1');
});

it('should get -1 when cliick - button', () => {
    render(<Count />);
    
    act(() => {
        fireEvent.click(screen.getByTestId('button-down'));
    });

    expect(screen.getByTestId('counter')).toHaveTextContent('-1');
});