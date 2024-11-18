import './Card.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useActions } from '../../../hooks/useActions.js';
import { useFavorites } from '../../../hooks/useFavorites';
// import  {itemsCounter}  from '../../../store/cartCounter'
// import {observer} from "mobx-react-lite"
export function Card(props) {
    const { favorites } = useFavorites();
    const { toggleFavorites } = useActions();
    const isExists = favorites.some(r => r.id === props.id);


    return (
        <>
            <div className="catalog_elem">
                <Link to={`/catalog/catalog-elem/${props.id}`}><img class="elem_img" src={props.thumbnail} alt="" /></Link>
                <div className="elem_text">
                    <p className="elem_title">{props.title}</p>
                    <p className="elem_description">{props.description.substr(0, 60)}...</p>
                    <p className="element_rating">rating: <span>{props.rating}</span></p>
                    <div className="elem_prices">
                        <p className="elem_price">{props.price} $</p>
                        <p className="elem_discount">- {Math.round(props.discountPercentage)} %</p>
                        <p className="elem_old_price">{Math.round(props.price + ((props.price * props.discountPercentage) / 100))} $</p>

                    </div>
                    <div className="elem_btns">
                        <Link to={`/catalog/catalog-elem/${props.id}`}>
                            <button className="elem_btn" onClick={() => { itemsCounter.decrement() }}>Подробнее</button>
                        </Link>
                        <button className="add_to_cart" onClick={() => { toggleFavorites(props) }}>
                            {
                                !isExists ?
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_66_4)">
                                            <path d="M9 5.5C9 5.36739 8.94732 5.24021 8.85355 5.14645C8.75979 5.05268 8.63261 5 8.5 5C8.36739 5 8.24021 5.05268 8.14645 5.14645C8.05268 5.24021 8 5.36739 8 5.5V7H6.5C6.36739 7 6.24021 7.05268 6.14645 7.14645C6.05268 7.24021 6 7.36739 6 7.5C6 7.63261 6.05268 7.75979 6.14645 7.85355C6.24021 7.94732 6.36739 8 6.5 8H8V9.5C8 9.63261 8.05268 9.75979 8.14645 9.85355C8.24021 9.94732 8.36739 10 8.5 10C8.63261 10 8.75979 9.94732 8.85355 9.85355C8.94732 9.75979 9 9.63261 9 9.5V8H10.5C10.6326 8 10.7598 7.94732 10.8536 7.85355C10.9473 7.75979 11 7.63261 11 7.5C11 7.36739 10.9473 7.24021 10.8536 7.14645C10.7598 7.05268 10.6326 7 10.5 7H9V5.5Z" fill="black" />
                                            <path d="M0.5 1C0.367392 1 0.240215 1.05268 0.146447 1.14645C0.0526784 1.24021 0 1.36739 0 1.5C0 1.63261 0.0526784 1.75979 0.146447 1.85355C0.240215 1.94732 0.367392 2 0.5 2H1.61L2.011 3.607L3.509 11.592C3.53045 11.7066 3.59126 11.8101 3.68091 11.8846C3.77057 11.9591 3.88343 11.9999 4 12H5C4.46957 12 3.96086 12.2107 3.58579 12.5858C3.21071 12.9609 3 13.4696 3 14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14C7 13.4696 6.78929 12.9609 6.41421 12.5858C6.03914 12.2107 5.53043 12 5 12H12C11.4696 12 10.9609 12.2107 10.5858 12.5858C10.2107 12.9609 10 13.4696 10 14C10 14.5304 10.2107 15.0391 10.5858 15.4142C10.9609 15.7893 11.4696 16 12 16C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14C14 13.4696 13.7893 12.9609 13.4142 12.5858C13.0391 12.2107 12.5304 12 12 12H13C13.1166 11.9999 13.2294 11.9591 13.3191 11.8846C13.4087 11.8101 13.4696 11.7066 13.491 11.592L14.991 3.592C15.0045 3.51984 15.002 3.44558 14.9835 3.37452C14.9651 3.30345 14.9313 3.23731 14.8844 3.1808C14.8375 3.12429 14.7788 3.0788 14.7124 3.04755C14.6459 3.0163 14.5734 3.00007 14.5 3H2.89L2.485 1.379C2.45801 1.27078 2.39561 1.1747 2.30773 1.10602C2.21985 1.03735 2.11153 1.00003 2 1H0.5ZM4.415 11L3.102 4H13.898L12.585 11H4.415ZM6 14C6 14.2652 5.89464 14.5196 5.70711 14.7071C5.51957 14.8946 5.26522 15 5 15C4.73478 15 4.48043 14.8946 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13C5.26522 13 5.51957 13.1054 5.70711 13.2929C5.89464 13.4804 6 13.7348 6 14ZM13 14C13 14.2652 12.8946 14.5196 12.7071 14.7071C12.5196 14.8946 12.2652 15 12 15C11.7348 15 11.4804 14.8946 11.2929 14.7071C11.1054 14.5196 11 14.2652 11 14C11 13.7348 11.1054 13.4804 11.2929 13.2929C11.4804 13.1054 11.7348 13 12 13C12.2652 13 12.5196 13.1054 12.7071 13.2929C12.8946 13.4804 13 13.7348 13 14Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_66_4">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    :

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 6H22L19 16H6L3 6ZM3 6L2.25 3.5M9.992 11H13.992M11 19.5C11 19.8978 10.842 20.2794 10.5607 20.5607C10.2794 20.842 9.89782 21 9.5 21C9.10218 21 8.72064 20.842 8.43934 20.5607C8.15804 20.2794 8 19.8978 8 19.5M17 19.5C17 19.8978 16.842 20.2794 16.5607 20.5607C16.2794 20.842 15.8978 21 15.5 21C15.1022 21 14.7206 20.842 14.4393 20.5607C14.158 20.2794 14 19.8978 14 19.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                            }
                        </button>
                    </div>
                </div>

            </div>
        </>

    )
}
