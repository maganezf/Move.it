import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/LevelUpModal/styles.module.css';

export const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Congratulations</strong>
        <p>Level Up!</p>

        <button type="button" onClick={() => closeLevelUpModal()}>
          <img src="/icons/close.svg" alt="Close Modal Image" />
        </button>
      </div>
    </div>
  );
};
