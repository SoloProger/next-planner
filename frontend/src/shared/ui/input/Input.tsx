import {FC, forwardRef, InputHTMLAttributes} from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({label, ...props}, ref) => {
    return (
        <div className="flex-col gap-8">
            <label className="headline">{label}</label>
            <input
                ref={ref}
                className={`border-stroke border-1 border-radius-15 p-y-20 p-x-16 bg text-color ${styles.input}`} {...props} />
        </div>


    );
});

export default Input;
