"use client";

import ProductCards from "./ProductCards";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ProductModal from "./ProductModal";
import { useFetch } from "@/lib/hooks/useFetch";
import { useState } from "react";
import axios from "axios";

const Products = () => {
  const { data: Products } = useFetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products`
  );
  const [selectedContent, setSelectedContent] = useState<any>();

  const vote = async (data: any) => {
    console.log(data);
    try{
      await axios.post("http://localhost:3000/api/vote/new", {
        userId: data.userId,
        productId: data.id
      });
    }catch(err: any){
      console.log("Error casting vote", err.message)
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
                  votes={pro.votes}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-[60%]">
              <ProductModal selectedContent={selectedContent} vote={vote} />
            </DialogContent>
          </Dialog>
        ))}
    </div>
  );
};

export default Products;
