function mainBindFunction(mainObj, schema) {

    recurObject(schema);

    function recurObject(recObj) {
        for (var schemaProps in recObj) {
            if (typeof recObj[schemaProps] === "object") {
                let obj1 = recObj[schemaProps];
                if (recObj[schemaProps].hasOwnProperty("type") && schemaProps !== "items" && schemaProps !== "default") {
                    recObj[schemaProps] = {
                        ...recObj[schemaProps],
                        default: dynamicBindingData(schemaProps, recObj[schemaProps]['type'])[0] || ''
                    }
                }
                recurObject(recObj[schemaProps])
            }
        }
    }

    function dynamicBindingData(schemaProps, type) {
        let data = []
        secondRecursionObj(mainObj);

        function secondRecursionObj(obj) {
            for (var mainObjProps in obj) {
                if (typeof obj[mainObjProps] === "object") {
                    if (mainObjProps === schemaProps) {
                        if (type === "array") {
                            data.push(obj[mainObjProps][0])
                        }
                    } else {
                        secondRecursionObj(obj[mainObjProps])
                    }
                } else if (typeof obj[mainObjProps] === "array") {
                    if (mainObjProps === schemaProps) {
                        data.push(obj[mainObjProps][0])
                    }
                } else if (typeof obj[mainObjProps] === "string") {
                    if (mainObjProps === schemaProps) {
                        data.push(obj[mainObjProps])
                    }
                }
            }
        }
        return data
    }

    return schema
}


function mainObj(recObj, array, key){
    recurObject(recObj, array, key);
    function recurObject(recObj, array, key) {
        for (var schemaProps in recObj) {
           
            if (typeof recObj[schemaProps] === "object") {
                // let obj1 = recObj[schemaProps];
                // console.log(schemaProps);    
                if (schemaProps === "Hardware_Templates") {
                    console.log(schemaProps,array,key);
                    recObj[schemaProps] = {
                        ...recObj[schemaProps],
                        enum: [
                            ...array
                        ]
    
                    }
                }
                recurObject(recObj[schemaProps])
            }
        }
    }
return recObj

}




export {mainBindFunction,mainObj}
