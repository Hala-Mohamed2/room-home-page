

export default function Pictur() {
return (
    <div className="flex flex-col md:flex-row">

        <div className="w-full md:w-1/3">
            <img className="w-full" src="./images/image-about-dark.jpg" alt="" />
        </div>

        <div className="w-full md:w-1/3 py-14 px-6">
            <h3 className="uppercase font-bold tracking-[6px] text-[14px]">About our furniture</h3>
            <p className="text-gray-500 text-sm pt-4">Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>

        <div className="w-full md:w-1/3">
            <img className="w-full" src="./images/image-about-light.jpg" alt="" />
        </div>

    </div>
)
}
