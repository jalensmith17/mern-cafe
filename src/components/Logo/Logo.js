import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo}>
    <div>GAME</div>
    <div>BASEMENT</div>
    <img src='https://images.vexels.com/media/users/3/135991/isolated/preview/ee03f76ed0711b770c0c797d83bd2ea0-gaming-controller-icon.png'></img>
  </div>
);
}