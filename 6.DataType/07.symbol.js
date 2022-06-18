//다른값과 중복되지 않는 유일무이한 값 
// 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용 
// 리터럴을 통해 생성되는 다른 원시타입과 달리, symbol은 함수를 호출해 생성한다.  생성된 심볼은 외부에 노출되지 않으며 다른 값과 중복되지 않는 유일무이한 값

var key = Symbol('key');
console.log(typeof key);

//객체 생성 
var obj = {};

//이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용 
obj[key] = 'value';
console.log(obj[key]);
console.log(obj);
