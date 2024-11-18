import './Header.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from "../../store/AuthContext"
import { useFavorites } from '../../hooks/useFavorites.js';
import { FavItem } from '../FavItem/FavItem.jsx';

export function Header() {
    const { user, setUser } = useContext(AuthContext);
    const {favorites} = useFavorites();
    const [show, setShow] = useState('favs_list hidden')
    console.log(show)
    return (
        <>
            <header className="header">
                <Link to="/" className="header_logo">TrendSetters</Link>
                <nav className="nav">
                    <Link to="/" className="nav_elem">Главная</Link>
                    <Link to="/catalog" className="nav_elem">Каталог</Link>
                    <Link to="/about" className="nav_elem">О нас</Link>
                </nav>
                <div className="icons">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className='cart' onClick={()=>{show=='favs_list hidden' ? setShow('favs_list active'): setShow('favs_list hidden')}}>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="count_items active">{favorites.length}</div>
                    </div>
                    <div className={show}>
                        <div className="fav_list-text">
                        <p className="favs_list-title">Список избранного</p>
                        <button style={{fontSize:26}} onClick={()=>{setShow('favs_list hidden')}}>х</button>
                        </div>
                        {
                            favorites.map(props => <FavItem {...props} /> )         
                        }
                    </div>
                    <Link to="/catalog/search">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.25 0C8.97391 0 10.6272 0.684819 11.8462 1.90381C13.0652 3.12279 13.75 4.77609 13.75 6.5C13.75 8.11 13.16 9.59 12.19 10.73L12.46 11H13.25L18.25 16L16.75 17.5L11.75 12.5V11.71L11.48 11.44C10.34 12.41 8.86 13 7.25 13C5.52609 13 3.87279 12.3152 2.65381 11.0962C1.43482 9.87721 0.75 8.22391 0.75 6.5C0.75 4.77609 1.43482 3.12279 2.65381 1.90381C3.87279 0.684819 5.52609 0 7.25 0ZM7.25 2C4.75 2 2.75 4 2.75 6.5C2.75 9 4.75 11 7.25 11C9.75 11 11.75 9 11.75 6.5C11.75 4 9.75 2 7.25 2Z" fill="black" />
                        </svg>
                    </Link>
                    <Link to="/profile">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5C21.9038 2.5 27.5 8.09625 27.5 15C27.5044 17.8849 26.5067 20.6817 24.6775 22.9125L24.7025 22.94L24.5375 23.08C23.3653 24.4665 21.9045 25.5804 20.2572 26.3439C18.6098 27.1073 16.8157 27.5019 15 27.5C11.3125 27.5 8.00001 25.9038 5.71251 23.3663L5.46251 23.0787L5.29751 22.9413L5.32251 22.9113C3.49346 20.6809 2.49579 17.8845 2.50001 15C2.50001 8.09625 8.09626 2.5 15 2.5ZM15 21.25C12.675 21.25 10.5738 21.99 9.00876 23.0075C10.7368 24.3041 12.8396 25.0034 15 25C17.1604 25.0034 19.2632 24.3041 20.9913 23.0075C19.203 21.8616 17.1239 21.2517 15 21.25ZM15 5C13.1182 4.99995 11.2745 5.53089 9.68092 6.53181C8.08733 7.53273 6.80852 8.963 5.99146 10.6582C5.17441 12.3534 4.85227 14.2448 5.06208 16.1149C5.27188 17.985 6.00512 19.758 7.17751 21.23C9.20376 19.7762 11.9688 18.75 15 18.75C18.0313 18.75 20.7963 19.7762 22.8225 21.23C23.9949 19.758 24.7281 17.985 24.938 16.1149C25.1478 14.2448 24.8256 12.3534 24.0086 10.6582C23.1915 8.963 21.9127 7.53273 20.3191 6.53181C18.7255 5.53089 16.8819 4.99995 15 5ZM15 7.5C16.3261 7.5 17.5979 8.02678 18.5355 8.96447C19.4732 9.90215 20 11.1739 20 12.5C20 13.8261 19.4732 15.0979 18.5355 16.0355C17.5979 16.9732 16.3261 17.5 15 17.5C13.6739 17.5 12.4022 16.9732 11.4645 16.0355C10.5268 15.0979 10 13.8261 10 12.5C10 11.1739 10.5268 9.90215 11.4645 8.96447C12.4022 8.02678 13.6739 7.5 15 7.5ZM15 10C14.337 10 13.7011 10.2634 13.2322 10.7322C12.7634 11.2011 12.5 11.837 12.5 12.5C12.5 13.163 12.7634 13.7989 13.2322 14.2678C13.7011 14.7366 14.337 15 15 15C15.6631 15 16.2989 14.7366 16.7678 14.2678C17.2366 13.7989 17.5 13.163 17.5 12.5C17.5 11.837 17.2366 11.2011 16.7678 10.7322C16.2989 10.2634 15.6631 10 15 10Z" fill="black" />
                        </svg>
                    </Link>
                    {
                        !user && <Link to="/login">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0042 2H20V20H11" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.4999 15.5L14.9999 11L10.4999 6.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.99988 10.9958H14.9999" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Link>
                    }
                    {
                        user &&
                        <Link to="/" onClick={() => { setUser(null) }}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9949 2H2V24H13" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.6112 18.5L8.11121 13L13.6112 7.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M24.0001 12.995H8.11121" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Link>
                    }


                </div>
            </header>
        </>
    );
}

