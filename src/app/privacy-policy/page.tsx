import Container from "@/components/common/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ruby Nodes",
  description:
    "Privacy Policy for Ruby Nodes - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container className="bg-c-bg min-h-screen flex flex-col items-start w-full py-20">
      <h1 className="~text-2xl-clamped/2xl  font-bold text-c-text max-w-[700px] text-center leading-[1.2]">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-lg">Effective Date: 2nd of January 2025</p>
        
        <p>
          Ruby Nodes ("Ruby Nodes", "we", "us", or "our") is a blockchain infrastructure provider based in the Czech Republic. 
          We operate validator nodes and provide public and private RPC infrastructure in support of various blockchain ecosystems. 
          We are committed to protecting your privacy and maintaining transparency in how we handle information.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">1. Scope</h2>
        <p>
          This Privacy Policy applies to all services provided by Ruby Nodes, including our operation of validator infrastructure, 
          RPC endpoints (public and private), and communication with partners and clients. This policy does not cover third-party 
          services linked from or integrated with our infrastructure.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">2. No Custody of Funds</h2>
        <p>
          Ruby Nodes does not hold or control any user funds. All operations are infrastructure-level and non-custodial.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">3. Data We Collect</h2>
        <p>
          <strong>a. Personal Data (Off-Chain)</strong>
        </p>
        <p>We do not:</p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Collect or log user IP addresses accessing our services.</li>
          <li>Use any form of analytics or tracking on our websites or infrastructure.</li>
          <li>Collect identifiable user information unless you provide it voluntarily (e.g., by contacting us).</li>
        </ul>
        
        <p>We do:</p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Securely store contact details shared with us by clients or partners solely for service-related communication.</li>
        </ul>
        
        <p>
          <strong>b. Technical Metrics (On-Chain or Service-Level)</strong>
        </p>
        <p>
          We collect aggregated operational metrics through internal monitoring tools such as Grafana. 
          These metrics are strictly for performance and availability monitoring and do not include:
        </p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Individual user addresses</li>
          <li>Specific requests or identifiable user activity</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">4. Legal Basis for Processing</h2>
        <p>
          As a company based in the Czech Republic, Ruby Nodes complies with the General Data Protection Regulation (GDPR). 
          Where applicable:
        </p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>We do not track or profile any users.</li>
          <li>Data shared by clients or partners is processed solely for legitimate business purposes (e.g., technical support, service delivery).</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">5. Data Sharing</h2>
        <p>
          Ruby Nodes does not sell or share any information for advertising or marketing purposes.
          We share limited information only with our direct partners, and only for the purposes of delivering and maintaining 
          the services they have engaged us for.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">6. Data Security</h2>
        <p>
          We take security seriously and implement strong technical and organizational measures to protect our infrastructure 
          and communications, including:
        </p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Use of password managers and hardware (cold) wallets.</li>
          <li>All servers are protected by firewalls and accessible only through SSH keys.</li>
          <li>Only authorized personnel have access to infrastructure components.</li>
          <li>Regular reviews and updates of security policies and access controls.</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4">7. Data Retention</h2>
        <p>
          Ruby Nodes does not retain any personal data.
          Any operational data (e.g., server uptime, system load) is used temporarily for monitoring and not stored long-term 
          or associated with any individual.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">8. User Rights</h2>
        <p>
          In accordance with GDPR, if we were to collect personal data in the future, individuals would have the right to:
        </p>
        <ul className="list-disc pl-6 mt-2 mb-4">
          <li>Access the data held about them</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion or restriction of processing</li>
          <li>Object to processing</li>
          <li>Request data portability</li>
        </ul>
        <p>At present, however, we do not process personal data of end users.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">9. Tracking and Cookies</h2>
        <p>We do not use cookies or any tracking technologies on our websites or services.</p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">10. International Data Transfers</h2>
        <p>
          We currently do not transfer any personal data internationally. If this changes in the future, 
          such transfers will comply with GDPR requirements, including appropriate safeguards.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in legal requirements or our services. 
          Any updates will be posted on our official website, with a revised effective date. 
          You are encouraged to review this page periodically.
        </p>
        
        <h2 className="text-xl font-bold mt-8 mb-4">12. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or how we handle data, please contact us at:
        </p>
        <p>📧 <a href="mailto:security@rubynodes.io" className="text-c-ruby hover:underline">security@rubynodes.io</a></p>
      </div>
    </Container>
  );
}
