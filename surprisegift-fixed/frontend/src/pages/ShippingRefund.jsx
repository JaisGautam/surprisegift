import React from "react";

const ShippingRefund = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-300 min-h-screen">
      <h1 className="text-3xl font-black text-black mb-6">
        Shipping & Refund Policy
      </h1>

      <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
        Shipping Policy
      </h2>
      <ul className="list-disc pl-5 mb-4 space-y-2 text-black">
        <li>Standard delivery is available within a 30km radius.</li>
        <li>Corporate bulk orders can be delivered up to 100km.</li>
        <li>Delivery time for standard orders is 2-4 working days.</li>
        <li>Shipping charges may apply based on your location.</li>
      </ul>

      <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
        Refund & Cancellation Policy
      </h2>
      <ul className="list-disc pl-5 mb-4 space-y-2 text-black">
        <li>
          Orders can be cancelled within 2 hours of placing them for a full
          refund.
        </li>
        <li>
          If you receive a damaged or defective product, please contact us
          within 24 hours with unboxing video proof.
        </li>
        <li>
          Refunds will be processed to the original method of payment within 5-7
          business days.
        </li>
        <li>
          Perishable items (like chocolates/flowers) cannot be returned once
          delivered.
        </li>
      </ul>
    </div>
  );
};

export default ShippingRefund;
