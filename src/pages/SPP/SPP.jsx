import './SPP.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Rating } from './Rating/Rating'
import { useActions } from '../../hooks/useActions.js';
import { useFavorites } from '../../hooks/useFavorites';
// import { GetData } from '../../components/Catalog/Catalog';
export function SPP() {
    const [photo, setPhoto] = useState(0)
    const { id } = useParams();
    const [posts, setPosts] = useState(null)
    const { favorites } = useFavorites();
    const { toggleFavorites } = useActions();
    const isExists = favorites.some(r => r.id === posts[id]);
    console.log(posts)
    useEffect(() => {
        async function getPosts() {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const responceobject = await response.json();
            setPosts(responceobject);
        }
        getPosts();
    }, [id]);

    return (
        <>
            <Link to="/catalog" className="return_to-catalog">← &nbsp; Вернуться в каталог</Link>
            <div className="elem_page">
                <div className="elem_main">
                    <div className="elem_photos">
                        <div className="photos_thumbnails">
                            {
                                posts &&
                                posts.images.map((image, i) => (
                                    <button onClick={() => { setPhoto(i) }}>
                                        <img key={i} src={image} alt="" className="thumbnail" />
                                    </button>
                                ))
                            }
                        </div>
                        <div className="main_photo">
                            <img src={posts && posts.images[photo]} alt="" />
                        </div>
                    </div>
                    <div className="elem_info">
                        <p className="elem_title">{posts && posts.title}</p>
                        <div className="elem_about">
                            <div className="elem_description">

                                {posts && posts.description}
                            </div>
                        </div>
                        <div className="elem_brand"> <span>Бренд:</span> &nbsp; {posts && posts.brand}</div>
                        <div className="elem_category"> <span>Категория:</span>  &nbsp; {posts && posts.category}</div>
                        <div className="elem_prices">
                            <p className="elem_price">Цена: {posts && posts.price} $</p>
                            <p className="elem_discount">- {posts && Math.round(posts.discountPercentage)} %</p>
                            <p className="elem_old_price">{posts && Math.round(posts.price + ((posts.price * posts.discountPercentage) / 100))} $</p>

                        </div>
                        <div className="elems_rating">
                            <div className="rating_stars">
                                {
                                    posts && <Rating rating={posts.rating} />
                                }
                            </div>
                            <p className="elem_rating">{posts && posts.rating}</p>
                        </div>
                        <div className="elem_btns">
                            <div className="element_btn cart" onClick={()=>{toggleFavorites(posts)}}>{!isExists? 'Добавить в корзину': 'Удалить из корзины'}</div>
                            <div className="element_btn fav">
                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div className="element_btn buy">Купить в один клик</div>
                    </div>
                </div>

            </div>
        </>
    )
}

// добавление в корзину модно сделать через useState и с помощью Context//