"use client";

import { useEffect } from "react";

const BENIGN_RESIZE_OBSERVER_MESSAGES = [
  "ResizeObserver loop completed with undelivered notifications.",
  "ResizeObserver loop limit exceeded",
];

function isBenignResizeObserverError(message: unknown) {
  return (
    typeof message === "string" &&
    BENIGN_RESIZE_OBSERVER_MESSAGES.some((benign) => message.includes(benign))
  );
}

// Browsers fire this spec-defined warning when observed elements resize mid-frame
// (e.g. during viewport changes). It is harmless, so only this exact message is filtered.
export default function ResizeObserverErrorGuard() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (isBenignResizeObserverError(event.message)) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    };

    window.addEventListener("error", handleError, { capture: true });
    return () => window.removeEventListener("error", handleError, { capture: true });
  }, []);

  return null;
}
