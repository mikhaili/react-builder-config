import React from 'react';
import 'bootswatch/dist/cerulean/bootstrap.min.css';

import {formBaseElement} from './schema/form-element';
import Form from 'react-jsonschema-form';
import {onSubmit} from './transform';

const log = (type) => console.log.bind(console, type);

function App() {

  return (
    <div className="App">
      <div className="container">
        <Form schema={formBaseElement}
              onChange={log('changed')}
              onSubmit={onSubmit}
              onError={log('errors')}/></div>
    </div>
  );
}

export default App;
