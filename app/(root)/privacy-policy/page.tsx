import { Footer } from "@/components/shared/Footer";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="wrapper">
      <div className="max-w-3xl mx-auto px-5 md:px-10  mt-5 md:mt-10 w-full text-dark-400">
        <h2 className="font-black text-3xl text-black mb-5">Privacy Policy</h2>
        <p className="mb-5">
          Cricon AI (&quot;Company,&quot; &quot;we,&quot; or &quot;us&quot;) is
          committed to protecting the privacy of our users (&quot;you&quot; or
          &quot;your&quot;). This Privacy Policy explains how we collect, use,
          and share information about you through our website,
          https://criconai.com (the &quot;Website&quot;), and the services we
          offer (the &quot;Services&quot;). By using the Website or Services,
          you consent to the collection, use, and sharing of your information as
          described in this Privacy Policy.
        </p>
        <h2 className="font-black text-3xl text-black mb-5">
          Data Retention and Deletion
        </h2>
        <p className="mb-5">
          We retain your information for as long as your account is active or as
          needed to provide you with our Services. If you wish to delete your
          entire data, you may send a request to support@criconai.com, and we
          will process your request in accordance with applicable laws.
        </p>
        <h2 className="font-black text-3xl text-black mb-5">
          Use of Your Information
        </h2>
        <p className="mb-5">
          We use the information we collect to provide, maintain, and improve
          our Services, to communicate with you, and to better understand the
          demographics of our users. We may also use the information to send you
          promotional and marketing materials.
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
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
