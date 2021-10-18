import { useState } from 'react';
import { Table, Divider, Badge } from 'antd';
import { stateArr } from '@/config/commonConfig';
import QueryArea from './components/QueryArea';
import styles from './index.less';

interface User {
  name: string;
  email: string;
}

const Index = () => {
  const dataSource = [
    {
      id: 1,
      state: 2,
      principal: {
        name: '刘成',
        email: 'longqian.liucheng@raycloud.com',
      },
      reporter: {
        name: '刘成',
        email: 'longqian.liucheng@raycloud.com',
      },
    },
  ];
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text: number) => {
        return <span>{text}</span>;
      },
    },
    {
      title: '负责人',
      dataIndex: 'principal',
      key: 'principal',
      render: (text: User) => {
        return <span>{text.name}</span>;
      },
    },
    {
      title: '报告人',
      dataIndex: 'reporter',
      key: 'reporter',
      render: (text: User) => {
        return <span>{text.name}</span>;
      },
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      render: (text: number) => {
        const item: any = stateArr.find((it) => it.value === text) || {
          color: 'success',
          label: '开始',
        };
        return <Badge status={item.color} text={item.label} />;
      },
    },
    {
      title: '操作',
      dataIndex: 'opt',
      key: 'opt',
      width: 120,
      render: () => {
        return (
          <span>
            <a>编辑</a>
            <Divider type="vertical" />
            <span className="DelOpt">删除</span>
          </span>
        );
      },
    },
  ];
  return (
    <span className={styles.home}>
      <QueryArea />
      <Table dataSource={dataSource} columns={columns} />
    </span>
  );
};

export default Index;
