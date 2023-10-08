const htmlCodeContainer = document.getElementById('html-code-container');
const cssCodeContainer = document.getElementById('css-code-container');
const outputWindow = document.getElementById('output-window');
const clearCodeButton = document.getElementById('clear-code');

let htmlCode = '';
let cssCode = '';

const htmlCodeLines = [
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
    '</body>',
    '</html>',
];

const cssCodeLines = [
    '/* CSS Styles */',
    'body {',
    '    background-color: #282c34;',
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
];

function typeCode(container, lines, callback) {
    let lineIndex = 0;

    function typeLine() {
        if (lineIndex < lines.length) {
            const line = lines[lineIndex];
            const lineElement = document.createElement('div');
            lineElement.textContent = line;
            container.appendChild(lineElement);

            // Create and append the cursor element
            const cursorElement = document.createElement('span');
            cursorElement.className = 'cursor';
            lineElement.appendChild(cursorElement);

            container.scrollTop = container.scrollHeight;

            lineIndex++;
            setTimeout(typeLine, 800);
        } else {
            callback();
        }
    }

    typeLine();
}

function displayHtmlCode() {
    typeCode(htmlCodeContainer, htmlCodeLines, () => {
        htmlCode = htmlCodeLines.join('\n');
        updateOutputWindow();
        showToolbar();
    });
}

function displayCssCode() {
    typeCode(cssCodeContainer, cssCodeLines, () => {
        cssCode = cssCodeLines.join('\n');
        updateOutputWindow();
        showToolbar();
    });
}

function updateOutputWindow() {
    outputWindow.innerHTML = '';
    const outputContent = document.createElement('div');
    outputContent.innerHTML = htmlCode;
    outputWindow.appendChild(outputContent);

    // Append style tag with CSS code
    const styleTag = document.createElement('style');
    styleTag.textContent = cssCode;
    outputContent.appendChild(styleTag);
}

function showToolbar() {
    clearCodeButton.style.display = 'inline-block';
}

// Initial style setup
htmlCodeContainer.style.backgroundColor = '#1e1e1e';
htmlCodeContainer.style.color = 'white';

cssCodeContainer.style.backgroundColor = '#1e1e1e';
cssCodeContainer.style.color = 'white';

// Trigger the animation after a short delay
setTimeout(() => {
    htmlCodeContainer.style.backgroundColor = '#282c34';
    htmlCodeContainer.style.color = 'white';

    setTimeout(() => {
        cssCodeContainer.style.backgroundColor = '#282c34';
        cssCodeContainer.style.color = 'white';
        displayCssCode(); // Ensure CSS code is displayed after animation
    }, 1000);

    displayHtmlCode(); // Ensure HTML code is displayed after animation
}, 1000);

// Input event listeners
htmlCodeContainer.addEventListener('input', () => {
    htmlCode = htmlCodeContainer.textContent;
    updateOutputWindow();
});

cssCodeContainer.addEventListener('input', () => {
    cssCode = cssCodeContainer.textContent;
    updateOutputWindow();
});

clearCodeButton.addEventListener('click', () => {
    htmlCodeContainer.innerHTML = '';
    cssCodeContainer.innerHTML = '';
    outputWindow.innerHTML = '';
    htmlCode = '';
    cssCode = '';
});
