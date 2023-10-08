const codeContainer = document.getElementById('code-container');
const codeLines = [
    '<!DOCTYPE html>',
    '<html lang="en">',
    '<head>',
    '    <meta charset="UTF-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '    <title>Your Website Title</title>',
    '</head>',
    '<body>',
    '    <h1 id="title">Hello, World!</h1>',
    '    <p>This is a simple webpage.</p>',
    '    </body>',
    '</html>',
    '',
    '/* CSS Styles */',
    'body {',
    '    background-color: black;',
    '    color: white;',
    '    font-family: "Courier New", Courier, monospace;',
    '    margin: 0;',
    '    display: flex;',
    '    align-items: center;',
    '    justify-content: center;',
    '    height: 100vh;',
    '}',
    '',
    '#title {',
    '    color: #61dafb;',
    '}',
    '',
    '#code-container {',
    '    white-space: pre-wrap;',
    '    overflow: auto;',
    '    max-height: 300px;', // Adjust max-height as needed
    '    padding: 20px;',
    '    border: 2px solid #61dafb;',
    '    transition: background-color 0.5s, color 0.5s;',
    '}',
];

function displayCode() {
    codeContainer.innerHTML = '';
    
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            typeCode(line);
        }, index * 800);
    });
}

function typeCode(line) {
    codeContainer.innerHTML += line + '\n';
    codeContainer.scrollTop = codeContainer.scrollHeight;
}

// Initial style setup
codeContainer.style.backgroundColor = 'white';
codeContainer.style.color = 'black';

// Trigger the animation after a short delay
setTimeout(() => {
    codeContainer.style.backgroundColor = 'black';
    codeContainer.style.color = 'white';
    displayCode();
}, 1000);
