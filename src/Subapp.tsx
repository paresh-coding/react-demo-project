import React ,{useState} from "react";
import App from "./App";
// import react from "react";



function Subapp() {
 const [showBuilder , setShowBuilder] =  useState(false);


    return (
        <>
            <div className="d-flex f-row">
                <select style={{ fontSize: "17px" }} className="form-control rounded-0 m-1" >
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
            <div>
                <button onClick={()=>setShowBuilder(true)}>
                    CREATE NEW SCHEMA
                </button>
            </div>
            <div>
                {showBuilder? <App></App>:null}
            </div>

        </>


    )

}


export default Subapp;