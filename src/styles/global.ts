import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

main {
  width: 100%;
  max-width: 864px;
  margin: -80px auto 0px;
  padding: 0px 20px 75px;
}

body {
  background-color: ${(props) => props.theme['base-background']};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
}

body,input {
  font-family: 'Nunito', sans-serif;
}

:focus {
  outline: 1px solid ${(props) => props.theme['base-text']};
}

a {
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

a:hover {
  color: ${(props) => props.theme['base-title']};
}

h2 {
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
}

`
