
import "./root.css"

function Main(){

    return <div className="main-content">

        <div className="question">
            What do you think about some topic ?
        </div>

        <div className="options">
            <button className="option">
                Option 1
            </button>

            <button className="option">
                Option 2
            </button>
        </div>    
        <button type="submit">
                Submit
        </button>
    </div>

}

export default Main