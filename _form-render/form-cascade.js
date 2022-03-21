import React from 'react';
import ReactDOM from 'react-dom';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '展示更多内容',
      type: 'boolean',
    },
    select1: {
      title: '请假原因',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['病假', '有事', '其它 (需注明具体原因)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio',
    },
    input1: {
      title: '具体原因',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}',
    },
  },
};

const App = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
