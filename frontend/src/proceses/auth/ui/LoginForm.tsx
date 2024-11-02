import {FC} from 'react';
import {Button, Input} from "../../../shared/ui";
import {Controller, useForm} from "react-hook-form";
import {AuthRequest} from "../model/types/AuthRequest.ts";
import {useMutation} from "@tanstack/react-query";
import {authUser} from "../api/authUser.ts";
import {useNavigate} from "react-router-dom";


const LoginForm: FC = () => {
    const navigate = useNavigate();

    const {control, handleSubmit} = useForm<AuthRequest>({
        defaultValues: {
            identifier: '',
            password: '',
        },
    });

    const mutation = useMutation({
        mutationFn: (formData: AuthRequest) => authUser(formData),
    });

    const onSubmit = (formData: AuthRequest) => {
        mutation.mutate(formData, {
            onSuccess: (data) => {
                localStorage.setItem('token', data.jwt);
                navigate('/');
            },
        });
    };

    return (
        <div>
            <div className="flex-col gap-10 mb-32">
                <h1 className="title">С возвращением!</h1>
                <p className="caption-4 text-color">We can assign tasks, set deadlines, and track progress
                    effortlessly.</p>
            </div>
            <form className="flex-col gap-32" onSubmit={handleSubmit(onSubmit)}>
                <Controller name="identifier" control={control} render={({field}) => (
                    <Input label="Имя пользователя" type="text" placeholder="Введите имя" {...field}/>
                )}/>

                <Controller
                    name="password"
                    control={control}
                    render={({field}) => (
                        <Input label="Пароль" type="password" placeholder="Введите пароль" {...field}/>
                    )}
                />

                <span className="title-color text pointer">Забыли пароль ?</span>
                <Button type="submit">Войти</Button>
            </form>
        </div>
    );
};

export default LoginForm;
