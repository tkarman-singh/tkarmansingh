"use client";
import React, { useEffect, useState } from "react";

export function ErrorOverlay() {
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setErrors((prev) => [...prev, `${event.message} at ${event.filename}:${event.lineno}`]);
    };
    
    const handlePromise = (event: PromiseRejectionEvent) => {
      setErrors((prev) => [...prev, `Promise Rejection: ${event.reason}`]);
    };

    const originalConsoleError = console.error;
    console.error = (...args) => {
      setErrors((prev) => [...prev, `Console Error: ${args.join(' ')}`]);
      originalConsoleError(...args);
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handlePromise);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handlePromise);
      console.error = originalConsoleError;
    };
  }, []);

  if (errors.length === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-red-600 text-white p-4 font-mono text-xs max-h-[50vh] overflow-y-auto">
      <h3 className="font-bold text-lg mb-2">Caught Errors ({errors.length}):</h3>
      {errors.map((err, i) => (
        <div key={i} className="mb-1 pb-1 border-b border-red-500">{err}</div>
      ))}
    </div>
  );
}
