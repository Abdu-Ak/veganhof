import React from 'react'

function BestProduct() {
  return (
    <>
<section className="md:p-10 p-3">
        <div className="w-full flex justify-center">
          <h2 className="md:text-3xl text-2xl font-mono tracking-widest font-semibold text-[#171717]">
            Best Products
          </h2>
        </div> 
    
 
        <section className="cards md:p-10 p-3 w-full grid grid-cols-1 place-content-center place-items-center  sm:grid sm:grid-cols-2  sm:gap-5 lg:grid-cols-4  ">
          <article className="card card--4 w-full m-3 ">
            <div className="card__img"></div>
            <a href="/" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Smoothie</span>
              <h3 className="card__title">Protein</h3>
            </div>
          </article>

          <article className="card card--5 w-full m-3 ">
            <div className="card__img"></div>
            <a href="/" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Smoothie</span>
              <h3 className="card__title">Immunity</h3>
            </div>
          </article>

          <article className="card card--6 w-full m-3 ">
            <div className="card__img"></div>
            <a href="/" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Smoothie</span>
              <h3 className="card__title">Nordic Berries</h3>
            </div>
          </article>

          <article className="card card--7 w-full m-3 ">
            <div className="card__img"></div>
            <a href="/" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Smoothie</span>
              <h3 className="card__title">Ttropical Punch</h3>
            </div>
          </article>
        </section>
      </section>
    </>
  )
}

export default BestProduct