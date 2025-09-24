"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const detailedContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  phone: z.string().regex(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, {
    message: "Please enter a valid phone number.",
  }),
  interestedService: z.string(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message cannot be longer than 1000 characters." }),
  submissionType: z.enum(["email", "whatsapp"]),
});

type DetailedContactFormValues = z.infer<typeof detailedContactFormSchema>;

const services = [
  "Equipment and Machinery Rental",
  "Equipment and Machinery Trading",
  "Project Consultation",
  "Onsite Inspection",
];

export default function ContactForm({ className }: { className?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DetailedContactFormValues>({
    resolver: zodResolver(detailedContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      interestedService: "",
      message: "",
      submissionType: "email",
    },
  });

  function onSubmit(data: DetailedContactFormValues) {
    setIsSubmitting(true);

    const body = `
      New Contact Form Submission:
      Name: ${data.name}
      Email: ${data.email}
      Company: ${data.company || "N/A"}
      Phone: ${data.phone}
      Interested Service: ${data.interestedService}
      Message: ${data.message}
    `;

    if (data.submissionType === "email") {
      const emailTo = "info@uptiza.com"; // Replace with your email
      const emailSubject = `New Inquiry from ${data.name}`;
      window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(body)}`;
    } else if (data.submissionType === "whatsapp") {
      const whatsappNumber = "971555555555"; // Replace with your WhatsApp number
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        body
      )}`;
      window.open(whatsappUrl, "_blank");
    }

    setIsSubmitting(false);
    form.reset();
    toast.success("Message Sent!", {
      description:
        "We've received your message and will get back to you shortly.",
    });
  }

  return (
    <Card
      className={`bg-card rounded-lg shadow-lg border-0 h-full px-4 text-left ${className}`}
    >
      <CardHeader className="p-0">
        <CardTitle className="flex items-center gap-2 font-archivo text-2xl">
          <Send className="w-5 h-5" />
          Send us a Message
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-secondary/50 border-0 rounded-md h-12 px-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        className="bg-secondary/50 border-0 rounded-md h-12 px-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-secondary/50 border-0 rounded-md h-12 px-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        {...field}
                        className="bg-secondary/50 border-0 rounded-md h-12 px-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="interestedService"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What service are you interested in?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-secondary/50 border-0 rounded-md h-12 px-4 w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[120px] bg-secondary/50 border-0 rounded-md p-4"
                      placeholder="Tell us about your project requirements, timeline, and equipment needs..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="submissionType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Submit via *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex items-center space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="email" />
                        </FormControl>
                        <FormLabel className="font-normal">Email</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="whatsapp" />
                        </FormControl>
                        <FormLabel className="font-normal">WhatsApp</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              variant="default"
              className="bg-primary text-background hover:bg-primary/90 font-semibold w-full rounded-md mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
