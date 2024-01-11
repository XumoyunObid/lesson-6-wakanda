import { Link } from "react-router-dom"

const Last = () => {
  return (
    <section id="last" className="d-flex container bg-primary">
    <div className="w-50 px-5">
      <img src="/smiling-woman.png" alt="" />
    </div>
    <div className="w-50 text-white d-flex flex-column justify-content-center">
      <p className="text-uppercase py-2">What are you waiting for?</p>
      <h2 className="text-lg display-5 fw-bold">Find the talent to get your business growing</h2>
      <Link className="my-2 btn btn-light text-primary w-25" to={"#"}>
        Get Started
      </Link>
    </div>
  </section>
  )
}

export default Last
