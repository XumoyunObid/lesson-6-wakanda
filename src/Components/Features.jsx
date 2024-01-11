
const Features = () => {
  return (
    <section id="features" className="bg-primary text-light py-5">
    <div className="container features-titles text-center">
      <p className="text-uppercase">feature</p>
      <h2 className="text-lg my-5 fw-bold">
        The benefit of using <br /> our platform
      </h2>
    </div>
    <article className="container d-flex gap-3">
      <div className="flex-1 features-cards">
        <img className="bg-white p-4 rounded-circle mb-3" src="/award.svg" alt="" />
        <h3 className="my-2 text-md">Professional &amp; Fast</h3>
        <p>
          Search and hire the most talented freelancers to match your needs. No
          matter what you need done, we've got the perfect freelancer for you.
        </p>
      </div>
      <div className="flex-1 features-cards">
        <img className="bg-white p-4 rounded-circle mb-3" src="/headphones.svg" alt="" />
        <h3 className="my-2 text-md">24/7 support</h3>
        <p>
          You have any concerns or questions? Don’t worry, we have our support
          team to help you at anytime and anywhere.
        </p>
      </div>
      <div className="flex-1 features-cards">
        <img className="bg-white p-4 rounded-circle mb-3" src="/verified_user.svg" alt="" />
        <h3 className="my-2 text-md">Safe &amp; Secure</h3>
        <p>
          We know that safety is the most important thing for our customer, so
          all of our payments are processed instantly and securely.
        </p>
      </div>
    </article>
  </section>
  )
}

export default Features
