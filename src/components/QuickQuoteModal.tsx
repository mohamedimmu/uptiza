import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { quickQuoteSchema, QuickQuoteFormValues } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { CalendarIcon, Loader2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EMAIL_ID, PHONE_NUMBER } from "@/lib/constants";

const services = [
  "Equipment and Machinery Rental",
  "Equipment and Machinery Trading",
  "Project Consultation",
  "Onsite Inspection",
];

type QuickQuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  equipmentName?: string;
};

export default function QuickQuoteModal({
  isOpen,
  onClose,
  equipmentName,
}: QuickQuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuickQuoteFormValues>({
    resolver: zodResolver(quickQuoteSchema),
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      message: "",
      requestInspection: false,
      equipmentName: equipmentName,
      interestedService: undefined,
      jobDate: new Date(),
      submissionType: "email",
    },
  });

  async function onSubmit(data: QuickQuoteFormValues) {
    setIsSubmitting(true);

    const body = `
        Quote Request Details:
        Name: ${data.name}
        Company: ${data.company || "N/A"}
        Phone: ${data.phone}
        Job Date: ${format(data.jobDate, "PPP")}
        Interested Service: ${data.interestedService || "N/A"}
        Equipment: ${data.equipmentName || "General Inquiry"}
        On-site Inspection: ${data.requestInspection ? "Yes" : "No"}
        Message: ${data.message}
    `;

    if (data.submissionType === "email") {
      const emailTo = EMAIL_ID; // Replace with the actual email
      const emailSubject = `Quote Request: ${
        data.equipmentName || "General Inquiry"
      } from ${data.name}`;
      window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(body)}`;
    } else if (data.submissionType === "whatsapp") {
      const whatsappNumber = PHONE_NUMBER.replace(/\D/g, "");
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        body
      )}`;
      window.open(whatsappUrl, "_blank");
    }

    // Simulate some processing time
    // await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSubmitting(false);
    onClose();
    form.reset();
    toast.success("Quote Request Prepared!", {
      description:
        "Please proceed with sending the message in your email or WhatsApp.",
    });
  }

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[640px] !max-h-[90vh] flex-1 overflow-y-auto">
          <DialogTitle className="text-xl sm:text-2xl font-archivo font-semibold text-center sm:text-left">
            Request a Quick Quote
          </DialogTitle>
          <DialogHeader>
            <DialogDescription>
              {equipmentName
                ? `Interested in the ${equipmentName}? Fill out the form below.`
                : "Fill out the form below and we'll get back to you with a quote."}
            </DialogDescription>
          </DialogHeader>
          {/* <ScrollArea className="!max-h-[75vh] flex-1"> */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number*</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                          <SelectTrigger className="w-full">
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
                  name="jobDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Job Date*</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about your job requirements..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requestInspection"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Request an On-site Inspection</FormLabel>
                        <FormDescription>
                          Check this box if you&apos;d like one of our experts
                          to visit your job site.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="submissionType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>How would you like to send this?*</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0"
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
                            <FormLabel className="font-normal">
                              WhatsApp
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2">
                  <Button type="button" variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Submit Request
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          {/* </ScrollArea> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
