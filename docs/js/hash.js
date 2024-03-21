function hashPassword() {
    var password = document.getElementById('password').value;
    var hashedPassword = hashString(password);
    document.getElementById('hashedPassword').value = hashedPassword;
}

function hashString(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString(16);
}