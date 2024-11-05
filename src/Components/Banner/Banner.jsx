import MainContainer from "../Container/container";

const Banner = () => {
  return (
    <div
      className="w-full absolute top-0 left-0 md:h-[30em] h-[85vh] pt-24 md:pt-32 flex  items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
        backgroundImage: `src("")`,
      }}
    >
      <MainContainer>
        <div className="relative h-full ">
          {/* background: linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%); */}

          {/* banner title */}
          <p
            style={{
              background:
                "linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)",
            }}
            className="mb-5 md:text-[55px] sm:text-[40px] text-[30px] md:w-[60%] w-full text-white uppercase md:leading-[4rem] sm:leading-[3rem] leading-[2rem] z-30 relative "
          >
            Taste the authentic Saudi cuisine
          </p>

          {/* Descritption */}
          <p className="z-30 relative text-white mb-5 md:w-[45%] w-full">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.{" "}
          </p>

          {/* Button */}
          <button className="btn uppercase">explore more</button>

          {/* Banner Image */}
          <div className="absolute right-0 bottom-5 md:w-[50%] w-full  md:h-full h-[50%] bg-slate-500">
            <img src="./banner.jpg" className="w-full h-full z-10" alt="" />
            <div className="absolute -top-[24px] -right-[24px]">
              <svg
                width="49"
                height="49"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin"
              >
                <path
                  d="M24.4995 24.5914C24.4995 24.5914 27.6425 29.8451 33.8558 32.8899C40.069 35.9356 47 35.6189 47 35.6189C47 35.6189 43.858 30.3643 37.6448 27.3195C31.4315 24.2747 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.5914C24.4995 24.5914 17.5685 24.2747 11.3552 27.3195C5.142 30.3643 2 35.6189 2 35.6189C2 35.6189 8.93101 35.9356 15.1442 32.8899C21.3575 29.8451 24.4995 24.5914 24.4995 24.5914ZM24.4995 24.4086C24.4995 24.4086 21.3575 19.1549 15.1442 16.1101C8.93101 13.0644 2 13.3819 2 13.3819C2 13.3819 5.142 18.6357 11.3552 21.6813C17.5685 24.7261 24.4995 24.4086 24.4995 24.4086ZM24.4995 24.4086C24.4995 24.4086 31.4315 24.7261 37.6448 21.6813C43.858 18.6357 47 13.3819 47 13.3819C47 13.3819 40.069 13.0644 33.8558 16.1101C27.6425 19.1549 24.4995 24.4086 24.4995 24.4086ZM28.2885 35.9725C28.2885 42.0629 24.4995 47 24.4995 47C24.4995 47 20.7105 42.0629 20.7105 35.9725C20.7105 29.882 24.4995 24.9441 24.4995 24.9441C24.4995 24.9441 28.2885 29.882 28.2885 35.9725ZM20.7105 13.0275C20.7105 6.93793 24.4995 2 24.4995 2C24.4995 2 28.2885 6.93793 28.2885 13.0275C28.2885 19.118 24.4995 24.055 24.4995 24.055C24.4995 24.055 20.7105 19.118 20.7105 13.0275Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <div className="absolute -bottom-[24px] -right-[24px] bg-[#febf00]  rounded-full p-2 text-sm">
              <p className="uppercase">Offer </p>
              <p className="uppercase">Toady</p>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Banner;
