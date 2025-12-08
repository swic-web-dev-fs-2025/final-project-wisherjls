// SearchBar Component

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search sounds..."
        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
      />
    </div>
  );
}
