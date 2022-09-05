import React from "react";
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

function MainModal({schema}) {

    return (<Modal show={true}  >
        <Modal.Body>
            
                         <Form
                schema={schema}
                uiSchema={{}}
                // onChange={(newFormDatad) =>setformData(newFormDatad)}
                formData={{}}
                submitButtonMessage={"Submit"}
            // onSubmit=(()
            />
        </Modal.Body>
    </Modal>)


}

export default MainModal