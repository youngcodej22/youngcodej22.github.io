import React, { FunctionComponent, useState } from 'react'
import { graphql, Link } from 'gatsby'

import styled from '@emotion/styled'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { SidebarData } from './SidebarData'
import Introduction from 'components/Main/Introduction'

type SideNavigationProps = {
  profileImage: IGatsbyImageData
}

const SideNav = styled.div`
  z-index: 2;

  .navbar {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100px;
    padding: 15px 0;
    /* background-color: #fff;*/
    background-color: #d6e6f0;

    // #1a83ff
    // #f0dfd6
    // #42b6ff
    .nav-title {
      h1 {
        display: inline;
        margin-left: 10px;
        font-size: 20px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(
          to right,
          #94bdd6,
          #94bdd6 50%,
          #232323 50%
        );
        background-size: 200% 100%;
        background-position: 100%;
      }

      @media (min-width: 769px) {
        :hover {
          h1 {
            font-size: 26px;
            transition: all 0.4s cubic-bezier(0, 0, 0.23, 1);
            background-position: 0%;
          }
          .nav-title-icon {
            font-size: 30px;
            transition: all 0.4s;
          }
        }
      }
    }
    @media (max-width: 768px) {
      position: fixed;
      width: 100%;
      height: 54px;
      box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);
      z-index: 2;

      .nav-title {
        margin: 0 auto;
        h1 {
          color: #232323;
        }
      }
    }
  }

  .menu-bars {
    display: none;
    font-size: 2rem;
    background: none;

    @media (max-width: 768px) {
      position: absolute;
      top: 11px;
      left: 0;
      display: block;
      margin-left: 1.2rem;
    }
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    padding-top: 60px;
    width: 250px;
    height: 100vh;
    /* background-color: #fff; */
    background-color: #d6e6f0;
    box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);
    transition: 850ms;
    z-index: 1;

    @media (max-width: 768px) {
      padding-top: 90px;
      width: 100%;
      left: -100%;

      /* inner-wrap */
      > div {
        width: 100%;
      }
    }
  }
  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }
  .nav-text {
    display: flex;
    flex-basis: 50%;
    justify-content: start;
    align-items: center;
    margin: 8px 10px;
    list-style: none;
    height: 60px;
    border-radius: 10px;
    transition: all 0.3s;

    @media (min-width: 769px) {
      :hover {
        /* background-color: #1a83ff; */
        background-color: #94bdd6;

        > a {
          color: #fff;
        }
      }
    }
  }
  .nav-text a {
    margin: 0 auto;
    text-decoration: none;
    color: #232323;
    font-size: 18px;
    /* width: 100%; */
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }
  .nav-menu-items {
    display: flex;
    flex: 3;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
  }
  .navbar-toggle {
    background-color: #fff;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .nav-item {
    margin-left: 16px;
    font-family: 'BMJUA', sans-serif;
  }
  .home,
  .info {
    display: flex;
    height: 90vh;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
  .icon {
    color: #232323;
  }
`

const SideNavigation: FunctionComponent<SideNavigationProps> = function ({
  profileImage,
}) {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <SideNav>
      <div className="navbar inner-container">
        {sidebar ? (
          <Link to="#" className="menu-bars close">
            <FontAwesomeIcon
              className="icon"
              icon={faXmark}
              onClick={showSidebar}
            />
          </Link>
        ) : (
          <Link to="#" className="menu-bars open">
            <FontAwesomeIcon
              className="icon"
              icon={faBars}
              onClick={showSidebar}
            />
          </Link>
        )}
        <Link to="/" className="nav-title">
          <span className="nav-title-icon">🌞</span>
          <h1>Dev Blog</h1>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        {/* <div className="navbar-toggle" onClick={showSidebar}>
          <Link to="#" className="menu-bars close">
            <FontAwesomeIcon className="icon" icon={faXmark} />
          </Link>
        </div> */}
        <div>
          <Introduction profileImage={profileImage} />

          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="nav-item">{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </SideNav>
  )
}

export default SideNavigation
