import "./Login.css"
import { useContext, useState } from 'react'
import { AuthContext } from "../../store/AuthContext"

import { Navigate, useNavigate } from 'react-router-dom';

export function Login() {
    const [data, setData] = useState({
        login: '',
        password: '',
    });

    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function ChangeInput(event) {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    function LogIn(event) {
        event.preventDefault();
        setUser(data);
        navigate('/');
    }

    return (
    
            <div className="signup">
                <form method="post" action="" name="signin" onSubmit={LogIn}>
                    <input type="text" name="login" placeholder="Введите логин" id="" onChange={ChangeInput} value={data.login}/>
                    <input type="password" name="password" placeholder="Введите пароль" id="" onChange={ChangeInput} value={data.password}/>
                    <input type="submit" name="signin" value="Войти" onSubmit={user}/>
                </form>
            </div>
                    
    )
}

