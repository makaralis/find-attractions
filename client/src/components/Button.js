import { useState } from "react";
import PropTypes  from "prop-types";
import { StyledButton } from "../styles/globalStyles";


const Button = ({handleOnClick, buttonText}) => {
    const [hover, setHover] = useState(false);

    return <StyledButton onClick={handleOnClick} onMouseEnter={() => setHover(true)}
     onMouseLeave={() => setHover(false)} hover={hover}>{buttonText}</StyledButton>
}

Button.propTypes = {
    handleOnClick: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
};

export default Button;