import "../Login/Login.css"
import { useContext, useState } from 'react'
import { AuthContext } from "../../store/AuthContext"

import { Navigate, useNavigate } from 'react-router-dom';

export function Profile() {
    const [data, setData] = useState({
        login: '',
        password: '',
    });

    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function ChangeInput(event) {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    function Update(event) {
        event.preventDefault();
        setUser(data);
        
    }

    return (
    
           <>
            <div className="signup" >
                <form action="" method="post" name="updateProfile" onSubmit={Update}>
                    <input type="text" name="login" placeholder="Введите новое имя" id=""   onChange={ChangeInput}/>
                    <input type="password" name="password" placeholder="Введите новый пароль" id="" onChange={ChangeInput}/>
                    <input type="submit" name="updateProfile" value="Редактировать"/>
                </form>
            </div>

            <p>
                {user&& user.login}
            </p>
            <p>
                {user&& user.password}
            </p>
           </>
                    
    )
}

