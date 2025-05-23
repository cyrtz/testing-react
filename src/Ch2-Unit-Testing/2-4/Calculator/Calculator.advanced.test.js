import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Calculator from "./Calculator.advanced";

describe('Calculator', () => {
    it('should get 15 when 5 multiplied by 3', () =>{
        const { getByTestId } = render(<Calculator />);

        fireEvent.change(getByTestId('number1'), { target: { value: 5 } });
        fireEvent.change(getByTestId('number2'), { target: { value: 3 } });
        
        fireEvent.change(getByTestId('operator'), { target: { value: "*" } });
        fireEvent.click(getByTestId('calculate'));

        expect(getByTestId('result')).toHaveTextContent('15');
    });
});