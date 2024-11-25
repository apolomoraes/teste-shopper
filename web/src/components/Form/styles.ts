import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;

  fieldset {
    border: none;
  }

  fieldset legend {
    font-family: ${({ theme }) => theme.FONT.FONT_STAATLICHES};
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 3.4rem;

    color: ${({ theme }) => theme.COLORS.PURPLE_100};

    width: 100%;
    border-bottom: 1px solid #E6E6F0;
    padding-bottom: 1.6rem;

    margin-bottom: 3.2rem;
}
` 