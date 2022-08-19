import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ProfileImage from 'components/Main/ProfileImage'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Wrapper = styled.div`
  flex: 1;
  padding: 0 32px 10px;
  text-align: center;

  .profile-text > * {
    font-family: 'BMJUA', sans-serif;
    color: #232323;
  }
`

const SubTitle = styled.div`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 10px;
  font-size: 14px;

  p {
    margin-top: 10px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    /* font-size: 25px; */
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Wrapper>
      <ProfileImage profileImage={profileImage} />
      <div className="profile-text">
        <SubTitle>🌞 Dev Blog</SubTitle>
        <Title>
          YoungCodeJ22 <br />
          <p>From The Bottom To The Top</p>
        </Title>
      </div>
    </Wrapper>
  )
}

export default Introduction
