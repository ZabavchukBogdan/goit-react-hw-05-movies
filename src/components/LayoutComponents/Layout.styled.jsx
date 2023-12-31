import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;

  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  margin-bottom: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #f55c4e;

  border-radius: 5px;
`;

export const Link = styled(NavLink)`
  display: inline-block;

  padding: 10px;

  font-weight: 600;
  font-size: 22px;

  color: #111111;
  text-decoration: none;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #de9c0d;
  }

  &.active {
    background-color: #910f03;

    border-radius: 5px;
  }
`;