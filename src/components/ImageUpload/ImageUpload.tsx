"use client";

import { useState } from "react";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const ImageUpload = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, ref): JSX.Element => {
    const [image, setImage] = useState<string>("");

    const handleImageUpload = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl: string = URL.createObjectURL(file);
        // props?.onChange(file);
        setImage(imageUrl);
      }
    };

    const handleRemoveImage = () => {
      setImage("");
    };

    return (
      <div className={cn(`flex items-center gap-4`, props.className)}>
        <div className="relative w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-4xl font-bold">
          {image ? (
            <Image
              src={image}
              alt="User Avatar"
              width={128}
              height={128}
              className="rounded-full object-cover"
            />
          ) : (
            "JD"
          )}
        </div>
        <div className="flex gap-2">
          {image ? (
            <label
              onClick={handleRemoveImage}
              htmlFor="image-upload"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-red-500 rounded-md hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 cursor-pointer"
            >
              <TrashIcon className="mr-2 h-4 w-4" />
              Remove
            </label>
          ) : (
            <div>
              <label
                htmlFor="image-upload"
                className="inline-flex cursor-pointer items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
              >
                <UploadIcon className="mr-2 h-4 w-4" />
                Upload
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(eve) => {
                  handleImageUpload(eve);
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

ImageUpload.displayName = "ImageUpload";

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}

export default React.memo(ImageUpload);
