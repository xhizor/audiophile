import React, {useEffect, useState} from "react";

interface NumberInputProps {
    min: number;
    max: number;
    onChange: Function
}

/**
 * Number input component.
 *
 * @param min
 * @param max
 * @param onChange
 * @constructor
 */
const NumberInput: React.FC<NumberInputProps> = ({min, max, onChange}: NumberInputProps) => {
    const [value, setValue] = useState<number>(min);

    useEffect(() => {
        onChange(value);
    }, [value]);

    /**
     * Input number change handler.
     *
     * @param e
     */
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        if (newValue > max || newValue < min) return;

        setValue(newValue);
    };

    /**
     * Increases the number value.
     *
     */
    const increaseValue = () => {
        if (value >= max) return;

        setValue(value => value + 1);
    };

    /**
     * Decreases the number value.
     *
     */
    const decreaseValue = () => {
        if (value <= min) return;

        setValue(value => value - 1);
    };

    return (
        <div className="c-number-input">
            <button
                className="c-number-input__operation c-number-input__minus"
                aria-label="Decrease the product quantity"
                onClick={decreaseValue}>
                -
            </button>
            <input
                type="number"
                className="c-number-input__control"
                min={min}
                max={max}
                value={value}
                onChange={onInputChange}
            />
            <button
                className="c-number-input__operation c-number-input__plus"
                aria-label="Increase the product quantity"
                onClick={increaseValue}>
                +
            </button>
        </div>
    )
};

export default NumberInput;