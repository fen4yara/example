import './Catalog.css'
import { useState } from 'react';
import { Card } from './Card/Card.jsx'
import { useEffect } from "react";

export function Catalog() {
    const[columns,SetColumns] = useState(4);
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [posts, setPosts] = useState(null)
    const data = posts ? [...posts] : []
    const сategories = posts && [...new Set(posts.map(post => post.category))];
    useEffect(() => {
        async function getPosts() {
            const response = await fetch('https://dummyjson.com/products');
            const responceobject = await response.json();
            const posts = responceobject.products;
            setPosts(posts);
        }
        getPosts();
    }, []);
    const сategoryChange = (e) => {
        e.target.value==='Всё' ? resetSelect() : setSelectValue(e.target.value)
        // console.log(e.target.value)
    };
    const textChange = (e) => {
        setInputValue(e.target.value);
        // console.log(inputValue);
    };
    const resetSelect = () => {
        setSelectValue('');
      };

    return (
        <>
            <div className="catalog">
                <div className="catalog_search">
                    
                    <form onSubmit={e => e.preventDefault()}>
                            <label htmlFor="select-category">Выберите категорию:</label>
                            <select name="select-category" id="select-category" className="select" onChange={сategoryChange}>
                                <option value="1" selected="true" disabled="disabled">Выберите категорию</option>
                                <option value="Всё">Всё</option>
                                {
                                    posts && сategories
                                            .map(post=>(<option>{post}</option>))
                                }
                                
                            </select>
                        <input type="text" value={inputValue} placeholder='Поиск' onChange={textChange} />
                        {/* <input type="submit" value="Поиск" onClick={()=>{}}/> */}
                    </form>
                    <div class="catalog_view"> 
                        <span class="view_font">Вид: </span>
                        <button onClick={()=>{SetColumns(3)}} class="col-3"><p className="actions_font">3</p></button>&nbsp;
                        <button onClick={()=>{SetColumns(4)}} class="col-4"><p className="actions_font">4</p></button>
                    </div>
                </div>
                <div className={columns == 3? 'catalog_wrapper col-3': 'catalog_wrapper col-4'}>
                    {
                        posts ?
                            posts
                                .filter(post => (post.title.toLowerCase().includes(inputValue.toLocaleLowerCase())))
                                .filter(post => (post.category.toLowerCase().includes(selectValue.toLocaleLowerCase())))
                                // .filter(post => (post.category.toLowerCase().includes(selectValue.toLocaleLowerCase())))
                                
                                .map(post => (
                                    <Card {...post}/>
                                ))
                            : <p>..загрузка данных...</p>
                    }
                </div>
            </div>
        </>)
}

