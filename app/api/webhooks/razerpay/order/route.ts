import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.key_id!,
  key_secret: process.env.key_secret,
});

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { amount, currency, plan, credits, buyerId } =
    (await request.json()) as {
      amount: string;
      currency: string;
      plan: string;
      credits: number;
      buyerId: string;
    };

  var options = {
    amount: amount,
    currency: currency,
    receipt: "rcp1",
    notes: {
      plan: plan,
      credits: credits,
      buyerId: buyerId,
    },
  };
  const order = await razorpay.orders.create(options);
  console.log(order);
  return NextResponse.json({ orderId: order.id }, { status: 200 });
}
