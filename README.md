# simple-js-quiz
Simple JS quiz app for Hacktiv8 Exercise 16 Weekly Project

## Pseudocode

Set "quizQuestions" dalam JavaScript Object dengan nilai JSON pertanyaan dan Pilihan Quiz

Set "correctAnswer" dalam Array dengan nilai Jawaban dari Quiz 

Set "yourAnswer" dalam Array Kosong

Set "currentQuestion" dengan nilai 0

Set "scores" dengan nilai 0

Tulis Pertanyaan quiz berdasarkan "quizQuestions[currentQuestion].question"

Tulis Pilihan jawaban quiz berdasarkan "quizQuestions[currentQuestion].choices"

Tekan tombol "Jawab Pertanyaan" ditekan, Munculkan Input untuk menjawab quiz dengan nilai antara 1 - 4

IF Input nilai Jawaban === correctAnswer[currentQuestion]

   Tambahkan Score + 10
	
END IF