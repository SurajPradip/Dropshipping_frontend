export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center w-full bg-white rounded-md border border-gray-300 shadow-sm px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-400">
      {/* Magnifying glass SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-gray-500 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 10.5a6.15 6.15 0 11-12.3 0 6.15 6.15 0 0112.3 0z" />
      </svg>

      {/* Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
      />
    </div>
  );
}
