import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Container=styled.div`
   background-color:red;
   display:flex;
`

const Left=styled.div`
  flex:1;
  display:flex;
  flex-direction:column;

`
const Logo=styled.h1`

`

const Desc=styled.p`

`

const SocialContainer=styled.div`

`
const SocialIcon=styled.div`

`

const Center=styled.div`
  flex:1;
`
const Right=styled.div`
  flex:1;
`


// // A new component based on Button, but with some override styles
// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;


const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>Shop</Logo>
          <Desc>A typical online store enables the customer to browse the firm's range 
            of products and services, view photos or images of the products,
            along with information about the product specifications, features and prices. 
            Online stores usually enable shoppers to use "search" features to find specific
            models, brands or items.</Desc>
          <SocialContainer>
            <SocialIcon>
              <FacebookIcon/>
            </SocialIcon>
            <SocialIcon>
              <InstagramIcon/>
            </SocialIcon>
            <SocialIcon>
              <TwitterIcon/>
            </SocialIcon>
            <SocialIcon>
              <PinterestIcon/>
            </SocialIcon>
          </SocialContainer>
      </Left>
      <Center>
          df
      </Center>
      <Right>
          dsf
      </Right>
    </Container>
  )
}

export default Footer