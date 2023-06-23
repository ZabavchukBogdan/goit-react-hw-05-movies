import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-height: 500px;

  padding: 10px;

  list-style: none;

  overflow: auto;

`;

export const CastItem = styled.li`
  display: flex;
  gap: 10px;
`;

export const Text = styled.p`
  font-style: italic;
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 5px;
`;