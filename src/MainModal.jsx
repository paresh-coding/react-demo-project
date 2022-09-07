import React ,{useState} from "react";
// import './App.css';
// import Form from 'react-jsonschema-form';
// import FormModal from './formModal';
import { FormBuilder, PredefinedGallery } from "@ginkgo-bioworks/react-json-schema-form-builder";
import { mySchema1, mySchema2, json1, json2, propebaseSchema } from './dataConfig';
// import moment from 'moment'
// import { refeData } from './data'
// import { mySchema1 } from './dataConfig';
// mySchema1
import Form from 'react-jsonschema-form';
import Modal from 'react-bootstrap/Modal';
import mainBindFunction from './services';
// propebaseSchema

function MainModal({schema,showModal}) {
    const [formData, setFomData] = useState({})

const demoForm  = {
    "title": "A registration form",
    "description": "A simple form example.",
    "type": "object",
    "required": [
      "firstName",
      "lastName"
    ],
    "properties": {
      "firstName": {
        "type": "string",
        "title": "First name",
        "default": "Chuck"
      },
      "lastName": {
        "type": "string",
        "title": "Last name"
      },
      "telephone": {
        "type": "string",
        "title": "Telephone",
        "minLength": 10
      }
    }
  }


    return (
    <Modal show={true}  >
        <Modal.Body>
            <Form
                schema={{...schema,properties:schema.definitions}}
                uiSchema={{}}
                onChange={(newFormDatad) => setFomData(newFormDatad)}
                formData={formData}
                submitButtonMessage={"Submit"}
                onSubmit={() => {console.log(formData)}}
            />
        </Modal.Body>
    </Modal>)


}

export default MainModal