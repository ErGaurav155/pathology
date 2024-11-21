import { BreadcrumbsDefault } from "@/components/shared/breadcrumbs";
import { Footer } from "@/components/shared/Footer";
import React from "react";

const terms = () => {
  return (
    <div>
      <div className="wrapper2">
        <BreadcrumbsDefault />
        <div className="max-w-3xl mx-auto px-5 md:px-10 mt-5 md:mt-10 w-full text-dark-400">
          <h2 className="font-black text-3xl text-black mb-5">
            Privacy Policy
          </h2>
          <p className="mb-5">
            Welcome to Shriniwas Pathology Lab. The domain name weburl here is
            owned and managed by Shriniwas Pathology Lab. This Privacy Policy
            outlines the terms governing the use of the Platform and services
            provided to the users
          </p>

          <h2 className="font-black text-3xl text-black mb-5">
            Users Obligations While Using the Platform
          </h2>
          <ul className="list-disc list-inside mb-5">
            <li>
              The User shall not transfer or assign a booked service to another
              individual.
            </li>
            <li>
              Users may not use the Services for any unlawful purposes or
              activities that violate applicable laws or regulations.
            </li>
            <li>
              Users cannot modify existing packages but may add additional tests
              as add-ons at applicable rates.
            </li>
            <li>
              Users must not infringe the intellectual property rights of
              Shriniwas Pathology Lab or its partners. Any derogatory
              statements, defamation, or harassment directed toward the lab or
              its associates will not be tolerated.
            </li>
            <li>
              Users must not attempt to access unauthorized data, transmit
              harmful content (e.g., viruses, trojans), or disrupt the
              functioning of the Platform.
            </li>
            <li>
              Users must not create false accounts or engage in fraudulent
              activities to book or avail of services.
            </li>
          </ul>

          <h2 className="font-black text-3xl text-black mb-5">
            Booking and Payment for Services
          </h2>
          <p className="mb-5">
            Users can book services via the Platform either by scheduling a home
            collection or by visiting the nearest lab. The booking process
            involves
          </p>
          <ul className="list-disc list-inside mb-5">
            <li>
              Entering a valid mobile number for OTP verification if the User
              has previously registered or booked services.
            </li>
            <li>
              Generating a receipt after the service is booked, which will allow
              the User to download test reports from the Platform.
            </li>
          </ul>
          <p className="mb-5">
            Test reports will be stored on the Platform for a period of two (2)
            years, after which they will be deleted. Users can also collect
            their reports directly from any Shriniwas Pathology Lab location.
          </p>

          <h2 className="font-black text-3xl text-black mb-5"> Payment</h2>
          <ul className="list-disc list-inside mb-5">
            <li>
              All charges are in INR and inclusive of taxes. Full payment is
              required to avail of the services, either in cash or via online
              payment.
            </li>
            <li>
              For online payments, Users will be redirected to a third-party
              payment gateway. An additional fee applies to home collections.
            </li>
          </ul>

          <h2 className="font-black text-3xl text-black mb-5"> Disclaimer</h2>
          <ul className="list-disc list-inside mb-5">
            <li>
              Shriniwas Pathology Lab reserves the right to amend terms, modify
              services, or discontinue the Platform without prior notice.
            </li>
            <li>
              In cases of unauthorized access attempts or Clause 5 violations,
              Shriniwas Pathology Lab may take legal action against the
              offending User.
            </li>
            <li>
              The Platform and its services are provided on an basis without any
              warranties, including uninterrupted, secure, or error free
              operation.
            </li>
            <li>
              The lab shall not be held liable for damages arising from loss,
              misuse, or unavailability of User content.
            </li>
          </ul>

          <h2 className="font-black text-3xl text-black mb-5">
            Limitation of Liability and Indemnity
          </h2>
          <ul className="list-disc list-inside mb-5">
            <li>
              Users engaging in prohibited activities shall indemnify Shriniwas
              Pathology Lab from all claims, expenses, and damages resulting
              from such actions.
            </li>
            <li>
              Shriniwas Pathology Lab will not be liable for any direct,
              indirect, or consequential damages arising from the use or
              inability to use the Platform.
            </li>
          </ul>

          <h2 className="font-black text-3xl text-black mb-5">
            Privacy and Confidentiality
          </h2>
          <p className="mb-5">
            The use of the Platform is governed by Shriniwas Pathology Labs
            Privacy Policy. We are committed to maintaining confidentiality and
            using User information solely for delivering booked services.
            However, Shriniwas Pathology Lab will not be responsible for the
            unauthorized disclosure of data not required for the requested
            services.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default terms;
