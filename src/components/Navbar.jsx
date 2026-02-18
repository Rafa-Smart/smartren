import logoApp from "../assets/images/logo_ziekir.png";
import logoSmk from "../assets/images/logo_smakzie.png";

function Navbar() {
  return (
    <div className="container">
      <div className="flex">
        <img src={logoApp} alt="App" width={50} />
        <img src={logoSmk} alt="SMK" width={50} />
      </div>
    </div>
  );
}

export default Navbar;
