import './Intro.css';
import { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import prev from '../../images/intro/left.png';
import next from '../../images/intro/right.png';


// eslint-disable-next-line react/prop-types
function Intro() {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDisplayWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='intro'>
        <div className='intro__content-container'>
          <h1 className='intro__title'>МЫСЛИ ГЛОБАЛЬНО</h1>
          {displayWidth >= 785 && <p className='intro__subtitle'>Di Gi - это диджитал агентство полного цикла, направленное на самый лучший результат наших клиентов в маркетинге, продажах и управлении</p>}
          <button className='intro__button'>ПОДРОБНЕЕ</button>
          <Pagination color="white"/>
        </div>
       {displayWidth >= 650 && <div className='intro__carousel-controls'>
          <a href="!#" className="intro__carousel-control intro__carousel-control_active">
            <img className="intro__arrow" src={prev} alt="Prev" />
          </a>
          <a href="!#" className="intro__carousel-control">
            <img className="intro__arrow" src={next} alt="Prev" />
          </a>
        </div>}

    </section>
  )
}

export default Intro