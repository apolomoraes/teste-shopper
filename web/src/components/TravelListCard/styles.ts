import styled from "styled-components";

export const Container = styled.div`
  padding: 2.4rem;
  min-width: 100rem;
  overflow-x: auto;

  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_100};
  border-radius: 0.6rem;

  display: flex;
  flex-direction: column;

  table {
    width: 100%;
    border-collapse: collapse;
  }

   th, td{
    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;
    text-transform: uppercase;
  }

  tbody tr:nth-child(even) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  }
`
