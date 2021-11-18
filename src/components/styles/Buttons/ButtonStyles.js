import React from "react"
import styled from "styled-components"
import { themes } from "../ColorStyles"

export default function Buttons(props) {
  const { title } = props
  return (
    <ButtonWrapper>
      <Title>{props.title || "Button"}</Title>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.div`
  max-width: 170px;
  height: 45px;
  border-radius: 15px;
  display: grid;
  justify-content: center;
  background-color: #017df3;
  cursor: pointer;
  transition: 0.3s;

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
    font-size: 18px;
  }
`
