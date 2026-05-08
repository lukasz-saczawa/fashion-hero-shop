"use client";

import { useState } from "react";
import { ComingSoonModal } from "./coming-soon-modal";

const MOCK_PRODUCTS = [
  { id: "1", name: "Skórzany portfel męski", price: 149, category: "Accessories", thumbnail: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=80&h=80&fit=crop" },
  { id: "2", name: "T-shirt męski czarny", price: 99, category: "Men", thumbnail: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=80&h=80&fit=crop" },
  { id: "3", name: "Sukienka letnia w kwiaty", price: 189, category: "Women", thumbnail: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=80&h=80&fit=crop" },
  { id: "4", name: "Sneakersy białe unisex", price: 259, category: "Footwear", thumbnail: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=80&h=80&fit=crop" },
  { id: "5", name: "Kurtka jeansowa damska", price: 299, category: "Women", thumbnail: "https://images.unsplash.com/photo-1548927372-894b667c6451?w=80&h=80&fit=crop" },
  { id: "6", name: "Czapka zimowa wełniana", price: 69, category: "Accessories", thumbnail: "https://plus.unsplash.com/premium_photo-1695604460925-4fc8f2722362?w=80&h=80&fit=crop" },
];

const REACH_PER_PLN = 48;

export function PromoteTab() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [budget, setBudget] = useState(100);
  const [autoRenew, setAutoRenew] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function toggleProduct(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const weeklyReach = budget * REACH_PER_PLN;

  return (
    <>
      <div className="space-y-8">
        {/* Product picker */}
        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-[0.8px] text-charcoal mb-3">
            Select products to promote
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MOCK_PRODUCTS.map((product) => {
              const selected = selectedIds.includes(product.id);
              return (
                <button
                  key={product.id}
                  onClick={() => toggleProduct(product.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    selected
                      ? "border-charcoal bg-charcoal/5"
                      : "border-black/10 hover:border-black/30"
                  }`}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-12 h-12 rounded object-cover flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-charcoal truncate">{product.name}</p>
                    <p className="text-[12px] text-warm-gray">{product.price} PLN · {product.category}</p>
                  </div>
                  <div className={`ml-auto flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center ${
                    selected ? "bg-charcoal border-charcoal" : "border-black/20"
                  }`}>
                    {selected && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Budget slider */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.8px] text-charcoal">
              Daily budget
            </h2>
            <span className="text-[15px] font-semibold text-charcoal">{budget} PLN</span>
          </div>
          <input
            type="range"
            min={10}
            max={500}
            step={10}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full accent-charcoal cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-warm-gray mt-1">
            <span>10 PLN</span>
            <span>500 PLN</span>
          </div>

          {/* Reach prediction infobox */}
          <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
            <p className="text-[13px] text-blue-800">
              With a budget of <span className="font-semibold">{budget} PLN per day</span>, your product will be seen by{" "}
              <span className="font-semibold">~{weeklyReach.toLocaleString("en-US")} people per week</span>.
            </p>
          </div>
        </div>

        {/* Auto-renew */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={autoRenew}
            onChange={(e) => setAutoRenew(e.target.checked)}
            className="w-4 h-4 accent-charcoal"
          />
          <span className="text-[13px] text-charcoal">Auto-renew campaign monthly</span>
        </label>

        {/* CTA */}
        <button
          onClick={() => setModalOpen(true)}
          className="btn-cta w-full text-[12px]"
        >
          ACTIVATE CAMPAIGN
        </button>
      </div>

      {modalOpen && <ComingSoonModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
