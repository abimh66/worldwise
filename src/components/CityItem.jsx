/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
function CityItem({ city }) {
  // eslint-disable-next-line no-unused-vars
  const { cityName, emoji, date, flags, id, position } = city;
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <img src={flags} className={styles.flags} alt={emoji} />
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{date}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
