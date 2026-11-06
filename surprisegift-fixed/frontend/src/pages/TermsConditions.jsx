import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-300 min-h-screen">
      <h1 className="text-3xl font-black text-white mb-6">
        Terms & Conditions
      </h1>
      <p className="mb-4">
        Welcome to MysticBox Gifts. By using our website, you agree to these
        terms and conditions.
      </p>

      <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">1. General</h2>
      <p className="mb-4">
        These terms govern your use of our website and the purchase of any
        products from us. We reserve the right to change these terms at any
        time.
      </p>

      <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
        2. Pricing and Availability
      </h2>
      <p className="mb-4">
        All prices are in INR and include applicable taxes. We reserve the right
        to change prices without notice. All orders are subject to availability.
      </p>

      <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">3. Delivery</h2>
      <p className="mb-4">
        Delivery times are estimates and may vary. We deliver up to a 30km
        radius for standard gifts and up to 100km for corporate bulk orders.
        Please refer to our Shipping Policy for more details.
      </p>

      <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
        4. Cancellations
      </h2>
      <p className="mb-4">
        Orders can only be cancelled before they are dispatched. Once
        dispatched, our Refund Policy applies.
      </p>
    </div>
  );
};

export default TermsConditions;
