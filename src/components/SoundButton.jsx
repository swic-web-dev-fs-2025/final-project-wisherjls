// sound button component

export default function SoundButton({ sound, isFavorite, onToggleFavorite }) {
  // Function to play the sound
  const playSound = () => {
    const audio = new Audio(sound.file);
    audio.play().catch(error => {
      console.error("Error playing sound:", error);
    });
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center gap-2">
      {/* Play button - calls playSound when clicked */}
      <button
        onClick={playSound}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {sound.name}
      </button>
      
      {/* Favorite button - calls onToggleFavorite when clicked */}
      <button
        onClick={() => onToggleFavorite(sound.id)}
        className="text-2xl hover:scale-110 transition-transform"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? "❤️" : "🖤"}
      </button>
    </div>
  );
}
