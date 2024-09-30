import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "orange", "Pineapple"];

  const fruits = [
    {
      name: " Apple",
      price: 10,
      emoji: "🍎",
    },
    {
      name: " Mango",
      price: 7,
      emoji: "🥭",
    },
    {
      name: " Banana",
      price: 2,
      emoji: "🍌",
    },
    {
      name: " Orange",
      price: 5,
      emoji: "🍊",
    },
    {
      name: " Pineapple",
      price: 8,
      emoji: "🍍",
    },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            emoji={fruit.emoji}
            price={fruit.price}
          />
        ))}
      </ul>
    </div>
  );
}
