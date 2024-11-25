import styled from "styled-components";

export const Container = styled.div`
  padding: 2.4rem;
  width: 100rem;
  overflow-x: auto;

  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_100};
  border-radius: 0.6rem;

  display: flex;
  flex-direction: column;

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  tbody{
    display: block;
  }

  
  &:hover {
    background: ${({ theme }) => theme.COLORS.PURPLE_100};

    th, td {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

   th, td{
    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  th {
    font-size: 1.5rem;
  }

  td {
    font-size: 1.4rem;
  }

`
