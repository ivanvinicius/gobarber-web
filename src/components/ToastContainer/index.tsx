import React from 'react';

import Toast from './Toast';
import { IToastMessages } from '../../hooks/Toast';

import { Container } from './styles';

interface IToastContainerProps {
  messages: IToastMessages[];
}

const ToastContainer: React.FC<IToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
