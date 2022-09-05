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

function MainModal() {




    const schema = {
        "type": "object",
        "title": "Number fields & widgets",
        "properties": {
            "hardwa": {
                "type": "number",
                "title": "Number enum",
                "enum": [
                    1,
                    2,
                    3
                ]
            },
            "ProductConfigBody": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                    "Config _sections": {
                        "type": "array",
                        "items": {
                            "$ref": "#/definitions/ConfigSection"
                        }
                    }
                },
                "required": [
                    "Config _sections"
                ],
                "title": "ProductConfigBody"
            },


        }
    }



    const uiSchema = {
        "integer": {
            "ui:widget": "updown"
        },
        "numberEnumRadio": {
            "ui:widget": "radio",
            "ui:options": {
                "inline": true
            }
        },
        "integerRange": {
            "ui:widget": "range"
        },
        "integerRangeSteps": {
            "ui:widget": "range"
        }
    }

    return (<Modal show={true}  >
        <Modal.Body>
            <div className="d-flex f-row">
                <select style={{ fontSize: "17px" }} className="form-control rounded-0 ml-1" >
                    <option>Select Hardware Tamplate</option>
                    <option>T-FS_1-AI_1-1</option>
                    <option>T-FS_1-AI_1-FS_9-1</option>
                    <option>T-AI_1-FS_9-1</option>


                </select>

                <select style={{ fontSize: "17px" }} className="form-control rounded-0 mr-1" >
                    <option>LRU Config</option>
                    <option>FS_1



                    </option>
                    <option>AI_1</option>
                    <option>FS_1</option>
                    <option>AI_1</option>

                </select>
            </div>
            <Form
                schema={mySchema1}
                uiSchema={uiSchema}
                // onChange={(newFormDatad) =>setformData(newFormDatad)}
                formData={{}}
                submitButtonMessage={"Submit"}
            // onSubmit=(()
            />
        </Modal.Body>
    </Modal>)


}

export default MainModal