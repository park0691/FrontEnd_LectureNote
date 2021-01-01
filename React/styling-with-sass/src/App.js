import Button from "./components/Button";
import './App.scss';
function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button>Button1</Button>
        <Button size="small">Button2</Button>
        <Button size="large">Button3</Button>
      </div>
      <div className="buttons">
        <Button color="gray">Button1</Button>
        <Button color="gray" size="small">Button2</Button>
        <Button color="gray" size="large">Button3</Button>
      </div>
      <div className="buttons">
        <Button color="pink">Button1</Button>
        <Button color="pink" size="small">Button2</Button>
        <Button color="pink" size="large">Button3</Button>
      </div>
      <div className="buttons">
        <Button outline={true}>Button1</Button>
        <Button color="gray" size="small" outline={true}>Button2</Button>
        <Button color="pink" size="large" outline={true}>Button3</Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth>Button1</Button>
        <Button color="gray" size="large" fullWidth>Button2</Button>
        <Button color="pink" size="large" fullWidth onClick={() => {
          console.log('클릭');
        }}>Button3</Button>
      </div>
    </div>
  );
}

export default App;
