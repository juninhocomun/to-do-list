import { useState } from "react";
import { TemaContext } from "../utils/context";

export default function CardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cards, setCards] = useState([]);

  const toggleCards = (newCards: []) => setCards(newCards);

  return (
    <TemaContext.Provider value={{ cards, toggleCards }}>
      {children}
    </TemaContext.Provider>
  );
}
