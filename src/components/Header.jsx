// Header component

export default function Header() {
  return (
    <header className="bg-black text-white py-6 shadow-lg">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold">🎵 Soundboard App</h1>
        <p className="text-gray-400 mt-1">Click to play sounds, heart to favorite</p>
      </div>
    </header>
  );
}
