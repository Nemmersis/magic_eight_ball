window.onload = function() {

  const form = document.getElementById('form');
  const username = document.getElementById('usernameEntry');
  const greeting = document.getElementById('greeting');
  const question = document.getElementById('enterQuestion');
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

    greeting.textContent = enterName ? `Greetings, ${enterName}` : 'Hello, Stranger...';
    questionDisplay.textContent = `You asked: ${enterQuestion}`;

    const randomNumber = Math.floor(Math.random() * responses.length);
    const answer = responses[randomNumber];
    const answerBox = document.getElementById('answerBox');
    
    answerBox.textContent = answer;

    username.value = '';
    question.value = '';
  });
};
