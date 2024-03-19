const queryElement = document.getElementById('query');
const queryText = 'SELECT * FROM users WHERE username = "student" AND password = "password"';
let index = 0;

const intervalId = setInterval(() => {
    queryElement.textContent += queryText[index];
    index++;

    if (index === queryText.length) {
        clearInterval(intervalId);

        // Highlight the row
        document.getElementById('student-row').className = 'highlight';
    }
}, 100);


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('query-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var queryInput = document.getElementById('query-input').value;

        // Now you can use the queryInput variable in your code
        console.log(queryInput);

        // Check if the query matches the pattern "SELECT * FROM users WHERE username = '?' AND password = '?'"
        var pattern = /^SELECT \* FROM users WHERE username = '.*' AND password = '.*'$/i;
        if (pattern.test(queryInput)) {
            // Correct query format: SELECT * FROM users WHERE username = 'student' AND password = 'password'
            var username = queryInput.match(/username = '([^']+)'/i)[1];
            var password = queryInput.match(/password = '([^']+)'/i)[1];
            if (username === 'Giovanni' && password === 'Rodari') {
            document.getElementById('giovanni-row').className = 'highlight';
            alert('Correct query!');
            } else {
            alert('Incorrect username or password.');
            }
        } else {
            alert('Incorrect query. The correct format is: SELECT * FROM users WHERE username = \'?\' AND password = \'?\'');
        }
    });
});