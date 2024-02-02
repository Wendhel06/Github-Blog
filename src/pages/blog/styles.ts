import styled from 'styled-components'

export const BlogContainer = styled.main``

export const IntroProfileContainer = styled.div`
  width: 100%;
  padding: 32px 40px 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['base-profile']};
  margin-bottom: 72px;

  @media (max-width: 590px) {
    padding: 32px 15px 32px;
  }

  & > div {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 32px;

    @media (max-width: 767px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`

export const ProfileImageContainer = styled.div`
  min-width: 148px;
  height: 148px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`
export const IntroProfileText = styled.div`
  width: 100%;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 8px;
  }
`
export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 590px) {
    flex-direction: column;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
export const GridContainerPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 48px;

  @media (max-width: 590px) {
    grid-template-columns: repeat(1, 1fr);
  }

  & > a {
    display: block;
    padding: 2rem;
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 10px;
    border: 1px solid transparent;

    & > div {
      display: flex;
      justify-content: space-between;

      & > h3 {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        color: ${(props) => props.theme['base-title']};
        margin-bottom: 1rem;
        width: calc(100% - 100px);
      }

      & > p {
        font-size: 9px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color: ${(props) => props.theme['base-span']};
      }
    }

    & > p {
      color: ${(props) => props.theme['base-text']};
      font-weight: 400;
      line-height: 160%;
      text-transform: capitalize;
      font-size: 1rem;
    }
  }

  & > a:hover {
    border-color: #fff;
  }
`
