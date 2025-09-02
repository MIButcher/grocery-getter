import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomePageView.module.scss';


const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

    return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>Welcome to Grocery Getter</div>
            <div className={styles.msgContainer}>Your one-stop solution for managing groceries efficiently.</div>
        </div>
    );
};

export default HomePage;
