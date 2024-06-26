import './LatestNews.css';
import { cards } from '../../utils/mockData';

function LatestNews() {  
  return (
    <section className='news'>
      <div className='news__header'>
        <h2 className='news__title'>Последние Новости</h2>
        <span className='news__line'></span>
      </div>
      <ul className='news__grid'>
        {cards.map((item, i) => (
           <li key={i} className='news__grid-item'>
             <div className='news__item'>
               <img className='news__img' src={item.link} alt={item.alt}/>
               <p className='news__img-caption'>{item.name}</p>
               <button className='news__button'/>
             </div>
            
           </li>
          ))}
      </ul>
    </section>
  )
}

export default LatestNews