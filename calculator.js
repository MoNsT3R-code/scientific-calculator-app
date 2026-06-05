/**
 * MathHub Pro - Complete SPA Application
 * Scientific Calculator, Rich Notes, Dynamic Graph Plotter
 * Built with Vanilla JavaScript (ES6+)
 */

// ==================== CALCULATOR MODULE ====================

class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.prevInput = document.getElementById('prevInput');
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.init();
    }

    init() {
        // Number buttons
        document.querySelectorAll('[data-value]').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleNumber(e.target.dataset.value));
        });

        // Operator buttons
        document.querySelectorAll('[data-operator]').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleOperator(e.target.dataset.operator));
        });

        // Action buttons
        document.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAction(e.target.dataset.action));
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        this.updateDisplay();
    }

    handleNumber(value) {
        // Prevent multiple decimal points
        if (value === '.' && this.currentValue.includes('.')) return;

        if (this.shouldResetDisplay) {
            this.currentValue = value === '.' ? '0.' : value;
            this.shouldResetDisplay = false;
        } else {
            this.currentValue = this.currentValue === '0' && value !== '.' 
                ? value 
                : this.currentValue + value;
        }

        this.updateDisplay();
    }

    handleOperator(op) {
        if (this.operation && !this.shouldResetDisplay) {
            this.calculate();
        }

        this.previousValue = this.currentValue;
        this.operation = op;
        this.shouldResetDisplay = true;
        this.updateDisplay();
    }

    handleAction(action) {
        switch (action) {
            case 'clear':
                this.reset();
                break;
            case 'backspace':
                this.currentValue = this.currentValue.slice(0, -1) || '0';
                break;
            case 'equals':
                this.calculate();
                break;
            case 'percent':
                this.currentValue = String(parseFloat(this.currentValue) / 100);
                break;
            case 'sin':
                this.applyScientificFunction('sin');
                break;
            case 'cos':
                this.applyScientificFunction('cos');
                break;
            case 'tan':
                this.applyScientificFunction('tan');
                break;
            case 'sqrt':
                this.applyScientificFunction('sqrt');
                break;
            case 'log':
                this.applyScientificFunction('log10');
                break;
            case 'ln':
                this.applyScientificFunction('log');
                break;
            case 'pow':
                this.handleOperator('^');
                break;
            case 'pi':
                this.currentValue = String(Math.PI);
                break;
            case 'e':
                this.currentValue = String(Math.E);
                break;
        }
        this.updateDisplay();
    }

    handleKeyboard(e) {
        // Numbers and operators
        if (/[0-9+\-*/.%]/.test(e.key)) {
            e.preventDefault();
            if (/[0-9.]/.test(e.key)) {
                this.handleNumber(e.key);
            } else if (['+', '-', '*', '/'].includes(e.key)) {
                this.handleOperator(e.key);
            }
        }

        // Enter for equals
        if (e.key === 'Enter') {
            e.preventDefault();
            this.handleAction('equals');
        }

        // Backspace
        if (e.key === 'Backspace') {
            e.preventDefault();
            this.handleAction('backspace');
        }

        // Escape for clear
        if (e.key === 'Escape') {
            e.preventDefault();
            this.handleAction('clear');
        }
    }

    applyScientificFunction(func) {
        try {
            const num = parseFloat(this.currentValue);
            let result;

            switch (func) {
                case 'sin':
                    result = Math.sin(num * Math.PI / 180); // Convert to radians
                    break;
                case 'cos':
                    result = Math.cos(num * Math.PI / 180);
                    break;
                case 'tan':
                    result = Math.tan(num * Math.PI / 180);
                    break;
                case 'sqrt':
                    result = Math.sqrt(num);
                    break;
                case 'log10':
                    result = Math.log10(num);
                    break;
                case 'log':
                    result = Math.log(num);
                    break;
                default:
                    return;
            }

            this.currentValue = String(Math.round(result * 1000000) / 1000000);
            this.shouldResetDisplay = true;
        } catch (error) {
            this.currentValue = 'Error';
            this.shouldResetDisplay = true;
        }
    }

    calculate() {
        if (!this.operation || !this.previousValue) return;

        try {
            const prev = parseFloat(this.previousValue);
            const current = parseFloat(this.currentValue);
            let result;

            switch (this.operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        this.currentValue = 'Cannot divide by 0';
                        this.shouldResetDisplay = true;
                        return;
                    }
                    result = prev / current;
                    break;
                case '^':
                    result = Math.pow(prev, current);
                    break;
                default:
                    return;
            }

            this.currentValue = String(Math.round(result * 1000000) / 1000000);
            this.operation = null;
            this.previousValue = '';
            this.shouldResetDisplay = true;
        } catch (error) {
            this.currentValue = 'Error';
            this.shouldResetDisplay = true;
        }
    }

    reset() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
    }

    updateDisplay() {
        this.display.textContent = this.currentValue.length > 12 
            ? this.currentValue.substring(0, 12) + '...'
            : this.currentValue;
        
        if (this.operation && this.previousValue) {
            this.prevInput.textContent = `${this.previousValue} ${this.operation}`;
        } else {
            this.prevInput.textContent = this.previousValue || '0';
        }
    }
}

