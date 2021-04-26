function getAllQuestionsOfValue() {
    let i = Math.floor(Math.random() * QUESTIONS.length)// length of global QUESTIONS
    let questionValue = QUESTIONS[i]
        
    //     console.log(jqueryButtons)
    while (questionValue.value !== jqueryButtons.innerText) {
        console.log(questionValue.value)
        let randomQuestion = Math.floor(Math.random() *QUESTIONS.length) //takes care of the random ?s in JSON ?s
        questionValue = QUESTIONS[randomQuestion]
        dollarTag = questionValue.value.slice(1)// if start isn't defined, i starts at 0
    
    }   
    
    }
    
    
    let jqueryButtons = $('.item');
    
    for (let i = 0; i < jqueryButtons.length; i++) {
        jqueryButtons[i].addEventListener("click", getAllQuestionsOfValue)
        // let button = $(rawButton);
        // button.click(function(){
        //     console.log(button.text());
        //     getAllQuestionsOfValue(button.text());
            
        };
    