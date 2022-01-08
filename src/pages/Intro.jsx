import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function Intro() {
    return (<Card>
        <div className="intro">
            <h1>Welcome to the Stats-Helper Tool</h1>
            <p>This is a learning tool for statistic students to help break down problems and identify <b><i>key </i></b>variables.</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to="/Tips">Click to start!</Link>
            </p>
        </div>
    </Card>
    )
}

export default Intro
