/*
Program Quiz sederhana menggunakan JavaScript
*/

// Object	15
var quizQuestions = 	[
		{
			"question" : "Apa ibukota Indonesia?",
			"choices" : [
				"1. Jakarta",
				"2. Medan",
				"3. Surabaya",
				"4. Denpasar"
			]
		},
		{
			"question" : "Naga apa yang ada di Indonesia?",
			"choices" : [
				"1. Kadal",
				"2. Buaya",
				"3. Biawak",
				"4. Komodo"
			]
		},
		{
			"question" : "Apa warna bendera Indonesia?",
			"choices" : [
				"1. Biru Putih Hijau",
				"2. Merah Bulan Sabit",
				"3. Merah Putih",
				"4. Hijau Ungu"
			]
		},
		{
			"question" : "Siapa presiden pertama Indonesia?",
			"choices" : [
				"1. Soeharto",
				"2. Soekarno",
				"3. Adam Smith",
				"4. Gus Dur"
			]
		},
		{
			"question" : "Apa simbol dari negara Indonesia",
			"choices" : [
				"1. Merpati",
				"2. Ayam",
				"3. Elang",
				"4. Garuda"
			]
		}
	]

// Array 10
var correctAnswer = [1, 4, 3, 2, 4]; // Jawaban yang benar untuk tiap soal.
var yourAnswer = [];
var currentQuestion = 0;
var quizArea = document.getElementById("quizArea");
var quizChoices = document.getElementById("quizChoices");
var scores = 0;

init_quiz();

// Function 10
function init_quiz() {
	quizArea.innerHTML = "<h3>"+quizQuestions[currentQuestion].question+"</h3>";
	formatQuiz(quizQuestions[currentQuestion].choices);	
}

function formatQuiz(questionChoices) {
	var arr = [];

	for(var i = 0; i < questionChoices.length; i++) {
		arr.push(questionChoices[i]);
	}

	quizChoices.innerHTML = arr.join("<br/>");
}

function answerQuestion() {
	var answer = prompt("Answer the question with numbers 1 - 4");
	checkAnswer(answer);
}

function checkAnswer(answer) {
	// IF ELSE 5
	if (correctAnswer[currentQuestion] == answer) {
		// alert("Benar! "+answer);
		scores = scores + 10;
		yourAnswer.push(answer);

		currentQuestion++;
		loadQuiz();
		
	} 
	else {
		// alert("SALAH! "+answer);
		yourAnswer.push(answer);

		currentQuestion++;
		loadQuiz();
	}
}

function loadQuiz() {
	var finalScores = parseInt((scores / quizQuestions.length) * 10);
	console.log("Scores: "+scores);
	console.log("My Answer: "+yourAnswer);

	var answerString, correctAnswerString;

	// Cek jika quiz masih ada. Jika ya, Munculkan pertanyaan berikut nya, jika tidak munculkan pesan terakhir.
	if (currentQuestion < quizQuestions.length) {
		quizArea.innerHTML = "<h3>"+quizQuestions[currentQuestion].question+"</h3>";
		formatQuiz(quizQuestions[currentQuestion].choices);	
	} else {
		quizArea.innerHTML = "Thank you! You've completed the Quiz. Check your scores below";
		quizChoices.innerHTML = "<h2>Final Scores: "+finalScores+"</h2>";
		document.getElementById("btnAnswer").style.visibility = "hidden"; 

		// FOR 5
		console.log("== Your Answer ==\n");

		for (var i = 0; i < yourAnswer.length; i++) {
			// console.log("Your Answer on Question #: "+parseInt(i+1)+" is "+yourAnswer[i]);
			answerString = quizQuestions[i].choices[parseInt(yourAnswer[i] - 1)];
			correctAnswerString = quizQuestions[i].choices[parseInt(correctAnswer[i] - 1)];

			console.log("Your Answer on Question #: "+parseInt(i+1)+" is "+answerString+"\n The correct answer is: "+correctAnswerString);
			alert("Your Answer on Question #: "+parseInt(i+1)+" is "+answerString+"\n The correct answer is: "+correctAnswerString);
		}
	}
}