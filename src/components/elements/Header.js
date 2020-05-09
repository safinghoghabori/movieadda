import React from "react";
// import RMDBLogo from "../images/reactMovie_logo.png";
// import MVLogo from "../images/mvicon.png";
import MVVLogo from "../images/mvv.png";
import TMDBLogo from "../images/tmdb_logo.svg";
import {
  StyledHeader,
  StyledMMVLogo,
  StyledTMDBLogo,
} from "../styles/StyledHeader";
import { Link } from "@reach/router";

function Header() {
  return (
    <div>
      <StyledHeader className="header-content">
        <Link to="/">
          <StyledMMVLogo src={MVVLogo} alt="rmdb-logo" />
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
      </StyledHeader>
    </div>
  );
}

export default Header;
