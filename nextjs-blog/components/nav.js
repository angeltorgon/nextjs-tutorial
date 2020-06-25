import Link from 'next/link'

export default function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link href="/"><a class="navbar-brand" href="#">AT</a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link href="/"><a class="nav-link" href="#">Blog <span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li class="nav-item active">
                        <Link href="/porfolio"><a class="nav-link" href="#">Porfolio <span class="sr-only">(current)</span></a></Link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
