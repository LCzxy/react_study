import { useState } from 'react';
import { Menu } from 'antd';
import { history } from 'umi';
import { menuArr } from '../config/commonConfig';

const Index = (props: any) => {
  const [selectKey, setSelectKey] = useState('some');

  const handleClick = (obj: any) => {
    setSelectKey(obj.key);
    history.push(`/${obj.key}`);
  };
  return (
    <span>
      <Menu
        onClick={(obj) => handleClick(obj)}
        selectedKeys={[selectKey]}
        mode="horizontal"
      >
        {menuArr.map((it: any) => (
          <Menu.Item key={it.key}>{it.value}</Menu.Item>
        ))}
      </Menu>
      <div>{props.children}</div>
    </span>
  );
};

export default Index;
