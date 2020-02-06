import React from "react";
import './main.css'
const AllArticle = (props) => {


    //Все статьи
    const arrArticle = props.newArticle.map((items, index) => {
        const {id, ...itemsProp} = items;
       return <div className='contArticle mt-5' key={id}>
           <h5 className='text-center'>{items.title}</h5>
           <div className='offset-2 clo-md-8'>
               <p>{items.text}</p>
           </div>
           <div className='action mt-5'>
               <button onClick={() => props.del(id)} className='btn btn-primary'>Удалить</button>
               <button onClick={() => props.openRef(id)} className='btn btn-primary'>Редактировать</button>
               <button onClick={() => props.openCom(id)} className='btn btn-primary'>Комментарий</button>
           </div>

           {/*Редактирование*/}
           <div id={`${id}ref`} className='refactor show mt-5'>
               <form name='formRef' onSubmit={(e) => props.change(e, id)}>
               <input name='ref' type='text' defaultValue={items.text}/>
               <input type='submit' value='Редактировать'/>
               </form>
           </div>
           {/*Коментарии*/}
           <div id={`${id}com`} className='refactor show mt-5'>
               <form name='formCom' onSubmit={(e) => props.addComment(e, id)}>
                   <input name='newComment' type='text'/>
                   <input type='submit' value="Коментировать"/>
               </form>
           </div>

           {/*Вывод коментарие, не стал добавлть уникальнык ключи
           по этому react ругаеться*/}
           {items.comment.map((items, index) => {
               return <div className='boxCom mt-5'>
                   <p key={index}>{items}</p>
               </div>
           })}

       </div>
    })
  return(
      <div className='offset-1 col-md-10'>
          {arrArticle}
      </div>
  )
};

export default AllArticle;