// ==================== NOTES MODULE ====================

class NoteEditor {
    constructor() {
        this.noteArea = document.getElementById('noteArea');
        this.charCount = document.getElementById('charCount');
        this.saveBtn = document.getElementById('saveNote');
        this.clearBtn = document.getElementById('clearNote');
        this.saveStatus = document.getElementById('saveStatus');
        this.boldBtn = document.getElementById('boldBtn');
        this.italicBtn = document.getElementById('italicBtn');
        this.bulletBtn = document.getElementById('bulletBtn');
        this.numberBtn = document.getElementById('numberBtn');
        this.init();
    }

    init() {
        this.loadNote();
        
        // Character counter
        this.noteArea.addEventListener('input', () => {
            this.updateCharCount();
        });

        // Save button
        this.saveBtn.addEventListener('click', () => this.saveNote());

        // Clear button
        this.clearBtn.addEventListener('click', () => {
            if (confirm('Are you sure? This will clear the notes.')) {
                this.noteArea.value = '';
                this.updateCharCount();
                localStorage.removeItem('mathHubNotes');
            }
        });

        // Format buttons
        this.boldBtn.addEventListener('click', () => this.insertFormatting('**'));
        this.italicBtn.addEventListener('click', () => this.insertFormatting('*'));
        this.bulletBtn.addEventListener('click', () => this.insertFormatting('\n• '));
        this.numberBtn.addEventListener('click', () => this.insertFormatting('\n1. '));

        // Keyboard shortcuts
        this.noteArea.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                if (e.key === 's') {
                    e.preventDefault();
                    this.saveNote();
                }
            }
        });

        this.updateCharCount();
    }

    insertFormatting(format) {
        const start = this.noteArea.selectionStart;
        const end = this.noteArea.selectionEnd;
        const text = this.noteArea.value;
        const selectedText = text.substring(start, end);

        if (!selectedText) return;

        if (format === '**' || format === '*') {
            const newText = text.substring(0, start) + format + selectedText + format + text.substring(end);
            this.noteArea.value = newText;
        } else {
            const newText = text.substring(0, start) + format + selectedText + text.substring(end);
            this.noteArea.value = newText;
        }

        this.updateCharCount();
    }

    updateCharCount() {
        this.charCount.textContent = this.noteArea.value.length;
    }

    saveNote() {
        const noteContent = this.noteArea.value;
        localStorage.setItem('mathHubNotes', noteContent);
        
        // Show success message
        this.saveStatus.classList.remove('hidden');
        this.saveStatus.classList.add('animate-fadeIn');
        
        setTimeout(() => {
            this.saveStatus.classList.add('hidden');
        }, 2000);
    }

    loadNote() {
        const savedNote = localStorage.getItem('mathHubNotes');
        if (savedNote) {
            this.noteArea.value = savedNote;
            this.updateCharCount();
        }
    }
}

// ==================== GRAPH PLOTTER MODULE ====================

