import React from "react"
import styled from "styled-components"
import { H2, H3, BodyMain } from "../../styles/TextStyles"
import { themes } from "../../styles/ColorStyles"
import Buttons from "../../styles/Buttons/ButtonStyles"
import SecondaryButtons from "../../styles/Buttons/ButtonsStyle2"

export default function MainBody() {
  return (
    <Wrapper>
      <ContentWrapper1>
        <TextWrapper1>
          <Title>All the services that we provide</Title>
          <Description1>
            At Howart Compliance, We work actively to optimise business
            processes for you enabling compliance with new regulatory framework,
            Dest practise and adplicable iegisation By comoining practical.
          </Description1>
        </TextWrapper1>
      </ContentWrapper1>

      <ContentWrapper2>
        <IconWrapper>
          <Icon src="/images/affiches/affiche1.jpg" />
        </IconWrapper>
        <TextWrapper2>
          <Title>Affiche</Title>
          <Description2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
            sollicitudin massa get feugiat ut laoreet suspendisse et at. In
            aliquam senectus venenatis phasellus consectetur. Mattis nulla et
            sem suspendisse in imperdiet.
          </Description2>
          <SubTitle>A été fait grace à</SubTitle>
          <IconWrapper>
            <Icon2 src="/images/companies/apple.svg" />
          </IconWrapper>
          <SecondaryButtons title="Read More" />
        </TextWrapper2>
      </ContentWrapper2>

      <ContentWrapper2>
        <TextWrapper2>
          <Title>Application</Title>
          <Description2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
            sollicitudin massa get feugiat ut laoreet suspendisse et at. In
            aliquam senectus venenatis phasellus consectetur. Mattis nulla et
            sem suspendisse in imperdiet.
          </Description2>
          <SubTitle>A été fait grace à</SubTitle>
          <IconWrapper>
            <Icon2 src="/images/logos/swiftui-logo.svg" />
            <Icon2 src="/images/logos/figma-logo.svg" />
            <Icon2 src="/images/logos/flutter-logo.svg" />
            <Icon2 src="/images/logos/react-logo.svg" />
          </IconWrapper>
          <SecondaryButtons title="Read More" />
        </TextWrapper2>
        <IconWrapper>
          <Icon src="/images/affiches/affiches2.png" />
        </IconWrapper>
      </ContentWrapper2>

      <ContentWrapper2>
        <IconWrapper>
          <Icon src="/images/affiches/affiche3.jpg" />
        </IconWrapper>
        <TextWrapper2>
          <Title>Design</Title>
          <Description2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna
            sollicitudin massa get feugiat ut laoreet suspendisse et at. In
            aliquam senectus venenatis phasellus consectetur. Mattis nulla et
            sem suspendisse in imperdiet.
          </Description2>
          <SubTitle>A été fait grace à</SubTitle>
          <IconWrapper>
            <Icon2 src="/images/logos/figma-logo.svg" />
            <Icon2 src="/images/logos/ui-logo.svg" />
            <Icon2 src="/images/logos/ui8-logo.svg" />
            <Icon2 src="/images/logos/sketch-logo.svg" />
          </IconWrapper>
          <SecondaryButtons title="Read More" />
        </TextWrapper2>
      </ContentWrapper2>
      <ButtonWrapper>
        <Buttons title=" Voir plus " />
      </ButtonWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;

  @media (max-width: 1329px) {
    max-width: 1000px;
  }

  @media (max-width: 895px) {
    display: grid;
    grid-template-columns: repeat(1, auto);
    align-items: center;
    justify-items: center;
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
  justify-items: center;
`

const ContentWrapper2 = styled.div`
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;

  @media (max-width: 895px) {
    grid-template-columns: repeat(1, auto);
  }
`

const ButtonWrapper = styled.div`
  align-content: center;
  justify-items: center;
  display: grid;
`

const TextWrapper2 = styled.div`
  max-width: 470px;
  display: grid;
  gap: 20px;
  justify-items: left;
`

const Title = styled(H2)`
  color: ${themes.light.text1};
`

const SubTitle = styled(H3)`
  color: ${themes.light.primary};
`

const Description1 = styled(BodyMain)`
  color: ${themes.light.text2};
  text-align: center;
`

const Description2 = styled(BodyMain)`
  color: ${themes.light.text2};
`

const IconWrapper = styled.div`
  justify-content: center;
  align-content: center;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 10px;
`

const Icon = styled.img`
  border-radius: 50px;
  width: 450px;
  height: 350px;
  object-fit: cover;
`
const Icon2 = styled.img`
  width: 35px;
  height: 35px;
`
