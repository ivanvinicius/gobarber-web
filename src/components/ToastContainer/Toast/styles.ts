import styled, { css } from 'styled-components';

interface IContainerProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypes = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background-color: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<IContainerProps>`
  display: flex;
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  ${(props) => toastTypes[props.type || 'info']}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background-color: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
