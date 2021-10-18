import { Select } from 'antd';
interface Props {
  label: string;
  placeHolder: string;
  dataSource: any;
}
const QuerySelect = (props: Props) => {
  const { label, placeHolder, dataSource } = props;

  return (
    <span>
      <span>{label}：</span>
      <Select style={{ width: '180px' }} placeholder={placeHolder}>
        {dataSource.map((it: any) => (
          <Select.Option value={it.value} key={it.value}>
            {it.label}
          </Select.Option>
        ))}
      </Select>
    </span>
  );
};

export default QuerySelect;
