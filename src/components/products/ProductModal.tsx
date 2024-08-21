import Image from "next/image";
import React, { useMemo } from "react";
import ProductLabels from "./ProductLabels";
import { useAppContext } from "@/context/context";

const ProductModal = ({ selectedContent , vote , removeVote }: any) => {

  const { state } = useAppContext();

  const isVoted = useMemo(() => {
    if(state.userAccount.length === 0){
      return false;
    }
    const response = selectedContent.votes.filter((vote: any) => vote.userId == state.userAccount[0].id);
    return response.length > 0;
  }, [selectedContent, state.userAccount]);

  return (
    <div className="w-[100%] py-5 px-10">
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={""}
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
          <h3 className="font-semibold text-xl">{selectedContent.name}</h3>
          <span className="text-description">
            {selectedContent.shortDescription}
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <button className="px-6 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Visit
          </button>
          <button onClick={() => !isVoted ? vote(selectedContent) : removeVote(selectedContent.votes)} className={`px-8 py-2 bg-black text-white text-sm rounded-md font-semibold ${isVoted && 'bg-white border border-black !text-black'}`}>
            VOTE
          </button>
        </div>
      </div>
      <div className="py-4">{selectedContent.longDescription}</div>
      <div className="flex items-center justify-between">
        <ProductLabels />
        <div className="flex items-center gap-1 cursor-pointer">
          <IconShare />
          <span className="text-sm">Share</span>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

function IconShare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 21 21"
      fill="currentColor"
      height="25px"
      width="25px"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.5 4.5l-1.978-2-2.022 2M10.5 2.5v9M7.5 6.5h-1a2 2 0 00-2 2v7a2 2 0 002 2h8a2 2 0 002-2v-7a2 2 0 00-2-2h-1" />
      </g>
    </svg>
  );
}
