"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function useScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [pathname, searchParams]);
}
