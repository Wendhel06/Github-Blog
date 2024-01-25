import styled from 'styled-components'

export const PostContainer = styled.main``

export const PostLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`

export const IntroProfilePostContainer = styled.div`
  width: 100%;
  padding: 32px 40px 32px;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['base-profile']};
`

export const ContentPostContainer = styled.div`
  padding: 40px 32px;
`
