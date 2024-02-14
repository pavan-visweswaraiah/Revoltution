// images
import AboutBgImage from '../assets/img/about-bg.jpg'
// import AboutImage from '../assets/img/supporters/about.jpg'

const About = () => {
    return(
        <>
        <section id="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4" style={{marginBottom: '20px'}}>
            <h2>FOR <br />FOUNDERS </h2>
            <p>Need funding for your startup?</p>
            <a href="founders.html" className="buy-tickets">Let's Talk</a>
           <br /> <br />
          </div>
          <div className="col-lg-4" style={{marginBottom: '20px'}}>
            <h2>FOR<br /> ENTREPRENEURS</h2>
            <p>Want to build a startup together?</p>
            <a href="entrepreneurs.html" className="buy-tickets">Let's Talk</a>
            <br /> <br />
          </div>
          
          <div className="col-lg-4" style={{marginBottom: '20px'}}>
            <h2>SUPPORTING STARTUPS</h2>
            <p>Want to build a startup together?</p>
            <a href="startups.html" className="buy-tickets">Let's Talk</a>
            <br /> <br />
          </div>
        
        </div>
      </div>
    </section>
    <section id="speakers">
      <div className="container" >
        <div className="section-header">
          <h2>About Us  </h2>
          <p>From concept to market, we've got you covered.</p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <img src={AboutImage} alt="Speaker 1" className="img-fluid" />
          </div>

          <div className="col-md-7">
            <div className="details">
            <br className="visible-xs" />
              <p>
                We back entrepreneurs who create innovative solutions and are not afraid to take risks. With a team of over 50 years' experience, Revoltution has backed over ___ startups across multiple sectors. 
                <br /><br/>
                We offer support to startups during their early, risky stages when they need it most.
                <br /> <br />
                Our incubator program provides everything these driven entrepreneurs need to succeed, including resources, capital, and expert insights. 
<br /><br/>

              </p>
             
            </div>
          </div>

        </div>
        <br />

        </div>

    </section>
    </>
    )
}

export default About;