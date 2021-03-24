import { Link } from "react-router-dom";
import { bool } from "prop-types";
import { StyledMenu } from "./BurgerMenu.styled";

const BurgerMenu = (props) => {
  return (
    <StyledMenu open={props.open}>
      <Link
        className="burger-link"
        to="/"
        onClick={() => props.setOpen(!props.open)}
      >
        Home
      </Link>
      <Link
        className="burger-link"
        to="/portfolio"
        onClick={() => props.setOpen(!props.open)}
      >
        Portfolio
      </Link>

      <Link
        className="burger-link"
        to="/contact"
        onClick={() => props.setOpen(!props.open)}
      >
        Contact
      </Link>
    </StyledMenu>
  );
};
BurgerMenu.propTypes = {
  open: bool.isRequired,
};

export default BurgerMenu;
