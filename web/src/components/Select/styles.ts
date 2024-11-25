import styled from "styled-components";

export const Container = styled.div<{ width?: string }>`
   display: flex;
   flex-direction: column;

  label {
      font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.4rem;


      color: ${({ theme }) => theme.COLORS.GRAY_100};

      padding-bottom: 8px;
    }

    select {
      background: #FAFAFC;

      width: ${({ width }) => (width ? width : '100%')};

      border: 1px solid #E6E6F0;
      border-radius: 8px;

      height: 5.6rem;

      padding: 0 2.4rem;

      margin-bottom: 1.6rem;

      font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
      font-size: 1.6rem;
      line-height: 2.6rem;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`