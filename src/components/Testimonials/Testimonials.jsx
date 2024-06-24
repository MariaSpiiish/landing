import './Testimonials.css';
import Pagination from '../Pagination/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function Testimonials() {
  return (
    <section className='testimonials'>
      <FontAwesomeIcon icon={faQuoteRight} className='testimonials__header'/>
      <blockquote className='testimonials__quote'>
        <p className='testimonials__text'>Если нужно создавать либо повышать имидж компании, то <span className='testimonials__text testimonials__bold-text'>диджитал-маркетинг</span> является наиболее подходящим</p>
        <footer className='testimonials__footer'>- Маргарита Акулич</footer>
      </blockquote>
      <Pagination colour="blue"/>
    </section>
  )
}

export default Testimonials