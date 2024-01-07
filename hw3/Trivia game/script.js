let score = 0;
let questions = ["Care este capitala Romaniei","Unde este Romania?","Ce este europa?"];
let answers = [["Bucuresti","Cluj","Brasov","Ploiesti"],["Europa","Asia","Africa","America"],["Un continet", "O tara","Un oras","Un sat"]];
let questionPicker = Math.floor(Math.random() * questions.length);
console.log(questionPicker);
const displayedQuestion = document.getElementById('question');
const answer1 = document.getElementById('button1');
const answer2 = document.getElementById('button2');
const answer3 = document.getElementById('button3');
const answer4 = document.getElementById('button4');
console.log(answer1.style.backgroundColor);
const scoreParagraph = document.getElementById('score');
displayedQuestion.innerText = questions[questionPicker];
answer1.innerText = answers[questionPicker][0];
answer2.innerText = answers[questionPicker][1];
answer3.innerText = answers[questionPicker][2];
answer4.innerText = answers[questionPicker][3];
const correctAnswer1 = answers[0][0];
const correctAnswer2 = answers[1][0];
const correctAnswer3 = answers[2][0];
scoreParagraph.innerText = `Score : ${score}`;
function restartGame(){
    score = 0;
    scoreParagraph.innerText = `Score : ${score}`;
}
function chooseNextQuestion(){
    let questionPicker = Math.floor(Math.random() * questions.length); 
    displayedQuestion.innerText = questions[questionPicker];
    answer1.innerText = answers[questionPicker][0];
    answer2.innerText = answers[questionPicker][1];
    answer3.innerText = answers[questionPicker][2];
    answer4.innerText = answers[questionPicker][3];
}
function highlightCorrect(answer){
    const element = document.getElementById(`button${answer}`);
    element.style.backgroundColor = 'green';
}
function highlightFalse(answer){
    const element = document.getElementById(`button${answer}`);
    element.style.backgroundColor = 'red';
}
function unhighlight(answer){
    const element = document.getElementById(`button${answer}`);
    element.style.backgroundColor = '';
}
function check(chosen){
    let chosenAnswer = answers[questionPicker][chosen];
    if(chosenAnswer === eval(`correctAnswer${questionPicker+1}`)){
        score++;
        highlightCorrect(chosen+1);
        scoreParagraph.innerText = `Score : ${score}`; 
        setTimeout(function () {
            unhighlight(chosen+1);
            chooseNextQuestion();
        }, 1000);
        
    }else{
        highlightFalse(chosen+1);
        setTimeout(function () {
            unhighlight(chosen+1);
            restartGame();
        }, 1000);
        
    }
}