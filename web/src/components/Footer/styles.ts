import styled from "styled-components";

export const Container = styled.footer<{ display?: string }>`
  margin: auto;
  background: ${({ theme }) => theme.COLORS.PURPLE_100};
  border-radius: 0px 0px 20px 20px;

  display: flex;
  flex-direction: column;

  height: 16rem;
  margin-bottom: 10rem;

  padding: 5.2rem 7rem 5.2rem 7rem;

  width: 80rem;

  button {
    background: #FF5374;
    border-radius: 20px;
    text-transform: uppercase;
    display: ${({ display }) => display ? display : ''};

    height: 5.5rem;

    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.6rem;
  }
`