// import React from "react";

// const PrivacyPolicy = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12 text-gray-300 min-h-screen">
//       <h1 className="text-3xl font-black text-white mb-6">Privacy Policy</h1>
//       <p className="mb-4">Last updated: November 2026</p>
//       <p className="mb-4 text-black">
//         At MysticBox Gifts, we respect your privacy and are committed to
//         protecting your personal data. This privacy policy will inform you as to
//         how we look after your personal data when you visit our website and tell
//         you about your privacy rights.
//       </p>

//       <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
//         1. Information We Collect
//       </h2>
//       <p className="mb-4 text-black">
//         We may collect, use, store and transfer different kinds of personal data
//         about you which we have grouped together follows: Identity Data (name),
//         Contact Data (billing address, delivery address, email address, and
//         telephone numbers), and Financial Data (payment details).
//       </p>

//       <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
//         2. How We Use Your Data
//       </h2>
//       <p className="mb-4 text-black">
//         We will only use your personal data when the law allows us to. Most
//         commonly, we will use your personal data to process your order, manage
//         payments, and provide customer support.
//       </p>

//       <h2 className="text-xl font-bold text-pink-400 mt-8 mb-3">
//         3. Data Security
//       </h2>
//       <p className="mb-4 text-black">
//         We have put in place appropriate security measures to prevent your
//         personal data from being accidentally lost, used, or accessed in an
//         unauthorized way.
//       </p>
//     </div>
//   );
// };

// export default PrivacyPolicy;

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-black text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-8">Last updated: November 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            At MysticBox Gifts, we respect your privacy and are committed to
            protecting your personal data. This privacy policy will inform you
            as to how we look after your personal data when you visit our
            website and tell you about your privacy rights.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            1. Information We Collect
          </h2>
          <p>
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Identity Data:</strong> First name, last name, username or
              similar identifier.
            </li>
            <li>
              <strong>Contact Data:</strong> Billing address, delivery address,
              email address, and telephone numbers.
            </li>
            <li>
              <strong>Financial Data:</strong> Payment card details (processed
              securely by Razorpay, we do not store your card details).
            </li>
            <li>
              <strong>Transaction Data:</strong> Details about payments to and
              from you and other details of products you have purchased from us.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            2. How We Use Your Data
          </h2>
          <p>
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To process and deliver your order, including managing payments and
              fees.
            </li>
            <li>
              To manage our relationship with you, including notifying you about
              changes to our terms or privacy policy.
            </li>
            <li>To provide customer support and respond to your queries.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            3. Data Security
          </h2>
          <p>
            We have put in place appropriate security measures to prevent your
            personal data from being accidentally lost, used, or accessed in an
            unauthorized way, altered, or disclosed. All payment transactions
            are encrypted and processed securely through our payment gateway
            partner, Razorpay.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            4. Third-Party Links
          </h2>
          <p>
            This website may include links to third-party websites, plug-ins,
            and applications. Clicking on those links or enabling those
            connections may allow third parties to collect or share data about
            you. We do not control these third-party websites and are not
            responsible for their privacy statements.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            5. Contact Us
          </h2>
          <p>
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at:{" "}
            <strong>support@mysticboxgifts.in</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
