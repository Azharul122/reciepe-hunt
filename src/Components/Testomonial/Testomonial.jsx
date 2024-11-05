import { useRef, useState } from "react";
import MainContainer from "../Container/container";
import { testimonialData } from "../../constance";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";

const Testomonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  console.log(currentSlide, testimonialData.length);

  // Carousel responsive

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1700 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1700, min: 770 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 770, min: 400 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="py-10 overflow-hidden relative">
      <MainContainer>
        <div className="flex items-center justify-between pb-3">
          <div className="flex flex-col gap-4">
            <div className="flex  text-primary items-center gap-2">
              <p className="size-3 bg-primary"></p>
              <p>Crispy, Every Bite Taste</p>
            </div>
            <p className="uppercase text-2xl">POPULAR FOOD ITEMS</p>
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
              disabled={currentSlide >= testimonialData.length - 1}
              className="size-10 cursor-pointer rounded-full shadow-xl backdrop-blur-xl flex justify-center items-center"
            >
              <FaAngleRight
                className={` size-7 text-[#BD1F17] ${
                  currentSlide >= testimonialData.length - 1
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

        {/* Testomonial */}

        <div className="popular-products py-3 ">
          <Carousel
            ref={slideRef}
            arrows={false}
            responsive={responsive}
            itemclassName=""
          >
            {testimonialData.map((pp) => (
              <div className="card   " key={pp.id}>
                <div className="flex-col-reverse md:h-[350px] h-[500]   md:flex-row w-full flex  py-3 px-2  shadow-xl backdrop-blur-lg items-center">
                  <div className=" md:col-span-4 md:w-[40%] shrink-0 md:h-full sm:h-[200px]  h-[250px]  w-full px-8 py-5  bg-btnColor">
                    <FaQuoteLeft />

                    <div className="pl-[20px] relative h-full">
                      <p className="text-justify">{pp.comment}</p>

                      {/* profile */}
                      <div className="profile flex items-center justify-between border-b border-black py-3 absolute left-0 bottom-3 w-full">
                        <div className="">
                          <p className="mb-2 text-xl">{pp.name}</p>
                          <p className="text-sm">{pp.location}</p>
                        </div>
                        <div className="">
                          <img
                            src={`${pp.profileImage}`}
                            className="size-10 rounded-full"
                            alt=""
                          />
                        </div>
                        <div className="absolute w-[50px] bg-primary h-[1px] bottom-[1px] right-0"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ backgroundImage: `url(${pp.image})` }}
                    className={` md:col-span-6 shrink-0 md:w-[60%] w-full  bg-cover md:h-full sm:h-[300px] h-[250px] relative`}
                  >
                    <div className="bg-[rgba(0,0,0,0.5)] w-full h-full flex justify-center items-center">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer"
                      >
                        <path
                          d="M25.2196 0.0168457C11.542 0.0168457 0.454163 11.1957 0.454163 24.9856C0.454163 38.7754 11.542 49.9543 25.2196 49.9543C38.8971 49.9543 49.985 38.7754 49.985 24.9856C49.9705 11.2019 38.8911 0.0315803 25.2196 0.0168457ZM35.6493 25.7811C35.4778 26.1279 35.1991 26.409 34.8551 26.5818V26.5907L20.7034 33.7247C19.8295 34.1649 18.7671 33.8076 18.3303 32.9265C18.2061 32.676 18.1422 32.3995 18.1437 32.1195V17.8517C18.1433 16.8667 18.9349 16.0679 19.9119 16.0673C20.1867 16.0672 20.4577 16.1316 20.7034 16.2554L34.8551 23.3894C35.7295 23.8287 36.0851 24.8996 35.6493 25.7811Z"
                          fill="#FFC900"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </MainContainer>

      {/* Side design */}
      <div className="absolute top-6 -translate-x-[150px] left-0">
        <img src="./testomonial-side.png" alt="" className="size-[200px]" />
      </div>
    </div>
  );
};

export default Testomonial;
