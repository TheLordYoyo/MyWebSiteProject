import React from "react"
import styled from "styled-components"
import { H2, BodyMain } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import Buttons from "../styles/Buttons/ButtonStyles"

export default function Footer() {
  return (
    <Wrapper1>
      <Wrapper2>
        <ContentWrapper>
          <MiniContentWrapper>
            <TextWrapper>
              <Title>TheEmpire🚀</Title>
              <Description>
                <IconWrapper>
                  <Icon src="/images/icons/credit.svg" className="icon" />
                </IconWrapper>
                amadouyohann@yahoo.fr
              </Description>
              <Description>
                <IconWrapper>
                  <Icon src="/images/icons/credit.svg" className="icon" />
                </IconWrapper>
                +2250707610700
              </Description>
            </TextWrapper>
          </MiniContentWrapper>

          <MiniContentWrapper>
            <TextWrapper>
              <Title>About</Title>
              <Description>L'entreprise</Description>
              <Description>L'empire</Description>
              <Description>Parcours</Description>
              <Description>Blogs</Description>
              <Description>Prix</Description>
            </TextWrapper>
          </MiniContentWrapper>

          <MiniContentWrapper>
            <TextWrapper>
              <Title>Adresse</Title>
              <Description>Abidjan</Description>
              <Description>Abidjan, Angre 8ème Tranche</Description>
              <Description>theempire_tech</Description>
              <Description>+2250707610700</Description>
            </TextWrapper>
          </MiniContentWrapper>

          <MiniContentWrapper>
            <TextWrapper>
              <Title>Contactez Nous</Title>
              <IconWrapper>
                <Icon src="/images/logos/figma-logo.svg" />
                <Icon src="/images/logos/ui-logo.svg" />
                <Icon src="/images/logos/ui8-logo.svg" />
                <Icon src="/images/logos/sketch-logo.svg" />
              </IconWrapper>
            </TextWrapper>
          </MiniContentWrapper>
        </ContentWrapper>
      </Wrapper2>

      <ContentWrapper2>
        <TextWrapper2>
          <Title>Feeling Comfortable and feel free get in touch</Title>
        </TextWrapper2>
        <TextFieldWrapper>
          <TextField placeholder="Entrer votre Email"></TextField>
          <ButtonsWrapper>
            <Buttons title="Send" />
          </ButtonsWrapper>
        </TextFieldWrapper>
      </ContentWrapper2>
    </Wrapper1>
  )
}

const Wrapper1 = styled.div`
  padding-top: 400px;
`

const Wrapper2 = styled.div`
  background: linear-gradient(90deg, #09084b 0%, #04499d 100%);
`

const ContentWrapper = styled.div`
  max-width: 1300px;
  justify-items: center;
  padding: 200px 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  @media (max-width: 1329px) {
    max-width: 1000px;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, auto);
    gap: 20px;
  }
`

const ContentWrapper2 = styled.div`
  max-width: 1300px;
  padding: 75px 50px;
  margin: 0 auto;
  margin-top: -825px;
  background-color: #29b6ff;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 500px auto;

  @media (max-width: 1329px) {
    max-width: 700px;
    grid-template-columns: repeat(1, auto);
    justify-content: center;
    gap: 20px;
    margin-top: -1150px;
  }

  @media (max-width: 800px) {
    max-width: 400px;
    margin-top: -1250px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-items: left;
`

const TextFieldWrapper = styled.div`
  max-width: 500px;
  display: grid;
  justify-items: left;
  align-content: center;
  grid-template-columns: 250px auto;
  padding-left: 300px;
  @media (max-width: 1329px) {
    padding-left: 0px;
  }
`
const ButtonsWrapper = styled.div`
  display: grid;
  justify-items: left;
  padding-top: 7px;
`

const TextField = styled.input`
  width: 350px;
  height: 60px;
  border: none;
  box-sizing: border-box;
  background: #fff;
  border-radius: 15px;
  padding-left: 20px;
  font-size: 18px;
`

const Title = styled(H2)`
  color: ${themes.dark.text1};
`
const Description = styled(BodyMain)`
  display: grid;
  grid-template-columns: repeat(2, auto);
  color: ${themes.light.backgroundColor};
`

const MiniContentWrapper = styled.div`
  width: 280px;
  height: 300px;
`
const IconWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 5px;
`

const Icon = styled.img`
  width: 35px;
  height: 35px;
`
const TextWrapper2 = styled.div`
  max-width: 475px;
  display: grid;
  gap: 30px;
  justify-items: left;
`
