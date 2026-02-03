import { useState } from "react";
import hero1 from "/images/desktop-image-hero-1.jpg";
import hero2 from "/images/desktop-image-hero-2.jpg";
import hero3 from "/images/desktop-image-hero-3.jpg";



const items = [
    {
        img: hero1,
        title:'Discover innovative ways to decorate',
        desc:'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    },
    {
        img: hero2,
        title:'We are available all across the globe',
        desc:'With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today.',
    },
    {
        img: hero3,
        title:'Manufactured with the best materials',
        desc:'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    },
]


export default function Hero() {

    const [index , setIndex] = useState(0);
    const current = items[index];


    const handleRight = () =>{
        setIndex((prev) => (prev + 1) %items.length)
    }

    const handleLeft = () =>{
        setIndex((prev) => (prev - 1 + items.length) %items.length)
    }

    const [show , setShow] = useState(false);



return (
    <div className="relative flex flex-col md:h-[75vh] md:flex-row ">

        <div className="relative w-full md:w-[60%] bg-cover bg-center h-[75vh]  flex items-start pt-14 px-12 gap-12" style={{backgroundImage: `url(${current.img})`}}>
            <div className="flex items-center gap-14 w-full">
                <img onClick={()=> setShow(!show)} className="flex md:hidden cursor-pointer" src="./images/icon-hamburger.svg" alt="" />
                <img src="./images/logo.svg" alt="" />
            </div>
            <div className="hidden md:flex gap-9 text-white">
                <a href="">home</a>
                <a href="">shop</a>
                <a href="">about</a>
                <a href="">contact</a>
            </div>
            <div className="absolute bottom-0 right-0 bg-black flex md:hidden items-center justify-between mt-21 w-30 py-5 px-5 ">
                <img onClick={handleLeft} className="cursor-pointer" src="./images/icon-angle-left.svg" alt="" />
                <img onClick={handleRight} className="cursor-pointer" src="./images/icon-angle-right.svg" alt="" />
            </div>
        </div>

        <div className="w-full md:w-[40%] h-[75vh] bg-white ">
            <div className="flex  justify-center flex-col pb-9 pt-12 md:pb-0  px-18">
                <h1 className="text-[28px] md:text-[40px] font-bold">{current.title}</h1>
                <p className="text-gray-500 text-[15px] font-medium py-4">{current.desc}</p>
                <span className="flex items-center gap-8 font-medium text-sm tracking-[10px]">SHOP NOW <img src="./images/icon-arrow.svg" alt="" /></span>
            </div>
            <div className="bg-black hidden md:flex items-center justify-between mt-21 w-30 py-5 px-5 ">
                <img onClick={handleLeft} className="cursor-pointer" src="./images/icon-angle-left.svg" alt="" />
                <img onClick={handleRight} className="cursor-pointer" src="./images/icon-angle-right.svg" alt="" />
            </div>
        </div>


        {show && (
            <div className="absolute md:hidden top-0 bg-white w-full flex items-center py-9 px-6 gap-12">
                <img onClick={()=> setShow(false)} className="cursor-pointer" src="./images/icon-close.svg " alt="" />
                <div className="flex gap-6 text-black font-bold">
                    <a href="">home</a>
                    <a href="">shop</a>
                    <a href="">about</a>
                    <a href="">contact</a>
                </div>
            </div>
        )}

    </div>
)
}
