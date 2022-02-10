import React from 'react';

import styles from './Header.module.css';

const Header: React.FC<{ image: string }> = (props) => {
  return (
    <header className={styles.header}>
      <img src={`${props.image}`} alt="header hotel" />
    </header>
  );
};

export default Header;
