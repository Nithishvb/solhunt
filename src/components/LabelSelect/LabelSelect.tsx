import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const LabelSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ ...props }, ref) => {
    return (
      <div>
        <Select onValueChange={props?.onChange} value={props?.value}>
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
  }
);

LabelSelect.displayName = "LabelSelect";

export { LabelSelect };
