import Image from "next/image";
import React from "react";

const ProductModal = () => {
  return (
    <div className="w-[100%] py-5 px-10">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={
              ""
            }
            height={80}
            width={80}
            alt="Prouct_logo"
            className="rounded-full"
          />
        </div>
        <div className="text-2xl text-gray-400 text-semibold">#1</div>
      </div>
      <div className="flex justify-between py-4">
        <div>
          <h3 className="font-semibold text-xl">Test product</h3>
          <span className="text-description">
            A simple Test product
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <button className="px-6 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Visit
          </button>
          <button className="px-8 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
            VOTE
          </button>
        </div>
      </div>
      <div className="py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        quasi earum rem consectetur accusamus non magni repellat! Distinctio,
        quibusdam consequuntur corporis totam placeat, iste ab quis ad natus
        esse eveniet.
      </div>
    </div>
  );
};

export default ProductModal;
