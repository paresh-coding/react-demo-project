// import react, { useEffect, useState } from "react"
// import Form from "react-jsonschema-form"
// import Modal from 'react-bootstrap/Modal';
// import { json1, json2, mySchema1, mySchema2 } from "./data";
// import Button from 'react-bootstrap/Button';

// function FormModal(props) {
//     const [formSchema, setFormSchema] = useState(mySchema1)

//     function mainBindFunction(mainObj, schema) {

//         recurObject(schema);

//         function recurObject(recObj) {
//             for (var schemaProps in recObj) {
//                 if (typeof recObj[schemaProps] === "object") {
//                     let obj1 = recObj[schemaProps];
//                     if (recObj[schemaProps].hasOwnProperty("type") && schemaProps !== "items" && schemaProps !== "default") {
//                         recObj[schemaProps] = {
//                             ...recObj[schemaProps],
//                             default: dynamicBindingData(schemaProps, recObj[schemaProps]['type'])[0] || ''
//                         }
//                     }
//                     recurObject(recObj[schemaProps])
//                 }
//             }
//         }

//         function dynamicBindingData(schemaProps, type) {
//             let data = []
//             secondRecursionObj(mainObj);

//             function secondRecursionObj(obj) {
//                 for (var mainObjProps in obj) {
//                     if (typeof obj[mainObjProps] === "object") {
//                         if (mainObjProps === schemaProps) {
//                             if (type === "array") {
//                                 data.push(obj[mainObjProps][0])
//                             }
//                         } else {
//                             secondRecursionObj(obj[mainObjProps])
//                         }
//                     } else if (typeof obj[mainObjProps] === "array") {
//                         if (mainObjProps === schemaProps) {
//                             data.push(obj[mainObjProps][0])
//                         }
//                     } else if (typeof obj[mainObjProps] === "string") {
//                         if (mainObjProps === schemaProps) {
//                             data.push(obj[mainObjProps])
//                         }
//                     }
//                 }
//             }
//             return data
//         }

//         return schema
//     }

//     useEffect(() => {
//         setFormSchema(mainBindFunction(json1, mySchema1));
//     }, [])


//     useEffect(
//         () => {
//             handelMutation()
//         }, [props.showModal]
//     )
//     function handelMutation() {
//         if (props.showModal) {
//             const mainLable = document.getElementsByClassName("field-string");

//             for (var el in mainLable) {
//                 if (mainLable[el].style) {
//                     mainLable[el].style["display"] = "flex"
//                     mainLable[el].style["margin-block"] = "10px"
//                     mainLable[el].style["min-width"] = "100%"
//                     const firstLable = mainLable[el].children[0]
//                     firstLable.style["flex"] = "0.25"
//                     firstLable.style["font-weight"] = "600"
//                 }
//             }
//             const elem = document.getElementsByClassName("form-control");
//             for (var el in elem) {
//                 if (elem[el].style) {
//                     elem[el].style["border-radius"] = '5px';
//                     elem[el].style["flex"] = "0.25"
//                     elem[el].style["padding-block"] = "6px"
//                     elem[el].style["margin-left"] = '10px';
//                 }
//             }
//             const mainObj = document.getElementsByTagName("fieldset")
//             for (var el in mainObj) {
//                 if (elem[el].style) {
//                     mainObj[el].style["border-width"] = "0px"
//                 }

//             }
//             const button = document.getElementsByClassName("btn-add")
//             for (var element in button) {
//                 if (button[element] instanceof HTMLElement) {
//                    button[element].style["width"] = "60px" 
//                    button[element].style["padding"] = "10px 10px"
//                    button[element].innerHTML = "Add"
//                    button[element].style["background-color"]="green"
                        
                   
//                 }
//             }
//             const buttonDelete = document.getElementsByClassName("array-item-remove")
//             for (var element in buttonDelete) {
//                 if (buttonDelete[element] instanceof HTMLElement) {
//                     buttonDelete[element].innerHTML = "Remove"
//                     buttonDelete[element].style["background-color"]="red"
 
                        
                   
//                 }
//             }
//             // const buttonDown = document.getElementsByClassName("array-item-move-down")
//             // for (var element in buttonDown) {
//             //     if (buttonDown[element] instanceof HTMLElement) {
//             //         buttonDown[element].innerHTML = "Down"
//             //         buttonDown[element].style["background-color"]="blue"
 
                        
                   
//             //     }
//             // }

//         }
//     }
//     setInterval(() => { handelMutation() }, 500)

//     return (
//         // <Modal show={props.showModal} onHide={props.hideModal} size="Xl" className="Modal-Container" >
//         //     <Modal.Header closeButton>
//         //         <Modal.Title>Form Input</Modal.Title>
//         //     </Modal.Header>
//         //     <Modal.Body>
//         //         <div className='test'>
//         //             <Form   schema={formSchema} />
//         //         </div></Modal.Body>
//         //     <Modal.Footer>
//         //         <Button onClick={props.hideModal} variant="secondary" >
//         //             Close
//         //         </Button>
//         //         <Button variant="primary" >
//         //             Save Changes
//         //         </Button>
//         //     </Modal.Footer>
//         // </Modal>
//         <Form schema={formSchema} />
//     )


// }

// export default FormModal