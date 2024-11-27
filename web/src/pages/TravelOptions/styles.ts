import styled from 'styled-components'

export const Container = styled.div`
   margin: auto;
   width: 80rem;
`

export const BackButton = styled.button`
   align-self: flex-start;
   border: none;
   background: none;
   color: ${({ theme }) => theme.COLORS.GRAY_200};
`