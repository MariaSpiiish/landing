import './VideoBlock.css';
import video from '../../images/video.png';

function VideoBlock() {
  return (
    <section className='videoBlock'>
      <img className='videoBlock__img' src={video} alt="Команда обсуждает что-то за столом в офисе"/>
      <div className='videoBlock__content'>
        <h2 className='videoBlock__title'>Команда</h2>
        <span className='videoBlock__line'></span>
        <p className='videoBlock__text'>Наша команда - это наша самая большая ценность. Мы трудились, чтобы собрать группу экспертов, чьи навыки дополняют друг друга. У членов нашей команды разные истории, но мы разделяем общую страсть к идеалу. М ы верим, чтобы оставаться профессионалом, нужно развиваться, поэтому мы постоянно ищем способы, как стать лучше в том, что мы делаем. </p>
        <button className='videoBlock__button'>СМОТРЕТЬ ВИДЕО</button>
      </div>
      
    </section>
  )
}

export default VideoBlock