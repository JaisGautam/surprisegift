import React from "react";

export const PackagePreview = () => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-white mb-2">
        Package Assembly Process
      </h2>
      <p className="text-neutral-400 mb-8 text-sm">
        How your customized surprise package is prepared by hand.
      </p>

      <div className="glass-panel p-8 rounded-3xl grid md:grid-cols-3 gap-6">
        <div className="p-4 bg-luxury-card rounded-2xl border border-luxury-border space-y-2">
          <span className="text-luxury-pink font-bold text-xs uppercase">
            Step 1
          </span>
          <h4 className="text-white font-bold">Market Procurement</h4>
          <p className="text-neutral-400 text-xs">
            Fresh flowers & items sourced on-demand after order confirmation.
          </p>
        </div>
        <div className="p-4 bg-luxury-card rounded-2xl border border-luxury-border space-y-2">
          <span className="text-luxury-pink font-bold text-xs uppercase">
            Step 2
          </span>
          <h4 className="text-white font-bold">Artisan Packaging</h4>
          <p className="text-neutral-400 text-xs">
            Hand-wrapped in luxury box with calligraphed emotion note.
          </p>
        </div>
        <div className="p-4 bg-luxury-card rounded-2xl border border-luxury-border space-y-2">
          <span className="text-luxury-pink font-bold text-xs uppercase">
            Step 3
          </span>
          <h4 className="text-white font-bold">Hand Delivery</h4>
          <p className="text-neutral-400 text-xs">
            Delivered directly to the surprise recipient at selected time slot.
          </p>
        </div>
      </div>
    </section>
  );
};
