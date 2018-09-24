$(document).ready(function () {
	
var quizQuestions=new Array();
var stage="#quiz1";
var stage2=new Object;
var questionNumber=0;
var questionLock=false;
var numberOfQuestions;
var score=0;
			 
$.getJSON('quiz.json', function(data) {
for(i=0;i<data.questions.length;i++){ 
	quizQuestions[i]=new Array;
	quizQuestions[i][0]=data.questions[i].question;
	quizQuestions[i][1]=data.questions[i].option1;
	quizQuestions[i][2]=data.questions[i].option2;
	quizQuestions[i][3]=data.questions[i].option3;
	quizQuestions[i][4]=data.questions[i].option4;}
	numberOfQuestions=quizQuestions.length; 
	displayQuestion();
	})

function displayQuestion(){
 var rnd=Math.random()*4;
	rnd=Math.ceil(rnd);
 var q1;
 var q2;
 var q3;
 var q4;

	if(rnd==1){q1=quizQuestions[questionNumber][1];q2=quizQuestions[questionNumber][2];q3=quizQuestions[questionNumber][3];q4=quizQuestions[questionNumber][4];}
	if(rnd==2){q2=quizQuestions[questionNumber][1];q3=quizQuestions[questionNumber][2];q4=quizQuestions[questionNumber][3];q1=quizQuestions[questionNumber][4];}
	if(rnd==3){q3=quizQuestions[questionNumber][1];q4=quizQuestions[questionNumber][2];q1=quizQuestions[questionNumber][3];q2=quizQuestions[questionNumber][4];}
	if(rnd==4){q4=quizQuestions[questionNumber][1];q1=quizQuestions[questionNumber][2];q2=quizQuestions[questionNumber][3];q3=quizQuestions[questionNumber][4];}

$(stage).append('<div class="questionText">'+quizQuestions[questionNumber][0]+'<br><br></div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div><div id="4" class="option">'+q4+'</div>');
$('.option').click(function(){
	if(questionLock==false){questionLock=true;	
	if(this.id==rnd){
		$(stage).append('<div class="ci1"><br>Correct!</div>');
		score++;}	
	if(this.id!=rnd){
		$(stage).append('<div class="ci2"><br>Incorrect!</div>');}
  setTimeout(function(){nextQuestion()},1000);}})}

function nextQuestion(){
	questionNumber++;
	if(stage=="#quiz1"){stage2="#quiz1";stage="#quiz2";}
	else{stage2="#quiz2";stage="#quiz1";}
	if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
		$(stage2).animate({}, function() {$(stage2).empty();});
		$(stage).animate({}, function() {questionLock=false;});}
	
function displayFinalSlide(){
	$(stage).append('<div class="questionText">You did it!<br><br>You answered '+score+' out of '+numberOfQuestions+' correctly!</div>');}

});