export function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>🚀 Start adding some items to your packing list!</em>
      </footer>
    );
  }

  const numItems = items.length;
  const packed = items.reduce((acc, cur) => acc + cur.packed, 0);
  const packedPercentage = Math.round((packed / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        🫰 You have {numItems} items on your list, and you already packed{" "}
        {packed} ({packedPercentage}%)
      </em>
    </footer>
  );
}
