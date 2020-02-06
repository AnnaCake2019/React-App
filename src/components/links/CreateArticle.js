import React from "react";

const CreateArticle = ({createArt}) => {
    // Создание новой стаьи
    return(
        <div className='mt-5'>
            <form name='createPost' onSubmit={createArt}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Название</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        name="post"/>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">
                        Опубликовать
                    </button>
                </div>
            </form>
        </div>
    )
};

export default CreateArticle;