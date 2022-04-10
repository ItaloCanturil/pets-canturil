import { Link } from "react-router-dom";

const Home = () => {
  return ( 
    <div className="home">
      <h1>O centro de cuidados para o seu animal</h1>

      <Link to="/servicos">Nossos serviços</Link>
      <a href="https://api.whatsapp.com/send?phone=5511966690312&text=Vim%20pelo%site">Fale pelo WhatsApp</a>
    </div>
   );
}
 
export default Home;