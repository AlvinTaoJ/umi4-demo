import React, { useEffect } from 'react';
import styles from './index.less';

const Demo = () => {
  return (
    <div className={styles.ctable}>
      <div className={`${styles['table-item']} ${styles['table-title']}`}>
        <div className={styles.tr}>
          <div className={`${styles.td} ${styles.fixed}`} style={{ left: 0 }}>
            <div className={styles.text}>1</div>
          </div>
          <div className={styles.td}>
            <div className={styles.text}>2</div>
          </div>
        </div>
      </div>
      <div className={styles['table-item']}>
        <div className={`${styles.tr} ${styles['table-item-title']}`}>
          <div className={`${styles.td} ${styles.fixed}`} style={{ left: 0 }}>
            <div className={styles.text}>1</div>
          </div>
          <div className={styles.td}>
            {' '}
            <div className={styles.text}>1</div>
          </div>
        </div>
        <div className={`${styles.tr}`}>
          <div className={`${styles.td} ${styles.fixed}`} style={{ left: 0 }}>
            <div className={styles.text}>1</div>
          </div>
          <div className={styles.td}>
            {' '}
            <div className={styles.text}>1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
