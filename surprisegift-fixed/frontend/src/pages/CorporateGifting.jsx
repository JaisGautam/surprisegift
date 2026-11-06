import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gift, Users, Building2, Send, ArrowLeft } from "lucide-react";

const CorporateGifting = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    quantity: "",
    budgetPerGift: "",
    deliveryLocation: "",
    specialRequirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp number (aapka)
    const whatsappNumber = "918858176643";
    const text = `*Corporate Diwali Gifting Inquiry*%0A%0A*Company:* ${formData.companyName}%0A*Contact:* ${formData.contactPerson}%0A*Phone:* ${formData.phone}%0A*Quantity:* ${formData.quantity}%0A*Budget/Gift:* ₹${formData.budgetPerGift}%0A*Location:* ${formData.deliveryLocation}%0A*Requirements:* ${formData.specialRequirements}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white p-4 py-10 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-[#1a1a2e] border border-pink-500/30 p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-pink-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <button
          onClick={() => navigate("/")}
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-6 transition"
        >
          <ArrowLeft size={18} /> Back to Home
        </button>

        <div className="text-center mb-8">
          <div className="bg-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-pink-500/30">
            <Building2 size={32} className="text-pink-400" />
          </div>
          <h1 className="text-3xl font-black mb-2">Corporate Diwali Gifting</h1>
          <p className="text-gray-400 text-sm">
            Get premium gifts for your employees at unbeatable bulk prices. We
            deliver up to 100km!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              required
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
            />
            <input
              type="text"
              name="contactPerson"
              placeholder="Contact Person Name"
              required
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="WhatsApp Number"
              required
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Work Email"
              required
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Users
                size={18}
                className="absolute left-3 top-3.5 text-gray-500"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Number of Gifts"
                required
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 pl-10 text-white focus:border-pink-500 outline-none"
              />
            </div>
            <div className="relative">
              <Gift
                size={18}
                className="absolute left-3 top-3.5 text-gray-500"
              />
              <input
                type="number"
                name="budgetPerGift"
                placeholder="Budget per Gift (₹)"
                required
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 pl-10 text-white focus:border-pink-500 outline-none"
              />
            </div>
          </div>

          <input
            type="text"
            name="deliveryLocation"
            placeholder="Delivery Location (City/Area - Max 100km)"
            required
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none"
          />

          <textarea
            name="specialRequirements"
            placeholder="Any special requirements? (e.g. Company Logo on box, specific colors, etc.)"
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3 text-white focus:border-pink-500 outline-none h-24"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-[1.02] transition mt-4 flex items-center justify-center gap-2"
          >
            <Send size={20} /> Inquire via WhatsApp
          </button>
          <p className="text-center text-xs text-gray-500 mt-2">
            We will contact you within 15 minutes to discuss the design and
            delivery.
          </p>
        </form>
      </div>
    </div>
  );
};

export default CorporateGifting;
