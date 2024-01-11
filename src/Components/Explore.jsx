import { Link } from "react-router-dom"

const Explore = () => {
  return (
    <section id="explore" className="bg-info">
    <div className="d-flex container">
    <div className="w-50 d-flex flex-column justify-content-center py-5">
      <h1 className="text-lg fw-bold fs-1">
        Explore and hire talent <br /> from our platform
      </h1>
      <p>
        We've got experts for every industry - all under one roof! You can{" "}
        <br /> find everything from WordPress developers to Graphic designers to{" "}
        <br /> copywriters and many more at Wakanda.
      </p>
      <Link className="my-2 btn btn-primary list-unstyled w-25" to={"#"}>
        Explore Now
      </Link>
    </div>
    <div className="w-50 smiling-man mx-2">
      <img
        className="kulation"
        src="/smiling-man.svg"
        alt="smilimg man"
      />
      <div className="user-card1">
        <img src="/dianne.png" alt="" />
        <h6>Dianne Russel</h6>
        <br />
        <p>
          <small>
            <i className="fa-solid fa-star" style={{ color: "#fbff00" }} />
            4.9/5
          </small>
        </p>
      </div>
      <div className="user-card2">
        <img src="/Card.svg" alt="" />
      </div>
    </div>
    </div>
  </section>
  )
}

export default Explore
