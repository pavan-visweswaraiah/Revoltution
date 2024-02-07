// images
import keyPoint1Image from '../assets/img/hotels/1.jpg'
import keyPoint2Image from '../assets/img/hotels/2.jpg'
import keyPoint3Image from '../assets/img/hotels/3.jpg'
const KeyPoints = () => {
    const keyPointsData = [
        {
            title:'Foster',
            points:[
                "Build your MVP",
                "Provide Support Network",
                "Get Your Business Online"
            ],
            image: keyPoint1Image
        },
        {
            title: 'Support',
            points:[
                "Venture Capital",
                "Technical Expertise",
                "Gap Based Mentorship"
            ],
            image: keyPoint2Image
        },
        {
            title: 'Grow',
            points:[
                "Global Investment Strategy",
                "Corporate Connections",
                "Global Resource Network"
            ],
            image: keyPoint3Image
        }
    ]
    return(
        <section id="hotels" className="section-with-bg">
      <div className="container" >
        <div className="section-header">
          <h2>Building an ecosystem with everything you need           
            </h2>
          <p> Get resources and support for every stage of your business journey</p>
        </div>

        <div className="row">
            {keyPointsData.map((point)=>{
                return(
                    <div className="col-lg-4 col-md-6">
            <div className="hotel">
              <div className="hotel-img">
                <img src={point.image} alt="Hotel 1" className="img-fluid" />
              </div>
              <h3 style={{fontWeight: 'bold', paddingLeft: '20px'}}>{point.title}</h3>
              {point.points.map((p)=> {
                return(
                    <h3>{p}</h3>
                )
              })}
                <br />
            </div>
          </div>
                )
            })}
        </div>
      </div>

    </section>
    )
}

export default KeyPoints;