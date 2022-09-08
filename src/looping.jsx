import React, { useEffect, useState } from 'react';
import MainModal from './MainModal';
import { latestConfig, latestSchema } from './newDataConfig';
// import myBaseSchema from './baseSchema';
// MainModal
// import {baseSchema} from "./dataConfig"


function LoopingMode() {

    const [schema, setSchema] = useState(latestSchema);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setSchema(mainloopingFunction(schema));
    }, []);
    useEffect(() => {
    setShowModal(true)    
    }, [schema]);

    function mainloopingFunction(obj) {
        let hard = latestConfig.HeadEndTemplateHdr.name.split("-");

        recurObject(obj);
        function recurObject(recObj) {
            for (var schemaProps in recObj) {
                if (typeof recObj[schemaProps] === "object") {
                    if (schemaProps === "lruSet") {
                        for (let ar in recObj[schemaProps]["items"]) {
                            let ele = recObj[schemaProps]["items"][ar]["properties"];
                            if (ar === "0") {
                                console.log(0)
                                ele.name = {
                                    ...ele.name,
                                    default: hard[2].split("_")[0]
                                }
                            } else {
                                ele.name = {
                                    ...ele.name,
                                    default: hard[3].split("_")[0]
                                }
                            }



                        }
                    }

                    recurObject(recObj[schemaProps])
                }
            }
        }
        console.log(obj);
        return obj
    }

    return (
        <MainModal schema={schema} showModal={showModal}>

        </MainModal>
    );




}


export default LoopingMode;