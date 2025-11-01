window.onload = function() {
  // Bind to the form and inputs as they appear in the HTML
  const form = document.getElementById('magic-form');
  const username = document.getElementById('name');
  const greeting = document.getElementById('greeting');
  const question = document.getElementById('question');
  const questionDisplay = document.getElementById('questionDisplay');
  const responses = [
      'It is certain!',
      'It is decidedly so.',
      'Reply hazy, try again.',
      'Cannot predict now.',
      'The spirits say No.',
      'The spirits say the outlook is not so good...',
      'The spirits say that signs point to yes!',
      "The spirits say dont't count on it!",
      'uuuuuhhhh......'
    ];

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const enterName = username.value.trim();

    const enterQuestion = question.value.trim();

    // Update the UI
    greeting.textContent = enterName ? `Greetings, ${enterName}` : 'Hello, Stranger...';
    questionDisplay.textContent = `You asked: ${enterQuestion}`;

    // Pick a random response and show it
    const randomNumber = Math.floor(Math.random() * responses.length);
    const answer = responses[randomNumber];
    const answerBox = document.getElementById('answerBox');
    answerBox.textContent = answer;

    // Clear inputs for the next question
    username.value = '';
    question.value = '';
  });
};
