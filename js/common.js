
let titleNum = '이름을 입력해주세요';
let nameGroup = ''; // 멀넣겟단거
let nameText = prompt(titleNum);
nameGroup += nameText;


nameText = prompt(titleNum); //prompt의 return값을 nameText에 재할당한다.
nameGroup += ','+nameText
//바로위의 식과 같음 nameGroup = nameGroup+','+nameText

nameText = prompt(titleNum);
nameGroup += ','+nameText




document.body.innerHTML = nameGroup;
