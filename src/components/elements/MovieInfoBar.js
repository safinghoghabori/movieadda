import React from "react";
import FontAwesome from "react-fontawesome";
import { calcTime, convertMoney } from "../../helpers";
import { StyledMovieInfo } from "../styles/StyledMovieInfo";

function MovieInfoBar({ time, budget, revenue }) {
  return (
    <StyledMovieInfo>
      <div className="moviinfobar-content">
        <div className="moviinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <span className="moviinfobar-int">
            Running time: {calcTime(time)}
          </span>
        </div>
        <div className="moviinfobar-content-col">
          <FontAwesome className="fa-money" name="money" size="2x" />
          <span className="moviinfobar-int">
            Budget : {convertMoney(budget)}
          </span>
        </div>
        <div className="moviinfobar-content-col">
          <FontAwesome className="fa-revenue" name="tickete" size="2x" />
          <span className="moviinfobar-int">
            Revenue: {convertMoney(revenue)}
          </span>
        </div>
      </div>
    </StyledMovieInfo>
  );
}

export default MovieInfoBar;
