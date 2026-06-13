import { useState } from 'react';
import { Item } from './Item';

export function PackingList({ items, onDeleteItems, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === 'input')
    sortedItems = items;
  else if (sortBy === 'description')
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
      </div>
      <button onClick={() => onClearList()}>Clear List</button>
    </div>
  );
}
