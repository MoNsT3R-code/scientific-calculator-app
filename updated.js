// Example functions connecting elements to Python:

// 1. Send calculation to Python
async function requestCalculation(mathString) {
    const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression: mathString })
    });
    const data = await response.json();
    if(data.success) {
        document.getElementById('display').value = data.result;
    } else {
        alert(data.error);
    }
}

// 2. Request Graph Plot Arrays
async function requestGraphPlot(equationInput) {
    const response = await fetch('/api/plot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ equation: equationInput })
    });
    const data = await response.json();
    if(data.success) {
        // data.x and data.y are arrays of numbers from Python!
        renderPlotOnCanvas(data.x, data.y);
    }
}

// 3. Save a note to the Python backend
async function saveNoteToBackend(titleText, contentText) {
    const response = await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: titleText, content: contentText })
    });
    const data = await response.json();
    if(data.success) {
        updateNotesUI(data.notes);
    }
}
