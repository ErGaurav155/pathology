import { BreadcrumbsDefault } from "@/components/shared/breadcrumbs";
import { Footer } from "@/components/shared/Footer";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="">
      <div className="wrapper2">
        <BreadcrumbsDefault />
        <div className="max-w-3xl  mx-auto px-5 md:px-10 mt-5 md:mt-10 w-full text-dark-400">
          <h2 className="font-black text-3xl text-black mb-5">
            Privacy Policy
          </h2>
          <p className="mb-5">
            Welcome to Shrinivas Pathology Lab. The domain name weburl here is
            owned and managed by Shrinivas Pathology Lab . We provide pathology
            services, health-related diagnostics, and other healthcare-related
            services to customers, individuals, and entities who interact with
            or utilize the Platform . This Privacy Policy outlines how we
            collect, store, process, and protect the personal information shared
            by Users on the Platform.
          </p>

          <h2 className="font-black text-3xl text-black mb-5">
            Scope of the Privacy Policy
          </h2>
          <p className="mb-5">This Privacy Policy describes:</p>
          <ul className="list-disc list-inside mb-5">
            <li>
              The types of personal data collected when Users access or avail of
              services through the Platform.
            </li>
            <li>
              Measures we take to safeguard the personal information provided by
              Users.
            </li>
            <li>
              Situations in which the personal data may be disclosed to third
              parties.
            </li>
          </ul>

          <h2 className="font-black text-3xl text-black mb-5">Applicability</h2>
          <p className="mb-5">
            By using the Platform and availing of any of our services, Users
            consent to the collection, storage, and use of their personal
            information as described in this Privacy Policy. This Privacy Policy
            complies with the provisions of Section 43A of the Information
            Technology Act, 2000, the Information Technology (Reasonable
            Security Practices and Procedures and Sensitive Personal Data or
            Information) Rules, 2011, and other applicable Indian laws.
          </p>

          <h2 className="font-black text-3xl text-black mb-5">
            Types of Personal Data Collected
          </h2>
          <p className="mb-5">Personal Data includes but is not limited to:</p>
          <ul className="list-disc list-inside mb-5">
            <li>
              Name, age, gender, and contact details (email, phone number,
              address).
            </li>
            <li>Medical history, records, and reports.</li>
            <li>
              Payment-related information (collected by authorized Payment
              Gateways).
            </li>
            <li>
              Technical data, such as IP address, browser type, and operating
              system, collected during Platform usage.
            </li>
          </ul>

          <h2 className="font-black text-3xl text-black mb-5">
            Use and Protection of Personal Data
          </h2>
          <p className="mb-5">
            We collect and use personal data solely for the purpose of providing
            services and enhancing the User experience.
          </p>
          <ul className="list-disc list-inside mb-5">
            <li>
              <strong>Security Measures:</strong> Data is encrypted and stored
              securely on our systems. Access to personal data is limited to
              authorized personnel on a need-to-know basis.
            </li>
            <li>
              <strong>No-Spam Policy:</strong> We do not sell or rent Users
              information to third parties without consent.
            </li>
          </ul>
          <p className="mb-5">Personal data will only be shared:</p>
          <ul className="list-disc list-inside mb-5">
            <li>To comply with legal or regulatory obligations.</li>
            <li>
              To protect our rights, property, or the safety of Users and
              others.
            </li>
            <li>
              With User consent, for purposes directly related to services.
            </li>
          </ul>

          <h2 className="font-black text-3xl text-black mb-5">
            Data Retention and Deletion
          </h2>
          <p className="mb-5">
            Personal data and reports are retained on the Platform for up to two
            (2) years. Users may request their reports from our diagnostic
            centers during this period. After the retention period, all data is
            securely deleted.
          </p>

          <h2 className="font-black text-3xl text-black mb-5">
            Cookies and Pop-Up Advertisements
          </h2>
          <p className="mb-5">
            We use cookies to enhance the functionality of the Platform.
            However, we do not control advertisements or pop-ups generated by
            third-party websites during User activity on the internet.
          </p>

          <h2 className="font-black text-3xl text-black mb-5">
            Changes to the Privacy Policy
          </h2>
          <p className="mb-5">
            This Privacy Policy may be updated periodically to reflect changes
            in laws or internal policies. Users are encouraged to review this
            Privacy Policy regularly.
          </p>

          <h2 className="font-black text-3xl text-black mb-5">
            Contact Information
          </h2>
          <p className="mb-5">
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at:
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
