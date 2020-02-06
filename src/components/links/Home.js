import React, {useState} from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import AllArticle from "./AllArticle";
import CreateArticle from "./CreateArticle";
import './main.css'

// Кабинет


// переменная для уникальных id
let newId = 0;

const Home = ({exit, name}) => {
    const [article, setArticle] = useState([]);

    //Добавление статей
    const addArticle = e =>{
        e.preventDefault();
        let title = e.target.elements.title.value;
        let post = e.target.elements.post.value;
        setArticle([...article,
            {
                id: ++newId,
                title: title,
                text: post,
                refactor: '',
                comment: []
            }]);
        document.forms.createPost.reset();
    };

    //Удаление статей
    const deleteArticle = id =>{
        const xid = article.findIndex((article) => article.id === id);
        setArticle([
            ...article.slice(0, xid),
            ...article.slice(xid + 1)
        ])
    };

    // Редактор статьи
    const openRef = id => {
        const showForm = document.getElementById(`${id}ref`);
        showForm.classList.toggle('show');
    };
    const changeArticle = (e, id) =>{
        e.preventDefault();
        const refArticle = e.target.elements.ref.value;
        const xid = article.find((article) => article.id === id);
        xid.text = refArticle;
        if (article.id === xid.id){
            article.text = xid.text
        }
        const showForm = document.getElementById(`${id}ref`);
        showForm.classList.toggle('show');
        setArticle([...article]);
        document.forms.formRef.reset();
    };


    //Коментарии
    const openCom = id => {
        const showForm = document.getElementById(`${id}com`);
        showForm.classList.toggle('show');
    };
    const commentArticle = (e, id ) => {
         e.preventDefault();
         const comment = e.target.elements.newComment.value;
         const xid = article.find((article) => article.id === id);
        xid.comment.push(comment);
        if (article.id === xid.id){
            article.comment.push(xid.comment);
        }
        setArticle([...article]);
        const showForm = document.getElementById(`${id}com`);
        showForm.classList.toggle('show');
        document.forms.formCom.reset();
    };

    return (
        <div className='container'>
            <div className='offset-1 col-md-10'>
                <h4 className='text-center'>{name}</h4>

                <Router>
                    <div className='row'>
                        <div className='col-md-8 link'>
                            <Link to={'/all'}>Все статьи</Link>
                            <Link to={'/create'}>Создать стаью</Link>
                        </div>
                        <div className='col-md-4 exit'>
                            <button onClick={exit}>Выход</button>
                        </div>
                    </div>
                    <Switch>
                        <Route path={'/all'} exact>
                            <AllArticle
                                newArticle={article}
                                del={deleteArticle}
                                openRef={openRef}
                                change={changeArticle}
                                openCom={openCom}
                                addComment={commentArticle}
                            />
                        </Route>
                        <Route path={'/create'} exact>
                            <CreateArticle createArt={addArticle}/>
                        </Route>
                        <Redirect to={'/all'}/>
                    </Switch>
                </Router>
            </div>
        </div>

    )
};

export default Home;