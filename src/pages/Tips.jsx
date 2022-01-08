import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function Tips() {
    return (
    <Card>
        <div className="intro">
            <h1>Tip: Understand what is <i>given</i>!</h1>
            <p>Often times, when we are presented in front of a Statistic question, we get overwhelmed by all the information in a question. </p>
            <p>It is important to identify each data piece and which will be used to solve our problem.
            </p> 
            <p>Take a deep breathe and let's try identifying the key points!</p>
            <p>
            <Link to ="/Sample1">
                <button>Next</button> 
            </Link>           
            </p>
        </div>
    </Card>
)
}

export default Tips
