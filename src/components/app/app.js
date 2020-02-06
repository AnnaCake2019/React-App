import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "../links/Auth";
import Home from "../links/Home";


export default class App extends Component {
    //
    constructor() {
        super();
        this.state = {
            auth: false,
            login: '',
            password: '',
            exist: false
        }
    }

    // Создание нового пользовтеля
    createUser = (e) => {
        e.preventDefault();
        const errorLog = document.getElementById('errorLog');
        const valid = new RegExp(/[A-zА-яЁё]{3,20}$/);

        let login = e.target.elements.login.value;
        let password = e.target.elements.password.value;
        if(!valid.test(login)){
            errorLog.innerText = 'Не корректно указан логин';
            return
        }
        if(!valid.test(password)){
            errorLog.innerText = 'Не корректно указан пароль';
            return
        }
        this.setState((state) =>{
            return {auth: true,login: login, password:password, exist: true}
        })
    };

    // Логин уже существующего
    log = e => {
        e.preventDefault();
        const errorLog = document.getElementById('errorLog');

        let login = e.target.elements.login.value;
        let password = e.target.elements.password.value;
        if(this.state.login !== login){
            errorLog.innerText = 'Такого пользователя не существует';
            return
        }
        if(this.state.password !== password){
            errorLog.innerText = 'Не верный пароль';
            return
        }
        this.setState((state) =>{
            return {auth: true}
        })
    };

    // Выход
    exit = e =>{
        this.setState((state) => {
            return {auth: false}
        })
    };

    render() {
        if (this.state.auth) {
            return (
                <Router>
                    <Switch>
                        <Route to={'/home'} render={() =>
                            <Home
                                exit={this.exit}
                                name={this.state.login}/>
                        }
                        />
                    </Switch>
                </Router>

            )
        }
        return (
            <Router>
                <Switch>
                    <Route to={'/'} render={() =>
                        <Auth
                            exist={this.state.exist}
                            newUser={this.createUser}
                            login={this.log}
                        />
                    }>
                    </Route>
                </Switch>
            </Router>
        )

    }
}