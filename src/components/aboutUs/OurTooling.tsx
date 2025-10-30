import Container from "../common/Container";
import Button from "../common/Button";
import Link from "next/link";
import Paragraph from "../common/Paragraph";
import Subheading from "../common/Subheading";

export default function OurTooling() {
  return (
    <section className="relative bg-c-bg py-16">
      <Container>
        <div className="max-w-[800px] mx-auto text-center">
          <Subheading title="Our tooling" className="text-center" />
          <Paragraph 
            text="Discover our comprehensive node monitoring solution. Track performance metrics, uptime, and health status across all our validator infrastructure in real-time."
            className="mt-4 mb-8"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://monitoring.rubynodes.io/" target="_blank" rel="noopener noreferrer">
              <Button label="View Monitoring Dashboard" className="w-full sm:w-auto" />
            </Link>
            <Link href="https://status.rubynodes.io/" target="_blank" rel="noopener noreferrer">
              <Button label="Check Node Status" variant="secondary" className="w-full sm:w-auto" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
