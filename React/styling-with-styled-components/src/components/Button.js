import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

/* 색상 */
const colorStyles = css`
  ${({ theme, color }) => {
    const selectedColor= theme.palette[color];
    return css`
      background: ${selectedColor};
      &:hover {
        background: ${lighten(0.1, selectedColor)};
      }
      &:active {
        background: ${darken(0.1, selectedColor)};
      }
      ${
        props => props.outline && 
        css`
          color: ${selectedColor};
          background: none;
          border: 1px solid ${selectedColor};
          &:hover {
            background: ${selectedColor};
            color: white;
          }
        `
      }
    `;
  }}
`;
/* 크기 */
const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
}
const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${props => 
    props.fullWidth && 
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;


  /* background: ${props => props.theme.palette.blue};
  &:hover {
    background: ${props => lighten(0.1, props.theme.palette.blue)};
  }
  &:active {
    background: ${props => darken(0.1, props.theme.palette.blue)};
  } */

  & + & {
    margin-left: 1rem;
  }

  /* 색상 */
  ${colorStyles}
  /* 크기 */
  ${sizeStyles}

  ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return <StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue'
}
export default Button;