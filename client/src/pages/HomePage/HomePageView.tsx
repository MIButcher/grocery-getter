import React from 'react';
import styles from './HomePageView.module.scss';

const HomePage: React.FC = () => {
    return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Welcome to Grocery Getter</div>
            <div className={styles.msgContainer}>Your one-stop solution for managing groceries efficiently.</div>
        </div>
    );
};

export default HomePage;
