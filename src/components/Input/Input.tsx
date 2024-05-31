import React from 'react';
import './Input.scss';

type InputProps = {
    className: string,
    style?: React.CSSProperties,
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
                   className,
                   style,
                   type,
                   placeholder,
                   value,
                   onChange,
               }: InputProps) => {
    return (
        <input className={(className ?
            className :
            '') + ' input'}
               style={style}
               type={type}
               placeholder={placeholder}
               onChange={onChange}
        >
            {value}
        </input>
    );
};

export default Input;