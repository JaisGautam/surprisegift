import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [relation, setRelation] = useState("Girlfriend");
  const [favouriteItem, setFavouriteItem] = useState("");
  const [customNote, setCustomNote] = useState("");

  // URL query se relation fetch karna
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const rel = params.get("relation");
    if (rel) {
      // Capitalize first letter
      setRelation(rel.charAt(0).toUpperCase() + rel.slice(1));
    }
  }, [location.search]);

  const packageData = {
    "home-pkg": {
      name: "Home Budget Package",
      price: 499,
      img: "https://images.unsplash.com/photo-1513885535751-8b9238bd482a?q=80&w=600",
      desc: "Cute, budget-friendly curated surprise box with greeting card & lights.",
    },
    "normal-pkg": {
      name: "Normal Gift Voucher",
      price: 999,
      img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600",
      desc: "Standard personalized gift voucher with photo frame and chocolates.",
    },
    "luxury-pkg": {
      name: "Luxury Romance Voucher",
      price: 2499,
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600",
      desc: "Royal luxury box with imported roses and custom love message.",
    },
    "surprise-box": {
      name: "Mystery Surprise Box",
      price: 1499,
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600",
      desc: "Mystery customized package tailored according to recipient preferences.",
    },
    "mom-special": {
      name: "Heartfelt Mom Hamper",
      price: 1999,
      img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600",
      desc: "Special care hamper designed exclusively for mothers.",
    },
    "dad-special": {
      name: "Respectful Dad Gift Box",
      price: 1899,
      img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=600",
      desc: "Classy utility and accessory gift box for fathers.",
    },
  };

  const selectedPkg = packageData[id] || packageData["luxury-pkg"];

  const handleCheckout = () => {
    const orderDetails = {
      packageId: id,
      packageName: selectedPkg.name,
      price: selectedPkg.price,
      relation,
      favouriteItem,
      customNote,
    };
    localStorage.setItem("pendingCustomOrder", JSON.stringify(orderDetails));
    navigate("/checkout");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="bg-white/[0.05] border border-pink-500/30 rounded-3xl p-8 backdrop-blur-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="h-80 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <img
            src={selectedPkg.img}
            alt={selectedPkg.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <span className="bg-pink-500/20 text-pink-300 text-xs px-3.5 py-1.5 rounded-full font-bold">
            Voucher Customization
          </span>
          <h1 className="text-3xl font-black text-white">{selectedPkg.name}</h1>
          <p className="text-pink-400 font-black text-3xl">
            ₹{selectedPkg.price}
          </p>
          <p className="text-gray-300 text-sm">{selectedPkg.desc}</p>
        </div>
      </div>

      {/* Customization Form */}
      <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-8 backdrop-blur-xl space-y-6">
        <h3 className="text-xl font-bold text-pink-300">
          🎁 Personalize Your Surprise:
        </h3>

        <div>
          <label className="block text-xs text-gray-400 mb-2">
            Recipient Category / Relation
          </label>
          <select
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl p-3.5 text-white focus:outline-none focus:border-pink-500"
          >
            <option value="Girlfriend" className="bg-black">
              Girlfriend
            </option>
            <option value="Boyfriend" className="bg-black">
              Boyfriend
            </option>
            <option value="Best Friend" className="bg-black">
              Best Friend
            </option>
            <option value="Mom" className="bg-black">
              Mom
            </option>
            <option value="Dad" className="bg-black">
              Dad
            </option>
            <option value="Colleague" className="bg-black">
              Colleague
            </option>
          </select>
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-2">
            Your Favorite Item Choice (e.g., Chocolates, Watch, Flowers)
          </label>
          <input
            type="text"
            placeholder="e.g. Ferrero Rocher Chocolates and Teddy Bear"
            value={favouriteItem}
            onChange={(e) => setFavouriteItem(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl p-3.5 text-white focus:outline-none focus:border-pink-500"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-400 mb-2">
            Custom Note / Emotional Message
          </label>
          <textarea
            placeholder="Write your sweet message here..."
            value={customNote}
            onChange={(e) => setCustomNote(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl p-3.5 text-white focus:outline-none focus:border-pink-500"
          ></textarea>
        </div>

        <button
          onClick={handleCheckout}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 font-bold py-4 rounded-2xl shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition"
        >
          Proceed to Secure Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductView;
