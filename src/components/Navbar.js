import { Link } from 'react-router-dom';

function Navbar() {
    return (<div>
        {/* nav bar */}
        <nav className="navbar navbar-expand-sm ">
            <a className="navbar-brand">
                <img id="logo" src="https://f4.bcbits.com/img/a1063275714_10.jpg" />
            </a>
            <a className="navbar-brand" href="#">Title</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    {/* link for Home */}
                    <li className="nav-item px-5">
                        <Link className="nav-link" to="">Home</Link>
                    </li>
                    {/* link for Podcasts */}
                    <li className="nav-item px-5">
                        <Link className="nav-link" to="Blog">Blog</Link>
                    </li>
                    {/* link for Artists */}
                    <li className="nav-item px-5">
                        <Link className="nav-link" to="About">About</Link>
                    </li>
                    {/* link for Categories */}
                    <li className="nav-item px-5">
                        <Link className="nav-link" to ="Contact" >Contact</Link>
                     </li>

               
                </ul>
                <form className="form-inline my-5 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                </form>

            </div>
        </nav>
    </div>)
}

export default Navbar;