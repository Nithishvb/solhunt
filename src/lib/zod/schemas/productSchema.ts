import z from "../index";

export const prodcutSchema = z.object({
  name: z
    .string({
      required_error: "Product name is required",
    })
    .min(1, "Product name is required"),
  shortDescription: z
    .string({
      required_error: "Short description is required",
    })
    .min(1, "Short description is required")
    .max(25),
  longDescription: z
    .string({
      required_error: "Long description is required",
    })
    .min(1, "Long description is required")
    .max(100),
  date: z.date({
    required_error: "Listing date is required",
  }),
  category: z
    .string({
      required_error: "Category is required",
    })
    .min(1, "Category is required"),
  logo: z.any().optional(),
});
