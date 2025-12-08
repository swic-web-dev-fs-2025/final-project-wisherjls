import { useState } from "react";

//Custom Hook: useShowFavorites

export function useShowFavorites() {
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const toggleShowFavorites = () => {
    setShowOnlyFavorites((prev) => !prev);
  };

  return { showOnlyFavorites, toggleShowFavorites };
}
