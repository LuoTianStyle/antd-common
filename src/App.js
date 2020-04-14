import React from 'react';
import { DatePicker } from 'antd';
import moment from 'dayjs';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const App = () => (
  <div>
    <RangePicker
      defaultValue={[moment('2016/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
  </div>
);
export default App;




