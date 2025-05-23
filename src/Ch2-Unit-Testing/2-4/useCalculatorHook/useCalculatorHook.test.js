import React from "react";
import { fireEvent, render } from "@testing-library/react";
import useCalculatorHook from "./useCalculatorHook";

describe('useCalculatorHook', () => {
    test('should get 8 when 5 + 3', () => {
        const TestComponent = () => {
            const { num1, num2, operator, result, handleChange, calculate } = useCalculatorHook();

            return (
                <div>
                    <input data-test-id="number1" type="number" name="num1" value={num1} onChange={handleChange} />
                    <select data-test-id="operator" name="operator" value={operator} onChange={handleChange}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <input data-test-id="number2" type="number" name="num2" value={num2} onChange={handleChange} />
                    <button data-test-id="calculate" onClick={calculate}>Calculate</button>
                    <div data-test-id="result">{result}</div>
                </div>
            )
        };
        const { getByTestId } = render(<TestComponent />);

        fireEvent.change(getByTestId('number1'), { target: { value: 5 } });
        fireEvent.change(getByTestId('operator'), { target: { value: '+' } });
        fireEvent.change(getByTestId('number2'), { target: { value: 3 } });
        fireEvent.click(getByTestId('calculate'));
        expect(getByTestId('result')).toHaveTextContent('8');
    });
});