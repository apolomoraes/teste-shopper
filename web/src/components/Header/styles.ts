import styled from "styled-components"

export const Container = styled.header`
   h1 {
      font-family: ${({ theme }) => theme.FONT.FONT_STAATLICHES};
      font-weight: 400;
      font-size: 4.8rem;
      line-height: 6rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 16.3rem;
      margin-top: 7.4rem;
   }

   p {
      font-family: ${({ theme }) => theme.FONT.FONT_POPPINS};
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;

      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 417px;
      margin-top: 18px;
   } 
`