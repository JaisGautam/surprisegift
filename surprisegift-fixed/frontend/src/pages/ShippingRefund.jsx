// import React from "react";

// const ShippingRefund = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12 text-gray-300 min-h-screen">
//       <h1 className="text-3xl font-black text-black mb-6">
//         Shipping & Refund Policy
//       </h1>

//       <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
//         Shipping Policy
//       </h2>
//       <ul className="list-disc pl-5 mb-4 space-y-2 text-black">
//         <li>Standard delivery is available within a 30km radius.</li>
//         <li>Corporate bulk orders can be delivered up to 100km.</li>
//         <li>Delivery time for standard orders is 2-4 working days.</li>
//         <li>Shipping charges may apply based on your location.</li>
//       </ul>

//       <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
//         Refund & Cancellation Policy
//       </h2>
//       <ul className="list-disc pl-5 mb-4 space-y-2 text-black">
//         <li>
//           Orders can be cancelled within 2 hours of placing them for a full
//           refund.
//         </li>
//         <li>
//           If you receive a damaged or defective product, please contact us
//           within 24 hours with unboxing video proof.
//         </li>
//         <li>
//           Refunds will be processed to the original method of payment within 5-7
//           business days.
//         </li>
//         <li>
//           Perishable items (like chocolates/flowers) cannot be returned once
//           delivered.
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default ShippingRefund;

import React from "react";

const ShippingRefund = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-black text-gray-900 mb-6">
          Shipping & Refund Policy
        </h1>
        <p className="text-gray-500 mb-8">Last updated: November 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Shipping Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Standard delivery is available within a 30km radius of our store
              in Thane.
            </li>
            <li>
              Corporate bulk orders can be delivered up to 100km (covering
              Mumbai, Delhi, Varanasi).
            </li>
            <li>
              Delivery time for standard orders is 1-3 working days depending on
              the customization required.
            </li>
            <li>
              Same-day delivery may be available for select products if ordered
              before 12:00 PM.
            </li>
            <li>
              Shipping charges (if applicable) will be clearly displayed at the
              time of checkout.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Return, Refund & Cancellation Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Returns:</strong> We accept returns only for damaged or
              defective products. You must notify us within{" "}
              <strong>7 days</strong> of delivery to be eligible for a return.
              Proof of damage (unboxing video or photos) is required.
            </li>
            <li>
              <strong>Cancellations:</strong> Orders can be cancelled within 2
              hours of placing them for a full refund. Once the order is
              dispatched or customized, it cannot be cancelled.
            </li>
            <li>
              <strong>Refund Processing:</strong> Approved refunds will be
              processed to the original method of payment within 5-7 business
              days.
            </li>
            <li>
              <strong>Non-Returnable Items:</strong> Perishable items (like
              chocolates, flowers, cakes) and personalized/customized items
              cannot be returned once delivered, unless they arrive damaged.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            Contact for Returns
          </h2>
          <p>
            To initiate a return or report a damaged item, please contact our
            support team at <strong>support@mysticboxgifts.in</strong> or
            WhatsApp us at <strong>+91 8858176643</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingRefund;
