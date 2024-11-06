import {FC, forwardRef, InputHTMLAttributes} from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    inputSize?: 'small' | 'regular';
    inputStyles?: string;
    blockStyles?: string;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({
                                                                            label,
                                                                            inputSize,
                                                                            inputStyles,
                                                                            blockStyles,
                                                                            ...props
                                                                        }, ref) => {
    return (
        <div className={`flex-col gap-8 ${blockStyles}`}>
            <label className="headline">{label}</label>
            <input
                ref={ref}
                className={`border-stroke border-1 border-radius-15 bg text-color ${styles.input} ${inputSize === 'small' ? 'p-y-16 p-x-16' : 'p-y-20 p-x-16'} ${inputStyles}`} {...props} />
        </div>


    );
});

export default Input;
