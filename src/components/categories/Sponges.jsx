import React from "react";
import { spongesCategory } from "../../data/data"; // Veri dosyanızın yolu
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../Footer";

function Sponges() {
  return (
    <div>
      <>
        <div className="flex items-center h-auto justify-center pb-[700px]">
          <div className="bg-[#293d8d] h-[350px] w-full">
            <Navbar />
          </div>
          <div className=" w-[95%] bg-white absolute top-[33%] mx-auto rounded-[40px] ">
            <div className="flex justify-between items-start gap-5  p-10">
              <div className=" border border-[#293d8d] rounded-xl flex-grow p-5">
                <div className="">
                  <h3 className="text-[#293d8d] text-2xl text-center">
                    KATEGORİLER{" "}
                  </h3>
                  <div className="font-medium text-[#293d8d] mt-10 space-y-10">
                    <div className="flex items-center gap-x-2 ">
                      {" "}
                      <Link to="/category/ropes">
                        <h3>İPLER</h3>
                      </Link>
                      <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center gap-x-2">
                      {" "}
                      <Link to="/category/pvc-coated-rope">
                        {" "}
                        <h3>PVC KAPLI İPLER</h3>
                      </Link>
                      <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center gap-x-2">
                      <Link to="/category/nylon-ropes">
                        <h3>NAYLON İPLER</h3>
                      </Link>
                      <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center gap-x-2">
                      {" "}
                      <Link to="/category/pvc-coated-steel-ropes">
                        {" "}
                        <h3>PVC KAPLI ÇELİK İPLER</h3>
                      </Link>
                      <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center gap-x-2">
                      {" "}
                      <Link to="/category/cloths">
                        {" "}
                        <h3>BEZLER</h3>
                      </Link>
                      <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center gap-x-2">
                      {" "}
                      <Link to="/category/mops">
                        <h3>MOPLAR VE APARATLARI</h3>
                      </Link>
                      <AiOutlineArrowRight />
                    </div>
                    <div className="flex items-center gap-x-2">
                      {" "}
                      <Link to="/category/sponges">
                        {" "}
                        <h3>SÜNGERLER</h3>
                      </Link>
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex flex-wrap basis-3/4 text-center justify-between  gap-4">
                {spongesCategory.map((r, id) => (
                  <Link to={`/product/${r.name}`} key={r.name}>
                    <div
                      className="border h-[300px] border-[#293d8d] rounded-xl w-72 flex flex-col items-center justify-center p-5"
                      key={id}
                    >
                      <img src={r.img} alt={r.name} className="h-48" />
                      <h2 className="font-medium">{r.name}</h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
      <div className="mt-[1540px]">
        <Footer />
      </div>
    </div>
  );
}

export default Sponges;
