import { InvestorsSectionData } from "./InvestorsSectionData";

const InvestorsSection = () => {
    return(
        <section id="supporters" >

      <div class="container" >
        <div class="section-header">
          <h2>INVESTING IN COMPANIES  </h2>
          <p>
            The ideas we nurture are as diverse as the startups we incubate, spanning across various sectors including databases, consumer e-commerce, and clean energy companies.  
          </p>
        </div>

        <div class="row no-gutters supporters-wrap clearfix" >
            {
                InvestorsSectionData.map((investor)=>{
                    return(
                        <div class="col-lg-3 col-md-4 col-xs-6">
                            <div class="supporter-logo">
                                <a href={investor.url} target="_blank"> <img src={investor.logo} class="img-fluid" alt="" /></a>
                            </div>
                        </div>
                    )
                })
            }
          

          

        </div>

      </div>

    </section>
    )
}

export default InvestorsSection;