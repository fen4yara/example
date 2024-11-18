import './FavItem.css'
import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions.js';
import { useFavorites } from '../../hooks/useFavorites';
export function FavItem(props) {
    const { favorites } = useFavorites();
    const { toggleFavorites } = useActions();
    return (
        <>

            <div className="fav_item">
                <img src={props.thumbnail} alt="" />
                <div className="fav_item-text">
                    <p className="fav_item-title">{props.title}</p>
                    <div className="fav_item-ratingBlock">
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z" fill="#FEBF00" />
                        </svg>
                        <p className="fav_item-rating">{props.rating}</p>
                    </div>
                    <p className="fav_item-price">{props.price} $</p>
                    <div className="fav_item-btns">
                        <Link to={`/catalog/catalog-elem/${props.id}`}>
                            <p className="fav_item-btn">подробнее</p>
                        </Link>

                        <button onClick={() => { toggleFavorites(props) }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.616 20C7.168 20 6.78667 19.8426 6.472 19.528C6.15733 19.2133 6 18.8323 6 18.385V5.99998H5V4.99998H9V4.22998H15V4.99998H19V5.99998H18V18.385C18 18.845 17.846 19.2293 17.538 19.538C17.23 19.8466 16.8453 20.0006 16.384 20H7.616ZM17 5.99998H7V18.385C7 18.5643 7.05767 18.7116 7.173 18.827C7.28833 18.9423 7.436 19 7.616 19H16.385C16.5383 19 16.6793 18.936 16.808 18.808C16.9367 18.68 17.0007 18.5386 17 18.384V5.99998ZM9.808 17H10.808V7.99998H9.808V17ZM13.192 17H14.192V7.99998H13.192V17Z" fill="black" />
                            </svg>
                        </button>

                    </div>

                </div>
            </div>
        </>


    )
}