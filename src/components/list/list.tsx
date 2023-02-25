import React, { useCallback, useEffect, useState } from 'react';

import { Teaser } from '../teaser/teaser';
import { User } from '../../models/user';

import styles from './list.module.css';

interface ListProps {
  getUsers: (amount: number) => Promise<User[]>;
}

export const List = ({ getUsers }: ListProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [addAmount, setAddAmount] = useState<number>(1);

  const loadUsers = useCallback(async (amount: number, renew = false) => {
    const data = await getUsers(amount);
    if (renew) {
      setUsers(data);
    } else {
      setUsers((current: User[]) => [...current, ...data]);
    }
  }, [getUsers])

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
  
  return (<>
    <section>
      <h1>Displaying {users.length} random users</h1>
    </section>
    <div className={styles.list}>
      {users.map((item: User, index: number) =>
        <Teaser
          key={item.phone}
          user={item}
          onRemove={() => handleRemove(index)}
        />
      )}
    </div>
    <section className='actions'>
      <button onClick={handleAdd} data-testid='add-user'>
        Add {addAmount} More
      </button>
      <button onClick={() => loadUsers(20, true)}>
        Renew Users
      </button>
    </section>
  </>)
};
