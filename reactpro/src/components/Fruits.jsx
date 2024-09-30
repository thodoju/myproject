import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "orange", "Pineapple"];

  const fruits = [
    {
      name: " Apple",
      price: 10,
      emoji: "🍎",
      soldout: true,
    },
    {
      name: " Mango",
      price: 7,
      emoji: "🥭",
      soldout: false,
    },
    {
      name: " Banana",
      price: 2,
      emoji: "🍌",
      soldout: true,
    },
    {
      name: " Orange",
      price: 5,
      emoji: "🍊",
      soldout: false,
    },
    {
      name: " Pineapple",
      price: 8,
      emoji: "🍍",
      soldout: true,
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
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
