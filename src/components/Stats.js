export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items in your packing list 🚀</em>
      </p>
    );

  const numItem = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percantage = Math.round((packedItems / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percantage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItem} items in your list, and you already packed ${" "}
        ${packedItems} (${percantage}%)`}
      </em>
    </footer>
  );
}
