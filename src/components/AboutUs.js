
export default function AboutUs() {

  return (

    <section id="features" className="padd-section text-center wow fadeInUp">

      <div className="container">
        <div className="section-title text-center">
          <h2>Raise a Reader</h2>
          <p className="separator">Book Sharing Platform</p>
        </div>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img src="img/svg/paint-palette.svg" alt="img" className="img-fluid" />
              <h4>Totally Free</h4>
              <p>Allows you to share your old child books for free</p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img src="img/svg/design-tool.svg" alt="img" className="img-fluid" />
              <h4>Easy to use</h4>
              <p>Just register and find the book you want</p>
            </div>
          </div>


          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img src="img/svg/cloud-computing.svg" alt="img" className="img-fluid" />
              <h4>New books published every day</h4>
              <p>Database updated regularly</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-block">
              <img src="img/svg/pixel.svg" alt="img" className="img-fluid" />
              <h4>Meet interesting people</h4>
              <p>Find any book that interests you or find a rare book that your kid would love</p>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}