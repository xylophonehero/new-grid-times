import React from "react"
import styled from "styled-components/macro"
import { Menu, Search, User } from "react-feather"

import { QUERIES } from "../../constants"

import MaxWidthWrapper from "../MaxWidthWrapper"
import Logo from "../Logo"
import Button from "../Button"

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LeftActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </LeftActionGroup>
        <Logo />
        <SubscribeContainer>
          <Button>Subscribe</Button>
          <SmallLinkWrapper>
            <a href="http://example.com">Already a subscriber?</a>
          </SmallLinkWrapper>
        </SubscribeContainer>
      </MainHeader>
    </header>
  )
}

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`

const LeftActionGroup = styled(ActionGroup)`
  display: none;
  justify-self: start;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
  }
`

const SubscribeContainer = styled.div`
  display: none;
  position: relative;
  justify-self: end;

  @media ${QUERIES.laptopAndUp} {
    display: initial;
  }
`

const SmallLinkWrapper = styled.div`
  position: absolute;
  margin-top: 8px;
  width: 100%;
  text-align: center;
  text-decoration: underline;
  font-style: italic;
`

export default Header
