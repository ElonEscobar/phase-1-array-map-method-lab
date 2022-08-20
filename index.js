const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = ()=>{
  const newTutorial = [];
  for (let all of tutorials){
    const captureName = all;
    const splitArr = captureName.split(" ");
    let message = "";
      splitArr.map(word => {
      let wordArr = [];
      let text = "";
      for(const a of word){
        wordArr.push(a)
      }

      wordArr[0] = wordArr[0].toUpperCase()
      for(const b of wordArr){
        text += b;
      }
      message += `${text} `;
      return message;
    })
    newTutorial.push(message.substring(0, message.length -1));
  }
  return(newTutorial);
}
titleCased(tutorials);