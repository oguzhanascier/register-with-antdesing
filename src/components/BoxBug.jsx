import { Select } from 'antd';
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const BugBox = () => (
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"

    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
      {
        value: 'jerry',
        label: 'Jerry',
      },
      {value:'george',
    label:'george'}, {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
      {
        value: 'jerry',
        label: 'Jerry',
      },
      {value:'george',
    label:'george'}, {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
      {
        value: 'jerry',
        label: 'Jerry',
      },
      {value:'george',
    label:'george'}, {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
      {
        value: 'jerry',
        label: 'Jerry',
      },
      {value:'george',
    label:'george'}, {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
      {
        value: 'jerry',
        label: 'Jerry',
      },
      {value:'george',
    label:'george'}, {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
      {
        value: 'jerry',
        label: 'Jerry',
      },
      {value:'george',
    label:'george'}, {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
      {
        value: 'jerry',
        label: 'Jerry',
      },
      {value:'george',
    label:'george'}, {
        value: 'ali',
        label: 'ali',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
      {
        value: 'jerry',
        label: 'Jerry',
      },
      {value:'george',
    label:'george'},
    
    ]}
  />
);
export  {BugBox};
