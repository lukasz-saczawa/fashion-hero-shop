"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { PromoteTab } from "@/components/seller/promote-tab";

type Tab = "products" | "orders" | "payments" | "promote";

const TABS: { id: Tab; label: string }[] = [
  { id: "products", label: "Products" },
  { id: "orders", label: "Orders" },
  { id: "payments", label: "Payments" },
  { id: "promote", label: "Promote" },
];

function DeadTab({ label }: { label: string }) {
  return (
    <div className="py-16 text-center">
      <p className="text-[13px] text-warm-gray">{label} — coming soon.</p>
    </div>
  );
}

export default function SellerPanelPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("promote");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (user === null) {
      router.replace("/account/login");
    } else {
      setReady(true);
    }
  }, [user, router]);

  if (!ready) return null;

  const firstName = user!.firstName.charAt(0).toUpperCase() + user!.firstName.slice(1);

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Panel header */}
      <div className="mb-8">
        <p className="text-[11px] text-warm-gray uppercase tracking-[0.8px] mb-1">Seller dashboard</p>
        <h1 className="text-2xl font-light text-charcoal">Verified seller: {firstName}</h1>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-black/10 mb-8 gap-0">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-[13px] transition-colors border-b-2 -mb-px ${
              activeTab === tab.id
                ? "border-charcoal text-charcoal font-medium"
                : "border-transparent text-warm-gray hover:text-charcoal"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "promote" && <PromoteTab />}
      {activeTab === "products" && <DeadTab label="Products management" />}
      {activeTab === "orders" && <DeadTab label="Orders management" />}
      {activeTab === "payments" && <DeadTab label="Payments & payouts" />}
    </div>
  );
}
