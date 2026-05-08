"use client";

import { useState } from "react";

interface ComingSoonModalProps {
  onClose: () => void;
}

export function ComingSoonModal({ onClose }: ComingSoonModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40 cursor-pointer" onClick={onClose} />
      <div className="relative bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
        {submitted ? (
          <div className="text-center py-4">
            <p className="text-2xl mb-2">🎉</p>
            <h2 className="text-lg font-medium text-charcoal mb-2">Thank you, we&apos;ll stay in touch.</h2>
            <p className="text-[13px] text-warm-gray">We&apos;ll notify you as soon as Promoted Listings launches.</p>
            <button
              onClick={onClose}
              className="mt-6 text-[12px] underline text-warm-gray hover:text-charcoal transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-medium text-charcoal mb-2">Feature coming soon</h2>
            <p className="text-[13px] text-warm-gray mb-6">
              Join the first wave of sellers using Promoted Listings and get{" "}
              <span className="font-semibold text-charcoal">100 PLN in free ad credit</span> when we launch.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-[0.8px] text-charcoal mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-black/15 rounded px-3 py-2.5 text-[14px] text-charcoal outline-none focus:border-charcoal transition-colors"
                  required
                />
              </div>
              <button type="submit" className="btn-cta w-full text-[12px]">
                NOTIFY ME
              </button>
            </form>
            <button
              onClick={onClose}
              className="mt-4 w-full text-center text-[12px] text-warm-gray hover:text-charcoal transition-colors"
            >
              Maybe later
            </button>
          </>
        )}
      </div>
    </div>
  );
}
