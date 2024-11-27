import styled from "styled-components";

export const Container = styled.div`
  padding: 2.4rem;

  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_100};
  border-radius: 0.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  
  
  &:hover {
    background: ${({ theme }) => theme.COLORS.PURPLE_100};

    h3, p {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > div {
    width: fit-content;
  }

  > div div {
    display: flex;
    gap: 1rem;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  h3 {
    font-weight: bold;
  }

  > p {
    width: 50rem;
  }

  h3, p {
    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-size: 1.4rem;
    line-height: 2.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};

    text-align: justify;
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
