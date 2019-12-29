import React from 'react';

import Form from 'react-jsonschema-form';

import {formBaseElement} from './schema/form-element';

const log = (type) => console.log.bind(console, type);

function App() {
  function downloadTxtFile(data) {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(data.formData)], {type: 'application/json'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  return (
    <div className="App">
      <div className="container">
        <Form schema={formBaseElement}
              onChange={log('changed')}
              onSubmit={downloadTxtFile}
              onError={log('errors')}/></div>
    </div>
  );
}

export default App;
