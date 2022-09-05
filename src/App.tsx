import React, { Component, useEffect, useState } from 'react';
// import './App.css';
// import Form from 'react-jsonschema-form';
// import FormModal from './formModal';
import { FormBuilder, PredefinedGallery } from "@ginkgo-bioworks/react-json-schema-form-builder";
import { mySchema1, mySchema2, json1, json2 } from './dataConfig';
// import moment from 'moment'
// import { refeData } from './data'
// import { mySchema1 } from './dataConfig';
// mySchema1
import Form from 'react-jsonschema-form';
import Modal from 'react-bootstrap/Modal';
import mainBindFunction from './services';
import MainModal from './MainModal';



function App() {

  

  const [schema, setSchema] = React.useState(JSON.stringify(mySchema1));
  const [formData, setformData] = React.useState({});
  const [uischema, setUiSchema] = React.useState('{}');
  const [showModal , setShowModal] = React.useState(false);

  return (
    <>
      <div>
        {/* <FormBuilder
          schema={schema}
          uischema={uischema}
          onChange={(newSchema: string, newUiSchema: string) => {
            setSchema(newSchema);
            setUiSchema(newUiSchema)
          }}
        /> */}
        <PredefinedGallery
          schema={schema}
          uischema={uischema}
          onChange={(newSchema: string, newUiSchema: string) => {
            setSchema(newSchema);
            setUiSchema(newUiSchema);
            console.log(JSON.parse(schema),JSON.parse(uischema));
          }}
        />

        <button onClick={() => {
          setShowModal(true)
        }} >Preview</button>

        {showModal? <MainModal></MainModal>:null}
        
      </div>
    </>


  );

}
export default App;
