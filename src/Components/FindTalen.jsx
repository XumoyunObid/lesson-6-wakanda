
const FindTalen = () => {
  return (
    <section id="find-talent" className="container d-flex py-5">
    <article className="w-50 d-flex justify-content-center">
      <img src="/talents.png" alt=""  width={451} height={564} />
    </article>
    <div className="w-50 d-flex flex-column justify-content-center gap-4">
      <h2 className="text-lg fw-bold fs-1 facilities-title">
        Wakanda is an easy <br /> platform to find talent
      </h2>
      <p className="fw-bold">
        <span className="bg-info px-2 py-1 rounded-circle">1</span> Sign in to our website
      </p>
      <p className="fw-bold">
        <span className="bg-info px-2 py-1 rounded-circle">2</span> Fill out necessary information
      </p>
      <p className="fw-bold">
        <span className="bg-info px-2 py-1 rounded-circle">3</span> Discover thoudsands of freelancers
      </p>
      <p className="fw-bold">
        <span className="bg-info px-2 py-1 rounded-circle">4</span> View freelancer’s profile and hire
      </p>
      <p className="fw-bold">
        <span className="bg-info px-2 py-1 rounded-circle">5</span> Complete payment &amp; it’s time
        to work!
      </p>
    </div>
  </section>
  )
}

export default FindTalen
