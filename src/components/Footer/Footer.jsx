import './Footer.css';

export function Footer(){
    return(
        <>
        <footer className="footer">
            <div className="footer_inner">
                <div className="footer_links">
                    <div className="footer_column">
                        <a href="#" className="footer_column-title">КАТАЛОГ</a>
                        <a href="#" className="footer_column-subtitle">Новинки</a>
                        <a href="#" className="footer_column-subtitle">Одежда</a>
                        <a href="#" className="footer_column-subtitle">Аксессуары</a>
                        <a href="#" className="footer_column-subtitle">Распродажа -70%</a>
                        <a href="#" className="footer_column-subtitle">Деним и трикотаж</a>
                    </div>
                    <div className="footer_column">
                        <a href="#" className="footer_column-title">ПОМОЩЬ ПОКУПАТЕЛЮ</a>
                        <a href="#" className="footer_column-subtitle">Доставка и оплата</a>
                        <a href="#" className="footer_column-subtitle">Бесконтактная доставка</a>
                        <a href="#" className="footer_column-subtitle">Обмен и возврат</a>
                        <a href="#" className="footer_column-subtitle">FAQ / Часто задаваемые вопросы</a>
                        <a href="#" className="footer_column-subtitle">Правила программы лояльности</a>
                        <a href="#" className="footer_column-subtitle">Подарочные сертификаты</a>
                        <a href="#" className="footer_column-subtitle">Правила работы сайта</a>
                        <a href="#" className="footer_column-subtitle">Политика конфиденциальности</a>
                    </div>
                    <div className="footer_column">
                        <a href="#" className="footer_column-title">О КОМПАНИИ</a>
                        <a href="#" className="footer_column-subtitle">О бренде</a>
                        <a href="#" className="footer_column-subtitle">О Melon Fashion Group</a>
                        <a href="#" className="footer_column-subtitle">Работа в бренде TRENDSETTERS</a>
                        <a href="#" className="footer_column-subtitle">Сотрудничество</a>
                        <a href="#" className="footer_column-subtitle">Контакты</a>
                        <a href="#" className="footer_column-subtitle">Обратная связь</a>

                    </div>
                    <div className="footer_column">
                        <a className="footer_column-title">БЛОГ</a>
                        <a className="footer_column-subtitle">Новости и акции </a>
                        <a className="footer_column-subtitle">Lookbook</a>
                    </div>
                    <div className="footer_loyal">
                        <p className="footer_loyal-title">ПРОГРАММА ЛОЯЛЬНОСТИ</p>
                        <p className="footer_loyal-subtitle">Стань участником <span className="footer_span">TRENDSETTERS CLUB</span > прямо сейчас! Копи бонусы, повышай уровень <span className="footer_span">и получай скидку до 30%</span > от стоимости покупки!</p>
                        <a href="#" className="footer_loyal-btn">Всупить в TRENDSETTERS CLUB</a>
                    </div>
                </div>
                <h1>TRENDSETTERS</h1>
            </div>
    </footer>
        </>
    )
}