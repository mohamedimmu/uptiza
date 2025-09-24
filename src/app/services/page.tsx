import FleetDetail from "@/components/FleetDetail";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <div className="mt-16 md:mt-24">
      <Services heading="lg" />
      <FleetDetail />
    </div>
  );
}
