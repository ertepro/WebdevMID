import logo from './utadLogo.png'

function Footer(){
    return(
        <div className="footer">
            <hr></hr>
        <h2 className="FooterMain">Diego Herrera</h2>
        <img className="footerLogo" src={logo} alt="logo"/>
        </div>
    );

}
export default Footer;