import { Select } from 'antd';
import { stateArr } from '@/config/commonConfig';
import QuerySelect from '@/pages/components/QuerySelect';

const QueryArea = () => {
  return (
    <span>
      <QuerySelect
        label="状态"
        placeHolder="请选择状态"
        dataSource={stateArr}
      />
    </span>
  );
};

export default QueryArea;
