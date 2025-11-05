import { createContext } from "react";

type TemaContextType = {
  cards: string[];
  toggleCards: (newCards: []) => void;
};

export const TemaContext = createContext<TemaContextType | null>(null);
