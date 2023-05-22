import React from "react";

function Features() {
  return (
    <>
      <section className="p-10">
        <div className="w-full flex justify-center">
          <h2 className="md:text-3xl text-2xl  font-mono tracking-widest font-semibold text-center text-[#171717">
            Mindful Choices
          </h2>
        </div>

        <div className="sm:grid sm:grid-cols-2 flex flex-col items-center  md:pl-0  md:grid md:grid-cols-3 lg:grid-cols-6 ">
       
          <img
            className="h-[200px] w-[200px]  "
            src="https://cdn.shopify.com/s/files/1/0584/2524/5891/files/No_Trans_Fat.jpg?v=1675185320&width=165"
            alt=""
          />
          <img
            className="h-[200px] w-[200px]"
            src="https://cdn.shopify.com/s/files/1/0584/2524/5891/files/No_Artificial_Sweeteners.jpg?v=1675185319&width=535"
            alt=""
          />

          <img
            className="h-[200px] w-[200px]"
            src="https://cdn.shopify.com/s/files/1/0584/2524/5891/files/No_Added_Colour.jpg?v=1675185319&width=360"
            alt=""
          />

          <img
            className="h-[200px] w-[200px]"
            src="https://cdn.shopify.com/s/files/1/0584/2524/5891/files/No_Preservatives.jpg?v=1675185319&width=535"
            alt=""
          />

          <img
            className="h-[200px] w-[200px]"
            src="https://cdn.shopify.com/s/files/1/0584/2524/5891/files/No_Added_Sugar.jpg?v=1675185320&width=360"
            alt=""
          />

          <img
            className="h-[200px] w-[200px]"
            src="https://cdn.shopify.com/s/files/1/0584/2524/5891/files/Gluten_Free.jpg?v=1675185296&width=360"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default Features;
