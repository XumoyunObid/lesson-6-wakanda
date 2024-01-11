import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-dark px-5 py-4 text-white mt-5">
    <div className="container d-flex justify-content-around">
      <div className="d-flex flex-column gap-3">
        <img src="/footer-logo.svg" alt="" />
        <div className="py-2 icons d-flex gap-2">
          <i className="fa-brands fa-instagram bg-secondary p-2 rounded-circle" style={{ color: "#ffffff" }} />
          <i className="fa-brands fa-twitter bg-secondary p-2 rounded-circle" style={{ color: "#ffffff" }} />
          <i className="fa-brands fa-youtube bg-secondary p-2 rounded-circle" style={{ color: "#ffffff" }} />
        </div>
      </div>
      <div className="flex-1 footer-links1">
        <ul className="list-unstyled">
          <li>
            <span>Company</span>
          </li>
          <li className="py-1 links">
            <Link to={"#"} className="text-decoration-none text-secondary">About Us</Link>
          </li>
          <li className="py-1 links">
            <Link to={"#"} className="text-decoration-none text-secondary">Blog</Link>
          </li>
          <li className="py-1 links">
            <Link to={"#"} className="text-decoration-none text-secondary">Contact Us</Link>
          </li>
          <li className="py-1 links">
            <Link to={"#"} className="text-decoration-none text-secondary">How it works</Link>
          </li>
          <li className="py-1 links">
            <Link to={"#"} className="text-decoration-none text-secondary">For frealancer</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 footer-links2">
        <ul className="list-unstyled">
          <li>
            <span>Support</span>
          </li>
          <li className="py-1 links">
            <Link to={"#"} className="text-decoration-none text-secondary">Help center</Link>
          </li>
          <li className="py-1 links">
            <Link to={"#"} className="text-decoration-none text-secondary">Terms of service</Link>
          </li>
          <li className="py-1 links">
            <Link to={"#"} className="text-decoration-none text-secondary">Legal</Link>
          </li>
          <li className="py-1 links">
            <Link to={"#"} className="text-decoration-none text-secondary">Privacy Policy</Link>
          </li>
          <li className="py-1 links">
            <Link to={"#"} className="text-decoration-none text-secondary">Status</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h4>Subscribe to our newsletter</h4>
        <form action="button" className="p-2 bg-secondary rounded-2 text-light d-flex justify-content-between align-items-center">
          <input
            className="email bg-secondary border border-0 w-100 text-white"
            type="email"
            placeholder="Your email address"
          />
          <i
            className="fa-regular fa-paper-plane"
            style={{ color: "#ffffff" }}
          />
        </form>
      </div>
    </div>
  </footer>
  )
}

export default Footer
