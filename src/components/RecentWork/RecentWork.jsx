import './RecentWork.css';
import shop from '../../images/recents/shop.png';
import house from '../../images/recents/house.png';
import coffee from '../../images/recents/coffee-shop.png';
import tour from '../../images/recents/tours.png';



function RecentWork() {
  return (
    <section className='recents'>
      <h2 className='recents__title'>Наши Проекты</h2>
      <span className='recents__line'></span>
      <ul className='recents__grid'>
        <li className='recents__grid-item'>
          <img className='recents__grid-img' src={shop} alt="Витрина бутика"/>
          <button className='recents__grid-button' />
          <p className='recents__grid-img-caption'>Lalique бутик</p>
        </li>
        <li className='recents__grid-item'>
          <img className='recents__grid-img' src={house} alt="Дом с большой террасой"/>
          <button className='recents__grid-button' />
          <p className='recents__grid-img-caption'>Строительство дома</p>
        </li>
        <li className='recents__grid-item'>
          <img className='recents__grid-img' src={coffee} alt="Зал кофейни"/>
          <button className='recents__grid-button' />
          <p className='recents__grid-img-caption'>Кофейня</p>
        </li>
        <li className='recents__grid-item'>
          <img className='recents__grid-img' src={tour} alt="Необитаемый остров"/>
          <button className='recents__grid-button' />
          <p className='recents__grid-img-caption'>Уникальные туры</p>
        </li>
      </ul>
    </section>
  )
}

export default RecentWork