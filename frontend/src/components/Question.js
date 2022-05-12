
import { useState } from "react";

function Question(props) {

    const [option, selectOption] = useState(0);
    const { question, options } = props;

    return <div className="question">
        <div className="question-text">
            {question}
        </div>

        <div className="options">

            {
                options.map((el, idx) => {
                    return <button onClick={(e) => selectOption(e.target.id)} id={idx + 1} className={'option' + (option == idx + 1 ? ' selected' : '')}>
                    {el}
                </button>
                })   
            }
        </div>
    </div>

}

export default Question