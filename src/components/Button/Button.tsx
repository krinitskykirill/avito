import React from 'react'
import cls from './Button.module.scss'

interface ButtonProps {
    isAccept: boolean;
    className: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
}

const getClassName = (className: string = '', isAccept: boolean) => {
    const baseClass = isAccept ? cls.accept : cls.decline
    return `${className} ${baseClass} ${cls.button}`.trim()
}

const Button: React.FC<ButtonProps> = ({
                                           isAccept,
                                           className,
                                           style,
                                           onClick,
                                           disabled = false,
                                           type = 'button',
                                           children,
                                       }) => (
    <button
        className={getClassName(className, isAccept)}
        style={style}
        onClick={onClick}
        disabled={disabled}
        type={type}
    >
        {children}
    </button>
)

export default Button
