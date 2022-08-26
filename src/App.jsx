import { Component, useEffect, useState } from 'react';
// import './App.css';
// import Form from 'react-jsonschema-form';
// import FormModal from './formModal';
import { FormBuilder, PredefinedGallery } from "@ginkgo-bioworks/react-json-schema-form-builder";
import { mySchema1, mySchema2,json1,json2 } from './dataConfig';
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
        this.state = {
            schema: JSON.stringify(mySchema2),
            uischema: '{}',
            formData: {},
            showForm: false,
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


                <button onClick={() => {
                    console.log(mainBindFunction(json2,mySchema2))
                   this.setState({
                    schema: JSON.stringify(mainBindFunction(json2,mySchema2))  
                   })                    
                    this.state.showForm = true }} >Preview</button>

                <Modal show={this.state.showForm} onHide={() => { this.state.showForm = false }} size="Xl" className="Modal-Container" >
                    <Modal.Body  >

                        <Form
                            schema={JSON.parse(this.state.schema)}
                            uiSchema={JSON.parse(this.state.uischema)}
                            onChange={(newFormData) => this.setState({ formData: newFormData.formData })}
                            formData={this.state.formData}
                            submitButtonMessage={"Submit"}
                            onSubmit=(()=>{})
                        />
                    </Modal.Body>
                </Modal >


            </div>

        );
    }
}
export default App