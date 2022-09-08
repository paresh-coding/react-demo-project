import { Component, useEffect, useState } from 'react';
// import './App.css';
// import Form from 'react-jsonschema-form';
// import FormModal from './formModal';
import { FormBuilder, PredefinedGallery } from "@ginkgo-bioworks/react-json-schema-form-builder";
import { mySchema1, mySchema2, json1, json2, json3, mySchema3, myBaseUiSchema,myBaseSchema, myBaseSchemaLatest, json4, mySchema5 } from './dataConfig';
// import moment from 'moment'
// import { refeData } from './data'
// import { mySchema1 } from './dataConfig';
// mySchema1
import Form from '@rjsf/core';
import Modal from 'react-bootstrap/Modal';
import mainBindFunction from './services';


class App extends Component {
    constructor(props) {
        super(props);

        console.log('myBaseUiSchema',JSON.stringify(myBaseUiSchema));
        this.state = {
            schema: JSON.stringify(myBaseSchema),
            //schema: '{}',
           uischema:'{}',
            //uischema: JSON.stringify(myBaseUiSchema),
             formData: '{}',
            // showForm: false,
        };
        
    }
    render() {
        return (
          <div>
            <FormBuilder
              schema={this.state.schema}
              uischema={this.state.uischema}
              onChange={(newSchema, newUiSchema) => {
                this.setState({
                  schema: newSchema,
                  uischema: newUiSchema
                })
              }}
            />          
              {/* <PredefinedGallery
              schema={this.state.schema}
              uischema={this.state.uischema}
              onChange={(newSchema, newUiSchema) => {
                this.setState({
                  schema: newSchema,
                  uischema: newUiSchema
                })
              }}
            /> */}
            
          </div>
        );
      }
}
export default App