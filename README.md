# simple-js-quiz
Simple JS quiz app for Hacktiv8 Exercise 16 Weekly Project

## Pseudocode

Set "quizQuestions" dalam JavaScript Object dengan nilai JSON pertanyaan dan Pilihan Quiz

Set "correctAnswer" dalam Array dengan nilai Jawaban dari Quiz 

Set "yourAnswer" dalam Array Kosong

Set "currentQuestion" dengan nilai 0

Set "scores" dengan nilai 0

Tulis Pertanyaan quiz berdasarkan "currentQuestion" sebagai index. quizQuestions[currentQuestion].question"

Tulis Pilihan jawaban quiz berdasarkan "currentQuestion" sebagai index. "quizQuestions[currentQuestion].choices"

Tekan tombol "Jawab Pertanyaan", Munculkan Input untuk menjawab quiz dengan nilai antara 1 - 4

IF Input nilai "Jawaban" === correctAnswer[currentQuestion]

    Tambahkan "Score" + 10
    
    Tambahkan nilai "Jawaban" kedalam Array "yourAnswer"
   
    Tambah nilai "currentQuestion" + 1
   
    IF  "currentQuestion" < "quizQuestions.length"
   
      Munculkan pertanyaan selanjutnya
	
	ELSE
		
	  Munculkan pesan selesai quiz telah selesai

	  Munculkan "Score" akhir dengan perhitungan (score / quizQuestions.length) * 10

	  Sembunyikan tombol "Jawab Pertanyaan"	

	  Koreksi Jawaban yang ada dengan perulangan sebanyak jawaban

	  FOR indeks = 0, diulangi sampai panjang "yourAnswer"
		
		Munculkan Alert berisi Jawaban Input dan Jawaban Yang benar

	  ENDFOR

	ENDIF 

ELSE	

	"Score" tidak bertambah
	
	Tambahkan nilai "Jawaban" kedalam Array "yourAnswer"
	
    IF  "currentQuestion" < "quizQuestions.length"
   
      Munculkan pertanyaan selanjutnya
	
	ELSE
		
	  Munculkan pesan selesai quiz telah selesai

	  Munculkan "Score" akhir dengan perhitungan (score / quizQuestions.length) * 10

	  Sembunyikan tombol "Jawab Pertanyaan"	

	  Koreksi Jawaban yang ada dengan perulangan sebanyak jawaban

	   FOR indeks = 0, diulangi sampai panjang "yourAnswer"
		
		Munculkan Alert berisi Jawaban Input dan Jawaban Yang benar

	  ENDFOR

END IF