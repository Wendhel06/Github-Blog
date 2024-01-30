import styled from 'styled-components'

export const BlogContainer = styled.main``

export const IntroProfileContainer = styled.div`
  width: 100%;
  padding: 32px 40px 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['base-profile']};
  margin-bottom: 72px;

  & > div {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 32px;
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
`

export const Posts = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  padding: 32px;
  border-radius: 10px;
  cursor: pointer;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;

    h3 {
      font-size: 20px;
      line-height: 160%;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
      max-width: 265px;
    }

    p {
      color: ${(props) => props.theme['base-span']};
      font-size: 13px;
      margin-top: 5px;
    }
  }

  & > p {
    height: 132px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
