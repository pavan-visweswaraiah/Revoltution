const ContactSection = () => {
    return(
        <section id="contact" className="section-with-bg">
      <div className="container" >
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Feel free to conact us for additional information.
          </p>
        </div>

        <div className="form col-lg-8 offset-lg-2">

          <form id=" contact main-contact-form main-contact-form1">
            <div className="row ">
              <div className="col-md-6" style={{marginBottom: "10px"}}>
                <input type="text" name="contactName" className="form-control" placeholder="Name" id="NAME" />
              </div>
              
              <div className="col-md-6" style={{marginBottom: "10px"}}>
                <input type="text" name="contactPhone" className="form-control" placeholder="Phone" id="PHONE" />
              </div>
            </div>
           
            <div className="row">
              <div className="col-md-6" style={{marginBottom: "10px"}}>
                <input type="text" name="contactEmail" className="form-control" placeholder="Email" id="EMAIL" />
              </div>
             
              <div className="col-md-6" style={{marginBottom: "10px"}}>
                <input type="text" name="contactCompany" className="form-control" placeholder="Company" id="COMPANY" />
              </div>
            </div>
       	
        <div className="row ">
          <div className=" col-md-12" style={{marginBottom: "10px"}} >
          <textarea rows="10" name="contactMessage" className="form-control" placeholder="Message" id="FEEDBACK" style={{overflow:"hidden",resize:"none", height: "120px"}} ></textarea>
          </div>
          </div>
         
            <div className="row">
             <div className="col-md-4" style={{marginBottom: "10px"}}> 
               <input type="text" className="form-control" placeholder="Enter captcha" id="txt_ccode" MaxLength="6" onChange="return validateCaptcha()" style={{padding:"5px", color:"#999", paddingLeft: "14px"}}/>
             </div>
             <div className="col-md-6">
              <img src="imagesecuritycode.aspx" id="captcha" alt="Enter captcha" />
              &nbsp; <img id="ReLoadCap" alt="ReLoad-Captcha" src="assets/img/reload.png" width="30px"  onClick="return ReloadCaptcha()" />
             </div>
            </div>
            <br />
          <div className="row">
          <div className="col-sm-12 col-lg-12" style={{paddingTop: '12px'}}>
      <center>   <a className="buy-tickets "  style={{fontSize:'20px'}} id="btnSubmit"> &nbsp; Submit &nbsp; </a> </center> 
          </div>
          </div>
          </form>
            <br />
           <div id="mailMessage"></div>


        
        </div>


      </div>
    </section>
    )
}

export default ContactSection;