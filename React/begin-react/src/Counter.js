import { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super(props);
    // this.handleIncrease = this.handleIncrease.bind(this);
    // this.handleDecrease = this.handleDecrease.bind(this);
    this.state = {
      counter: 0,
      fixed: 1,
      updateMe: {
        toggleMe: false,
        dontChangeMe: 1
      }
    };
  }
  // 불변성 유지 필요 X
  /*
    +3될 것 같지만 +1 된다.
    state는 비동기로 업데이트되므로.
  */
  handleIncrease = () => {
    this.setState({    
      counter: this.state.counter + 1
    });
    this.setState({    
      counter: this.state.counter + 1
    });
    this.setState({    
      counter: this.state.counter + 1
    });
  }

  handleDecrease = () => {
    // this.setState({
    //   counter: this.state.counter - 1
    // });
    /* -3 */
    this.setState(state => ({
      counter: state.counter - 1
    }));
    this.setState(state => ({
      counter: state.counter - 1
    }));
    this.setState(state => ({
      counter: state.counter - 1
    }));
  }

  handleToggle = () => {
    this.setState({
      updateMe: {
        // 객체에 대해서는 불변성 유지 필요
        ...this.state.updateMe,
        toggleMe: !this.state.updateMe.toggleMe
      }
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값 : {this.state.fixed}</p>
      </div>
    )
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       throw new Error('Unhandled action');
//   }
// }
// /*
//   reducer의 사용.
//     상태 업데이트 로직이 컴포넌트 밖에 있다.
//     dispatch : action 발생시킨다.
// */
// function Counter() {
//   // const [number, setNumber] = useState(0);
//   const [number, dispatch] = useReducer(reducer, 0);
//   const onIncrease = () => {
//     dispatch({
//       type: 'INCREMENT'
//     });
//   };
//   const onDecrease = () => {
//     dispatch({
//       type: 'DECREMENT'
//     });
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

export default Counter;