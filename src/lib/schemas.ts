import { z } from "zod";

export const quickQuoteSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().optional(),
  phone: z.string().regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, {
    message: "Please enter a valid phone number.",
  }),
  jobDate: z.date(),
  interestedService: z.string().optional(),
  message: z
    .string()
    .min(10, { 
      message: "Message must be at least 10 characters."
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
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, {
    message: "Please enter a valid phone number.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message cannot be longer than 500 characters." }),
});

export const detailedContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  phone: z.string().regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, {
    message: "Please enter a valid phone number.",
  }),
  projectType: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message cannot be longer than 1000 characters." }),
  newsletter: z.boolean().default(false),
  submissionType: z.enum(["email", "whatsapp"]),
});

export type DetailedContactFormValues = z.infer<typeof detailedContactFormSchema>;
