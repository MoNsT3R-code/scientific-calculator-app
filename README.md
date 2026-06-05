# scientific-calculator-app

├── README.md
├── calculator.css (2000 tokens)
├── calculator.html (2800 tokens)
└── calculator.js (5400 tokens)


/README.md:
--------------------------------------------------------------------------------
1 | # scientific-calculator-app


--------------------------------------------------------------------------------
/calculator.css:
--------------------------------------------------------------------------------
  1 | /* ================================================
  2 |    MATHHUB PRO - CUSTOM STYLES
  3 |    ================================================ */
  4 | 
  5 | :root {
  6 |     --primary-color: #06b6d4;
  7 |     --secondary-color: #8b5cf6;
  8 |     --success-color: #10b981;
  9 |     --danger-color: #ef4444;
 10 |     --card-bg: #1e293b;
 11 |     --input-bg: #0f172a;
 12 |     --border-color: #334155;
 13 |     --text-primary: #f1f5f9;
 14 |     --text-secondary: #94a3b8;
 15 | }
 16 | 
 17 | /* Global Scrollbar Styling */
 18 | ::-webkit-scrollbar {
 19 |     width: 8px;
 20 |     height: 8px;
 21 | }
 22 | 
 23 | ::-webkit-scrollbar-track {
 24 |     background: #0f172a;
 25 | }
 26 | 
 27 | ::-webkit-scrollbar-thumb {
 28 |     background: #475569;
 29 |     border-radius: 4px;
 30 | }
 31 | 
 32 | ::-webkit-scrollbar-thumb:hover {
 33 |     background: #64748b;
 34 | }
 35 | 
 36 | /* Smooth transitions */
 37 | * {
 38 |     transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
 39 | }
 40 | 
 41 | /* Card Styling */
 42 | .card-section {
 43 |     background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
 44 |     border: 2px solid var(--border-color);
 45 |     border-radius: 12px;
 46 |     padding: 24px;
 47 |     box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
 48 |     transition: all 0.3s ease;
 49 | }
 50 | 
 51 | .card-section:hover {
 52 |     border-color: var(--primary-color);
 53 |     box-shadow: 0 12px 48px rgba(6, 182, 212, 0.15);
 54 | }
 55 | 
 56 | /* Button Styles */
 57 | .btn-primary {
 58 |     display: inline-flex;
 59 |     align-items: center;
 60 |     justify-content: center;
 61 |     gap: 8px;
 62 |     padding: 12px 20px;
 63 |     background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
 64 |     color: white;
 65 |     border: none;
 66 |     border-radius: 8px;
 67 |     font-weight: 600;
 68 |     cursor: pointer;
 69 |     box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
 70 |     transition: all 0.3s ease;
 71 | }
 72 | 
 73 | .btn-primary:hover {
 74 |     transform: translateY(-2px);
 75 |     box-shadow: 0 6px 25px rgba(6, 182, 212, 0.5);
 76 | }
 77 | 
 78 | .btn-primary:active {
 79 |     transform: translateY(0);
 80 | }
 81 | 
 82 | .btn-secondary {
 83 |     display: inline-flex;
 84 |     align-items: center;
 85 |     justify-content: center;
 86 |     gap: 8px;
 87 |     padding: 10px 16px;
 88 |     background: #1e293b;
 89 |     color: #94a3b8;
 90 |     border: 2px solid #334155;
 91 |     border-radius: 8px;
 92 |     font-weight: 600;
 93 |     cursor: pointer;
 94 |     transition: all 0.3s ease;
 95 |     font-size: 0.875rem;
 96 | }
 97 | 
 98 | .btn-secondary:hover {
 99 |     border-color: var(--primary-color);
100 |     color: var(--primary-color);
101 |     background: rgba(6, 182, 212, 0.1);
102 | }
103 | 
104 | .btn-secondary:active {
105 |     transform: scale(0.95);
106 | }
107 | 
108 | /* Calculator Button Styles */
109 | .calc-btn {
110 |     padding: 16px;
111 |     background: #1e293b;
112 |     color: var(--text-primary);
113 |     border: 2px solid #334155;
114 |     border-radius: 8px;
115 |     font-weight: 700;
116 |     font-size: 1.1rem;
117 |     cursor: pointer;
118 |     display: flex;
119 |     align-items: center;
120 |     justify-content: center;
121 |     transition: all 0.2s ease;
122 | }
123 | 
124 | .calc-btn:hover:not(:disabled) {
125 |     background: #334155;
126 |     border-color: var(--primary-color);
127 |     box-shadow: 0 4px 12px rgba(6, 182, 212, 0.2);
128 |     transform: translateY(-2px);
129 | }
130 | 
131 | .calc-btn:active:not(:disabled) {
132 |     transform: translateY(0);
133 | }
134 | 
135 | .calc-btn:disabled {
136 |     opacity: 0.5;
137 |     cursor: not-allowed;
138 | }
139 | 
140 | .calc-operator {
141 |     background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
142 |     border-color: #7c3aed;
143 |     color: white;
144 | }
145 | 
146 | .calc-operator:hover {
147 |     box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
148 |     border-color: #a78bfa;
149 | }
150 | 
151 | .calc-func {
152 |     background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
153 |     border-color: #0891b2;
154 |     color: white;
155 | }
156 | 
157 | .calc-func:hover {
158 |     box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
159 | }
160 | 
161 | .calc-sci {
162 |     background: #0f172a;
163 |     border-color: #64748b;
164 |     color: #a1e8e8;
165 |     font-size: 0.9rem;
166 | }
167 | 
168 | .calc-sci:hover {
169 |     background: #1e293b;
170 |     border-color: var(--primary-color);
171 | }
172 | 
173 | .calc-equals {
174 |     background: linear-gradient(135deg, #10b981 0%, #059669 100%);
175 |     border-color: #059669;
176 |     color: white;
177 | }
178 | 
179 | .calc-equals:hover {
180 |     box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
181 | }
182 | 
183 | /* Format Buttons */
184 | .format-btn {
185 |     padding: 8px 12px;
186 |     background: #1e293b;
187 |     color: #94a3b8;
188 |     border: 2px solid #334155;
189 |     border-radius: 6px;
190 |     cursor: pointer;
191 |     display: flex;
192 |     align-items: center;
193 |     justify-content: center;
194 |     transition: all 0.2s ease;
195 | }
196 | 
197 | .format-btn:hover {
198 |     border-color: var(--primary-color);
199 |     color: var(--primary-color);
200 |     background: rgba(6, 182, 212, 0.1);
201 | }
202 | 
203 | .format-btn.active {
204 |     background: rgba(6, 182, 212, 0.2);
205 |     border-color: var(--primary-color);
206 |     color: var(--primary-color);
207 | }
208 | 
209 | /* Input Styles */
210 | input[type="text"],
211 | input[type="color"],
212 | textarea,
213 | select {
214 |     font-family: 'Monaco', 'Courier New', monospace;
215 | }
216 | 
217 | input[type="checkbox"] {
218 |     width: 18px;
219 |     height: 18px;
220 |     cursor: pointer;
221 |     accent-color: var(--primary-color);
222 | }
223 | 
224 | /* Function Item */
225 | .func-item {
226 |     display: flex;
227 |     align-items: center;
228 |     gap: 12px;
229 |     padding: 12px;
230 |     background: #1e293b;
231 |     border: 2px solid #334155;
232 |     border-radius: 8px;
233 |     font-size: 0.875rem;
234 |     animation: slideIn 0.3s ease;
235 | }
236 | 
237 | .func-item:hover {
238 |     border-color: var(--primary-color);
239 |     background: rgba(6, 182, 212, 0.05);
240 | }
241 | 
242 | .func-color-dot {
243 |     width: 24px;
244 |     height: 24px;
245 |     border-radius: 50%;
246 |     border: 2px solid #94a3b8;
247 |     flex-shrink: 0;
248 | }
249 | 
250 | .func-delete-btn {
251 |     margin-left: auto;
252 |     padding: 4px;
253 |     background: rgba(239, 68, 68, 0.1);
254 |     color: #ef4444;
255 |     border: none;
256 |     border-radius: 4px;
257 |     cursor: pointer;
258 |     display: flex;
259 |     align-items: center;
260 |     justify-content: center;
261 |     transition: all 0.2s ease;
262 | }
263 | 
264 | .func-delete-btn:hover {
265 |     background: rgba(239, 68, 68, 0.2);
266 |     transform: scale(1.1);
267 | }
268 | 
269 | /* Animations */
270 | @keyframes slideIn {
271 |     from {
272 |         opacity: 0;
273 |         transform: translateX(-10px);
274 |     }
275 |     to {
276 |         opacity: 1;
277 |         transform: translateX(0);
278 |     }
279 | }
280 | 
281 | @keyframes fadeIn {
282 |     from {
283 |         opacity: 0;
284 |     }
285 |     to {
286 |         opacity: 1;
287 |     }
288 | }
289 | 
290 | @keyframes pulse {
291 |     0%, 100% {
292 |         opacity: 1;
293 |     }
294 |     50% {
295 |         opacity: 0.5;
296 |     }
297 | }
298 | 
299 | .animate-fadeIn {
300 |     animation: fadeIn 0.3s ease;
301 | }
302 | 
303 | .animate-pulse {
304 |     animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
305 | }
306 | 
307 | /* Responsive Design */
308 | @media (max-width: 1024px) {
309 |     .card-section {
310 |         padding: 20px;
311 |     }
312 | 
313 |     .calc-btn {
314 |         padding: 14px;
315 |         font-size: 1rem;
316 |     }
317 | }
318 | 
319 | @media (max-width: 640px) {
320 |     .card-section {
321 |         padding: 16px;
322 |     }
323 | 
324 |     .calc-btn {
325 |         padding: 12px;
326 |         font-size: 0.9rem;
327 |     }
328 | 
329 |     #display {
330 |         font-size: 2rem;
331 |     }
332 | 
333 |     .grid-cols-4 {
334 |         grid-template-columns: repeat(4, 1fr);
335 |     }
336 | 
337 |     .col-span-2 {
338 |         grid-column: span 2;
339 |     }
340 | }
341 | 
342 | /* Dark mode scrollbar for Firefox */
343 | * {
344 |     scrollbar-color: #475569 #0f172a;
345 |     scrollbar-width: thin;
346 | }
347 | 
348 | /* Print Styles */
349 | @media print {
350 |     header,
351 |     footer {
352 |         display: none;
353 |     }
354 | 
355 |     .card-section {
356 |         break-inside: avoid;
357 |         page-break-inside: avoid;
358 |     }
359 | }
360 | 
361 | /* Accessibility */
362 | @media (prefers-reduced-motion: reduce) {
363 |     * {
364 |         animation-duration: 0.01ms !important;
365 |         animation-iteration-count: 1 !important;
366 |         transition-duration: 0.01ms !important;
367 |     }
368 | }
369 | 
370 | /* Focus styles for keyboard navigation */
371 | .calc-btn:focus-visible,
372 | .btn-primary:focus-visible,
373 | .btn-secondary:focus-visible,
374 | input:focus-visible,
375 | textarea:focus-visible {
376 |     outline: 2px solid var(--primary-color);
377 |     outline-offset: 2px;
378 | }
379 | 
380 | /* Canvas styling */
381 | canvas {
382 |     max-width: 100%;
383 |     display: block;
384 |     margin: 0 auto;
385 | }
386 | 


