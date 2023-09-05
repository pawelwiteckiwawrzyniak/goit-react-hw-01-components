import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title !== undefined && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
      {stats.map(stat => (
        <li className={css.statListItem} key={stat.id}>
          <span>{stat.label}</span>
          <span>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
