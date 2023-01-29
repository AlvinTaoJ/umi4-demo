import React from 'react';
import styles from './index.less';

const Demo = () => {
  return (
    <div className={styles['dz-table']} style={{ height: '600px' }}>
      <div className={`${styles['table-item']} ${styles['table-title']}`}>
        <div className={`${styles.tr} `}>
          <div className={styles['tr-left']}>
            <div className={`${styles['begin-item']}`}>
              <div className={styles['td-list']}>
                <div className={`${styles.td}`} style={{ width: '90px' }}>
                  序号
                </div>
                <div className={`${styles.td}`} style={{ width: '360px' }}>
                  FT名称
                </div>
              </div>
            </div>
          </div>
          <div className={styles['tr-right']}>
            <div className={styles['td-list']}>
              <div className={`${styles.td}`}>FT简称</div>
              <div className={`${styles.td}`}>F0</div>
              <div className={`${styles.td}`}>FTPM</div>
              <div className={`${styles.td}`}>需求编码起始头</div>
              <div className={`${styles.td}`}>操作</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['table-item']}>
        <div className={`${styles.tr} ${styles['table-item-title']}`}>
          <div className={styles['tr-left']}>
            <div className={`${styles['begin-item']}`}>
              <div className={styles['td-list']}>
                <div className={`${styles.td}`} style={{ width: '450px' }}>
                  世界与风景
                </div>
                <div className={`${styles.td}`}>分组管理：阿司</div>
                <div className={`${styles.td}`}>分组PM：阿司</div>
              </div>
            </div>
          </div>
          <div className={styles['tr-right']}></div>
        </div>
        <div className={styles.tr}>
          <div className={styles['tr-left']}>
            <div className={styles['td-list']}>
              <div className={`${styles.td}`} style={{ width: '90px' }}>
                1
              </div>
              <div className={`${styles.td}`} style={{ width: '360px' }}>
                音效制作
              </div>
            </div>
            <div className={styles['td-list']}>
              <div className={`${styles.td}`} style={{ width: '90px' }}>
                1
              </div>
              <div className={`${styles.td}`} style={{ width: '360px' }}>
                音效制作
              </div>
            </div>
            <div className={styles['td-list']}>
              <div className={`${styles.td}`} style={{ width: '90px' }}>
                1
              </div>
              <div className={`${styles.td}`} style={{ width: '360px' }}>
                音效制作
              </div>
            </div>
          </div>
          <div className={styles['tr-right']}>
            <div className={styles['td-list']}>
              <div className={`${styles.td}`}>3C-395</div>
              <div className={`${styles.td}`}>P2</div>
              <div className={`${styles.td}`}>场景</div>
              <div className={`${styles.td}`}>延期</div>
            </div>
            <div className={styles['td-list']}>
              <div className={`${styles.td}`}>3C-395</div>
              <div className={`${styles.td}`}>P2</div>
              <div className={`${styles.td}`}>场景</div>
              <div className={`${styles.td}`}>延期</div>
            </div>
            <div className={styles['td-list']}>
              <div className={`${styles.td}`}>3C-395</div>
              <div className={`${styles.td}`}>P2</div>
              <div className={`${styles.td}`}>场景</div>
              <div className={`${styles.td}`}>延期</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
