import React, { useEffect } from 'react';
import { useNavigateWithLoading } from '@hooks/HandleNavigateWithLoading';
import styles from './HomePageView.module.scss';


const HomePage: React.FC = () => {
	const navigateWithLoading = useNavigateWithLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateWithLoading('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigateWithLoading]);

    return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Welcome to Grocery Getter</div>
            <div className={styles.msgContainer}>Your one-stop solution for managing groceries efficiently.</div>
        </div>
    );
};

export default HomePage;
