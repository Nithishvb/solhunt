import ProductCards from "./ProductCards";

const data = [
  {
    id: 1,
    name: "Sol hunt",
    votes: 2,
    commentsCount: 20,
    description: "A powerful SaaS platform for your business needs.",
    label: ["storage", "web 3"],
    imageUrl:
      "",
  },
  
];

const Products = () => {
  return (
    <div>
      {data.map((pro) => (
        <ProductCards
          key={pro.id}
          name={pro.name}
          description={pro.description}
          labels={pro.label}
          commentCount={pro.commentsCount}
          imageUrl={pro.imageUrl}
          votes={pro.votes}
        />
      ))}
    </div>
  );
};

export default Products;
