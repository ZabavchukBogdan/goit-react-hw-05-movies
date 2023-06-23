import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-height: 500px;

  padding: 10px;

  list-style: none;

  overflow: auto;

`;

export const ReviewsItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid #111111;
  }
`;

export const ReviewsText = styled.p`
  text-align: justify;
`;