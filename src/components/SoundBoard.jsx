import { soundData } from "../data/soundData";
import { useFavorites } from "../hooks/useFavorites";
import { useSearch } from "../hooks/useSearch";
import { useShowFavorites } from "../hooks/useShowFavorites";
import SearchBar from "./SearchBar";
import SoundButton from "./SoundButton";

// SoundBoard component

export default function SoundBoard() {
  // Use custom hooks for state management
  const { searchTerm, setSearchTerm } = useSearch();
  const { favorites, toggleFavorite } = useFavorites();
  const { showOnlyFavorites, toggleShowFavorites } = useShowFavorites();

  // Filter sounds based on search term AND favorites toggle
  const filteredSounds = soundData
    .filter(sound => 
      sound.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(sound => 
      showOnlyFavorites ? favorites.includes(sound.id) : true
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Search bar */}
      <SearchBar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      {/* Favorites toggle button */}
      <div className="mb-6 flex justify-center">
        <button
          onClick={toggleShowFavorites}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            showOnlyFavorites 
              ? 'bg-red-600 text-white hover:bg-red-700 border border-red-500' 
              : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-700'
          }`}
        >
          {showOnlyFavorites ? '❤️ Showing Favorites' : '🖤 Showing All Sounds'}
        </button>
      </div>

      {/* Show message if no sounds found */}
      {filteredSounds.length === 0 ? (
        <p className="text-center text-gray-400 mt-8">
          {showOnlyFavorites 
            ? "No favorites yet. Click the heart on a sound to add it to favorites!" 
            : "No sounds found. Try a different search term."}
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* List each as a SoundButton */}
          {filteredSounds.map(sound => (
            <SoundButton
              key={sound.id}
              sound={sound}
              isFavorite={favorites.includes(sound.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
