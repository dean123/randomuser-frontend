import React, { useCallback, useEffect, useState } from 'react';
import { List } from './components/list/list';
import { Teaser } from './components/teaser/teaser';
import getRandomUsers from './lib/randomuser';
import { User } from './models/user';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = useCallback(async () => {
    const data = await getRandomUsers();
    setUsers(data);
  }, [])

  useEffect(() => {
    loadUsers();
  }, [loadUsers])

  return (
    <List>
      {users.map((item: User) =>
        <Teaser
          key={item.cell}
          user={item}
        />
      )}
    </List>
  );
}

export default App;
