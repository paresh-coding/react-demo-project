import React, { Component, useEffect, useState } from 'react';
// import './App.css';
// import Form from 'react-jsonschema-form';
// import FormModal from './formModal';
import { FormBuilder, PredefinedGallery } from "@ginkgo-bioworks/react-json-schema-form-builder";
import { mySchema1, mySchema2, json1, json2, baseSchema } from './dataConfig';
// import moment from 'moment'
// import { refeData } from './data'
// import { mySchema1 } from './dataConfig';
// mySchema1
import Form from 'react-jsonschema-form';
import Modal from 'react-bootstrap/Modal';
// import { mainObj } from './services';
import MainModal from './MainModal';



function App() {



  const [schema, setSchema] = React.useState(baseSchema);
  const [formData, setformData] = React.useState({});
  const [uischema, setUiSchema] = React.useState('{}');
  const [showModal, setShowModal] = React.useState(false);
  const [showBuilder, setShowBuilder] = useState(false);
  const [lruConf, setlruConf] = useState(["FS_1", "AI_1", "FS_1", "AI_1", "FS_1", "AI_1"]);
  const [tempConf, setTempConf] = useState(["T-FS_1-AI_1-1", "T-FS_1-AI_1-FS_9-1", "T-AI_1-FS_9-1"]);

  const [selectedlruConf, setselectedlruConf] = useState([]);
  const [selectedtempConf, setselectedTempConf] = useState([]);



  function mainObj(main, ay, k) {
    recurObject(main, ay, k);
    
    function recurObject(recObj, array, key) {
      for (var schemaProps in recObj) {

        if (typeof recObj[schemaProps] === "object") {
          // let obj1 = recObj[schemaProps];
          // console.log(schemaProps);    
          if (schemaProps === "Hardware_Templates") {
            console.log(schemaProps, array, key);
            recObj[schemaProps] = {
              ...recObj[schemaProps],
              enum: [
                ...selectedtempConf
              ]

            }
          }
          if (schemaProps === "LRU") {
            // console.log(schemaProps, array, key);
            recObj[schemaProps] = {
              ...recObj[schemaProps],
              enum: [
                ...selectedlruConf
              ]

            }
          }
          recurObject(recObj[schemaProps])
        }
      }
    }
    return main

  }



  const handelTemplate = (e) => {
    const value = e.target.value;
    if (e.target.name = "template_config") {
      setselectedTempConf([...selectedtempConf, value]);
    }

  }
  const handelNewSchema = () => {
    // console.log(mainObj(schema, selectedtempConf, "Hardware_Templates"))
     setSchema(mainObj(schema));
    //  setSchema(mainObj(schema,selectedlruConf,"LRU"));
    setTimeout(() => {
      setShowBuilder(!showBuilder)
    }, 2000)

  }


  return (
    <>
      <div className="d-flex flex-row">

        <select name="template_config" style={{ fontSize: "17px" }} className="form-control rounded-0 m-1" onChange={handelTemplate}>
          <option>Select Hardware Tamplate</option>
          {tempConf.map((da, index) => <option value={da}>{da}</option>)}

        </select>
        <button>ADD TEMPLATE</button>


      </div>
      <div>
        {selectedtempConf.map((da) => <span className="m-2"> {da}</span>)}
      </div>


      <div className="d-flex flex-row">
        <select name="lru_config" style={{ fontSize: "17px" }} className="form-control rounded-0 mr-1" onChange={(e) => setselectedlruConf([...selectedlruConf, e.target.value])} >
          <option>LRU Config</option>
          {lruConf.map((da, index) => <option value={da}>{da}</option>)}

        </select>
        <button>ADD LRU</button>

      </div>
      <div>
        {selectedlruConf.map((da) => <span className="m-2"> {da}</span>)}
      </div>

      <div>
        <button onClick={handelNewSchema}>
          CREATE NEW SCHEMA
        </button>
      </div>
      <div>
        {showBuilder ? <>
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
              schema={JSON.stringify(schema)}
              uischema={uischema}
              onChange={(newSchema, newUiSchema) => {
                setSchema(JSON.parse(newSchema));
                setUiSchema(newUiSchema);
                // console.log(JSON.parse(schema),JSON.parse(uischema));
              }}
            />

            <button onClick={() => {
              setShowModal(true)
            }} >Preview</button>

            {/* {true ? <MainModal  > </MainModal> : null} */}

          </div>
        </>
          : null}
      </div>

    </>





  );

}
export default App;
