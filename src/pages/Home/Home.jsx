import "./Home.css"
import { useState } from "react"
// import { store } from '../../data/storeforslider'
import { Card } from '../Catalog/Card/Card'
import { useEffect } from "react";
import { useContext } from 'react'
import { AuthContext } from "../../store/AuthContext"

export function Home() {
    const { user, setUser } = useContext(AuthContext);

    const [id, setId] = useState(0)
    const [minId, setMinId] = useState(4)
    const maxId = 30;
    let temp = 1;
    const [products, setProducts] = useState(null);
    let data = products ? [...products] : []

    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://dummyjson.com/products');
            const { products } = await response.json();
            setProducts(products);
        }
        getProducts();
    }, []);
    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="home_inner">
                        <div className="home_wrapper">
                            <div className="item">
                                <p className="item_title">Новинки</p>
                            </div>
                            <div className="item">
                                <p className="item_title">Рубашки</p>
                            </div>
                            <div className="item">
                                <p className="item_title">Футболки</p>
                            </div>
                            <div className="item">
                                <p className="item_title">Джинсы</p>
                            </div>
                            <div className="item">
                                <p className="item_title">Верхняя одежда</p>
                            </div>
                            <div className="item">
                                <p className="item_title">Трикотаж</p>
                            </div>
                        </div>
                        <div className="home_slider">
                            <h1 className="slider_title">Новая коллекция</h1>
                            <div className="slider_inner">
                                <div className="slider_items">
                                    {
                                        products && 
                                        <>
                                            <Card key={data[id].id} thumbnail={data[id].images[0]} title={data[id].title}
                                        description={data[id].description} price={data[id].price} discountPercentage={data[id].discountPercentage}
                                        rating={data[id].rating} />
                                    <Card key={data[id + temp].id} thumbnail={data[id + temp].images[0]} title={data[id + temp].title}
                                        description={data[id + temp].description} price={data[id + temp].price} discountPercentage={data[id + temp].discountPercentage}
                                        rating={data[id + temp].rating} />
                                    <Card key={data[id + temp+1].id} thumbnail={data[id + temp+1].images[0]} title={data[id + temp+1].title}
                                        description={data[id + temp+1].description} price={data[id + temp+1].price} discountPercentage={data[id + temp+1].discountPercentage}
                                        rating={data[id + temp+1].rating} />
                                    <Card key={data[id + temp+2].id} thumbnail={data[id + temp+2].images[0]} title={data[id + temp+2].title}
                                        description={data[id + temp+2].description} price={data[id + temp+2].price} discountPercentage={data[id + temp+2].discountPercentage}
                                        rating={data[id + temp+2].rating} />
                                        </>
                                    }
                                    
                                </div>
                                <div className="slider_btns">
                                    <button className="slider_btn" onClick={
                                        () => {
                                            if (id > 0) { setId((id) => id - 1); setMinId((minId) => minId - 1); }
                                        }}>Назад</button>
                                    <p>{minId}/{maxId}</p>
                                    <button className="slider_btn" onClick={
                                        () => {
                                            if (id + temp + 1 < data.length - 2) { setId((id) => id + 1); setMinId((minId) => minId + 1); }
                                        }}>Вперед</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}