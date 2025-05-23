import React from "react";
import Counter from './Counter-enhanced';
import { fireEvent, render } from '@testing-library/react';

describe('Counter Component', () => {
    xit('should match snapshot', () => {
        const { asFragment } = render(<Counter />);
        expect(asFragment()).toMatchSnapshot();
    });

    describe('full rendering', () => {
        let counter;
        const renderCounter = () => <Counter />;

        beforeEach(() =>{
            counter = render(renderCounter());
        });

        it('should get 1 when click the increment button', () => {
            const { getByTestId } = counter;
            fireEvent.click(getByTestId('increment-button'));
            expect(getByTestId('counter-value')).toHaveTextContent('1');
        });
    });
});