--------------------------------------------------------------------------------
/calculator.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="en">
  3 | <head>
  4 |     <meta charset="UTF-8">
  5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  6 |     <title>MathHub Pro - Calculator, Notes & Graphs</title>
  7 |     <script src="https://cdn.tailwindcss.com"></script>
  8 |     <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  9 |     <script src="https://unpkg.com/lucide@latest"></script>
 10 |     <link rel="stylesheet" href="styles.css">
 11 | </head>
 12 | <body class="bg-slate-950 text-slate-100 font-sans">
 13 |     <div id="app" class="min-h-screen">
 14 |         <!-- Header -->
 15 |         <header class="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 shadow-lg">
 16 |             <div class="max-w-7xl mx-auto px-6 py-6">
 17 |                 <h1 class="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
 18 |                     🧮 MathHub Pro
 19 |                 </h1>
 20 |                 <p class="text-slate-400 mt-2">Scientific Calculator • Rich Notes • Dynamic Graphs</p>
 21 |             </div>
 22 |         </header>
 23 | 
 24 |         <!-- Main Container -->
 25 |         <main class="max-w-7xl mx-auto px-6 py-8">
 26 |             <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
 27 |                 
 28 |                 <!-- Column 1: Scientific Calculator -->
 29 |                 <section class="card-section">
 30 |                     <div class="flex items-center gap-2 mb-6">
 31 |                         <i data-lucide="calculator" class="w-6 h-6 text-cyan-400"></i>
 32 |                         <h2 class="text-2xl font-bold">Calculator</h2>
 33 |                     </div>
 34 | 
 35 |                     <div class="space-y-4">
 36 |                         <!-- Display Screen -->
 37 |                         <div class="bg-slate-900 border-2 border-cyan-500 rounded-lg p-4 shadow-inner">
 38 |                             <div class="text-right text-sm text-slate-400 mb-2 h-6" id="prevInput">0</div>
 39 |                             <div class="text-right text-4xl font-mono font-bold text-cyan-300 break-words" id="display">0</div>
 40 |                         </div>
 41 | 
 42 |                         <!-- Calculator Grid -->
 43 |                         <div class="grid grid-cols-4 gap-2">
 44 |                             <!-- Row 1: Functions -->
 45 |                             <button class="calc-btn calc-func" data-action="clear">C</button>
 46 |                             <button class="calc-btn calc-func" data-action="backspace">
 47 |                                 <i data-lucide="delete" class="w-4 h-4"></i>
 48 |                             </button>
 49 |                             <button class="calc-btn calc-func" data-action="percent">%</button>
 50 |                             <button class="calc-btn calc-operator" data-operator="/">÷</button>
 51 | 
 52 |                             <!-- Row 2 -->
 53 |                             <button class="calc-btn" data-value="7">7</button>
 54 |                             <button class="calc-btn" data-value="8">8</button>
 55 |                             <button class="calc-btn" data-value="9">9</button>
 56 |                             <button class="calc-btn calc-operator" data-operator="*">×</button>
 57 | 
 58 |                             <!-- Row 3 -->
 59 |                             <button class="calc-btn" data-value="4">4</button>
 60 |                             <button class="calc-btn" data-value="5">5</button>
 61 |                             <button class="calc-btn" data-value="6">6</button>
 62 |                             <button class="calc-btn calc-operator" data-operator="-">−</button>
 63 | 
 64 |                             <!-- Row 4 -->
 65 |                             <button class="calc-btn" data-value="1">1</button>
 66 |                             <button class="calc-btn" data-value="2">2</button>
 67 |                             <button class="calc-btn" data-value="3">3</button>
 68 |                             <button class="calc-btn calc-operator" data-operator="+">+</button>
 69 | 
 70 |                             <!-- Row 5 -->
 71 |                             <button class="calc-btn col-span-2" data-value="0">0</button>
 72 |                             <button class="calc-btn" data-value=".">.</button>
 73 |                             <button class="calc-btn calc-equals" data-action="equals">=</button>
 74 | 
 75 |                             <!-- Row 6: Advanced -->
 76 |                             <button class="calc-btn calc-sci" data-action="sin">sin</button>
 77 |                             <button class="calc-btn calc-sci" data-action="cos">cos</button>
 78 |                             <button class="calc-btn calc-sci" data-action="tan">tan</button>
 79 |                             <button class="calc-btn calc-sci" data-action="sqrt">√</button>
 80 | 
 81 |                             <!-- Row 7: More Advanced -->
 82 |                             <button class="calc-btn calc-sci" data-action="log">log</button>
 83 |                             <button class="calc-btn calc-sci" data-action="ln">ln</button>
 84 |                             <button class="calc-btn calc-sci" data-action="pow">x^y</button>
 85 |                             <button class="calc-btn calc-sci" data-action="pi">π</button>
 86 | 
 87 |                             <!-- Row 8: Parentheses & e -->
 88 |                             <button class="calc-btn calc-sci" data-value="(">(</button>
 89 |                             <button class="calc-btn calc-sci" data-value=")">)</button>
 90 |                             <button class="calc-btn calc-sci col-span-2" data-action="e">e</button>
 91 |                         </div>
 92 |                     </div>
 93 |                 </section>
 94 | 
 95 |                 <!-- Column 2: Note Taking -->
 96 |                 <section class="card-section">
 97 |                     <div class="flex items-center gap-2 mb-6">
 98 |                         <i data-lucide="notepad-text" class="w-6 h-6 text-emerald-400"></i>
 99 |                         <h2 class="text-2xl font-bold">Notes</h2>
