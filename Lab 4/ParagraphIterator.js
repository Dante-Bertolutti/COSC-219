var paragraph = "Computer sciense is the study of computation, algorithms, and how computers process information. It encompasses a wide range of topics, from the theoretical foundations of programming languages and algorithms to practical applications in software engineering and artificial intelligence. One key area in computer sciense is data structures, which are used to store and organize data efficiently, allowing for faster processing and retrieval. Another vital aspect is algorithms, which are sets of instructions that enable computers to solve complex problems quickly and effectively. In recent years, advancements in machine learning and artificial intelligence have revolutionized the field, allowing computers to learn from data and make predictions or decisions without explicit programming. Computer sciense also plays a critical role in cybersecurity, helping protect sensitive information from unauthorized access. As technology continues to evolve, the demand for skilled computer scientists grows, with applications in almost every industry. From healthcare to finance, entertainment, and beyond, computer sciense is essential in driving innovation, solving global challenges, and shaping the future of human progress. It’s a field that requires logical thinking, problem solving skills, and a deep understanding of how technology can be leveraged to make the world more connected and efficient.";

const splitParagraph = paragraph.split(' ');
console.log(splitParagraph);

// Counting words
var wordcount = splitParagraph.length;
console.log(wordcount);

// Removing "and"
const storyWithoutAnd = splitParagraph.filter(word => word !== "and");
console.log(storyWithoutAnd);

// Switching "sciense" to "science" (first join the array into a string)
const storyWithoutAndString = storyWithoutAnd.join(' ');
const storyNewScience = storyWithoutAndString.replace(/sciense/g, "science");
console.log(storyNewScience);

// Finding index of "healthcare"
var healthcareIndex = storyNewScience.indexOf("healthcare");
console.log("Healthcare index:", healthcareIndex);

// Checking number of letters in words
const lessThanTen = [];
const moreThanTen = [];
let has14Letters = false;

// Split the sentence into words again for iteration
const storyWords = storyNewScience.split(' ');

for(let i = 0; i < storyWords.length; i++){
    if(storyWords[i].length === 14){
        has14Letters = true;
    }
    if(storyWords[i].length < 10){
        lessThanTen.push(storyWords[i]);
    } else {
        moreThanTen.push(storyWords[i]);
    }
}

console.log("Words Less Than Ten:", lessThanTen);
console.log("Words More Than Ten:", moreThanTen);

if(has14Letters){
    console.log("There is a word with 14 letters");
} else {
    console.log("There is no word with 14 letters");
}

// Switching "information" to "info"
const finalStory = storyNewScience.replace(/information/g,"info");

// Output final story
console.log(finalStory);
