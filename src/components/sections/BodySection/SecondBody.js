import React from "react"
import styled from "styled-components"
import { H2, BodyMain, BodyIntro } from "../../styles/TextStyles"
import { themes } from "../../styles/ColorStyles"
import Buttons from "../../styles/Buttons/ButtonStyles"

export default function SecondBody() {
  return (
    <Wrapper>
      <ContentWrapper1>
        <TextWrapper2>
          <Title>Rencontrez Nos developpeurs</Title>
          <Description2>
            At Howart Compliance, We work actively to optimise business
            processes for you enabling compliance with new regulatory framework,
            Dest practise and adplicable iegisation By comoining practical.
          </Description2>
        </TextWrapper2>
        <ButtonWrapper>
          <Buttons title="Voir plus" />
        </ButtonWrapper>
      </ContentWrapper1>

      <ContentWrapper2>
        <MiniContentWrapper>
          <TextWrapper1 className="textwrapper">
            <Title2>Yohann Amadou</Title2>
            <IconWrapper>
              <Icon2 src="/images/logos/swiftui-logo.svg" />
              <Icon2 src="/images/icons/twitter.svg" />
              <Icon2 src="/images/logos/flutter-logo.svg" />
              <Icon2 src="/images/logos/react-logo.svg" />
            </IconWrapper>
          </TextWrapper1>
        </MiniContentWrapper>

        <MiniContentWrapper2>
          <TextWrapper1 className="textwrapper">
            <Title2>Yohann Amadou</Title2>
            <IconWrapper>
              <Icon2 src="/images/logos/swiftui-logo.svg" />
              <Icon2 src="/images/icons/twitter.svg" />
              <Icon2 src="/images/logos/flutter-logo.svg" />
              <Icon2 src="/images/logos/react-logo.svg" />
            </IconWrapper>
          </TextWrapper1>
        </MiniContentWrapper2>

        <MiniContentWrapper3>
          <TextWrapper1 className="textwrapper">
            <Title2>Yohann Amadou</Title2>
            <IconWrapper>
              <Icon2 src="/images/logos/swiftui-logo.svg" />
              <Icon2 src="/images/icons/twitter.svg" />
              <Icon2 src="/images/logos/flutter-logo.svg" />
              <Icon2 src="/images/logos/react-logo.svg" />
            </IconWrapper>
          </TextWrapper1>
        </MiniContentWrapper3>
      </ContentWrapper2>
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
`

const ContentWrapper1 = styled.div`
  padding: 100px 30px;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(2, auto);

  }
`

const ButtonWrapper = styled.div`
  align-items: center;
  justify-items: center;
  display: grid;
  padding-bottom: 80px;
  @media (max-width: 1329px) {
    padding-bottom: 100px;
  }
`

const ContentWrapper2 = styled.div`
  padding: 50px 30px;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;
  @media (max-width: 1329px) {
    grid-template-columns: repeat(2, auto);
    justify-content: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, auto);
  }
`

const TextWrapper2 = styled.div`
  max-width: 1000px;
  display: grid;
  gap: 30px;
  justify-items: left;
`

const TextWrapper1 = styled.div`
  width: 350px;
  height: 150px;
  display: grid;
  background: linear-gradient(90deg, #09084b 0%, #04499d 100%);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  justify-items: left;
  align-items: end;

  transition: 0.3s;
`

const Title = styled(H2)`
  color: ${themes.light.text1};
`

const Title2 = styled(BodyIntro)`
  color: ${themes.light.backgroundColor};
  padding-left: 25px;
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
  padding-left: 25px;
  padding-bottom: 20px;
`

const Icon = styled.img`
  border-radius: 50px;
  width: 450px;
  height: 350px;
`
const Icon2 = styled.img`
  width: 35px;
  height: 35px;
`

const MiniContentWrapper = styled.div`
  width: 350px;
  height: 500px;
  margin: 0 auto;
  gap: 5px;
  background: url(/images/avatars/pic1.jpeg);
  background-size: cover;
  border-radius: 15px;
  display: grid;
  justify-items: left;
  align-items: end;

  :hover {
    .textwrapper {
      height: 100px;
    }
`

const MiniContentWrapper2 = styled.div`
  width: 350px;
  height: 500px;
  margin: 0 auto;
  gap: 5px;
  background: url(/images/avatars/pic2.jpeg);
  background-size: cover;
  border-radius: 15px;
  display: grid;
  justify-items: left;
  align-items: end;

  :hover {
    .textwrapper {
      height: 100px;
    }
`
const MiniContentWrapper3 = styled.div`
  width: 350px;
  height: 500px;
  margin: 0 auto;
  gap: 5px;
  background: url(/images/avatars/pic3.jpeg);
  background-size: cover;
  border-radius: 15px;
  display: grid;
  justify-items: left;
  align-items: end;

  :hover {
    .textwrapper {
      height: 100px;
    }
`
