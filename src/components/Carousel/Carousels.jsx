import React from "react";
import { Carousel } from "antd";


function Carousels() {
  return (
    <>
      <div className="pt-24">
        <Carousel autoplay>
          <div>
            <img
              className="md:h-[650px] w-full"
              src="/images/carousel/protein smoothie exotic berries.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="md:h-[650px] w-full"
              src="/images/carousel/veganhof ENERGY WITH REAL PICTURE.png"
              alt=""
            />
          </div>
          <div>
            <img   className="md:h-[650px] w-full " src="/images/carousel/veganhof ENERGY X SPORTS.png" alt="" />
          </div>
          <div>
            <img   className="md:h-[650px] w-full "  src="/images/carousel/VEGANHOF FULL 3840X2160.png" alt="" />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Carousels;
