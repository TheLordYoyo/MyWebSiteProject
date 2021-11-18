import React from "react"
import styled from "styled-components"
import { H1, BodyMain } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import Buttons from "../styles/Buttons/ButtonStyles"

function HeroSection() {
  return (
    <Wrapper1>
      <Wrapper2>
        <ContentWrapper>
          <TextWrapper>
            <Title>
              Perfect Place For <br />
              Your Business Promotion
            </Title>
            <Description>
              Howart Compliance is a leading Nordic regtech and compliance
              consulting firm.
            </Description>
            <Buttons title=" Nos services " />
          </TextWrapper>
          <ImageWrapper className="image">
            <Image src="/images/affiches/affiche.jpg" />
          </ImageWrapper>
        </ContentWrapper>
      </Wrapper2>
      <ContentWrapper2>
        <CompanyWrapper>
          <Company src="/images/companies/airbnb.svg" />
          <Company src="/images/companies/amazon.svg" />
          <Company src="/images/companies/square.svg" />
          <Company src="/images/companies/facebook.svg" />
          <Company src="/images/companies/google.svg" />
        </CompanyWrapper>
      </ContentWrapper2>
    </Wrapper1>
  )
}

export default HeroSection

const Wrapper1 = styled.div``

const Wrapper2 = styled.div`
  background: linear-gradient(90deg, #09084b 0%, #04499d 100%);
  @media (max-width: 800px) {
    display: grid;
    justify-content: center;
    align-content: center;
  }
`

const ContentWrapper = styled.div`
  max-width: 1300px;
  padding: 200px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 633px auto;
  gap: 5px;
  @media (max-width: 1329px) {
    max-width: 1000px;
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, auto);
    max-width: 800px;
    .image {
      display: none;
    }
  }
`
const ContentWrapper2 = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  margin-top: -100px;
  background-color: ${themes.light.backgroundColor};
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  @media (max-width: 1329px) {
    max-width: 800px;
  }

  @media (max-width: 800px) {
    max-width: 400px;
  }
`

const TextWrapper = styled.div`
  max-width: 470px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Description = styled(BodyMain)`
  color: ${themes.dark.text2};
`
const ImageWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;
`

const Image = styled.img`
  border-radius: 50px;
  width: 600px;
  height: 500px;
  object-fit: cover;

  @media (max-width: 1329px) {
    width: 400px;
    height: 300px;
  }
`
const CompanyWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 50px;
  padding: 0px 50px;
  @media (max-width: 1329px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, auto);
  }
`

const Company = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: 800px) {
    width: 100px;
    height: 100px;
  }
`
