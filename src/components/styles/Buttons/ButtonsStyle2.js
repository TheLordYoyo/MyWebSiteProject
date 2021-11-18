import React from "react"
import styled from "styled-components"

export default function SecondaryButtons(props) {
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
  cursor: pointer;
  transition: 0.3s;
  border: 2px solid #017df3;
  box-sizing: border-box;

  :hover {
    background-color: #7cbefe;
  }
`

const Title = styled.p`
  color: #017df3;
  text-align: center;
  padding-top: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`
