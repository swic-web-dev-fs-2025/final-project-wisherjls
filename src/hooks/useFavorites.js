import { useEffect, useState } from "react";

// Custom Hook: useFavorites
export function useFavorites() {
  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("soundboard-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("soundboard-favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to toggle a favorite
  const toggleFavorite = (soundId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(soundId)) {
        // Remove from favorites using filter
        return prevFavorites.filter((id) => id !== soundId);
      } else {
        // Add to favorites using spread operator
        return [...prevFavorites, soundId];
      }
    });
  };

  // Return the favorites array and the toggle function
  return { favorites, toggleFavorite };
}