class GraphPlotter {
    constructor() {
        this.canvas = document.getElementById('graphCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.funcInput = document.getElementById('funcInput');
        this.funcColor = document.getElementById('funcColor');
        this.plotBtn = document.getElementById('plotBtn');
        this.clearGraphs = document.getElementById('clearGraphs');
        this.funcList = document.getElementById('funcList');
        this.gridToggle = document.getElementById('gridToggle');
        this.axisToggle = document.getElementById('axisToggle');
        this.zoomInBtn = document.getElementById('zoomInBtn');
        this.zoomOutBtn = document.getElementById('zoomOutBtn');

        this.functions = [];
        this.xMin = -10;
        this.xMax = 10;
        this.yMin = -10;
        this.yMax = 10;
        this.pixelRatio = window.devicePixelRatio || 1;

        this.init();
        this.resizeCanvas();
        this.draw();
    }

    init() {
        this.plotBtn.addEventListener('click', () => this.addFunction());
        this.clearGraphs.addEventListener('click', () => this.clearAllGraphs());
        this.gridToggle.addEventListener('change', () => this.draw());
        this.axisToggle.addEventListener('change', () => this.draw());
        this.zoomInBtn.addEventListener('click', () => this.zoom(0.5));
        this.zoomOutBtn.addEventListener('click', () => this.zoom(2));

        this.funcInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addFunction();
        });

        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.draw();
        });

        // Mouse wheel zoom
        this.canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.zoom(e.deltaY > 0 ? 1.1 : 0.9);
        });
    }

    resizeCanvas() {
        const rect = this.canvas.parentElement.getBoundingClientRect();
        const width = rect.width;
        const height = 300;

        this.canvas.width = width * this.pixelRatio;
        this.canvas.height = height * this.pixelRatio;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';

        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    addFunction() {
        const funcString = this.funcInput.value.trim();
        const color = this.funcColor.value;

        if (!funcString) {
            alert('Please enter a function');
            return;
        }

        // Validate function syntax
        if (!this.validateFunction(funcString)) {
            alert('Invalid function syntax. Use x as variable (e.g., x*x, Math.sin(x))');
            return;
        }

        // Check for duplicates
        if (this.functions.some(f => f.func === funcString)) {
            alert('This function is already plotted');
            return;
        }

        this.functions.push({
            func: funcString,
            color: color,
            id: Date.now()
        });

        this.funcInput.value = '';
        this.updateFunctionList();
        this.draw();
    }

    validateFunction(funcString) {
        try {
            // Test with sample x values
            const testFunc = new Function('x', 'Math', `return ${funcString}`);
            testFunc(0, Math);
            testFunc(1, Math);
            return true;
        } catch (error) {
            return false;
        }
    }

    removeFunction(id) {
        this.functions = this.functions.filter(f => f.id !== id);
        this.updateFunctionList();
        this.draw();
    }

    clearAllGraphs() {
        this.functions = [];
        this.funcInput.value = '';
        this.updateFunctionList();
        this.draw();
    }

    updateFunctionList() {
        if (this.functions.length === 0) {
            this.funcList.innerHTML = '<p class="text-sm text-slate-400 text-center">No functions added</p>';
            return;
        }

        this.funcList.innerHTML = this.functions.map(f => `
            <div class="func-item">
                <div class="func-color-dot" style="background-color: ${f.color}"></div>
                <span class="flex-1 font-mono text-xs">${f.func}</span>
                <button class="func-delete-btn" data-id="${f.id}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        `).join('');

        // Add delete listeners
        document.querySelectorAll('.func-delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                this.removeFunction(id);
            });
        });
    }

    zoom(factor) {
        const centerX = (this.xMin + this.xMax) / 2;
        const centerY = (this.yMin + this.yMax) / 2;
        const rangeX = (this.xMax - this.xMin) / 2;
        const rangeY = (this.yMax - this.yMin) / 2;

        this.xMin = centerX - rangeX * factor;
        this.xMax = centerX + rangeX * factor;
        this.yMin = centerY - rangeY * factor;
        this.yMax = centerY + rangeY * factor;

        this.draw();
    }

    draw() {
        const width = this.canvas.width / this.pixelRatio;
        const height = this.canvas.height / this.pixelRatio;

        // Clear canvas
        this.ctx.fillStyle = '#0f172a';
        this.ctx.fillRect(0, 0, width, height);

        // Draw grid
        if (this.gridToggle.checked) {
            this.drawGrid(width, height);
        }

        // Draw axes
        if (this.axisToggle.checked) {
            this.drawAxes(width, height);
        }

        // Draw functions
        this.functions.forEach(f => {
            this.drawFunction(f, width, height);
        });
    }

    drawGrid(width, height) {
        this.ctx.strokeStyle = '#334155';
        this.ctx.lineWidth = 0.5;
        this.ctx.setLineDash([4, 4]);

        const stepX = (this.xMax - this.xMin) / 10;
        const stepY = (this.yMax - this.yMin) / 10;

        // Vertical lines
        for (let i = 0; i <= 10; i++) {
            const x = this.xToPixel(this.xMin + i * stepX, width);
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, height);
            this.ctx.stroke();
        }

        // Horizontal lines
        for (let i = 0; i <= 10; i++) {
            const y = this.yToPixel(this.yMax - i * stepY, height);
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(width, y);
            this.ctx.stroke();
        }

        this.ctx.setLineDash([]);
    }

    drawAxes(width, height) {
        this.ctx.strokeStyle = '#64748b';
        this.ctx.lineWidth = 2;

        // X-axis
        const yAxisPos = this.yToPixel(0, height);
        if (yAxisPos >= 0 && yAxisPos <= height) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, yAxisPos);
            this.ctx.lineTo(width, yAxisPos);
            this.ctx.stroke();
        }

        // Y-axis
        const xAxisPos = this.xToPixel(0, width);
        if (xAxisPos >= 0 && xAxisPos <= width) {
            this.ctx.beginPath();
            this.ctx.moveTo(xAxisPos, 0);
            this.ctx.lineTo(xAxisPos, height);
            this.ctx.stroke();
        }

        // Labels
        this.ctx.fillStyle = '#94a3b8';
        this.ctx.font = '12px Monaco, monospace';
        this.ctx.textAlign = 'center';

        const stepX = (this.xMax - this.xMin) / 10;
        for (let i = 0; i <= 10; i++) {
            const x = this.xMin + i * stepX;
            const pixelX = this.xToPixel(x, width);
            const pixelY = this.yToPixel(0, height) + 15;
            if (pixelX >= 0 && pixelX <= width && pixelY <= height + 15) {
                this.ctx.fillText(x.toFixed(1), pixelX, pixelY);
            }
        }

        this.ctx.textAlign = 'right';
        const stepY = (this.yMax - this.yMin) / 10;
        for (let i = 0; i <= 10; i++) {
            const y = this.yMax - i * stepY;
            const pixelY = this.yToPixel(y, height);
            const pixelX = this.xToPixel(0, width) - 8;
            if (pixelY >= 0 && pixelY <= height && pixelX >= 0) {
                this.ctx.fillText(y.toFixed(1), pixelX, pixelY + 4);
            }
        }
    }

    drawFunction(funcObj, width, height) {
        try {
            this.ctx.strokeStyle = funcObj.color;
            this.ctx.lineWidth = 2.5;
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';

            const step = (this.xMax - this.xMin) / width;
            let firstPoint = true;

            this.ctx.beginPath();

            for (let pixelX = 0; pixelX < width; pixelX++) {
                const x = this.xMin + pixelX * step;

                try {
                    const y = this.evaluateFunction(funcObj.func, x);

                    if (!isFinite(y) || isNaN(y)) continue;

                    const pixelY = this.yToPixel(y, height);

                    if (pixelY >= -10 && pixelY <= height + 10) {
                        if (firstPoint) {
                            this.ctx.moveTo(pixelX, pixelY);
                            firstPoint = false;
                        } else {
                            this.ctx.lineTo(pixelX, pixelY);
                        }
                    } else {
                        // Discontinuity
                        if (!firstPoint) {
                            this.ctx.stroke();
                            this.ctx.beginPath();
                            firstPoint = true;
                        }
                    }
                } catch (error) {
                    // Skip invalid points
                    if (!firstPoint) {
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        firstPoint = true;
                    }
                }
            }

            this.ctx.stroke();
        } catch (error) {
            console.error('Error drawing function:', error);
        }
    }

    evaluateFunction(funcString, x) {
        try {
            const func = new Function('x', 'Math', `return ${funcString}`);
            return func(x, Math);
        } catch (error) {
            throw new Error(`Invalid function: ${error.message}`);
        }
    }

    xToPixel(x, width) {
        return ((x - this.xMin) / (this.xMax - this.xMin)) * width;
    }

    yToPixel(y, height) {
        return ((this.yMax - y) / (this.yMax - this.yMin)) * height;
    }
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Initialize all modules
    const calculator = new Calculator();
    const noteEditor = new NoteEditor();
    const graphPlotter = new GraphPlotter();

    console.log('✓ MathHub Pro loaded successfully');
    console.log('✓ Calculator ready');
    console.log('✓ Notes ready');
    console.log('✓ Graph Plotter ready');
});

// Handle errors gracefully
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
