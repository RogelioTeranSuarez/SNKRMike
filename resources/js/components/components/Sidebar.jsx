import React from "react";
import { RiPriceTag3Line, RiFacebookCircleFill,RiInstagramLine,RiTwitterXFill,RiYoutubeFill } from "react-icons/ri";

const Sidebar = () => {
    return <div className="w-80 h-full overflow-y-scroll text-gray-400">Sidebar
        {/* search */}
        <div className="bg-[#362C29] rounded-2xl p-4 mb-4">
            <h4 className="mb-4 text-white text-lg">Categories</h4>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="para correr" />
                    <label htmlFor="para correr">Para correr</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="casuales" />
                    <label htmlFor="casuales">Casuales</label>
                </div>
            </div>


            <h4 className="my-4 text-white text-lg">Precio</h4>
            <form className="flex flex-col gap-8">
                <div className="flex items-center justify-between gap-4">
                    <div className="relative">
                        <RiPriceTag3Line className="absolute left-4 top-1/2 -translate-y-1/2" />
                        <input type="number"
                            className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full" />
                    </div>
                    <span>-</span>
                    <div className="relative">
                        <RiPriceTag3Line className="absolute left-4 top-1/2 -translate-y-1/2" />
                        <input type="number"
                            className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full" />
                    </div>
                </div>
                <button type="submit" className="bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all">Aplicar filtros</button>
            </form>
        </div>
        {/* social */}
        <ul className="flex items-center justify-between">
            <li>
                <a href="" className="text-2xl">
                    < RiFacebookCircleFill/>
                </a>
            </li>
            <li>
                <a href="" className="text-2xl">
                    < RiInstagramLine/>
                </a>
            </li>
            <li>
                <a href="" className="text-2xl">
                    < RiTwitterXFill/>
                </a>
            </li>
            <li>
                <a href="" className="text-2xl">
                    <RiYoutubeFill />
                </a>
            </li>
           
        </ul>


    </div>;

};

export default Sidebar;