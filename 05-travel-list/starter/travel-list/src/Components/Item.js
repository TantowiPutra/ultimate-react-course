export function Item({ id, description, quantity, packed, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" checked={packed} value={packed} onChange={() => onToggleItem(id)} />
      <span style={packed ? {
        textDecoration: "line-through"
      } : {}}>{quantity} {description} </span>
      <button onClick={() => onDeleteItems(id)}>❌</button>
    </li>
  );
}
