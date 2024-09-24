"use client";

import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent === "true") {
      setAccepted(true);
    }
  }, []);

  const giveCookieConsent = () => {
    localStorage.setItem("cookieConsent", "true");
    setAccepted(true);
  };

  if (accepted) {
    return null;
  }

  return (
    <div className="fixed bottom-3  mx-2 sm:left-1/2 sm:-translate-x-1/2 text-center text-xs px-5 py-3 z-[999] bg-gray-300 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 bg-opacity-75 border border-white border-opacity-40 shadow-2xl rounded-full">
      En utilisant notre site web, vous acceptez notre utilisation des cookies.
      <button
        className="px-2 mt-2 mx-2 bg-gray-300 hover:bg-gray-500 border rounded-full items-center dark:text-gray-950 sm:mt-0"
        onClick={giveCookieConsent}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
