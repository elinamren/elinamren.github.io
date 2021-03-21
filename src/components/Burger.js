import { bool, func } from "prop-types";
import { StyledBurger } from "./Burger.styled";

const Burger = (props) => {
  return (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
      <div className="burger"></div>
      <div className="burger"></div>
      <div className="burger"></div>
    </StyledBurger>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
