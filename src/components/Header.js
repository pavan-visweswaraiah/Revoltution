// images
import Logo from '../assets/img/RevoltutionLabs-Logo.svg'

const Header = ()=>{
    
    return(
        <header id="header" className="d-flex align-items-center header-scrolled">
            <div className="container container-xxl d-flex align-items-center">
            <div id="logo" className="me-auto">
                <a href="index.html" className="scrollto"><img src={Logo} alt="logo" width="100%" title="" /></a>
            </div>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a className="nav-link scrollto" href="#about">About</a></li>
                    <li><a className="nav-link scrollto" href="#supporters">Investor</a></li>
                    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default Header;