// import React from "react";
// import { Phone, Mail, MapPin } from "lucide-react";

// const ContactUs = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12 text-gray-300 min-h-screen">
//       <h1 className="text-3xl font-black text-white mb-6 text-center">
//         Contact Us
//       </h1>
//       <p className="text-center mb-10 text-black">
//         We'd love to hear from you! Get in touch with us for any queries or
//         special requests.
//       </p>

//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="bg-[#1a1a2e] border border-gray-800 p-6 rounded-2xl text-center">
//           <Phone className="mx-auto text-pink-400 mb-4" size={32} />
//           <h3 className="font-bold text-white mb-2">Phone/WhatsApp</h3>
//           <p>+91 8858176643</p>
//         </div>

//         <div className="bg-[#1a1a2e] border border-gray-800 p-6 rounded-2xl text-center">
//           <Mail className="mx-auto text-pink-400 mb-4" size={32} />
//           <h3 className="font-bold text-white mb-2">Email</h3>
//           <p>support@mysticboxgifts.in</p>
//         </div>

//         <div className="bg-[#1a1a2e] border border-gray-800 p-6 rounded-2xl text-center">
//           <MapPin className="mx-auto text-pink-400 mb-4" size={32} />
//           <h3 className="font-bold text-white mb-2">Address</h3>
//           <p className="text-sm">
//             MysticBox Gifts,
//             <br />
//             Thane, Maharashtra, India
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            We'd love to hear from you! Whether you have a question about our
            products, need help with an order, or want to discuss corporate
            gifting, our team is ready to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 p-8 rounded-3xl text-center shadow-sm">
            <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-pink-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Phone / WhatsApp</h3>
            <p className="text-gray-600">+91 8858176643</p>
            <p className="text-xs text-gray-500 mt-2">Mon-Sat, 10 AM - 7 PM</p>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-3xl text-center shadow-sm">
            <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-pink-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">support@mysticboxgifts.in</p>
            <p className="text-xs text-gray-500 mt-2">
              We usually reply within 24 hours
            </p>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-3xl text-center shadow-sm md:col-span-2">
            <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-pink-600" size={28} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Our Address</h3>
            <p className="text-gray-600">
              MysticBox Gifts,
              <br />
              Manorma Nagar, Thane West,
              <br />
              Maharashtra - 400607, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
