import { z } from "zod";

export const quickQuoteSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  phone: z.string().regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, {
    message: "Please enter a valid phone number.",
  }),
  jobDate: z.date(),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(500, {
      message: "Message must not be longer than 500 characters.",
    }),
  requestInspection: z.boolean().default(false).optional(),
  equipmentName: z.string().optional(),
  submissionType: z.enum(["email", "whatsapp"]),
});

export type QuickQuoteFormValues = z.infer<typeof quickQuoteSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  email: z.email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, {
    message: "Please enter a valid phone number.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message cannot be longer than 500 characters." }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
