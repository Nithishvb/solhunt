import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LabelSelect = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[100%]">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="defi">Defi</SelectItem>
          <SelectItem value="nft">Nft</SelectItem>
          <SelectItem value="gaming">Gaming</SelectItem>
          <SelectItem value="payments">Payments</SelectItem>
          <SelectItem value="consumerdapps">Consumer Dapps</SelectItem>
          <SelectItem value="developertools">Developer tools</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LabelSelect;
