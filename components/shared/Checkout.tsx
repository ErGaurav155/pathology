"use client";

import { useToast } from "@/components/ui/use-toast";
import {
  checkoutCredits,
  createTransaction,
} from "@/lib/actions/transaction.action";

import { Button } from "../ui/button";
import Script from "next/script";

const Checkout = ({
  plan,
  amount,
  credits,
  buyerId,
}: {
  plan: string;
  amount: number;
  credits: number;
  buyerId: string;
}) => {
  const { toast } = useToast();

  const onCheckout = async () => {
    const transaction = {
      plan,
      amount,
      credits,
      buyerId,
    };

    const orderCreate = await checkoutCredits(transaction);

    if (!orderCreate.id) {
      throw new Error("Purchase Order is not created");
    }
    // setLoading(false);

    const paymentOptions = {
      key: process.env.key_id!,
      amount: amount * 100,
      currency: "INR",
      name: "GK Services", // Business name
      description: "Payment",
      order_id: orderCreate.id,
      notes: {
        plan: plan,
        credits: credits,
        buyerId: buyerId,
        amount: Number(amount),
      },
      handler: async function (response: any) {
        const data = {
          orderCreationId: orderCreate.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await fetch("/api/webhooks/razerpay/verify", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        const res = await result.json();
        if (res.isOk) {
          alert(res.message);
          toast({
            title: "Order placed!",
            description: "You will receive an email confirmation",
            duration: 5000,
            className: "success-toast",
          });
          const transaction1 = {
            customerId: orderCreate.id,
            amount: amount / 100,
            plan: plan || "",
            credits: Number(credits) || 0,
            buyerId: buyerId || "",
            createdAt: new Date(),
          };

          await createTransaction(transaction1);
        } else {
          alert(res.message);
          toast({
            title: "Order canceled!",
            description:
              "Continue to shop around and checkout when you're ready",
            duration: 5000,
            className: "error-toast",
          });
        }
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new (window as any).Razorpay(paymentOptions);

    paymentObject.on("payment.failed", function (response: any) {
      // Handle payment failure
      alert(response.error.description);
      // Other actions after payment failure
    });

    // Open Razorpay payment modal
    paymentObject.open();
  };

  // /checkout/?amount=${plan.price}

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <form action={onCheckout}>
        <section>
          <Button
            type="submit"
            role="link"
            className="w-full rounded-md bg-purple-gradient bg-cover"
          >
            Buy Credit
          </Button>
        </section>
      </form>
    </>
  );
};

export default Checkout;
