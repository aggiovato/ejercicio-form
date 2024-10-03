import { useState } from "react";
import InfoCard from "./InfoCard";
import registeredWebs from "../utils/data/registeredWebs.json";

const SideBar = () => {
  const [cards, setCards] = useState(registeredWebs);

  const handleDelete = (index: number) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
  };

  return (
    <div>
      {cards.map((card, index) => (
        <InfoCard
          key={index}
          url={card.url}
          username={card.username}
          email={card.email}
          country={card.country}
          phone={card.phone}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};

export default SideBar;
