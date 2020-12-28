import { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const { name, nickname } = inputs;

  /*
    객체 상태를 업데이트할 때, 기존 상태를 복사하고 나서 거기에다 특정 값을 덮어씌우고, 새로운 상태로 설정한다.
    -> 불변성을 지킨다 -> 리액트 컴포넌트에서 상태 업데이트 감지 -> 필요한 렌더링 발생한다.
  */
  const onChange = e => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름" 
        onChange={onChange} 
        value={name}
        ref={nameInput}
      />
      <input 
        name="nickname" 
        placeholder="닉네임" 
        onChange={onChange} 
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;