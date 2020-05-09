import styled from "styled-components";

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;
  height: 80px;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledMMVLogo = styled.img`
  width: 60px;
  margin-top: 10px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
    width: 50px;
    height: 50px;
    margin-top: 15px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 110px;
    height: 80px;
    margin-top: 5px;
  }
`;
