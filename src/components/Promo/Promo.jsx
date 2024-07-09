import './Promo.css'

// eslint-disable-next-line react/prop-types
function Promo({setOpen}) {
  return (
    <section className='promo'>
      <div className='promo__content-container'>
        <h3 className='promo__title'>Вы полюбите нас с первой встречи!</h3>
        <p className='promo__subtitle'>Мы предоставляем комплексный подход к продвижению компании, продуктов и услуг в цифровой сфере.</p>
      </div>
      <button className='promo__button' onClick={() => setOpen(true)}>ПЕРЕЗВОНИТЕ МНЕ</button>
    </section>
  )
}

export default Promo