// import React from "react";

// const TermsConditions = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12 text-gray-300 min-h-screen">
//       <h1 className="text-3xl font-black text-white mb-6">
//         Terms & Conditions
//       </h1>
//       <p className="mb-4 text-black">
//         Welcome to MysticBox Gifts. By using our website, you agree to these
//         terms and conditions.
//       </p>

//       <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">1. General</h2>
//       <p className="mb-4 text-black">
//         These terms govern your use of our website and the purchase of any
//         products from us. We reserve the right to change these terms at any
//         time.
//       </p>

//       <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
//         2. Pricing and Availability
//       </h2>
//       <p className="mb-4 text-black">
//         All prices are in INR and include applicable taxes. We reserve the right
//         to change prices without notice. All orders are subject to availability.
//       </p>

//       <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">3. Delivery</h2>
//       <p className="mb-4 text-black">
//         Delivery times are estimates and may vary. We deliver up to a 30km
//         radius for standard gifts and up to 100km for corporate bulk orders.
//         Please refer to our Shipping Policy for more details.
//       </p>

//       <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
//         4. Cancellations
//       </h2>
//       <p className="mb-4 text-black">
//         Orders can only be cancelled before they are dispatched. Once
//         dispatched, our Refund Policy applies.
//       </p>
//     </div>
//   );
// };

// export default TermsConditions;

import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-black text-gray-900 mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 mb-8">Last updated: November 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to MysticBox Gifts. By using our website and purchasing our
            products, you agree to these terms and conditions. Please read them
            carefully.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            1. General
          </h2>
          <p>
            These terms govern your use of our website and the purchase of any
            products from us. We reserve the right to change these terms at any
            time without prior notice. Your continued use of the website
            constitutes acceptance of those changes.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            2. Pricing and Availability
          </h2>
          <p>
            All prices displayed on the website are in Indian Rupees (INR) and
            include applicable taxes. We reserve the right to change prices
            without notice. All orders are subject to product availability. In
            case a product is unavailable after payment, we will offer a full
            refund or an alternative product of equal value.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            3. Delivery
          </h2>
          <p>
            Delivery times provided on the website are estimates and may vary
            due to unforeseen circumstances. We deliver up to a 30km radius for
            standard gifts and up to 100km for corporate bulk orders. Please
            refer to our Shipping Policy for more details.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            4. Cancellations
          </h2>
          <p>
            Orders can only be cancelled within 2 hours of placing them. Once
            the order has been dispatched or is in the process of being
            customized, it cannot be cancelled. Please refer to our Refund
            Policy for more details.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            5. Intellectual Property
          </h2>
          <p>
            All content on this website, including images, text, logos, and
            designs, is the property of MysticBox Gifts and is protected by
            copyright laws. You may not use, reproduce, or distribute any
            content without our written permission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
