"use client";

import ProductCards from "./ProductCards";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProductModal from "./ProductModal";
import { useFetch } from "@/lib/hooks/useFetch";
import { useState } from "react";
import axios from "axios";
import { useAppContext } from "@/context/context";

const Products = () => {
  const { data: Products } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products`
  );
  const [selectedContent, setSelectedContent] = useState<any>();
  const { state } = useAppContext();

  const vote = async (data: any) => {
    try {
      const response = await axios.post("http://localhost:3000/api/vote/new", {
        userId: data.userId,
        productId: data.id,
      });
      setSelectedContent(response.data.data);
    } catch (err: any) {
      console.log("Error casting vote", err.message);
    }
  };

  const removeVote = async (voteData: any) => {
    try {
      const userVotedId = voteData.filter((vote: any) => vote.userId === state.userAccount[0].id)
      const response = await axios.post("http://localhost:3000/api/vote/remove", {
        voteId: userVotedId[0].id,
        productId: selectedContent.id
      });
      setSelectedContent(response.data.data);
    } catch (err: any) {
      console.log("Error casting vote", err.message);
    }
  }

  return (
    <div>
      {Products &&
        Products.data.map((pro: any) => (
          <Dialog key={pro.id}>
            <DialogTrigger asChild>
              <div onClick={() => setSelectedContent(pro)}>
                <ProductCards
                  key={pro.id}
                  name={pro.name}
                  shortDescription={pro.shortDescription}
                  labels={pro.category}
                  imageUrl={pro.imageUrl}
                  votes={pro.vote}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[60%]">
              <ProductModal selectedContent={selectedContent} vote={vote} removeVote={removeVote} />
            </DialogContent>
          </Dialog>
        ))}
    </div>
  );
};

export default Products;
