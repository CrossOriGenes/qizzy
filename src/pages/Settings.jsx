import React, { useState, useEffect } from "react";
import { useStore } from "../context/AppStoreProvider";

function Settings() {
  const { toggleDarkMode } = useStore();

  return (
    <section className="w-full px-2 py-4">
      <div className="flex flex-col w-full">
        <div className="card flex justify-between items-center bg-gray-500">
          <p className="text-2xl font-bold">Switch theme: </p>
          <button
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded-xl"
            onClick={toggleDarkMode}
          >
            Toggle
          </button>
        </div>
      </div>
    </section>
  );
}

export default Settings;
