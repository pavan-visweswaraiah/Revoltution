import HeroBgImage from '../assets/img/hero-bg.jpg'
const Hero = () => {
    return(
        <section id="hero" style={{background: `url(${HeroBgImage})`}}>
    <div className="hero-container">
      <h1 className="mb-4 pb-0">TRANSFORMING IDEAS INTO <br /><span>SUCCESS STORIES.</span></h1>
      <p className="mb-4 pb-0">Welcome to Revoltution, where we fill the gaps between potential and <br />sustainability by fueling and incubating innovative startups.</p>
    </div>
  </section>
    )
}

export default Hero;