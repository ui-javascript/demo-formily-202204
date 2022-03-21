import React from 'react';
import ReactDOM from 'react-dom';
import FR from './components/Demo';
import { expression } from './data/schema';

const App = () => <FR schema={expression} />;


ReactDOM.render(<App />, document.getElementById('root'));
