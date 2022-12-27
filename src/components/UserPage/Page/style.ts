import styled from '@emotion/styled';

export const UserPageLayout = styled.div`
  width: 100%;
  margin-top: 39px;
`;

export const FollowButton = styled.div`
  width: 432px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: auto;
  border-radius: 4px;
  border: 1.5px solid #d5b2e1;
  cursor: pointer;
  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #d5b2e1;
  transition: 0.2s;

  :hover {
    border: 1.5px solid #d5b2e1;
    color: white;
    background-color: #d5b2e1;

    transition: 0.2s;
  }
`;
