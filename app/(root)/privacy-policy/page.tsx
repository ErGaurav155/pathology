import { Footer } from "@/components/shared/Footer";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="wrapper">
      <div className="max-w-3xl mx-auto px-5 md:px-10  mt-5 md:mt-10 w-full text-dark-400">
        <h2 className="font-black text-3xl text-black mb-5">Privacy Policy</h2>
        <p className="mb-5">
          Cricon AI LLC (&quot;Company,&quot; &quot;we,&quot; or &quot;us&quot;)
          is committed to protecting the privacy of our users (&quot;you&quot;
          or &quot;your&quot;). This Privacy Policy explains how we collect,
          use, and share information about you through our website,
          https://cricon.com (the &quot;Website&quot;), and the services we
          offer (the &quot;Services&quot;). By using the Website or Services,
          you consent to the collection, use, and sharing of your information as
          described in this Privacy Policy.
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
        <h2 className="font-black text-3xl text-black mb-5">Unsubscribing</h2>
        <p className="mb-5">
          To unsubscribe, simply go to your billing portal inside the app
          (app.cricon.com) and it will be handled in the payment processor used
          ( Stripe).
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

export default PrivacyPolicy;
