import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Counter from "./Counter";

describe('Counter Component', () => {
    // 檢測點擊「+」按鈕後，數字要加1
    it('should get 1 when click the increment button', () => {
        const { getByTestId } = render(<Counter />);

        fireEvent.click(getByTestId('increment-button'));
        expect(getByTestId('counter-value')).toHaveTextContent('1');
    });

    it('should get -1 when click the decrement button', () => {
        const { getByTestId } = render(<Counter />);

        fireEvent.click(getByTestId('decrement-button'));
        expect(getByTestId('counter-value')).toHaveTextContent('-1');
    });
});