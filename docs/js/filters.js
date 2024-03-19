document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('query-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var queryInput = document.getElementById('query-input').value;

        // Now you can use the queryInput variable in your code
        console.log(queryInput);

        // Check if the query matches the pattern "SELECT * FROM Nations WHERE average_salary > 30000 AND population < 40000000"
        var pattern = /^SELECT \* FROM economic WHERE Average Salary > 30000 AND Population < 40000000$/i;
        if (pattern.test(queryInput)) {
            alert('Correct query!');
        } else {
            alert('Incorrect query');
        }
    });
});