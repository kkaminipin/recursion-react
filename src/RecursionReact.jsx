// import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';

const RecursionReact = () => {
  console.log('최상단 시작');

  /*
    1. 함수를 호출하고 아규먼트를 보낼 때에 해당 아규먼트는 한번만 실행이 되어야한다. (useEffect)
    2. 함수를 실행하고 파라미터로 받은 값은 해당 함수에서 호출할 때마다 값이 변해야한다.
    3. 1번을 제외하고 나머지 모두 재 랜더링을 해줘야한다.

  */
  const [count, setCount] = useState(5);
  const [time, setTime] = useState(5);

  const recursionFunction = (num) => {
    console.log('recursion 함수');
    console.log('함수 파라미터', num);
    setTimeout(() => {
      if (num < 0) {
        return;
      }
      setCount(4);
    }, 1000);

    console.log('state 변경 후');
  };

  useEffect(() => {
    console.log('useEffect!!');
    recursionFunction(5);
  }, [count]);

  // 해당 경우나  [] 가 없을 경우 왜 무한 루프에 안 빠지는지
  // useEffect(() => {
  //   console.log('useEffect!!');
  //   recursionFunction(count);
  // }, [count]);

  return (
    <>
      {console.log('html render!!')}
      <div>카운트 : {count}</div>
    </>
  );
};

export default RecursionReact;
