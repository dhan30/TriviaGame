
// SUBMIT FUNCTION
function onSubmit() {
	// STORE VALUE OF CORRECT ANSWERS
	var score = 0;
	// TOTAL AMOUNT OF QUESTIONS
	var numofQuest = 5;
	// ANSWER(VALUE) FOR EACH QUESTION
	var ansArr = ['a','c','a','d','c']
	// CREATE VARIABLES TO ACCESS ITEMS IN THE FORM
	var q1 = document.forms['quiz']['president'].value;
	var q2 = document.forms['quiz']['president-1'].value;
	var q3 = document.forms['quiz']['president-2'].value;
	var q4 = document.forms['quiz']['president-3'].value;
	var q5 = document.forms['quiz']['president-4'].value;
	// CREATE A FOR LOOP TO CHECK IF ALL QUESTIONS HAVE BEEN ANSWERED
	for (var i = 1; i <= numofQuest; i++) {
		if(eval('q' + i) == '') {
			alert("you missed" + i);
		}
	}
	// CREATE A FOR LOOP TO CHECK IF THE ANSWERS TO QUESTIONS ARE CORRECT
	for(var i = 1; i <= numofQuest; i++) {
		if(eval('q' + i) == ansArr[i - 1]) {
			//ADDS PLUS ONE TO SCORE IF CORRECT
			score++;
			console.log(score);

		}


	}
	// CREATE VARIABLE TO CHANGE CONTENT INSIDE HTML
	var results = document.getElementById("results");
	results.innerHTML = "Correct Answers: " + score + " out of  5";
	return false;
	



}