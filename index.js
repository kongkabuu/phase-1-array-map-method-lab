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

const titles =(array)=>{
  let titles=array.map(words=>words.split(' '));
  let list =capitalize(titles);
  return list.map(words => words.join( " "));
}
const capitalize  = (array) => {
 return array.map(words=>words.map(words=>words.charAt(0).toUpperCase() + words.slice(1)))
  
  
}
const titleCased =()=>{

  return titles(tutorials);
}


console.log(titleCased(tutorials))