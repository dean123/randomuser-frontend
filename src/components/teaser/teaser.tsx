import { User } from '../../models/user'

import styles from './teaser.module.css';

interface TeaserProps {
  user: User;
}

export const Teaser = ({ user }: TeaserProps) => {
  return (
    <div className={styles.teaser}>
      <img
        className={styles.image}
        src={user.picture.large}
        alt={`Portrait of ${user.name.first} ${user.name.last}.`}
        width={128}
        height={128}
      />
      <div className={styles.info}>
        <span>{user.name.first}</span>
      </div>
    </div>
  );
}
