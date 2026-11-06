import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-300 min-h-screen">
      <h1 className="text-3xl font-black text-white mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-center mb-10 text-black">
        We'd love to hear from you! Get in touch with us for any queries or
        special requests.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#1a1a2e] border border-gray-800 p-6 rounded-2xl text-center">
          <Phone className="mx-auto text-pink-400 mb-4" size={32} />
          <h3 className="font-bold text-white mb-2">Phone/WhatsApp</h3>
          <p>+91 8858176643</p>
        </div>

        <div className="bg-[#1a1a2e] border border-gray-800 p-6 rounded-2xl text-center">
          <Mail className="mx-auto text-pink-400 mb-4" size={32} />
          <h3 className="font-bold text-white mb-2">Email</h3>
          <p>support@mysticboxgifts.in</p>
        </div>

        <div className="bg-[#1a1a2e] border border-gray-800 p-6 rounded-2xl text-center">
          <MapPin className="mx-auto text-pink-400 mb-4" size={32} />
          <h3 className="font-bold text-white mb-2">Address</h3>
          <p className="text-sm">
            MysticBox Gifts,
            <br />
            Thane, Maharashtra, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
