import React, { useEffect } from 'react';
import styles from './index.less';

const Demo = () => {
  const handleWheel = (e: WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      handleHorzScroll(e.deltaX);
    }
  };
  const handleHorzScroll = (scrollLeft: number) => {
    let tboxs = document.querySelectorAll(`.${styles.tbox}`);
    tboxs.forEach((el) => (el.scrollLeft += scrollLeft));
  };
  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
  }, []);
  return (
    <div className={styles['dz-table']} style={{ height: '600px' }}>
      <div className={styles['table-container']}>
        <div className={`${styles['table-item']} ${styles['table-title']}`}>
          <div className={styles['table-item-left']}>
            <div className={`${styles.tbox}`}>
              <div className={styles['tr']}>
                <div className={`${styles.td}`} style={{ width: '90px' }}>
                  序号
                </div>
                <div className={`${styles.td}`} style={{ width: '360px' }}>
                  FT名称
                </div>
              </div>
            </div>
          </div>
          <div className={styles['table-item-right']}>
            <div className={`${styles.tbox} `}>
              <div className={styles['tr']}>
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
          <div className={styles['table-item-left']}>
            <div className={`${styles.tbox}`}>
              <div className={`${styles['tr']} ${styles['tr-title']}`}>
                <div className={`${styles.td}`} style={{ width: '450px' }}>
                  世界与风景
                </div>
              </div>
            </div>
            <div className={styles.tbox}>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['table-item-right']}>
            <div className={`${styles.tbox}`}>
              <div>
                <div className={`${styles['tr']} ${styles['tr-title']}`}>
                  <div className={`${styles.td}`}>分组管理：阿司</div>
                  <div className={`${styles.td}`}>分组PM：阿司</div>
                  <div className={`${styles.td}`}></div>
                  <div className={`${styles.td}`}></div>
                  <div className={`${styles.td}`}></div>
                </div>
              </div>
            </div>
            <div className={styles.tbox}>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['table-item']}>
          <div className={styles['table-item-left']}>
            <div className={`${styles.tbox}`}>
              <div className={`${styles['tr']} ${styles['tr-title']}`}>
                <div className={`${styles.td}`} style={{ width: '450px' }}>
                  世界与风景
                </div>
              </div>
            </div>
            <div className={styles.tbox}>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['table-item-right']}>
            <div className={`${styles.tbox}`}>
              <div>
                <div className={`${styles['tr']} ${styles['tr-title']}`}>
                  <div className={`${styles.td}`}>分组管理：阿司</div>
                  <div className={`${styles.td}`}>分组PM：阿司</div>
                  <div className={`${styles.td}`}></div>
                  <div className={`${styles.td}`}></div>
                  <div className={`${styles.td}`}></div>
                </div>
              </div>
            </div>
            <div className={styles.tbox}>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['table-item']}>
          <div className={styles['table-item-left']}>
            <div className={`${styles.tbox}`}>
              <div className={`${styles['tr']} ${styles['tr-title']}`}>
                <div className={`${styles.td}`} style={{ width: '450px' }}>
                  世界与风景
                </div>
              </div>
            </div>
            <div className={styles.tbox}>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['table-item-right']}>
            <div className={`${styles.tbox}`}>
              <div>
                <div className={`${styles['tr']} ${styles['tr-title']}`}>
                  <div className={`${styles.td}`}>分组管理：阿司</div>
                  <div className={`${styles.td}`}>分组PM：阿司</div>
                  <div className={`${styles.td}`}></div>
                  <div className={`${styles.td}`}></div>
                  <div className={`${styles.td}`}></div>
                </div>
              </div>
            </div>
            <div className={styles.tbox}>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['table-item']}>
          <div className={styles['table-item-left']}>
            <div className={`${styles.tbox}`}>
              <div className={`${styles['tr']} ${styles['tr-title']}`}>
                <div className={`${styles.td}`} style={{ width: '450px' }}>
                  世界与风景
                </div>
              </div>
            </div>
            <div className={styles.tbox}>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`} style={{ width: '90px' }}>
                    1
                  </div>
                  <div className={`${styles.td}`} style={{ width: '360px' }}>
                    音效制作
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['table-item-right']}>
            <div className={`${styles.tbox}`}>
              <div>
                <div className={`${styles['tr']} ${styles['tr-title']}`}>
                  <div className={`${styles.td}`}>分组管理：阿司</div>
                  <div className={`${styles.td}`}>分组PM：阿司</div>
                  <div className={`${styles.td}`}></div>
                  <div className={`${styles.td}`}></div>
                  <div className={`${styles.td}`}></div>
                </div>
              </div>
            </div>
            <div className={styles.tbox}>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
              <div>
                <div className={styles['tr']}>
                  <div className={`${styles.td}`}>3C-395</div>
                  <div className={`${styles.td}`}>P2</div>
                  <div className={`${styles.td}`}>场景</div>
                  <div className={`${styles.td}`}>延期</div>
                  <div className={`${styles.td}`}>延期</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 水平滚动条 */}
      <div className={styles['scrollbar']}>
        <div
          className={`${styles['scrollbar-horz-container']} ${styles.active}`}
        >
          <div className={styles['scrollbar-horz-handler']}></div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
