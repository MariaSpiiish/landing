import './Intro.css';
import Pagination from '../Pagination/Pagination';
import prev from '../../images/intro/left.png';
import next from '../../images/intro/right.png';


function Intro() {
  return (
    <section className='intro'>
        <div className='intro__content-container'>
          <h1 className='intro__title'>МЫСЛИ ГЛОБАЛЬНО</h1>
          <p className='intro__subtitle'>Di Gi - это диджитал агентство полного цикла, направленное на самый лучший результат наших клиентов в маркетинге, продажах и управлении</p>
          <button className='intro__button'>ПОДРОБНЕЕ</button>
          <Pagination color="white"/>
        </div>
        <div className='intro__carousel-controls'>
          <a href="!#" className="intro__carousel-control intro__carousel-control_active">
            <img className="intro__arrow" src={prev} alt="Prev" />
          </a>
          <a href="!#" className="intro__carousel-control">
            <img className="intro__arrow" src={next} alt="Prev" />
          </a>
        </div>

    </section>
  )
}

export default Intro