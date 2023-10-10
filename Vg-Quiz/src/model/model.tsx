interface Option {
    imageUrl: string;
    text: string;
  }
  
  class Question {
    questionText: string;
    options: Option[];
    correctIndex: number;
  
    constructor(questionText: string, options: Option[], correctIndex: number) {
      this.questionText = questionText;
      this.options = options;
      this.correctIndex = correctIndex;
    }
  }
  
  const opt1: Option = { imageUrl: "./img/opt1.png", text: "Option 1" };
  const opt2: Option = { imageUrl: "./img/opt2.png", text: "Option 2" };
  const opt3: Option = { imageUrl: "./img/opt3.png", text: "Option 3" };
  const opt4: Option = { imageUrl: "./img/opt4.png", text: "Option 4" };
  
  // Create questions
  const questions: Question[] = [];
  
  questions.push(
    new Question("Question 1", [opt1, opt2, opt3, opt4], 0)
  );
  
  questions.push(
    new Question("Question 2", [opt2, opt3, opt4, opt1], 1)
  );
  
  questions.push(
    new Question("Question 3", [opt3, opt4, opt1, opt2], 2)
  );
  
  questions.push(
    new Question("Question 4", [opt4, opt1, opt2, opt3], 3)
  );
  
  questions.push(
    new Question("Question 5", [opt1, opt2, opt3, opt4], 0)
  );
  
  questions.push(
    new Question("Question 6", [opt2, opt3, opt4, opt1], 1)
  );
  
  questions.push(
    new Question("Question 7", [opt3, opt4, opt1, opt2], 2)
  );
  
  questions.push(
    new Question("Question 8", [opt4, opt1, opt2, opt3], 3)
  );
  
  questions.push(
    new Question("Question 9", [opt1, opt2, opt3, opt4], 0)
  );
  
  questions.push(
    new Question("Question 10", [opt2, opt3, opt4, opt1], 1)
  );
  
  questions.push(
    new Question("Question 11", [opt3, opt4, opt1, opt2], 2)
  );
  
  questions.push(
    new Question("Question 12", [opt4, opt1, opt2, opt3], 3)
  );
  
  export default questions;
  