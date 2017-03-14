		
	var questions = new Array (5);
	questions[0] = "president"
	questions[1] = "president-1"
	questions[2] = "president-2"
	questions[3] = "president-3"
	questions[4] = "president-4"


	function fSubmit(a){

		 var ques = document.getElementsByName(a);
		 var nuOfRadios = ques.length;
		 var correctAnswer = 0;

		 for (var i = 0; i < nuOfRadios; i++) {
		 	if (ques[i].checked)  {
		 		if (ques[i].value =="") {
		 			correctAnswer ++;
		 			console.log(correctAnswer);
		
		 			//document.getElementById("wins").innerHTML = correctAnswer;
		 			
		 			
		 		}
		 	}
		 }
	}

	function checkAll () {
		for (var i = 0; i < questions.length; i ++ ) {
			fSubmit(questions[i]);
			console.log(correctAnswer);
		}

		//console.log(correctAnswer);
	}

	

