function generatePassword() {
    const length = 8;
    const upperCaseCount = 2;
    const digitCount = 1;
    const lowerCaseCount = length - upperCaseCount - digitCount;

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    
    let password = '';

    // Add required uppercase letters
    for (let i = 0; i < upperCaseCount; i++) {
        password += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
    }

    // Add required digits
    for (let i = 0; i < digitCount; i++) {
        password += digitChars.charAt(Math.floor(Math.random() * digitChars.length));
    }

    // Add remaining lowercase letters
    for (let i = 0; i < lowerCaseCount; i++) {
        password += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
    }

    // Shuffle the password to mix the characters
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    
    return password;
}

document.getElementById('generate').addEventListener('click', function() {
    const password = generatePassword();
    document.getElementById('password').innerText = password;
});