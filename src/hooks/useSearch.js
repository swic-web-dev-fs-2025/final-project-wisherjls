import { useState } from "react";

// Custom Hook: useSearch
export function useSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  return { searchTerm, setSearchTerm };
}
