import { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props => 
    props.huge && 
    css`
    width: 10rem;
    height: 10rem;
  `}
`;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
};

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onConfirm = () => {
    setDialog(false);
  }
  const onCancel = () => {
    setDialog(false);
  }

  return (
    <>
      <ThemeProvider theme={{
        palette
      }}>
        <>
          <AppBlock>
            <ButtonGroup>
              <Button size="large">Button</Button>
              <Button color="gray">Button</Button>
              <Button size="small" color="pink">Button</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="large" outline>Button</Button>
              <Button color="gray" outline>Button</Button>
              <Button size="small" color="pink" outline>Button</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="large" fullWidth>Button</Button>
              <Button size="large" color="gray" fullWidth>Button</Button>
              <Button size="large" color="pink" fullWidth onClick={onClick}>삭제</Button>
            </ButtonGroup>
          </AppBlock>
          <Dialog
            title="정말로 삭제하시겠습니까?"
            confirmText="삭제"
            visible={dialog}
            onConfirm={onConfirm}
            onCancel={onCancel}
          >
            데이터를 정말로 삭제하시겠습니까?
          </Dialog>
        </>
      </ThemeProvider>
      {/* <Circle color="pink" />
      <Circle color="blue" huge /> */}
    </>
  );
}

export default App;
