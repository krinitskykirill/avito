import React from 'react';
import './Button.scss';

type ButtonProps = {
    isAccept: boolean,
    className: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
};

const Button = ({
                    isAccept,
                    className,
                    style,
                    onClick,
                    disabled,
                    type = 'button',
                    children,
                }: ButtonProps) => {

    const setClassName = (className: string = '',
                          isAccept: boolean) => {
        return (className ?
            className :
            '') + (isAccept ?
            ' accept button' :
            ' decline button');
    };

    return (
        <button
            className={setClassName(className, isAccept)}
            style={style}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
