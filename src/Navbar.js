import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="navbar">
      {/* <Logo/> */}
      <Link to="/servicos">Serviços</Link>
      <Link to="/acessorios">Acessórios</Link>
    </nav>
   );
}
 
export default Navbar;