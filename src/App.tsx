import React, { useCallback, useEffect, useState } from 'react';
import { List } from './components/list/list';
import { Teaser } from './components/teaser/teaser';
import getRandomUsers from './lib/randomuser';
import { User } from './models/user';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [addAmount, setAddAmount] = useState<number>(1);

  const loadUsers = useCallback(async (amount: number) => {
    const data = await getRandomUsers(amount);
    setUsers((current: User[]) => [...current, ...data]);
  }, [])

  const handleAdd = useCallback(() => {
    loadUsers(addAmount);
    setAddAmount((current: number) => current + 1);
  }, [loadUsers, addAmount])

  const handleRemove = useCallback((index: number) => {
    setUsers((current: User[]) => {
      current.splice(index, 1);
      return [...current];
    });
  }, [])

  useEffect(() => {
    loadUsers(20);
  }, [loadUsers])

  return (
    <main>
      <section>
        <h1>Displaying {users.length} random users</h1>
      </section>
      <List>
        {users.map((item: User, index: number) =>
          <Teaser
            key={item.cell}
            user={item}
            onRemove={() => handleRemove(index)}
          />
        )}
      </List>
      <section>
        <button onClick={handleAdd}>
          Add {addAmount} More
        </button>
      </section>
    </main>
  );
}

export default App;
