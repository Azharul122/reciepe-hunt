import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import MainContainer from "../Container/container";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='w-full relative   bg-[url("./footer-bg.jpeg")] text-white bg-cover overflow-hidden'>
      <div className=" bg-[rgba(0,0,0,0.5)] w-full h-full py-10">
        <MainContainer>
          <div className="flex items-center  gap-6 flex-col">
            <p className="uppercase text-2xl">
              We ready to have you the best dining experiences
            </p>
            {/*  */}
            <div className=" flex-col flex md:flex-row items-center justify-between w-full pb-8 gap-8 md:gap-0">
              <div className="flex flex-col gap-3 justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 23.2212C5.78625 23.2212 0.75 18.1849 0.75 11.9712C0.75 5.75744 5.78625 0.721191 12 0.721191C18.2138 0.721191 23.25 5.75744 23.25 11.9712C23.2425 18.1812 18.21 23.2137 12.0013 23.2212H12ZM12 3.22119C7.1675 3.22119 3.25 7.13869 3.25 11.9712C3.25 16.8037 7.1675 20.7212 12 20.7212C16.8325 20.7212 20.75 16.8037 20.75 11.9712C20.7437 7.14119 16.83 3.22744 12 3.22119ZM17.0212 13.9362C17.08 13.7962 17.1138 13.6337 17.1138 13.4624C17.1138 12.9424 16.7962 12.4974 16.345 12.3087L16.3363 12.3062L13.1363 10.9962V5.96369C13.1363 5.27369 12.5763 4.71369 11.8863 4.71369C11.1963 4.71369 10.6363 5.27369 10.6363 5.96369V11.8362C10.6363 12.3562 10.9538 12.8012 11.405 12.9899L11.4137 12.9924L15.3913 14.6199C15.5312 14.6799 15.695 14.7137 15.8663 14.7137C16.3863 14.7137 16.8312 14.3962 17.0187 13.9449L17.0212 13.9362Z"
                    fill="#FEBF00"
                  />
                </svg>
                <p className="text-xl">Opening hours</p>
                <div className="text-center">
                  <p>Monday Sunday</p>
                  <p>9:00 AM to 11:30 PM</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 23.2212C5.78625 23.2212 0.75 18.1849 0.75 11.9712C0.75 5.75744 5.78625 0.721191 12 0.721191C18.2138 0.721191 23.25 5.75744 23.25 11.9712C23.2425 18.1812 18.21 23.2137 12.0013 23.2212H12ZM12 3.22119C7.1675 3.22119 3.25 7.13869 3.25 11.9712C3.25 16.8037 7.1675 20.7212 12 20.7212C16.8325 20.7212 20.75 16.8037 20.75 11.9712C20.7437 7.14119 16.83 3.22744 12 3.22119ZM17.0212 13.9362C17.08 13.7962 17.1138 13.6337 17.1138 13.4624C17.1138 12.9424 16.7962 12.4974 16.345 12.3087L16.3363 12.3062L13.1363 10.9962V5.96369C13.1363 5.27369 12.5763 4.71369 11.8863 4.71369C11.1963 4.71369 10.6363 5.27369 10.6363 5.96369V11.8362C10.6363 12.3562 10.9538 12.8012 11.405 12.9899L11.4137 12.9924L15.3913 14.6199C15.5312 14.6799 15.695 14.7137 15.8663 14.7137C16.3863 14.7137 16.8312 14.3962 17.0187 13.9449L17.0212 13.9362Z"
                    fill="#FEBF00"
                  />
                </svg>
                <p className="text-xl">Opening hours</p>
                <div className="text-center">
                  <p>Monday Sunday</p>
                  <p>9:00 AM to 11:30 PM</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 23.2212C5.78625 23.2212 0.75 18.1849 0.75 11.9712C0.75 5.75744 5.78625 0.721191 12 0.721191C18.2138 0.721191 23.25 5.75744 23.25 11.9712C23.2425 18.1812 18.21 23.2137 12.0013 23.2212H12ZM12 3.22119C7.1675 3.22119 3.25 7.13869 3.25 11.9712C3.25 16.8037 7.1675 20.7212 12 20.7212C16.8325 20.7212 20.75 16.8037 20.75 11.9712C20.7437 7.14119 16.83 3.22744 12 3.22119ZM17.0212 13.9362C17.08 13.7962 17.1138 13.6337 17.1138 13.4624C17.1138 12.9424 16.7962 12.4974 16.345 12.3087L16.3363 12.3062L13.1363 10.9962V5.96369C13.1363 5.27369 12.5763 4.71369 11.8863 4.71369C11.1963 4.71369 10.6363 5.27369 10.6363 5.96369V11.8362C10.6363 12.3562 10.9538 12.8012 11.405 12.9899L11.4137 12.9924L15.3913 14.6199C15.5312 14.6799 15.695 14.7137 15.8663 14.7137C16.3863 14.7137 16.8312 14.3962 17.0187 13.9449L17.0212 13.9362Z"
                    fill="#FEBF00"
                  />
                </svg>
                <p className="text-xl">Opening hours</p>
                <div className="text-center">
                  <p>Monday Sunday</p>
                  <p>9:00 AM to 11:30 PM</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 23.2212C5.78625 23.2212 0.75 18.1849 0.75 11.9712C0.75 5.75744 5.78625 0.721191 12 0.721191C18.2138 0.721191 23.25 5.75744 23.25 11.9712C23.2425 18.1812 18.21 23.2137 12.0013 23.2212H12ZM12 3.22119C7.1675 3.22119 3.25 7.13869 3.25 11.9712C3.25 16.8037 7.1675 20.7212 12 20.7212C16.8325 20.7212 20.75 16.8037 20.75 11.9712C20.7437 7.14119 16.83 3.22744 12 3.22119ZM17.0212 13.9362C17.08 13.7962 17.1138 13.6337 17.1138 13.4624C17.1138 12.9424 16.7962 12.4974 16.345 12.3087L16.3363 12.3062L13.1363 10.9962V5.96369C13.1363 5.27369 12.5763 4.71369 11.8863 4.71369C11.1963 4.71369 10.6363 5.27369 10.6363 5.96369V11.8362C10.6363 12.3562 10.9538 12.8012 11.405 12.9899L11.4137 12.9924L15.3913 14.6199C15.5312 14.6799 15.695 14.7137 15.8663 14.7137C16.3863 14.7137 16.8312 14.3962 17.0187 13.9449L17.0212 13.9362Z"
                    fill="#FEBF00"
                  />
                </svg>
                <p className="text-xl">Opening hours</p>
                <div className="text-center">
                  <p>Monday Sunday</p>
                  <p>9:00 AM to 11:30 PM</p>
                </div>
              </div>
            </div>

            {/* Social Link */}
            <div className="flex justify-center items-center gap-4">
              <div className="size-10 border rounded-full border-white bg-transparent flex justify-center items-center text-white">
                <FaFacebook />
              </div>
              <div className="size-10 border rounded-full border-white bg-transparent flex justify-center items-center text-white">
                <FaGithub />
              </div>
              <div className="size-10 border rounded-full border-white bg-transparent flex justify-center items-center text-white">
                <FaLinkedin />
              </div>
              <div className="size-10 border rounded-full border-white bg-transparent flex justify-center items-center text-white">
                <FaTwitter />
              </div>
            </div>

            {/*  */}
            <Link to={"#"}>© 2023 All Rights Reserved </Link>
          </div>
        </MainContainer>
      </div>
    </div>
  );
};

export default Footer;