100 |                     </div>
101 | 
102 |                     <div class="space-y-4">
103 |                         <!-- Toolbar -->
104 |                         <div class="flex flex-wrap gap-2 p-3 bg-slate-800 rounded-lg border border-slate-700">
105 |                             <button id="boldBtn" class="format-btn" title="Bold">
106 |                                 <i data-lucide="bold" class="w-4 h-4"></i>
107 |                             </button>
108 |                             <button id="italicBtn" class="format-btn" title="Italic">
109 |                                 <i data-lucide="italic" class="w-4 h-4"></i>
110 |                             </button>
111 |                             <div class="w-px bg-slate-600"></div>
112 |                             <button id="bulletBtn" class="format-btn" title="Bullet List">
113 |                                 <i data-lucide="list" class="w-4 h-4"></i>
114 |                             </button>
115 |                             <button id="numberBtn" class="format-btn" title="Numbered List">
116 |                                 <i data-lucide="list-ordered" class="w-4 h-4"></i>
117 |                             </button>
118 |                         </div>
119 | 
120 |                         <!-- Text Area -->
121 |                         <textarea 
122 |                             id="noteArea" 
123 |                             class="w-full h-64 bg-slate-800 border-2 border-slate-700 rounded-lg p-4 text-slate-100 font-mono text-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 resize-none"
124 |                             placeholder="Write your notes, derivations, and thoughts here...">
125 |                         </textarea>
126 | 
127 |                         <!-- Note Count -->
128 |                         <div class="text-sm text-slate-400">
129 |                             <span id="charCount">0</span> characters
130 |                         </div>
131 | 
132 |                         <!-- Buttons -->
133 |                         <div class="flex gap-3">
134 |                             <button id="saveNote" class="flex-1 btn-primary">
135 |                                 <i data-lucide="save" class="w-4 h-4"></i>
136 |                                 Save Note
137 |                             </button>
138 |                             <button id="clearNote" class="flex-1 btn-secondary">
139 |                                 <i data-lucide="trash-2" class="w-4 h-4"></i>
140 |                                 Clear
141 |                             </button>
142 |                         </div>
143 | 
144 |                         <!-- Save Status -->
145 |                         <div id="saveStatus" class="text-sm text-emerald-400 text-center hidden">✓ Note saved to localStorage</div>
146 |                     </div>
147 |                 </section>
148 | 
149 |                 <!-- Column 3: Graph Plotter -->
150 |                 <section class="card-section">
151 |                     <div class="flex items-center gap-2 mb-6">
152 |                         <i data-lucide="chart-line" class="w-6 h-6 text-purple-400"></i>
153 |                         <h2 class="text-2xl font-bold">Graph Plotter</h2>
154 |                     </div>
155 | 
156 |                     <div class="space-y-4">
157 |                         <!-- Function Input -->
158 |                         <div>
159 |                             <label class="block text-sm font-medium text-slate-300 mb-2">
160 |                                 Enter function (e.g., x*x, Math.sin(x), 2*x + 5)
161 |                             </label>
162 |                             <input 
163 |                                 type="text" 
164 |                                 id="funcInput" 
165 |                                 class="w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
166 |                                 placeholder="e.g., x*x"
167 |                             >
168 |                         </div>
169 | 
170 |                         <!-- Color Picker for Functions -->
171 |                         <div class="flex gap-3">
172 |                             <input 
173 |                                 type="color" 
174 |                                 id="funcColor" 
175 |                                 value="#06b6d4" 
176 |                                 class="w-12 h-10 rounded cursor-pointer border-2 border-slate-700"
177 |                             >
178 |                             <button id="plotBtn" class="flex-1 btn-primary">
179 |                                 <i data-lucide="plus-circle" class="w-4 h-4"></i>
180 |                                 Add Function
181 |                             </button>
182 |                         </div>
183 | 
184 |                         <!-- Active Functions List -->
185 |                         <div id="funcList" class="space-y-2">
186 |                             <p class="text-sm text-slate-400 text-center">No functions added</p>
187 |                         </div>
188 | 
189 |                         <!-- Graph Canvas -->
190 |                         <div class="bg-slate-900 border-2 border-slate-700 rounded-lg overflow-hidden">
191 |                             <canvas id="graphCanvas" class="w-full" height="300"></canvas>
192 |                         </div>
193 | 
194 |                         <!-- Graph Options -->
195 |                         <div class="space-y-2">
196 |                             <label class="block">
197 |                                 <input type="checkbox" id="gridToggle" checked class="mr-2">
198 |                                 <span class="text-sm text-slate-300">Show Grid</span>
199 |                             </label>
200 |                             <label class="block">
201 |                                 <input type="checkbox" id="axisToggle" checked class="mr-2">
202 |                                 <span class="text-sm text-slate-300">Show Axes</span>
203 |                             </label>
204 |                         </div>
205 | 
206 |                         <!-- Control Buttons -->
207 |                         <div class="flex gap-3">
208 |                             <button id="zoomInBtn" class="flex-1 btn-secondary">
209 |                                 <i data-lucide="zoom-in" class="w-4 h-4"></i>
210 |                                 Zoom In
211 |                             </button>
212 |                             <button id="zoomOutBtn" class="flex-1 btn-secondary">
213 |                                 <i data-lucide="zoom-out" class="w-4 h-4"></i>
214 |                                 Zoom Out
215 |                             </button>
216 |                             <button id="clearGraphs" class="flex-1 btn-secondary">
217 |                                 <i data-lucide="x" class="w-4 h-4"></i>
218 |                                 Clear
219 |                             </button>
220 |                         </div>
221 |                     </div>
222 |                 </section>
223 | 
224 |             </div>
225 |         </main>
226 | 
227 |         <!-- Footer -->
228 |         <footer class="border-t border-slate-700 mt-16 py-8">
229 |             <div class="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm">
230 |                 <p>MathHub Pro © 2026 | Built with HTML, CSS, JavaScript & Tailwind</p>
231 |             </div>
232 |         </footer>
233 |     </div>
234 | 
235 |     <script src="script.js"></script>
236 | </body>
237 | </html>
238 | 


