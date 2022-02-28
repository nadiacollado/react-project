import styled from "styled-components";
import MainLogo from "./main-logo.svg";
import MenuIcon from "./menu-icon.svg";

const HeaderWrapper = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  padding-right: 2.5em;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 4px 16px -10px rgba(35, 37, 46, 0.08),
    inset 0px -2.5px 0px #d5d5d3;
`;

function Header() {
  return (
    <div className="Header">
      <HeaderWrapper>
        <a href="http://localhost:3000">
          <img src={MainLogo} alt="Main Logo" />
        </a>
        <img src={MenuIcon} alt="Menu Icon" />
      </HeaderWrapper>
    </div>
  );
}

export default Header;
