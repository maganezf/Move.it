import styles from '../styles/components/Profile/styles.module.css';

export const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/maganezf.png" alt="Profile Image" />

      <div>
        <strong>Maganez Filho</strong>
        <p>
          <img src="icons/level.svg" alt="levelImage" />
          Level 1
        </p>
      </div>
    </div>
  );
};
