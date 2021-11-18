import React from "react"
import styled from "styled-components"
import { H2, BodyMain, BodyIntro } from "../../styles/TextStyles"
import { themes } from "../../styles/ColorStyles"

export default function ThirdBody() {
  return (
    <Wrapper1>
      <Wrapper>
        <ContentWrapper1>
          <TextWrapper1>
            <Title>What Our Client Say</Title>
            <Description1>
              At Howart Compliance, We work actively to optimise business
              processes for you enabling compliance with new regulatory
              framework, Dest practise and adplicable iegisation By comoining
              practical.
            </Description1>
          </TextWrapper1>
        </ContentWrapper1>

        <ContentWrapper2>
          <MiniContentWrapper>
            <InfoWrapper>
              <IconWrapper>
                <Icon2 src="/images/avatars/pic1.jpeg" />
              </IconWrapper>
              <TextWrapper2>
                <Title2>Yohann Amadou</Title2>
                <Description1>UI Designer</Description1>
              </TextWrapper2>
            </InfoWrapper>
            <InfoWrapper>
              <Description2>
                At Howart Compliance, We work actively to optimise business
                processes for you enabling compliance with new regulatory
                framework, Dest practise and adplicable iegisation By comoining
                practical.
              </Description2>
            </InfoWrapper>
            <InfoWrapper1>
              <IconWrapper1>
                <Icon3 src="/images/logos/etoile.png" />
                <Icon3 src="/images/logos/etoile.png" />
                <Icon3 src="/images/logos/etoile.png" />
                <Icon3 src="/images/logos/etoile.png" />
                <Icon3 src="/images/logos/etoile.png" />
              </IconWrapper1>
              <Description2>Friday, January 21</Description2>
            </InfoWrapper1>
          </MiniContentWrapper>

          <MiniContentWrapper>
            <InfoWrapper>
              <IconWrapper>
                <Icon2 src="/images/avatars/pic2.jpeg" />
              </IconWrapper>
              <TextWrapper2>
                <Title2>Yohann Amadou</Title2>
                <Description1>UI Designer</Description1>
              </TextWrapper2>
            </InfoWrapper>
            <InfoWrapper>
              <Description2>
                At Howart Compliance, We work actively to optimise business
                processes for you enabling compliance with new regulatory
                framework, Dest practise and adplicable iegisation By comoining
                practical.
              </Description2>
            </InfoWrapper>
            <InfoWrapper1>
              <IconWrapper1>
                <Icon3 src="/images/logos/etoile.png" />
                <Icon3 src="/images/logos/etoile.png" />
                <Icon3 src="/images/logos/etoile.png" />
                <Icon3 src="/images/logos/etoile.png" />
                <Icon3 src="/images/logos/etoile.png" />
              </IconWrapper1>
              <Description2>Friday, January 21</Description2>
            </InfoWrapper1>
          </MiniContentWrapper>
        </ContentWrapper2>
      </Wrapper>
    </Wrapper1>
  )
}

const Wrapper1 = styled.div`
  background: #f2f8fe;
`

const Wrapper = styled.div`
  max-width: 1234px;
  padding: 0px 30px;
  margin: 0 auto;
  @media (max-width: 1329px) {
    max-width: 1000px;
  }
`

const ContentWrapper1 = styled.div`
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
`

const TextWrapper1 = styled.div`
  max-width: auto;
  display: grid;
  gap: 30px;

  align-items: center;
`

const ContentWrapper2 = styled.div`
  padding: 100px 30px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: 600px auto;
  @media (max-width: 1329px) {
    grid-template-columns: repeat(1, auto);
    row-gap: 25px;
    justify-content: center;
  }
`

const TextWrapper2 = styled.div`
  max-width: auto;
  display: grid;
  justify-items: start;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Title = styled(H2)`
  color: ${themes.light.text1};
  text-align: center;
`
const Title2 = styled(BodyIntro)`
  color: ${themes.light.text1};
`

const Description1 = styled(BodyMain)`
  color: ${themes.light.text2};
  text-align: center;
`

const Description2 = styled(BodyMain)`
  color: ${themes.light.text2};
  text-align: left;
`

const IconWrapper = styled.div`
  justify-content: center;
  align-content: center;
  position: relative;
  display: grid;
  gap: 10px;
  width: 100px;
  height: 100px;
`

const Icon2 = styled.img`
  border-radius: 15px;
  width: 100px;
  height: 100px;
  object-fit: cover;
`

const MiniContentWrapper = styled.div`
  width: 515px;
  height: 350px;
  margin: 0 auto;
  background: ${themes.light.backgroundColor};
  border-radius: 15px;
  display: grid;
  align-items: start;
`

const InfoWrapper = styled.div`
  width: 515px;
  height: 150px;
  margin: 0 auto;
  background: ${themes.light.backgroundColor};
  border-radius: 15px;
  display: grid;
  align-items: left;
  grid-template-columns: repeat(2, auto);
  padding: 20px 30px;
`

const InfoWrapper1 = styled.div`
  margin: 0 auto;
  display: grid;
  align-items: left;
  grid-template-columns: repeat(2, auto);
  gap: 140px;
  padding-bottom: 30px;
`
const IconWrapper1 = styled.div`
  justify-content: start;
  align-content: center;
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 10px;
`

const Icon3 = styled.img`
  width: 25px;
  height: 25px;
`
