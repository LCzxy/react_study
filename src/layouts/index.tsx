import { useState, useEffect } from 'react';
import { Menu, Row, Col } from 'antd';
import { history } from 'umi';
import { menuArr } from '../config/commonConfig';
import styles from './index.less';

const Index = (props: any) => {
  const [selectMainKey, setSelectMainKey] = useState('home');

  useEffect(() => {
    const { pathname } = props.location;
    const item: any = menuArr.find((it) => it.url === pathname);
    item && setSelectMainKey(item.key);
  }, []);

  return (
    <span>
      <Row className={styles.header}>
        <span className={styles.logo}>
          <img
            alt=""
            className={styles.img}
            src={require(`../../public/logo.jpeg`)}
          />
        </span>
        <span className={styles.menu}>
          <Menu selectedKeys={[selectMainKey]} mode="horizontal">
            {menuArr.map((it: any) => (
              <Menu.Item
                onClick={() => {
                  setSelectMainKey(it.key);
                  history.push(`${it.url}`);
                }}
                key={it.key}
              >
                {it.value}
              </Menu.Item>
            ))}
          </Menu>
        </span>
        <span onClick={() => history.push('/login')} className={styles.opt}>
          退出 v
        </span>
      </Row>
      <div className={styles.content}>{props.children}</div>
    </span>
  );
};

export default Index;
