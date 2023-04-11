import React, { useEffect, useState } from 'react';
import { getStuData } from '../../api/stu';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
export default function Stu() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const res = getStuData();
    if (res) {
      setDataSource(res);
    }
  }, []);
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}
