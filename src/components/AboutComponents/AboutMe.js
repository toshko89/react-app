
export default function AboutMe() {
  return (
    <section id="team" className="padd-section text-center wow fadeInUp">

      <div className="container">
        <div className="section-title text-center">
          <h2>That's me</h2>
          <p className="separator">My first React App</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-4 col-lg-3">
            <div className="team-block bottom">
              <img src="img/team/IMG_7579.jpg" className="img-responsive" alt="img" />
              <div className="team-content">
                <p>Platform for sharing children's books, using React, Firebase auth, Fire storage and Firestore as DB.</p>
                <span>creator</span>
                <h4>Todor Petkov</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}