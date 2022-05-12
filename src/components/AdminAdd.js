import React from "react";
import { useState } from "react";

const AdminAdd = () => {
    const [questionName, setQuestionName] = useState("");
    const [options, setOptions] = useState(["asd",""]);

    const handleOptionChange = (e, i) => {
        let newL = [...options];
        newL[i] = e.target.value;
        console.log(newL);
        setOptions(newL);
    };

    const handleAddOption = () => {
        let newL = [...options, ""];
        setOptions(newL);  
    };

    return(
        <div className="w-100">
            <div className="mx-w-1050 m-rl-auto">
                <div className="centered bg-lb flex-col m-t-10 pd-30">
                    <input type="text" value={questionName} onChange={e => setQuestionName(e.target.value)}/>
                    <button className="m-t-5" onClick={handleAddOption}>Add Option</button>
                    <div className="m-t-5 flex-col">
                        {options.map((o,i) => {
                            return(
                                <div key={i}>
                                    <input type="text" value={o} onChange={e => handleOptionChange(e, i)}/>
                                </div>
                            );
                        })}
                    </div>
                    <button className="m-t-5">Submit Question</button>
                </div>
            </div>
        </div>
    );
}

export default AdminAdd;