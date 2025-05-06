/* eslint-disable react/prop-types */
import styles from './Timeline3.module.css';

function Timeline3({ items }) {
  return (
    <section className={styles.Timeline3}>
      <div className={styles.TimelineContainer}>
        {items.map(function (item, index) {
          return (
            <div className={styles.TimelineItem} key={index}>
              <h3>{item.year}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Timeline3;
