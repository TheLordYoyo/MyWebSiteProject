import React from "react"
import styled from "styled-components"
import { H2, BodyMain } from "../../styles/TextStyles"
import { themes } from "../../styles/ColorStyles"

export default function BannerBody() {
  return (
    <Wrapper1>
      <ContentWrapper>
        <MiniContentWrapper>
          <Title>500+</Title>
          <Description>Successful project</Description>
        </MiniContentWrapper>
        <MiniContentWrapper>
          <Title>50+</Title>
          <Description>Squalified Team Member</Description>
        </MiniContentWrapper>
        <MiniContentWrapper>
          <Title>120+</Title>
          <Description>Winning Award</Description>
        </MiniContentWrapper>
        <MiniContentWrapper>
          <Title>320+</Title>
          <Description>Our Satisfied Clients</Description>
        </MiniContentWrapper>
      </ContentWrapper>
    </Wrapper1>
  )
}

const Wrapper1 = styled.div`
  background: linear-gradient(90deg, #09084b 0%, #04499d 100%);
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 100px 0px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 20px;

  @media (max-width: 1329px) {
    max-width: 700px;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
    justify-content: center;
  }
`

const MiniContentWrapper = styled.div`
  width: 300px;
  height: 210px;
  margin: 0 auto;
  gap: 10px;
  background: #172d5e;
  border-radius: 15px;
  display: grid;
  align-content: center;
  justify-content: center;
`

const Title = styled(H2)`
  color: ${themes.light.backgroundColor};
  text-align: center;
`

const Description = styled(BodyMain)`
  color: ${themes.light.backgroundColor};
  text-align: center;
`
