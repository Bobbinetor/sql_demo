document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('query-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var queryInput = document.getElementById('query-input').value;

        // Now you can use the queryInput variable in your code
        console.log(queryInput);

        // Check if the query matches the pattern "SELECT * FROM economic WHERE average_salary > 30000 AND population < 40000000"
        var pattern = /^SELECT\s*\*\s*FROM\s*economic\s*WHERE\s*Average\s*Salary\s*>\s*30000\s*AND\s*Population\s*<\s*40000000$/i;
        if (pattern.test(queryInput)) {
            alert('Correct query!');
        } else {
            alert('Incorrect query');
        }
    });
});
