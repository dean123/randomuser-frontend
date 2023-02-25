import React from 'react';
import styles from './list.module.css';

interface ListProps {
  children?: string | JSX.Element | JSX.Element[];
}

export const List = ({ children }: ListProps) => (
  <div className={styles.list}>
    { children }
  </div>
);
