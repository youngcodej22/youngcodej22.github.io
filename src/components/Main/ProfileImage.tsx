import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
// const PROFILE_IMAGE_LINK =
//   'https://avatars.githubusercontent.com/u/87430739?v=4'

const ProfileAnimation = styled.div`
  @media (min-width: 769px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 16px;
    z-index: 0;
    width: 82px;
    height: 82px;
    border-radius: 10px;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #fff;
      background-repeat: no-repeat;
      background-size: 50% 50%, 50% 50%;
      background-position: 0 0, 100% 0, 100% 100%, 0 100%;
      /* background-image: linear-gradient(#1a83ff, #1a83ff, #fff); */
      background-image: linear-gradient(#42b6ff, #42b6ff, #fff);
      animation: rotate 4s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      /* left: 6px; */
      /* top: 6px; */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      /* width: 80px;
    height: 80px; */
      background: white;
      border-radius: 10px;
      animation: opacityChange 3s infinite alternate;
    }

    @keyframes rotate {
      100% {
        transform: rotate(1turn);
      }
    }
    @keyframes opacityChange {
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.5;
      }
    }
  }
`

// const ProfileImageWrapper = styled.img`
const ProfileImageWrapper = styled(GatsbyImage)`
  border-radius: 10px;
  @media (min-width: 769px) {
    width: calc(100% - 3px);
    height: calc(100% - 3px);
  }

  // tablet 768px 이하 적용
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  // return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
  return (
    <ProfileAnimation>
      <ProfileImageWrapper image={profileImage} alt="Profile Image" />
    </ProfileAnimation>
  )
}

export default ProfileImage
