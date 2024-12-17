import { IoPlayCircleOutline } from "react-icons/io5";
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <img
        src="\vr.svg"
        className="absolute left-1/2 transform -translate-x-1/2 z-10 scale-[0.8] sm:scale-100 sm:top-0 -top-2"
      />
      <div className="relative sm:h-[100vh] md:h-[80vh] h-[65vh] lg:h-[100vh]">
        <div className="relative sm:h-[100vh] md:h-[80vh] h-[65vh] lg:h-[100vh] m-5 z-10 space-y-5">
          <div className="rounded-xl absolute inset-0 scale-[1.002] bg-gradient-to-b from-[#696674] from-80% to-[#0b0319] to-90% herobox"></div>
          <div className="rounded-xl h-full relative z-10 bg-[#0b0319] herobox-border">
            <div className="flex justify-around items-center p-4 sm:text-base text-xs">
              <h1 className="cursor-pointer px-[2px] hover:scale-[1.15] hover:px-3 transition-all duration-500 ">
                HOME
              </h1>
              <h1 className="cursor-pointer mr-5 sm:mr-5 px-[2px] hover:scale-[1.15] hover:px-3 transition-all duration-500 ">
                PRODUCTS
              </h1>
              <h1 className="cursor-pointer ml-7 sm:ml-5 sm:pl-5 px-[2px] hover:scale-[1.15] hover:px-3 transition-all duration-500 ">
                SERVICES
              </h1>
              <h1 className="cursor-pointer px-[2px] hover:scale-[1.15] hover:px-3 transition-all duration-500 ">
                CONTACT
              </h1>
            </div>
            <div className="flex flex-row justify-center items-center h-[80%] relative flex-col-reverse md:flex-row">
              <div className="flex flex-col flex-wrap md:pl-0 pl-3 lg:p-4 w-full space-y-5 absolute z-10 md:relative md:w-1/2 md:ml-20 md:space-y-5 translate-y-[-50px] ">
                <h1 className="lg:text-8xl sm:text-7xl text-6xl text-white ">
                  NEXT GEN
                </h1>
                <h2 className="lg:text-5xl sm:text-5xl text-4xl bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] text-transparent bg-clip-text ">
                  VIRTUAL REALITY
                </h2>
                <h3 className="text-2xl text-white  md:pr-[10vw]">
                  Unveiling the Future: The Dawn of Hyper-Realistic Virtual
                  Realms
                </h3>
              </div>

              <div className="relative flex justify-center items-center w-full md:w-1/2 md:opacity-100 sm::opacity-80 opacity-60">
                <div className="grid-back"></div>
                <div className="blur-[130px] absolute top-0 left-0 w-full h-full">
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#DF00BC] to-[#0CFADF] rounded-xl -translate-x-16"
                    style={{
                      boxShadow: "inset 0px 0px 0px 0px #0b0319",
                      clipPath: "ellipse(49% 33% at 50% 50%)",
                    }}
                  ></div>
                </div>

                <img
                  src="\image 1 1.svg"
                  alt="Virtual Reality Showcase"
                  className="scale-125 z-[5]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-[120px] blur-[20px] bg-[#0b0319] z-[1000]"></div>
      </div>

      <div className="pt-[20px] transform -translate-y-[50px] z-[10000] bg-[#0b0319] sm:bg-gradient-to-b from-[#0b0319c9] to-[#0b0319] to-[10%] relative">
        <div className="flex lg:flex-nowrap flex-wrap sm:flex-row flex-col justify-evenly items-center h-1/2 my-9 px-[3rem]">
          <div className="flex flex-col justify-center items-center sm:w-1/3 scale-125 my-[50px] hover:scale-[1.3] transition-all duration-500">
            <img src="Rectangle 4.svg"></img>
            <h1 className="m-5">Gear VR Headset</h1>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[40%] scale-125 my-[50px] hover:scale-[1.3] transition-all duration-500">
            <img src="Rectangle 5.svg"></img>
            <h1 className="m-5">Smart VR Headset</h1>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-1/3 scale-125 my-[50px] hover:scale-[1.3] transition-all duration-500">
            <img src="Rectangle 6.svg" className="fill"></img>
            <h1 className="m-5">Play Station VR</h1>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center h-1/2 my-9 w-full justify-around sm:p-0 p-3">
          <div className="flex lg:w-1/4 sm:w-[35%] items-center justify-center scale-125 my-[50px] hover:scale-[1.3] transition-all duration-500 m-9 pr-5">
            <div className="w-1/2">
              {" "}
              <img src="image4.png"></img>
            </div>
            <div className="w-1/2 flex flex-col ">
              <img src="image6.png"></img>
              <img src="image3 1.png"></img>
            </div>
          </div>
          <div className="sm:w-[60%] sm:px-0 px-5">
            <h1 className="lg:text-7xl sm:text-6xl text-5xl  bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] text-transparent bg-clip-text my-3">
              Explore in the Metaverse
            </h1>
            <h2 className="lg:text-6xl sm:text-5xl text-4xl text-white">
              one pixel at a time...
            </h2>
            <h3 className="text-2xl tex-white lg:pr-[20vw] pr-[5vw]">
              The Future of Virtual Reality: Where Pixels Dream. In the
              not-so-distant future, pixels will transcend screens. They’ll
              escape their two-dimensional confines and leap into our reality,
              dancing with our senses.
            </h3>
            <div className="flex  items-center hover:scale-[1.03] hover:p-1 transition-all duration-500 ">
              <button className="bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] my-5 text-white px-7 py-3 rounded-3xl text-xl ">
                Play Now
              </button>
              <div className="text-2xl rounded-full relative bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] w-[50px] h-[50px]  ml-9 cursor-pointer">
                <div className="absolute inset-0  rounded-full z-[1] bg-[#0b0319] scale-[0.85]  pt-[10px] pl-[18px] ">
                  <div className="bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] clip-text text-transparent bg-clip-text w-[20px]">
                    {" "}
                    &#9654;{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="flex sm:m-0 sm:p-0 px-3 sm:flex-row flex-col justify-center items-center  my-9 w-full justify-around">
          <div className="sm:w-[60%] pl-5">
            <h1 className="lg:text-7xl sm:text-6xl text-5xl bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] text-transparent bg-clip-text my-3">
              Touch the <span className="text-white">Reality...</span>
            </h1>
            <h3 className="text-2xl tex-white lg:pr-[20vw] pr-[5vw]">
              The Future of Virtual Reality: Where Pixels Dream. In the
              not-so-distant future, pixels will transcend screens. They’ll
              escape their two-dimensional confines and leap into our reality,
              dancing with our senses.
            </h3>
            <div className="flex  items-center hover:scale-[1.03] hover:p-1 transition-all duration-500 ">
              <button className="bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] my-5 text-white px-7 py-3  rounded-3xl text-xl ">
                Play Now
              </button>
              <div className="text-2xl rounded-full relative bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] w-[50px] h-[50px] ml-9 cursor-pointer">
                <div className="absolute inset-0  rounded-full z-[1] bg-[#0b0319] scale-[0.85] pt-[10px] pl-[18px] ">
                  <div className="bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] clip-text text-transparent bg-clip-text w-[30px] text-2xl">
                    {" "}
                    &#9654;{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:w-1/4 sm:w-[30%] w-[70%] items-center justify-center scale-125 my-[50px] hover:scale-[1.3] transition-all duration-500 m-9 pr-5">
            <img src="image.png" className="object-fill"></img>
          </div>
        </div>
        <div className="flex justify-center items-center relative my-[250px]">
          <div className="lg:w-1/2 w-[75%] flex flex-row justify-center items-center absolute ">
            <div className="w-full h-full scale-125 bg-gradient-to-b from-[#0CFADF] to-[#DF00BC] p-[2px] flex justify-center items-center shadow-[0_0_10px_#DF00BC] rounded-2xl">
              <div className="w-full h-full bg-[#0b0319] flex flex-col justify-center items-center rounded-2xl lg:p-6 py-3">
                <h1 className="lg:text-3xl sm:text-2xl text-xl text-white text-center sm:p-0 p-3">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h1>
                <p className="text-white text-center m-9 lg:px-5">
                  VR Dispatch: Pixels Unleashed, Dreams Delivered . . . where
                  pixels ignite and dreams take flight! Here, we decode the
                  language of pixels, revealing the hidden realms of virtual
                  triumphs. Buckle up, fellow pixel pioneers, as we explore the
                  future—one shimmering dot at a time.
                </p>
                <button className="bg-gradient-to-b from-[#0CFADF] to-[#DF00BC] text-white sm:px-[30%] px-[20%] py-2  rounded-3xl text-xl hover:scale-105  transition-all duration-500">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly w-full sm:pt-[1rem] pt-[5rem]">
          <div className="p-3 cursor-pointer sm:text-xl">Help</div>
          <div className="p-3 cursor-pointer sm:text-xl">About Us</div>
          <div className="p-3 cursor-pointer sm:text-xl">Company</div>
          <div className="p-3 cursor-pointer sm:text-xl">Services</div>
          <div className="p-3 cursor-pointer sm:text-xl">Contact</div>
        </div>
        <div className="flex justify-center items-center relative my-[200px]">
          <div className="lg:w-1/2 w-[80%] flex flex-row justify-center items-center absolute ">
            <div className="w-full h-full bg-[#0b0319] flex flex-col justify-center items-center rounded-2xl lg:p-6 py-3">
              <h1 className="lg:text-3xl sm:text-2xl text-xl text-white">
                Download Our App
              </h1>
              <p className="text-white text-center m-5 sm:m-9 lg:px-5">
                Connect with friends across the globe. Multiplayer VR games let
                you team up, compete, or simply hang out in shared
                spaces. Connect with friends across the globe. Multiplayer VR
                games let you team up, compete, or simply hang out in shared
                spaces. 
              </p>
              <div className="flex space-x-5">
                <img src="image 9.png  cursor-pointer"></img>
                <img src="image 8.png cursor-pointer"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-centre r w-full my-9">
          <div className="bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] h-1 lg:w-[80%] w-[90%] lg:mx-[10%] mx-[5%]"></div>
        </div>
        <div className="flex flex-wrap justify-evenly items-cente h-[30px] lg:px-[10%] px-[5%] mb-5 space-x-5 tex gap-y-2">
          <div className="cursor-pointer">Terms</div>
          <div className="cursor-pointer">Privacy</div>
          <div className="cursor-pointer">Conditions</div>
          <div className="md:w-1/2 flex justify-center items-center">
            &copy; 2024 VR ZONE Ltd. All Rights Reserved
          </div>
          <div className="flex justify-center items-center scale-125 space-x-2">
            <img src="Twitter.png" className="cursor-pointer "></img>
            <img src="YouTube.png" className="cursor-pointer "></img>
            <img src="Facebook F.png" className="cursor-pointer "></img>
            <img src="Instagram.png" className="cursor-pointer "></img>
          </div>
        </div>
      </div>
    </div>
  );
}
