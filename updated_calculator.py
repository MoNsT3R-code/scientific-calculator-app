from flask import Flask, render_template, request, jsonify
import math
import json
import os
import numpy as np

app = Flask(__name__)
NOTES_FILE = 'notes.json'

# Allowed mathematical operations for safe evaluation
ALLOWED_NAMES = {
    k: v for k, v in math.__dict__.items() if not k.startswith("__")
}
ALLOWED_NAMES.update({
    'abs': abs,
    'round': round,
    'pi': math.pi,
    'e': math.e
})

# Helper functions to manage notes persistent data
def read_notes():
    if not os.path.exists(NOTES_FILE):
        return []
    try:
        with open(NOTES_FILE, 'r') as f:
            return json.load(f)
    except Exception:
        return []

def write_notes(notes):
    with open(NOTES_FILE, 'w') as f:
        json.dump(notes, f, indent=4)

@app.route('/')
def index():
    # Renders your frontend index.html template
    return render_template('index.html')


# ==========================================
# 1. CALCULATOR BACKEND ENDPOINT
# ==========================================
@app.route('/api/calculate', methods=['POST'])
def calculate():
    data = request.get_json() or {}
    expression = data.get('expression', '')

    try:
        # Sanitize JavaScript or standard notation to Python syntax
        # e.g., changing ^ to ** for powers
        sanitized_expression = expression.replace('^', '**')
        
        # Evaluate strictly restricting builtins for safety
        result = eval(sanitized_expression, {"__builtins__": None}, ALLOWED_NAMES)
        return jsonify({'success': True, 'result': float(result)})
    except Exception:
        return jsonify({'success': False, 'error': "Invalid Math Expression"})


# ==========================================
# 2. GRAPH PLOTTER BACKEND ENDPOINT
# ==========================================
@app.route('/api/plot', methods=['POST'])
def plot():
    data = request.get_json() or {}
    equation = data.get('equation', '')  # Expecting format like "x**2" or "sin(x)"
    
    try:
        # Create 100 values spread uniformly from x = -10 to x = 10
        x_values = np.linspace(-10, 10, 100)
        y_values = []

        safe_equation = equation.replace('^', '**')

        for x in x_values:
            context = ALLOWED_NAMES.copy()
            context['x'] = x
            
            y = eval(safe_equation, {"__builtins__": None}, context)
            
            # Clean results to ensure JSON compatibility (handles Inf and NaN)
            if isinstance(y, (int, float)) and not math.isnan(y) and not math.isinf(y):
                y_values.append(float(y))
            else:
                y_values.append(0.0)

        return jsonify({
            'success': True,
            'x': x_values.tolist(),
            'y': y_values
        })
    except Exception:
        return jsonify({'success': False, 'error': "Failed to parse/plot function"})


# ==========================================
# 3. NOTES MODULE BACKEND ENDPOINTS
# ==========================================
@app.route('/api/notes', methods=['GET', 'POST'])
def handle_notes():
    if request.method == 'GET':
        return jsonify({'success': True, 'notes': read_notes()})
        
    elif request.method == 'POST':
        data = request.get_json() or {}
        title = data.get('title', '').strip()
        content = data.get('content', '').strip()
        
        if not title or not content:
            return jsonify({'success': False, 'error': "Title and Content are required"})
            
        notes = read_notes()
        new_note = {
            'id': int(np.random.randint(1, 1000000)),
            'title': title,
            'content': content
        }
        notes.insert(0, new_note)  # Put newest notes at the top
        write_notes(notes)
        
        return jsonify({'success': True, 'notes': notes})

if __name__ == '__main__':
    app.run(debug=True)