--------------------------------------------------------------------------------
/calculator.js:
--------------------------------------------------------------------------------
  1 | /**
  2 |  * MathHub Pro - Complete SPA Application
  3 |  * Scientific Calculator, Rich Notes, Dynamic Graph Plotter
  4 |  * Built with Vanilla JavaScript (ES6+)
  5 |  */
  6 | 
  7 | // ==================== CALCULATOR MODULE ====================
  8 | 
  9 | class Calculator {
 10 |     constructor() {
 11 |         this.display = document.getElementById('display');
 12 |         this.prevInput = document.getElementById('prevInput');
 13 |         this.currentValue = '0';
 14 |         this.previousValue = '';
 15 |         this.operation = null;
 16 |         this.shouldResetDisplay = false;
 17 |         this.init();
 18 |     }
 19 | 
 20 |     init() {
 21 |         // Number buttons
 22 |         document.querySelectorAll('[data-value]').forEach(btn => {
 23 |             btn.addEventListener('click', (e) => this.handleNumber(e.target.dataset.value));
 24 |         });
 25 | 
 26 |         // Operator buttons
 27 |         document.querySelectorAll('[data-operator]').forEach(btn => {
 28 |             btn.addEventListener('click', (e) => this.handleOperator(e.target.dataset.operator));
 29 |         });
 30 | 
 31 |         // Action buttons
 32 |         document.querySelectorAll('[data-action]').forEach(btn => {
 33 |             btn.addEventListener('click', (e) => this.handleAction(e.target.dataset.action));
 34 |         });
 35 | 
 36 |         // Keyboard support
 37 |         document.addEventListener('keydown', (e) => this.handleKeyboard(e));
 38 | 
 39 |         this.updateDisplay();
 40 |     }
 41 | 
 42 |     handleNumber(value) {
 43 |         // Prevent multiple decimal points
 44 |         if (value === '.' && this.currentValue.includes('.')) return;
 45 | 
 46 |         if (this.shouldResetDisplay) {
 47 |             this.currentValue = value === '.' ? '0.' : value;
 48 |             this.shouldResetDisplay = false;
 49 |         } else {
 50 |             this.currentValue = this.currentValue === '0' && value !== '.' 
 51 |                 ? value 
 52 |                 : this.currentValue + value;
 53 |         }
 54 | 
 55 |         this.updateDisplay();
 56 |     }
 57 | 
 58 |     handleOperator(op) {
 59 |         if (this.operation && !this.shouldResetDisplay) {
 60 |             this.calculate();
 61 |         }
 62 | 
 63 |         this.previousValue = this.currentValue;
 64 |         this.operation = op;
 65 |         this.shouldResetDisplay = true;
 66 |         this.updateDisplay();
 67 |     }
 68 | 
 69 |     handleAction(action) {
 70 |         switch (action) {
 71 |             case 'clear':
 72 |                 this.reset();
 73 |                 break;
 74 |             case 'backspace':
 75 |                 this.currentValue = this.currentValue.slice(0, -1) || '0';
 76 |                 break;
 77 |             case 'equals':
 78 |                 this.calculate();
 79 |                 break;
 80 |             case 'percent':
 81 |                 this.currentValue = String(parseFloat(this.currentValue) / 100);
 82 |                 break;
 83 |             case 'sin':
 84 |                 this.applyScientificFunction('sin');
 85 |                 break;
 86 |             case 'cos':
 87 |                 this.applyScientificFunction('cos');
 88 |                 break;
 89 |             case 'tan':
 90 |                 this.applyScientificFunction('tan');
 91 |                 break;
 92 |             case 'sqrt':
 93 |                 this.applyScientificFunction('sqrt');
 94 |                 break;
 95 |             case 'log':
 96 |                 this.applyScientificFunction('log10');
 97 |                 break;
 98 |             case 'ln':
 99 |                 this.applyScientificFunction('log');
100 |                 break;
101 |             case 'pow':
102 |                 this.handleOperator('^');
103 |                 break;
104 |             case 'pi':
105 |                 this.currentValue = String(Math.PI);
106 |                 break;
107 |             case 'e':
108 |                 this.currentValue = String(Math.E);
109 |                 break;
110 |         }
111 |         this.updateDisplay();
112 |     }
113 | 
114 |     handleKeyboard(e) {
115 |         // Numbers and operators
116 |         if (/[0-9+\-*/.%]/.test(e.key)) {
117 |             e.preventDefault();
118 |             if (/[0-9.]/.test(e.key)) {
119 |                 this.handleNumber(e.key);
120 |             } else if (['+', '-', '*', '/'].includes(e.key)) {
121 |                 this.handleOperator(e.key);
122 |             }
123 |         }
124 | 
125 |         // Enter for equals
126 |         if (e.key === 'Enter') {
127 |             e.preventDefault();
128 |             this.handleAction('equals');
129 |         }
130 | 
131 |         // Backspace
132 |         if (e.key === 'Backspace') {
133 |             e.preventDefault();
134 |             this.handleAction('backspace');
135 |         }
136 | 
137 |         // Escape for clear
138 |         if (e.key === 'Escape') {
139 |             e.preventDefault();
140 |             this.handleAction('clear');
141 |         }
142 |     }
143 | 
144 |     applyScientificFunction(func) {
145 |         try {
146 |             const num = parseFloat(this.currentValue);
147 |             let result;
148 | 
149 |             switch (func) {
150 |                 case 'sin':
151 |                     result = Math.sin(num * Math.PI / 180); // Convert to radians
152 |                     break;
153 |                 case 'cos':
154 |                     result = Math.cos(num * Math.PI / 180);
155 |                     break;
156 |                 case 'tan':
157 |                     result = Math.tan(num * Math.PI / 180);
158 |                     break;
159 |                 case 'sqrt':
160 |                     result = Math.sqrt(num);
161 |                     break;
162 |                 case 'log10':
163 |                     result = Math.log10(num);
164 |                     break;
165 |                 case 'log':
166 |                     result = Math.log(num);
167 |                     break;
168 |                 default:
169 |                     return;
170 |             }
171 | 
172 |             this.currentValue = String(Math.round(result * 1000000) / 1000000);
173 |             this.shouldResetDisplay = true;
174 |         } catch (error) {
175 |             this.currentValue = 'Error';
176 |             this.shouldResetDisplay = true;
177 |         }
178 |     }
179 | 
180 |     calculate() {
181 |         if (!this.operation || !this.previousValue) return;
182 | 
183 |         try {
184 |             const prev = parseFloat(this.previousValue);
185 |             const current = parseFloat(this.currentValue);
186 |             let result;
187 | 
188 |             switch (this.operation) {
189 |                 case '+':
190 |                     result = prev + current;
191 |                     break;
192 |                 case '-':
193 |                     result = prev - current;
194 |                     break;
195 |                 case '*':
196 |                     result = prev * current;
197 |                     break;
198 |                 case '/':
199 |                     if (current === 0) {
200 |                         this.currentValue = 'Cannot divide by 0';
201 |                         this.shouldResetDisplay = true;
202 |                         return;
203 |                     }
204 |                     result = prev / current;
205 |                     break;
206 |                 case '^':
207 |                     result = Math.pow(prev, current);
208 |                     break;
209 |                 default:
210 |                     return;
211 |             }
212 | 
213 |             this.currentValue = String(Math.round(result * 1000000) / 1000000);
214 |             this.operation = null;
215 |             this.previousValue = '';
216 |             this.shouldResetDisplay = true;
217 |         } catch (error) {
218 |             this.currentValue = 'Error';
219 |             this.shouldResetDisplay = true;
220 |         }
221 |     }
222 | 
223 |     reset() {
224 |         this.currentValue = '0';
225 |         this.previousValue = '';
226 |         this.operation = null;
227 |         this.shouldResetDisplay = false;
228 |         this.updateDisplay();
229 |     }
230 | 
231 |     updateDisplay() {
232 |         this.display.textContent = this.currentValue.length > 12 
233 |             ? this.currentValue.substring(0, 12) + '...'
234 |             : this.currentValue;
235 |         
236 |         if (this.operation && this.previousValue) {
237 |             this.prevInput.textContent = `${this.previousValue} ${this.operation}`;
238 |         } else {
239 |             this.prevInput.textContent = this.previousValue || '0';
240 |         }
241 |     }
242 | }
243 | 
244 | // ==================== NOTES MODULE ====================
245 | 
246 | class NoteEditor {
247 |     constructor() {
248 |         this.noteArea = document.getElementById('noteArea');
249 |         this.charCount = document.getElementById('charCount');
250 |         this.saveBtn = document.getElementById('saveNote');
251 |         this.clearBtn = document.getElementById('clearNote');
252 |         this.saveStatus = document.getElementById('saveStatus');
253 |         this.boldBtn = document.getElementById('boldBtn');
254 |         this.italicBtn = document.getElementById('italicBtn');
255 |         this.bulletBtn = document.getElementById('bulletBtn');
256 |         this.numberBtn = document.getElementById('numberBtn');
257 |         this.init();
258 |     }
259 | 
260 |     init() {
261 |         this.loadNote();
262 |         
263 |         // Character counter
264 |         this.noteArea.addEventListener('input', () => {
265 |             this.updateCharCount();
266 |         });
267 | 
268 |         // Save button
269 |         this.saveBtn.addEventListener('click', () => this.saveNote());
270 | 
271 |         // Clear button
272 |         this.clearBtn.addEventListener('click', () => {
273 |             if (confirm('Are you sure? This will clear the notes.')) {
274 |                 this.noteArea.value = '';
275 |                 this.updateCharCount();
276 |                 localStorage.removeItem('mathHubNotes');
277 |             }
278 |         });
279 | 
280 |         // Format buttons
281 |         this.boldBtn.addEventListener('click', () => this.insertFormatting('**'));
282 |         this.italicBtn.addEventListener('click', () => this.insertFormatting('*'));
283 |         this.bulletBtn.addEventListener('click', () => this.insertFormatting('\n• '));
284 |         this.numberBtn.addEventListener('click', () => this.insertFormatting('\n1. '));
285 | 
286 |         // Keyboard shortcuts
287 |         this.noteArea.addEventListener('keydown', (e) => {
288 |             if (e.ctrlKey || e.metaKey) {
289 |                 if (e.key === 's') {
290 |                     e.preventDefault();
291 |                     this.saveNote();
292 |                 }
293 |             }
294 |         });
295 | 
296 |         this.updateCharCount();
297 |     }
298 | 
299 |     insertFormatting(format) {
300 |         const start = this.noteArea.selectionStart;
301 |         const end = this.noteArea.selectionEnd;
302 |         const text = this.noteArea.value;
303 |         const selectedText = text.substring(start, end);
304 | 
305 |         if (!selectedText) return;
306 | 
307 |         if (format === '**' || format === '*') {
308 |             const newText = text.substring(0, start) + format + selectedText + format + text.substring(end);
309 |             this.noteArea.value = newText;
310 |         } else {
311 |             const newText = text.substring(0, start) + format + selectedText + text.substring(end);
312 |             this.noteArea.value = newText;
313 |         }
314 | 
315 |         this.updateCharCount();
316 |     }
317 | 
318 |     updateCharCount() {
319 |         this.charCount.textContent = this.noteArea.value.length;
320 |     }
321 | 
322 |     saveNote() {
323 |         const noteContent = this.noteArea.value;
324 |         localStorage.setItem('mathHubNotes', noteContent);
325 |         
326 |         // Show success message
327 |         this.saveStatus.classList.remove('hidden');
328 |         this.saveStatus.classList.add('animate-fadeIn');
329 |         
330 |         setTimeout(() => {
331 |             this.saveStatus.classList.add('hidden');
332 |         }, 2000);
333 |     }
334 | 
335 |     loadNote() {
336 |         const savedNote = localStorage.getItem('mathHubNotes');
337 |         if (savedNote) {
338 |             this.noteArea.value = savedNote;
339 |             this.updateCharCount();
340 |         }
341 |     }
342 | }
343 | 
344 | // ==================== GRAPH PLOTTER MODULE ====================
345 | 
346 | class GraphPlotter {
347 |     constructor() {
348 |         this.canvas = document.getElementById('graphCanvas');
349 |         this.ctx = this.canvas.getContext('2d');
350 |         this.funcInput = document.getElementById('funcInput');
351 |         this.funcColor = document.getElementById('funcColor');
352 |         this.plotBtn = document.getElementById('plotBtn');
353 |         this.clearGraphs = document.getElementById('clearGraphs');
354 |         this.funcList = document.getElementById('funcList');
355 |         this.gridToggle = document.getElementById('gridToggle');
356 |         this.axisToggle = document.getElementById('axisToggle');
357 |         this.zoomInBtn = document.getElementById('zoomInBtn');
358 |         this.zoomOutBtn = document.getElementById('zoomOutBtn');
359 | 
360 |         this.functions = [];
361 |         this.xMin = -10;
362 |         this.xMax = 10;
363 |         this.yMin = -10;
364 |         this.yMax = 10;
365 |         this.pixelRatio = window.devicePixelRatio || 1;
366 | 
367 |         this.init();
368 |         this.resizeCanvas();
369 |         this.draw();
370 |     }
371 | 
372 |     init() {
373 |         this.plotBtn.addEventListener('click', () => this.addFunction());
374 |         this.clearGraphs.addEventListener('click', () => this.clearAllGraphs());
375 |         this.gridToggle.addEventListener('change', () => this.draw());
376 |         this.axisToggle.addEventListener('change', () => this.draw());
377 |         this.zoomInBtn.addEventListener('click', () => this.zoom(0.5));
378 |         this.zoomOutBtn.addEventListener('click', () => this.zoom(2));
379 | 
380 |         this.funcInput.addEventListener('keypress', (e) => {
381 |             if (e.key === 'Enter') this.addFunction();
382 |         });
383 | 
384 |         window.addEventListener('resize', () => {
385 |             this.resizeCanvas();
386 |             this.draw();
387 |         });
388 | 
389 |         // Mouse wheel zoom
390 |         this.canvas.addEventListener('wheel', (e) => {
391 |             e.preventDefault();
392 |             this.zoom(e.deltaY > 0 ? 1.1 : 0.9);
393 |         });
394 |     }
395 | 
396 |     resizeCanvas() {
397 |         const rect = this.canvas.parentElement.getBoundingClientRect();
398 |         const width = rect.width;
399 |         const height = 300;
400 | 
401 |         this.canvas.width = width * this.pixelRatio;
402 |         this.canvas.height = height * this.pixelRatio;
403 |         this.canvas.style.width = width + 'px';
404 |         this.canvas.style.height = height + 'px';
405 | 
406 |         this.ctx.scale(this.pixelRatio, this.pixelRatio);
407 |     }
408 | 
409 |     addFunction() {
410 |         const funcString = this.funcInput.value.trim();
411 |         const color = this.funcColor.value;
412 | 
413 |         if (!funcString) {
414 |             alert('Please enter a function');
415 |             return;
416 |         }
417 | 
418 |         // Validate function syntax
419 |         if (!this.validateFunction(funcString)) {
420 |             alert('Invalid function syntax. Use x as variable (e.g., x*x, Math.sin(x))');
421 |             return;
422 |         }
423 | 
424 |         // Check for duplicates
425 |         if (this.functions.some(f => f.func === funcString)) {
426 |             alert('This function is already plotted');
427 |             return;
428 |         }
429 | 
430 |         this.functions.push({
431 |             func: funcString,
432 |             color: color,
433 |             id: Date.now()
434 |         });
435 | 
436 |         this.funcInput.value = '';
437 |         this.updateFunctionList();
438 |         this.draw();
439 |     }
440 | 
441 |     validateFunction(funcString) {
442 |         try {
443 |             // Test with sample x values
444 |             const testFunc = new Function('x', 'Math', `return ${funcString}`);
445 |             testFunc(0, Math);
446 |             testFunc(1, Math);
447 |             return true;
448 |         } catch (error) {
449 |             return false;
450 |         }
451 |     }
452 | 
453 |     removeFunction(id) {
454 |         this.functions = this.functions.filter(f => f.id !== id);
455 |         this.updateFunctionList();
456 |         this.draw();
457 |     }
458 | 
459 |     clearAllGraphs() {
460 |         this.functions = [];
461 |         this.funcInput.value = '';
462 |         this.updateFunctionList();
463 |         this.draw();
464 |     }
465 | 
466 |     updateFunctionList() {
467 |         if (this.functions.length === 0) {
468 |             this.funcList.innerHTML = '<p class="text-sm text-slate-400 text-center">No functions added</p>';
469 |             return;
470 |         }
471 | 
472 |         this.funcList.innerHTML = this.functions.map(f => `
473 |             <div class="func-item">
474 |                 <div class="func-color-dot" style="background-color: ${f.color}"></div>
475 |                 <span class="flex-1 font-mono text-xs">${f.func}</span>
476 |                 <button class="func-delete-btn" data-id="${f.id}">
477 |                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
478 |                         <polyline points="3 6 5 6 21 6"></polyline>
479 |                         <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
480 |                     </svg>
481 |                 </button>
482 |             </div>
483 |         `).join('');
484 | 
485 |         // Add delete listeners
486 |         document.querySelectorAll('.func-delete-btn').forEach(btn => {
487 |             btn.addEventListener('click', (e) => {
488 |                 const id = parseInt(e.currentTarget.dataset.id);
489 |                 this.removeFunction(id);
490 |             });
491 |         });
492 |     }
493 | 
494 |     zoom(factor) {
495 |         const centerX = (this.xMin + this.xMax) / 2;
496 |         const centerY = (this.yMin + this.yMax) / 2;
497 |         const rangeX = (this.xMax - this.xMin) / 2;
498 |         const rangeY = (this.yMax - this.yMin) / 2;
499 | 
500 |         this.xMin = centerX - rangeX * factor;
501 |         this.xMax = centerX + rangeX * factor;
502 |         this.yMin = centerY - rangeY * factor;
503 |         this.yMax = centerY + rangeY * factor;
504 | 
505 |         this.draw();
506 |     }
507 | 
508 |     draw() {
509 |         const width = this.canvas.width / this.pixelRatio;
510 |         const height = this.canvas.height / this.pixelRatio;
511 | 
512 |         // Clear canvas
513 |         this.ctx.fillStyle = '#0f172a';
514 |         this.ctx.fillRect(0, 0, width, height);
515 | 
516 |         // Draw grid
517 |         if (this.gridToggle.checked) {
518 |             this.drawGrid(width, height);
519 |         }
520 | 
521 |         // Draw axes
522 |         if (this.axisToggle.checked) {
523 |             this.drawAxes(width, height);
524 |         }
525 | 
526 |         // Draw functions
527 |         this.functions.forEach(f => {
528 |             this.drawFunction(f, width, height);
529 |         });
530 |     }
531 | 
532 |     drawGrid(width, height) {
533 |         this.ctx.strokeStyle = '#334155';
534 |         this.ctx.lineWidth = 0.5;
535 |         this.ctx.setLineDash([4, 4]);
536 | 
537 |         const stepX = (this.xMax - this.xMin) / 10;
538 |         const stepY = (this.yMax - this.yMin) / 10;
539 | 
540 |         // Vertical lines
541 |         for (let i = 0; i <= 10; i++) {
542 |             const x = this.xToPixel(this.xMin + i * stepX, width);
543 |             this.ctx.beginPath();
544 |             this.ctx.moveTo(x, 0);
545 |             this.ctx.lineTo(x, height);
546 |             this.ctx.stroke();
547 |         }
548 | 
549 |         // Horizontal lines
550 |         for (let i = 0; i <= 10; i++) {
551 |             const y = this.yToPixel(this.yMax - i * stepY, height);
552 |             this.ctx.beginPath();
553 |             this.ctx.moveTo(0, y);
554 |             this.ctx.lineTo(width, y);
555 |             this.ctx.stroke();
556 |         }
557 | 
558 |         this.ctx.setLineDash([]);
559 |     }
560 | 
561 |     drawAxes(width, height) {
562 |         this.ctx.strokeStyle = '#64748b';
563 |         this.ctx.lineWidth = 2;
564 | 
565 |         // X-axis
566 |         const yAxisPos = this.yToPixel(0, height);
567 |         if (yAxisPos >= 0 && yAxisPos <= height) {
568 |             this.ctx.beginPath();
569 |             this.ctx.moveTo(0, yAxisPos);
570 |             this.ctx.lineTo(width, yAxisPos);
571 |             this.ctx.stroke();
572 |         }
573 | 
574 |         // Y-axis
575 |         const xAxisPos = this.xToPixel(0, width);
576 |         if (xAxisPos >= 0 && xAxisPos <= width) {
577 |             this.ctx.beginPath();
578 |             this.ctx.moveTo(xAxisPos, 0);
579 |             this.ctx.lineTo(xAxisPos, height);
580 |             this.ctx.stroke();
581 |         }
582 | 
583 |         // Labels
584 |         this.ctx.fillStyle = '#94a3b8';
585 |         this.ctx.font = '12px Monaco, monospace';
586 |         this.ctx.textAlign = 'center';
587 | 
588 |         const stepX = (this.xMax - this.xMin) / 10;
589 |         for (let i = 0; i <= 10; i++) {
590 |             const x = this.xMin + i * stepX;
591 |             const pixelX = this.xToPixel(x, width);
592 |             const pixelY = this.yToPixel(0, height) + 15;
593 |             if (pixelX >= 0 && pixelX <= width && pixelY <= height + 15) {
594 |                 this.ctx.fillText(x.toFixed(1), pixelX, pixelY);
595 |             }
596 |         }
597 | 
598 |         this.ctx.textAlign = 'right';
599 |         const stepY = (this.yMax - this.yMin) / 10;
600 |         for (let i = 0; i <= 10; i++) {
601 |             const y = this.yMax - i * stepY;
602 |             const pixelY = this.yToPixel(y, height);
603 |             const pixelX = this.xToPixel(0, width) - 8;
604 |             if (pixelY >= 0 && pixelY <= height && pixelX >= 0) {
605 |                 this.ctx.fillText(y.toFixed(1), pixelX, pixelY + 4);
606 |             }
607 |         }
608 |     }
609 | 
610 |     drawFunction(funcObj, width, height) {
611 |         try {
612 |             this.ctx.strokeStyle = funcObj.color;
613 |             this.ctx.lineWidth = 2.5;
614 |             this.ctx.lineCap = 'round';
615 |             this.ctx.lineJoin = 'round';
616 | 
617 |             const step = (this.xMax - this.xMin) / width;
618 |             let firstPoint = true;
619 | 
620 |             this.ctx.beginPath();
621 | 
622 |             for (let pixelX = 0; pixelX < width; pixelX++) {
623 |                 const x = this.xMin + pixelX * step;
624 | 
625 |                 try {
626 |                     const y = this.evaluateFunction(funcObj.func, x);
627 | 
628 |                     if (!isFinite(y) || isNaN(y)) continue;
629 | 
630 |                     const pixelY = this.yToPixel(y, height);
631 | 
632 |                     if (pixelY >= -10 && pixelY <= height + 10) {
633 |                         if (firstPoint) {
634 |                             this.ctx.moveTo(pixelX, pixelY);
635 |                             firstPoint = false;
636 |                         } else {
637 |                             this.ctx.lineTo(pixelX, pixelY);
638 |                         }
639 |                     } else {
640 |                         // Discontinuity
641 |                         if (!firstPoint) {
642 |                             this.ctx.stroke();
643 |                             this.ctx.beginPath();
644 |                             firstPoint = true;
645 |                         }
646 |                     }
647 |                 } catch (error) {
648 |                     // Skip invalid points
649 |                     if (!firstPoint) {
650 |                         this.ctx.stroke();
651 |                         this.ctx.beginPath();
652 |                         firstPoint = true;
653 |                     }
654 |                 }
655 |             }
656 | 
657 |             this.ctx.stroke();
658 |         } catch (error) {
659 |             console.error('Error drawing function:', error);
660 |         }
661 |     }
662 | 
663 |     evaluateFunction(funcString, x) {
664 |         try {
665 |             const func = new Function('x', 'Math', `return ${funcString}`);
666 |             return func(x, Math);
667 |         } catch (error) {
668 |             throw new Error(`Invalid function: ${error.message}`);
669 |         }
670 |     }
671 | 
672 |     xToPixel(x, width) {
673 |         return ((x - this.xMin) / (this.xMax - this.xMin)) * width;
674 |     }
675 | 
676 |     yToPixel(y, height) {
677 |         return ((this.yMax - y) / (this.yMax - this.yMin)) * height;
678 |     }
679 | }
680 | 
681 | // ==================== INITIALIZATION ====================
682 | 
683 | document.addEventListener('DOMContentLoaded', () => {
684 |     // Initialize Lucide Icons
685 |     lucide.createIcons();
686 | 
687 |     // Initialize all modules
688 |     const calculator = new Calculator();
689 |     const noteEditor = new NoteEditor();
690 |     const graphPlotter = new GraphPlotter();
691 | 
692 |     console.log('✓ MathHub Pro loaded successfully');
693 |     console.log('✓ Calculator ready');
694 |     console.log('✓ Notes ready');
695 |     console.log('✓ Graph Plotter ready');
696 | });
697 | 
698 | // Handle errors gracefully
699 | window.addEventListener('error', (event) => {
700 |     console.error('Application error:', event.error);
701 | });
702 | 
703 | // Handle unhandled promise rejections
704 | window.addEventListener('unhandledrejection', (event) => {
705 |     console.error('Unhandled promise rejection:', event.reason);
706 | });
707 | 


--------------------------------------------------------------------------------
