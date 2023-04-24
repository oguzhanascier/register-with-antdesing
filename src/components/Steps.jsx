import { Divider, Steps } from 'antd';
import { useState } from 'react';
import './../App.css'
const Step = () => {

  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const description = 'This is a description.';
  return (
    <>
      <Steps
      className="step"
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            description,
          },
          {
            title: 'Step 2',
            description,
          },
          {
            title: 'Step 3',
            description,
          },
        ]}
      />

      <Divider />


    </>
  );
};
export  {Step};
