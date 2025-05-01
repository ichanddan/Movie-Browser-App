"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      className="flex mb-8 w-full max-w-[600px] mx-auto flex-col sm:flex-row gap-2 sm:gap-0"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="flex-1 py-3 px-4 text-base border-2 border-gray-200 rounded-md sm:rounded-r-none outline-none transition-colors focus:border-[#0070f3]"
        required
      />
      <button
        type="submit"
        className="py-3 px-6 bg-[#0070f3] text-white text-base border-none rounded-md sm:rounded-l-none cursor-pointer transition-colors hover:bg-[#0051b3]"
      >
        Search
      </button>
    </form>
  );
}
