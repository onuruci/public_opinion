
import "./root.css"
import { useState } from "react";
import Question from "../Question";

function Main() {

    return <div className="main-content">

        {Question({question: "What do you think about some topic", options: ["Yes", "No"]})}

        <button className="question-submit" type="submit">
            Submit
        </button>
    </div>

}

export default Main