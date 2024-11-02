import {LoginForm, RegisterForm} from "../proceses/auth";
import {useState} from "react";


function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <section className="w-100 flex  ai-center">
            <div className="p-x-130 w-100 flex-col gap-100">
                {isLogin ? <LoginForm/> : <RegisterForm/>}
                <span className="flex jc-center ai-center gap-4 subtitle-4 text-color">
                    {isLogin ? 'Нет аккаунта ?' : 'Уже есть аккаунт ?'}
                    <b className="subtitle-3 title-color pointer" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Зарегистрируйтесь' : 'Войти'}
                    </b>
                </span>
            </div>
            <img src={`/img/${isLogin ? 'login.jpeg' : 'register2.png'}`} alt="Login"
                 className=" p-y-28 p-x-23 wp-750 hp-845 border-radius-70"/>
        </section>
    );
}

export default AuthPage;
