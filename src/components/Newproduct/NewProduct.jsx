import React from "react";

function NewProduct() {
  return (
    <>
      <section className="md:p-10 p-3">
        <div className="w-full flex justify-center">
          <h2 className="md:text-3xl text-2xl font-mono tracking-widest font-semibold text-[#171717]">
            New  Products
          </h2>
        </div>

        <section className="cards md:p-10 p-3 w-full grid grid-cols-1 place-content-center place-items-center  sm:grid sm:grid-cols-2  sm:gap-5 lg:grid-cols-3  ">
          <article className="card card--1 w-full m-3 ">
            <div className="card__img"></div>
            <a href="/" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Smoothie</span>
              <h3 className="card__title">Red Berry</h3>
            </div>
          </article>

          <article className="card card--2 w-full m-3 ">
            <div className="card__img"></div>
            <a href="/" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Smoothie</span>
              <h3 className="card__title">Foy</h3>
            </div>
          </article>

          <article className="card card--3 w-full m-3 ">
            <div className="card__img"></div>
            <a href="/" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <span className="card__category">Smoothie</span>
              <h3 className="card__title">Detox Alps</h3>
            </div>
          </article>
        </section>
      </section>
    </>
  );
}

export default NewProduct;
