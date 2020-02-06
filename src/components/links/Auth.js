import React from "react";

const Auth = ({newUser, exist, login}) => {


    // проверка на существование пользователя
    if(exist){
    return (
        <div className='container'>
            <div className='offset-1 col-md-10'>
                <h4>Войти в кабинет</h4>
                <form name='log' onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Login</label>
                        <input type="text"
                               className="form-control valid"
                               id="login"
                               aria-describedby="emailHelp"
                               name='login'

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control valid"
                            id="password"
                            name='password'
                        />
                    </div>
                    <button id='sendLog' type="submit" className="btn btn-primary">
                        Вход
                    </button>
                </form>
                <p id='errorLog'/>
            </div>
        </div>
    )}
    return (
        <div className='container'>
            <div className='offset-1 col-md-10'>
                <form name='log' onSubmit={newUser}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Login</label>
                        <input type="text"
                               className="form-control valid"
                               id="login"
                               aria-describedby="emailHelp"
                               name='login'

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control valid"
                            id="password"
                            name='password'
                        />
                    </div>
                    <button id='sendLog' type="submit" className="btn btn-primary">
                        Регистрация
                    </button>
                </form>
                <p id='errorLog'/>
            </div>
        </div>
    )
};

export default Auth;