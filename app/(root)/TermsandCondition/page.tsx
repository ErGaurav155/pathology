import { Footer } from "@/components/shared/Footer";
import React from "react";

const terms = () => {
  return (
    <div className="wrapper">
      <div className="max-w-3xl mx-auto px-5 md:px-10  mt-5 md:mt-10 w-full text-dark-400">
        <h2 className="font-black text-3xl text-black mb-5">
          Terms and Conditions
        </h2>
        <p className="mb-5">
          These Terms of Service (the “Terms”) are a legal agreement between you
          and Cricon LLC, and they govern your use of the Criocon.com website
          and services (collectively, the “Service”). By accessing or using the
          Service, you agree to be bound by these Terms and by the Cricon.com
          Privacy Policy, which is incorporated into these Terms by reference.
          If you do not agree to these Terms, you may not use the Service.
        </p>
        <h2 className="font-black text-3xl text-black mb-5">Accounts</h2>
        <p className="mb-5">
          To access certain features of the Service, you must create an account.
          You agree to provide accurate and complete information when creating
          your account, and you agree to keep your account information
          up-to-date. You are responsible for all activities that occur under
          your account, including any unauthorized activities. If you suspect
          that someone has gained unauthorized access to your account, you
          should notify Morise.ai immediately.
        </p>
        <h2 className="font-black text-3xl text-black mb-5">Disclaimer</h2>
        <p className="mb-5">
          The Service is provided on an “as is” and “as available” basis. Cricon
          Ai does not warrant that the Service will be error-free,
          uninterrupted, or secure, and you use the Service at your own risk.
          Cricon.com is not responsible for any legal mis happenings generated
          by AI.
        </p>
        <h2 className="font-black text-3xl text-black mb-5">Contact Us</h2>
        <p className="mb-5">
          If you have any questions about this Privacy Policy or our practices
          related to your information, please contact us at support@cricon.com
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default terms;
