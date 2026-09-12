"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "kj-cookie-consent";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// GA4 sets cookies, so it is injected only once the visitor has accepted and
// never on page load. Vercel Analytics is cookieless and runs either way, which
// is what stops a decline from leaving us with no traffic numbers at all.
function loadGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || document.getElementById("ga4-script")) return;

  const loader = document.createElement("script");
  loader.id = "ga4-script";
  loader.async = true;
  loader.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(loader);

  const config = document.createElement("script");
  config.id = "ga4-config";
  config.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
  `;
  document.head.appendChild(config);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setVisible(true);
      } else if (stored === "accepted") {
        loadGoogleAnalytics();
      }
    } catch {
      // localStorage blocked (private browsing); don't block the page on it
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore write failures, the banner just won't be remembered
    }
    if (value === "accepted") loadGoogleAnalytics();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-grey bg-surface px-5 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:px-8"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex-1 text-sm leading-relaxed text-ink-muted">
          We use cookieless analytics as standard. Accept to also allow Google Analytics cookies, which
          show us how the site is used.{" "}
          <Link href="/privacy-policy" className="font-medium text-brand underline underline-offset-2">
            Privacy policy
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-full border border-grey px-5 py-2.5 text-sm font-medium text-ink-muted transition-colors hover:border-ink hover:text-ink"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
