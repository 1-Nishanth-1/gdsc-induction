import { IoPlayCircleOutline } from "react-icons/io5";
export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <img
        src="\vr.svg"
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
        alt="Background Graphic"
      />
      <div className="relative h-[100vh] m-5 z-10 space-y-5">
        <div
          className="rounded-xl absolute inset-0 scale-[1.002] bg-gradient-to-b from-[#696674] from-80% to-[#0b0319] to-90%"
          style={{
            clipPath:
              "polygon(47% 5%, 53% 5%, 55% 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0% 70%, 0 0, 45% 0)",
          }}
        ></div>
        <div
          className="rounded-xl h-full relative z-10 bg-[#0b0319]"
          style={{
            clipPath:
              "polygon(47% 5%, 53% 5%, 55% 0, 100% 0, 100% 100%, 50% 100%, 0 100%, 0% 70%, 0 0, 45% 0)",
            boxShadow: "inset 0px 10px 1000px 10px rgba(255, 255, 255, 0.3)",
          }}
        >
          <div className="flex justify-evenly items-center p-4">
            <h1 className="cursor-pointer">HOME</h1>
            <h1 className="cursor-pointer">PRODUCTS</h1>
            <h1 className="cursor-pointer">SERVICES</h1>
            <h1 className="cursor-pointer">CONTACT</h1>
          </div>
          <div className="flex flex-row justify-center items-center h-[80%]">
            <div className="flex flex-col flex-wrap lg:p-4 ml-20 w-1/2 space-y-5">
              <h1 className=" lg:text-8xl text-7xl text-white">NEXT GEN</h1>
              <h2 className="lg:text-5xl text-5xl bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] text-transparent bg-clip-text">
                VIRTUAL REALITY
              </h2>
              <h3 className="text-2xl text-white lg:pr-[10vw]">
                Unveiling the Future: The Dawn of Hyper-Realistic Virtual Realms
              </h3>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="grid-back"></div>
              <div className=" blur-[130px] absolute top-0 left-0 w-full h-full">
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
                className="scale-125 z-[100]"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-1/6 blur-[20px] bg-[#0b0319] z-[1000]"></div>
      </div>
      <div className="pt-[20px] transform -translate-y-[50px] z-[10000]  bg-gradient-to-b from-[#0b0319c9] to-[#0b0319] to-[10%] relative">
        <div className="flex lg:flex-nowrap flex-wrap sm:flex-row flex-col justify-evenly items-center h-1/2 my-9 ">
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
        <div className="flex flex-row justify-center items-center h-1/2 my-9 w-full justify-around">
          <div className="flex lg:w-1/4 w-[35%] items-center justify-center scale-125 my-[50px] hover:scale-[1.3] transition-all duration-500 m-9 pr-5">
            <div className="w-1/2">
              {" "}
              <img src="image4.png"></img>
            </div>
            <div className="w-1/2 flex flex-col ">
              <img src="image6.png"></img>
              <img src="image3 1.png"></img>
            </div>
          </div>
          <div className="w-[60%]">
            <h1 className="lg:text-7xl text-6xl  bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] text-transparent bg-clip-text my-3">
              Explore in the Metaverse
            </h1>
            <h2 className="lg:text-6xl text-5xl text-white">
              one pixel at a time...
            </h2>
            <h3 className="text-2xl tex-white lg:pr-[20vw] pr-[5vw]">
              The Future of Virtual Reality: Where Pixels Dream. In the
              not-so-distant future, pixels will transcend screens. They’ll
              escape their two-dimensional confines and leap into our reality,
              dancing with our senses.
            </h3>
            <div className="flex  items-center">
              <button className="bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] my-5 text-white px-7 py-3  rounded-3xl text-xl">
                Play Now
              </button>
              <div className="text-2xl rounded-full relative bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] w-[50px] h-[50px]  ml-9">
                <div className="absolute inset-0  rounded-full z-[1] bg-[#0b0319] scale-[0.85] pt-3 pl-4 ">
                  <div className="bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] clip-text text-transparent bg-clip-text w-[20px]">
                    {" "}
                    &#9654;{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center h-1/2 my-9 w-full justify-around">
          <div className="w-[60%]">
            <h1 className="lg:text-7xl text-6xl bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] text-transparent bg-clip-text my-3">
              Touch the <span className="text-white">Reality...</span>
            </h1>
            <h3 className="text-2xl tex-white lg:pr-[20vw] pr-[5vw]">
              The Future of Virtual Reality: Where Pixels Dream. In the
              not-so-distant future, pixels will transcend screens. They’ll
              escape their two-dimensional confines and leap into our reality,
              dancing with our senses.
            </h3>
            <div className="flex  items-center">
              <button className="bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] my-5 text-white px-7 py-3  rounded-3xl text-xl">
                Play Now
              </button>
              <div className="text-2xl rounded-full relative bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] w-[50px] h-[50px] ml-9">
                <div className="absolute inset-0  rounded-full z-[1] bg-[#0b0319] scale-[0.85] pt-3 pl-4 ">
                  <div className="bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] clip-text text-transparent bg-clip-text w-[20px]">
                    {" "}
                    &#9654;{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:w-1/4 w-[30%] items-center justify-center scale-125 my-[50px] hover:scale-[1.3] transition-all duration-500 m-9 pr-5">
            <img src="image.png" className="object-fill"></img>
          </div>
        </div>
        <div className="flex justify-center items-center relative my-[250px]">
          <div className="lg:w-1/2 w-[75%] flex flex-row justify-center items-center absolute ">
            <div className="w-full h-full scale-125 bg-gradient-to-b from-[#0CFADF] to-[#DF00BC] p-[2px] flex justify-center items-center shadow-[0_0_10px_#DF00BC] rounded-2xl">
              <div className="w-full h-full bg-[#0b0319] flex flex-col justify-center items-center rounded-2xl lg:p-6 py-3">
                <h1 className="lg:text-3xl sm:text-2xl text-xl text-white text-center">
                  SUBSCRIBE TO OUR NEWSLETTER
                </h1>
                <p className="text-white text-center m-9 lg:px-5">
                  VR Dispatch: Pixels Unleashed, Dreams Delivered . . . where
                  pixels ignite and dreams take flight! Here, we decode the
                  language of pixels, revealing the hidden realms of virtual
                  triumphs. Buckle up, fellow pixel pioneers, as we explore the
                  future—one shimmering dot at a time.
                </p>
                <button className="bg-gradient-to-b from-[#0CFADF] to-[#DF00BC] text-white px-[30%] py-2  rounded-3xl text-xl">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly w-full">
          <div className="p-3 cursor-pointer text-xl">Help</div>
          <div className="p-3 cursor-pointer text-xl">About Us</div>
          <div className="p-3 cursor-pointer text-xl">Company</div>
          <div className="p-3 cursor-pointer text-xl">Services</div>
          <div className="p-3 cursor-pointer text-xl">Contact</div>
        </div>
        <div className="flex justify-center items-center relative my-[200px]">
          <div className="lg:w-1/2 w-[80%] flex flex-row justify-center items-center absolute ">
            <div className="w-full h-full bg-[#0b0319] flex flex-col justify-center items-center rounded-2xl lg:p-6 py-3">
              <h1 className="lg:text-3xl sm:text-2xl text-xl text-white">
                Download Our App
              </h1>
              <p className="text-white text-center m-9 lg:px-5">
                Connect with friends across the globe. Multiplayer VR games let
                you team up, compete, or simply hang out in shared
                spaces. Connect with friends across the globe. Multiplayer VR
                games let you team up, compete, or simply hang out in shared
                spaces. 
              </p>
              <div className="flex space-x-5">
                <img src="image 9.png"></img>
                <img src="image 8.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-centre r w-full my-9">
          <div className="bg-gradient-to-r from-[#0CFADF] to-[#DF00BC] h-1 lg:w-[80%] w-[90%] lg:mx-[10%] mx-[5%]"></div>
        </div>
        <div className="flex justify-evenly items-cente h-[30px] lg:px-[10%] px-[5%] mb-5">
          <div className="cursor-pointer">Terms</div>
          <div className="cursor-pointer">Privacy</div>
          <div className="cursor-pointer">Conditions</div>
          <div className="w-1/2 flex justify-center items-center">
            &copy; 2024 VR ZONE Ltd. All Rights Reserved
          </div>
          <img src="Twitter.png" className="cursor-pointer "></img>
          <img src="YouTube.png" className="cursor-pointer "></img>
          <img src="Facebook F.png" className="cursor-pointer "></img>
          <img src="Instagram.png" className="cursor-pointer "></img>
        </div>
      </div>
    </div>
  );
}
