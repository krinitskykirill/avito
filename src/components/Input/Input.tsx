import React from 'react'
import cls from './Input.module.scss'

type InputProps = {
    className: string;
    style?: React.CSSProperties;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const getClassName = (className: string = '') => {
    return `${className} ${cls.input}`.trim()
}

const Input: React.FC<InputProps> = ({
                                         className,
                                         style,
                                         type = 'text',
                                         placeholder = '',
                                         value,
                                         onChange,
                                     }) => (
    <input
        className={getClassName(className)}
        style={style}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
)

export default Input
