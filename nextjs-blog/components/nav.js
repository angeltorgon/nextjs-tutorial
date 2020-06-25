import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = (e) => {
        console.log("is collapsed - ", isCollapsed)
        if(isCollapsed) {
            setIsCollapsed(false)
        } else {
            setIsCollapsed(true)
        }
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link href="/"><a class="navbar-brand" href="#">AT</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" onClick={handleToggle}></span>
            </button>
            <div className={`${isCollapsed ? "collapse navbar-collapse" : "navbar-collapse"}`} id="navbarColor02" right>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/"><a class="nav-link" href="#">Blog <span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item active">
                        <Link href="/porfolio"><a class="nav-link" href="#">Porfolio <span class="sr-only">(current)</span></a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
