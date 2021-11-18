import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import { Buttons } from "../styles/Buttons/ButtonStyles"

const menuData = ["Home", "Services", "Our team", "Blog", "E-learning"]

export default function Header() {
  return (
    <Wrapper>
      <MenuWrapper>
        <IconWrapper>
          <Icon src="/images/companies/airbnb.svg" />
        </IconWrapper>
        <Item>
          {menuData.map(item => (
            <p>{item}</p>
          ))}
        </Item>
        <ButtonWrapper>
          <Title>Contact</Title>
        </ButtonWrapper>
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  grid-template-columns: 40px auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;
  align-items: center;
  justify-items: center;
  color: ${themes.dark.text2};
`

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 60px;
  cursor: pointer;
  @media (max-width: 1000px) {
    gap: 20px;
  }
`

const IconWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;
`

const Icon = styled.img`
  width: 220px;
  height: 50px;
`
const ButtonWrapper = styled.div`
  max-width: 170px;
  height: 45px;
  border-radius: 15px;
  display: grid;
  justify-content: center;
  background-color: #017df3;
  cursor: pointer;
  transition: 0.3s;
  @media (max-width: 800px) {
    display: none;
  }

  :hover {
    background-color: #7cbefe;
  }
`

const Title = styled.p`
  color: ${themes.light.backgroundColor};
  text-align: center;
  padding-top: 12px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`
