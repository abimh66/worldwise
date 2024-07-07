/* eslint-disable react/prop-types */
import styles from './CountryItem.module.css';

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img src={country.flags} className={styles.flags} alt={country.emoji} />
      {/* <span>{country.emoji}</span> */}
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
