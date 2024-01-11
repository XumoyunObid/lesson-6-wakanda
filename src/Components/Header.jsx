import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="d-flex container py-3 align-items-center justify-content-between">
                <Link className="" to={"index.html"}>
                    <img src="/nav-logo.svg" alt="" />
                </Link>
                <ul className="d-flex gap-3 align-items-center list-unstyled">
                    <li className="">
                        <Link to={"/"} className="text-dark text-decoration-none">Home</Link>
                    </li>
                    <li className="">
                        <Link to={"/"} className="text-dark text-decoration-none">About us</Link>
                    </li>
                    <li className="">
                        <Link to={"/"} className="text-dark text-decoration-none">How it works</Link>
                    </li>
                    <li className="">
                        <Link to={"/"} className="text-dark text-decoration-none">For frealancer</Link>
                    </li>
                    <li className="btn btn-primary text-light">
                        <Link to={"/"} className="text-light text-decoration-none">Get Started</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
