import {FC} from 'react';
import {Button, Input} from "../../../shared/ui";

const RegisterForm: FC = () => {
    return (
        <div>
            <div className="flex-col gap-10 mb-32">
                <h1 className="title">Зарегистрируйтесь</h1>
                <p className="caption-4 text-color">We can assign tasks, set deadlines, and track progress
                    effortlessly.</p>
            </div>

            <form action="" className="flex-col gap-32">
                <Input label="Имя пользователя" type="text" placeholder="Введите имя"/>
                <Input label="Пароль" type="password" placeholder="Введите пароль"/>
                <Input label="Подтверждение пароля" type="password" placeholder="Подтвердите пароль"/>
                <Button disabled={true}>Зарегистрироваться</Button>
            </form>
        </div>
    );
};

export default RegisterForm;
