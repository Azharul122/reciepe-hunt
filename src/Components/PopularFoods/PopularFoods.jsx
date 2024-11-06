import MainContainer from "../Container/container";
import { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { popularFoods } from "../../constance";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import AOS from 'aos'

const PopularFoods = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  AOS.init();
  

  // console.log(currentSlide, popularFoods.length);

  // Carousel responsive

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1700 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1100 },
      items: 4,
      partialVisibilityGutter: 40,
    },

    medium: {
      breakpoint: { max: 1100, min: 770 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 770, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-[#FBF7F2] py-10 relative overflow-hidden">
      {/*  */}

      <MainContainer>
        <div className="flex items-center justify-between pb-3">
          <div className="flex flex-col gap-4">
            <div className="flex  text-primary items-center gap-2">
              <p className="size-3 bg-primary"></p>
              <p>Crispy, Every Bite Taste</p>
            </div>
            <p className="uppercase md:text-2xl text-xl">POPULAR FOOD ITEMS</p>
          </div>
          <div className="flex gap-4 items-center">
            <button
              disabled={currentSlide <= 0}
              className="size-10 cursor-pointer rounded-full shadow-xl backdrop-blur-xl flex justify-center items-center"
            >
              <FaAngleLeft
                className={` size-7 text-[#BD1F17] ${
                  currentSlide <= 0
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100"
                }`}
                onClick={() => {
                  slideRef.current.previous();
                  currentSlide > 0 &&
                    setCurrentSlide(slideRef.current?.state?.currentSlide - 1);
                }}
              />
            </button>
            <button
              disabled={currentSlide >= popularFoods.length - 3}
              className="size-10 cursor-pointer rounded-full shadow-xl backdrop-blur-xl flex justify-center items-center"
            >
              <FaAngleRight
                className={` size-7 text-[#BD1F17] ${
                  currentSlide >= popularFoods.length - 3
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100"
                }`}
                onClick={() => {
                  slideRef.current.next();
                  setCurrentSlide(currentSlide + 1);
                }}
              />
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="popular-products py-3 ">
          <Carousel
            ref={slideRef}
            arrows={false}
            autoPlay={true}
            infinite={true}
            responsive={responsive}
            itemclassName="carousel-item-padding-40-px"
          >
            {popularFoods.map((pp) => (
              <div className="card  px-3 " key={pp.id}>
                <div className="flex flex-col gap-3 border py-3 px-2 bg-white shadow-xl backdrop-blur-lg">
                  <img
                    src={pp.image}
                    className="h-[200px] sm:h-[220px] md:h-[220px] w-full  rounded-lg"
                    alt=""
                  />

                  <div className="w-[50px] bg-red-700 h-[2px] mx-auto"></div>
                  <p className="mx-auto text-center text-xl">{pp.title}</p>
                  <p className="mx-auto text-center truncate w-full">
                    {pp.sDescription}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </MainContainer>

      {/* side image design */}
      <div className="absolute size-40 left-0 -translate-x-[6rem] top-1/2 -translate-y-1/2">
        <img src="./side1.png" alt="" className="inset-0 -rotate-45" />
      </div>
    </div>
  );
};

export default PopularFoods;
