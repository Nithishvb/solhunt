import ProductCards from "./ProductCards";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductModal from "./ProductModal";

const data = [
  {
    id: 1,
    name: "Sol hunt",
    votes: 2,
    commentsCount: 20,
    description: "A powerful SaaS platform for your business needs.",
    label: ["storage", "web 3"],
    imageUrl: "",
  },
  {
    id: 2,
    name: "Sol hunt",
    votes: 2,
    commentsCount: 20,
    description: "A powerful SaaS platform for your business needs.",
    label: ["storage", "web 3"],
    imageUrl: "",
  },
];

const Products = () => {
  return (
    <div>
      {data.map((pro) => (
        <Dialog key={pro.id}>
          <DialogTrigger asChild>
            <ProductCards
              key={pro.id}
              name={pro.name}
              description={pro.description}
              labels={pro.label}
              commentCount={pro.commentsCount}
              imageUrl={pro.imageUrl}
              votes={pro.votes}
            />
          </DialogTrigger>
          <DialogContent className="max-w-[60%]">
            <ProductModal />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default Products;
