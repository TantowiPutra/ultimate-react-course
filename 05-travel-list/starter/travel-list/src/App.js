import { useState } from 'react';
import './App.css';
import Logo from './Components/Logo';
import Form from './Components/Form';
import { PackingList } from './Components/PackingList';
import { Stats } from './Components/Stats';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  const [items, setItems] = useState([...initialItems]);

  // Harus buat object array baru, agar referensi memory berubah dan rerender dapat terjadi
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => (
      items.filter((item) => item.id !== id)
    ))
  }

  function handleToggleItem(id) {
    setItems((items) => (
      items.map((item) => (
        item.id === id ? {...item, packed: !item.packed} : item
      ))
    ))
  }

  function handleClearList() {
    setItems((items) => [])
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
