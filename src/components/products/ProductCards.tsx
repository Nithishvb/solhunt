import Image from "next/image";

interface ProductCardsPropType {
  name: string;
  imageUrl: string;
  commentCount: number;
  votes: number;
  description: string;
  labels: string[];
}

export default function ProductCards({
  name,
  description,
  commentCount,
  votes,
  labels,
  imageUrl,
}: ProductCardsPropType) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-background rounded-lg shadow-sm w-[100%] cursor-pointer">
      <div className="flex items-center">
        <div className="flex-shrink-0 rounded-full overflow-hidden">
          <Image
            src={imageUrl}
            alt="Product Image"
            width={44}
            height={44}
            className="w-14 h-14 object-cover"
            style={{ aspectRatio: "64/64", objectFit: "cover" }}
          />
        </div>
        <div className="flex-1 pl-4">
          <h3 className="text-lg font-semibold">
            {name} -{" "}
            <span className="text-gray-400 text-sm font-medium">
              {description}
            </span>
          </h3>
          <div className="pt-1 flex items-center gap-2">
            <span className="text-xs">{commentCount}</span>
            <div className="flex items-center">
              {labels.map((lab, index: number) => (
                <p key={index} className="text-xs px-2 text-muted-foreground">{lab}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border border-1 border-gray-300 py-3 px-5 rounded-md">
        <p>{votes}</p>
      </div>
    </div>
  );
}
