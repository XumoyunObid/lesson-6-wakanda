import { Link } from "react-router-dom"

const Showcase = () => {
  return (
    <section id="hero" className="container d-flex py-2 vh-50">
    <div className="w-50 d-flex flex-column justify-content-center">
      <h1 className="display-3 fw-bold main-title">
        Recruit top talented freelancer for your business
      </h1>
      <p>
        Connect you to thoudsands of talented freelancer from <br /> any
        industry. You can have the best people in just few <br /> simple steps.
      </p>
      <Link className="my-2 btn btn-primary list-unstyled w-25" to={"#"}>
        Get Started
      </Link>
    </div>
    <div className="w-50 businessman mx-2 px-5">
      <img src="/businessman.png" alt="smilimg businessman" />
      <img src="/businessman-bg.png" alt="" className="businessman-bg"/>
    </div>
  </section>
  )
}

export default Showcase
