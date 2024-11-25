import styled from "styled-components";

export const Container = styled.div`
  padding: 2.4rem;

  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_100};
  border-radius: 0.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  &:hover {
    background: ${({ theme }) => theme.COLORS.PURPLE_100};

    h3, p {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  h3, p {
    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.4rem;

    border-right: 1px solid #E6E6F0;
    padding-right: 1.5rem;


    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  button {
    background: #FF5374;
    border-radius: 20px;
    text-transform: uppercase;


    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding: 1rem;
  }
`
