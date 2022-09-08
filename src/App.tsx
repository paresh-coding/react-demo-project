import React, { useEffect } from "react";
import { baseSchema } from "./dataConfig"
// import { useState } from "react";

function App() {

    useEffect(() => {
        createElements(baseSchema);
    }, []);

    function createElements(creatObject: any) {
        if (typeof creatObject === "object" && !Array.isArray(creatObject)) {
            let requiredProperties: string[] = []
            if (creatObject.hasOwnProperty("type") && creatObject["type"] === "array") {
                createElements(creatObject["items"]);
            } else {
                if (creatObject.hasOwnProperty("required")) {
                    if (Array.isArray(creatObject["required"])) {
                        creatObject["required"].forEach((req_prop: string) => {
                            requiredProperties.push(req_prop);
                        })
                    }
                }
                if (requiredProperties.length > 0) {
                    let select = document.createElement("select");
                    // select.id = "Main_id"
                    select.onchange = (e: any) => { createElements(JSON.parse(e.target.value)) }
                    let options = document.createElement("option");
                    options.innerText = `Please select`;
                    select.appendChild(options);
                    requiredProperties.forEach((value) => {
                        let options = document.createElement("option");
                        options.innerText = value;
                        options.value = JSON.stringify(creatObject.properties[value])
                        select.appendChild(options);
                    });
                    document.getElementById("schema_builder")?.appendChild(select);
                }
            }

        }
    }

    return (
        <div id="schema_builder">

        </div>
    );
}



export default App
