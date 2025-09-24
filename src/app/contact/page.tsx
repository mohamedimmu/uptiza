import ConnectWithUs from "@/components/ConnectWithUs";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { Highlighter } from "@/components/ui/highlighter";
import { Card } from "@/components/ui/card";
import WhyChooseUs from "@/components/WhyChooseUs";
import GetCompanyProfileMini from "@/components/GetCompanyProfileMini";
import ContactCTA from "@/components/ContactCTA";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="my-16 md:my-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-archivo">
            <Highlighter
              strokeWidth={2}
              isView={true}
              action="box"
              padding={8}
              color="#f48927"
            >
              Contact us
            </Highlighter>
          </h2>
          <p className="text-foreground text-lg max-w-3xl mx-auto">
            Get in touch, We&apos;d love to hear from you
          </p>
        </div>

        <Card className="grid grid-cols-1 md:grid-cols-6 gap-6 bg-card rounded-3xl shadow-lg px-4">
          <ContactInfo className="col-span-full md:col-span-2 rounded-lg shadow-md" />
          <ConnectWithUs className="col-span-full md:col-span-2 rounded-lg shadow-md" />
          <GetCompanyProfileMini className="col-span-full md:col-span-2 rounded-lg shadow-md" />
          <ContactForm className="col-span-full rounded-lg shadow-md" />
          <Card className="col-span-full rounded-lg shadow-md">
            <WhyChooseUs
              marginBottom={false}
              innerCardRadius="rounded-xxs"
              defaultHeading={false}
            />
          </Card>
          <ContactCTA className="col-span-full rounded-lg shadow-md px-4" />
        </Card>
      </div>
    </section>
  );
}
