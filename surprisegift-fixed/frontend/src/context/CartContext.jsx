import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PACKAGES, FEATURED_PRODUCTS } from "../data/catalog";

const CartContext = createContext(null);
const STORAGE_KEY = "surprisegift_cart";

const normalizeItem = (item) => {
  const id = String(
    item?._id || item?.id || item?.productId || item?.packageId || "",
  );
  const packageEntry = PACKAGES.find((entry) => entry._id === id);
  const productEntry = FEATURED_PRODUCTS.find((entry) => entry._id === id);
  const type =
    item?.type ||
    (item?.packageId || packageEntry || item?.features ? "package" : "product");
  const fallback = type === "package" ? packageEntry : productEntry;
  const title = String(
    item?.title || item?.name || fallback?.title || "Gift item",
  );
  const rawPrice = item?.price ?? fallback?.price ?? 0;
  const parsedPrice =
    typeof rawPrice === "number"
      ? rawPrice
      : Number(String(rawPrice).replace(/[^0-9.]/g, ""));
  const price =
    Number.isFinite(parsedPrice) && parsedPrice >= 0
      ? parsedPrice
      : fallback?.price || 0;
  const image = item?.image || item?.images?.[0] || fallback?.image || "";
  return {
    ...fallback,
    ...item,
    _id: id,
    id,
    type,
    title,
    name: title,
    price,
    image,
    images: item?.images?.length ? item.images : image ? [image] : [],
    quantity: Math.max(1, Number.parseInt(item?.quantity, 10) || 1),
  };
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(saved)
        ? saved.map(normalizeItem).filter((item) => item._id)
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Could not persist cart:", error);
    }
  }, [cart]);

  const addToCart = (rawItem) => {
    const item = normalizeItem(rawItem);
    if (!item._id || !item.price || item.price < 0)
      throw new Error("This item has invalid product data.");
    setCart((previous) => {
      const exists = previous.find((entry) => entry._id === item._id);
      if (exists)
        return previous.map((entry) =>
          entry._id === item._id
            ? { ...entry, quantity: entry.quantity + item.quantity }
            : entry,
        );
      return [...previous, item];
    });
    return item;
  };

  const removeFromCart = (id) =>
    setCart((previous) => previous.filter((item) => item._id !== id));
  const updateQuantity = (id, quantity) => {
    const next = Math.max(1, Math.min(50, Number.parseInt(quantity, 10) || 1));
    setCart((previous) =>
      previous.map((item) =>
        item._id === id ? { ...item, quantity: next } : item,
      ),
    );
  };
  const clearCart = () => setCart([]);
  const getCartTotal = () =>
    Number(
      cart
        .reduce(
          (sum, item) =>
            sum + Number(item.price || 0) * Number(item.quantity || 1),
          0,
        )
        .toFixed(2),
    );
  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
    }),
    [cart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
