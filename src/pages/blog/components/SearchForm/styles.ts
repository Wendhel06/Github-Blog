import styled from 'styled-components'

export const InputContainer = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 18px;
      font-weight: 700;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 14px;
    }
  }
`

export const SearchContainer = styled.form`
  & input[type='text'] {
    width: 100%;
    padding: 12px 16px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    margin-top: 12px;
    color: ${(props) => props.theme['base-text']};

    ::placeholder {
      color: pink !important;
    }
  }
`
