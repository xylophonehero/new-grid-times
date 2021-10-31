import React from "react"
import styled from "styled-components/macro"

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data"

import SectionTitle from "../SectionTitle"
import MainStory from "../MainStory"
import SecondaryStory from "../SecondaryStory"
import OpinionStory from "../OpinionStory"
import Advertisement from "../Advertisement"
import { QUERIES } from "../../constants"

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px 16px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 5fr 4fr 3fr;
    gap: 16px;
  }
`

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }
`

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    @media ${QUERIES.tabletAndUp} {
      border-right: 1px solid var(--color-gray-300);
      padding-right: 16px;
    }
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
    margin-top: 16px;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletOnly} {
    & > ${StoryList} {
      flex-direction: row;
      gap: 32px;
      & > * + * {
        padding-top: revert;
        border-top: revert;
        margin-top: revert;
      }
      & > * {
        flex: 1;
      }
    }
  }
`

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
  }
`

export default MainStoryGrid
