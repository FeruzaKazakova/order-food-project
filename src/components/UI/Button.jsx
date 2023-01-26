import styled from "styled-components"

const Button = ({children}) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button;

const StyledButton = styled.button`
    background-color: #8A2B06;
    border-radius: 20px;
    padding: 10px 32px;
    border: none;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    &:hover{
    background-color: #7E2A0A;
    border-radius: 20px;
    }
    &:active{
    background: #993108;
    border-radius: 20px;
    }
`