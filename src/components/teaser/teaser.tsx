import React, { useCallback, useState } from 'react';
import { User } from '../../models/user'
import { TrashIcon } from '../../icons/trash';
import styles from './teaser.module.css';

interface TeaserProps {
  user: User;
  onRemove: () => void;
}

export const Teaser = ({ user, onRemove }: TeaserProps) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const fullName = useCallback(() => {
    return `${user.name.first} ${user.name.last}`;
  }, [user])

  return (
    <div className={`${styles.teaser} ${showMore ? styles.more : ''}`}>
      <img
        className={styles.image}
        src={user.picture.large}
        alt={`Portrait of ${fullName()}.`}
        width={128}
        height={128}
      />
      <div className={styles.info}>
        <h2 className={styles.name}>{ fullName() }</h2>
        <div className={styles.wrap}>
          <ul className={styles.optional}>
            <li>Gender: {user.gender}</li>
            <li>Age: {user.dob.age}</li>
            <li>Phone: {user.phone}</li>
            <li>Nationality: {user.nat}</li>
            <li>Location: {user.location.city} ({user.location.country})</li>
          </ul>
          <button
            className={styles.show}
            onClick={() => setShowMore(true)}
          >
            Show More
          </button>
        </div>
      </div>
      <button
        className={styles.remove}
        aria-label='Remove user'
        onClick={onRemove}
      >
        <TrashIcon />
      </button>
    </div>
  );
}
