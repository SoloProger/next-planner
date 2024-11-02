import {ButtonHTMLAttributes, FC, ReactNode} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
}

const Button: FC<ButtonProps> = ({children, ...props}) => {

    const bgColor = props.disabled ? 'bg-text' : 'bg-title'

    return (
        <button {...props} className={`p-19 border-radius-10 text-white subtitle-3 ${bgColor}`}>
            {children}
        </button>
    );
};

export default Button;
