import ConnectWithUs from "@/components/ConnectWithUs";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Highlighter } from "@/components/ui/highlighter";
import { Card } from "@/components/ui/card";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetCompanyProfileMini from "@/components/GetCompanyProfileMini";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="my-16 md:my-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-archivo mb-4">
            <Highlighter
              strokeWidth={2}
              isView={true}
              action="underline"
              color="#f48927"
            >
              Contact us
            </Highlighter>
          </h2>
          <p className="text-foreground text-lg max-w-3xl mx-auto">
            Get in touch, We&apos;d love to hear from you
          </p>
        </div>

        <Card className="grid grid-cols-6 gap-6 bg-card rounded-3xl shadow-lg px-4">
          <ContactInfo className="col-span-2 rounded-lg shadow-md" />
          <ConnectWithUs className="col-span-2 rounded-lg shadow-md" />
          <GetCompanyProfileMini className="col-span-2 rounded-lg shadow-md" />
          <ContactForm className="col-span-6 rounded-lg shadow-md" />
          <Card className="col-span-6 rounded-lg shadow-md px-4">
            <WhyChooseUs
              marginBottom={false}
              innerCardRadius="rounded-xxs"
              defaultHeading={false}
            />
          </Card>
        </Card>
      </div>
    </section>
  );
}
