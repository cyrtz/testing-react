import React from "react";
import Counter from "./Counter";
import { fireEvent, render } from "@testing-library/react";

describe('Counter Component', () => {
    it('should get 1 when click the increment button', () => {
        const { getByTestId } = render(<Counter />);

        fireEvent.click(getByTestId('increment-button'));
        expect(getByTestId('counter-value')).toHaveTextContent('1');
    });
});