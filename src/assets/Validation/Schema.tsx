import { z } from "zod";
export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" })
    .trim(),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(12, { message: "Password must be not more than 12 characters" }),
  rememberMe: z.boolean().optional(),
});
export const ticketsSchema = z.object({
  fgCode: z.string().min(1, "FG Code is required"),
  materialCodeDescription: z
    .string()
    .min(1, "Material Code Description is required"),
  // uom: z.string().min(1, "UOM is required"),
  qty: z.string().min(1, "Qty is required"),
  storageLocation: z
    .array(
      z.union([z.string(), z.object({ title: z.string(), year: z.number() })])
    )
    .nonempty("At least one storage location is required"),
  depotCode: z.string().min(1, "Depot code is required"),
  batch: z
    .array(
      z.union([z.string(), z.object({ title: z.string(), year: z.number() })])
    )
    .nonempty("At least one Batch is required"),
  // profitCentre: z.string().min(1, "Profit centre is required"),
  // brand: z.string().min(1, "Brand is required"),
  subCat: z.string().min(1, "Sub Cat is required"),
  remarks: z.string().min(1, "Remarks is required"),
  unitPrice: z.string().min(1, "Unit Price is required"),
  totalPrice: z.string().min(1, "Total Price is required"),
  idNumber: z.string().min(1, "ID Number is required"),
  fc: z.string().min(1, "FC is required"),
});
