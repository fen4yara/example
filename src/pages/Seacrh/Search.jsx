import './Search.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Card } from '../Catalog/Card/Card/';
export function Search() {
    const [inputValue, setInputValue] = useState('');
    const [posts, setPosts] = useState(null)
    // async function SearchProductsByName(){
    //     const response = await fetch(`https://dummyjson.com/products/search?q=${inputValue}`);
    //     const products  = await response.json();
    //     setPosts(products);
    //     console.log(products);
    // }
    useEffect(() => {
        async function getPosts() {
            const response = await fetch('https://dummyjson.com/products');
            const responceobject = await response.json();
            const posts = responceobject.products;
            setPosts(posts);
        }
        getPosts();
    }, []);

    const textChange = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    };
    return (
        <>
            <div className="search">
                <p class="search_title">Для осуществления поиска введите имя товара</p>
                <form onSubmit={e =>  e.preventDefault()}>
                    <input type="text" value={inputValue} placeholder='Введите имя товара' onChange={textChange} />
                    <input type="submit" value="Поиск" onClick={()=>{}}/>
                </form>
                {
                    <div className="searched_catalog_wrapper" >
                        {
                            posts ?
                                posts
                                .filter(post => post.title.toLowerCase().includes(inputValue.toLocaleLowerCase()))
                                .map(post => (
                                    <Card key={post.id} id={post.id} thumbnail={post.images[0]} title={post.title} 
                                    description={post.description} price={post.price} discountPercentage={post.discountPercentage} brand={post.brand} 
                                    rating={post.rating} category={post.category} />
                                ))
                                :<p>..загрузка данных...</p>
                        }
                    </div>
                }
            </div>
        </>
    )
}