import { Component, useEffect, useState } from 'react';
// import './App.css';
// import Form from 'react-jsonschema-form';
// import FormModal from './formModal';
import {FormBuilder, PredefinedGallery} from "@ginkgo-bioworks/react-json-schema-form-builder";
import { mySchema1 } from './dataConfig';
// import moment from 'moment'
// import { refeData } from './data'
// import { mySchema1 } from './dataConfig';
// mySchema1


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        schema: JSON.stringify(mySchema1),
        uischema: '{}'
      };
    }
    render() {
      return (
        <div>
          <FormBuilder
            schema={this.state.schema}
            uischema={this.state.uischema}
            onChange={(newSchema, newUiSchema) => {
                console.log(newSchema,newUiSchema)
                this.setState({
                schema: newSchema,
                uischema: newUiSchema
                
              })
            }}
            
          />
          <PredefinedGallery
            schema={this.state.schema}
            uischema={this.state.uischema}
            onChange={(newSchema, newUiSchema) => {
              this.setState({
                schema: newSchema,
                uischema: newUiSchema
              })
            }}
          />
          <button onClick={()=>{console.log(this.state.schema)}} >Submit</button>
        </div>
      );
    }
  }
export default App