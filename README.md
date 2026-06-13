
# MathHub Pro: Scientific Calculator & Note Suite

A high-performance, single-page application (SPA) designed for mathematical compilation, rich-text note composition, and real-time interactive coordinate graph plotting, built purely with modular vanilla web technologies.

![Language](https://img.shields.io/badge/Language-JavaScript%20ES6+-yellow?logo=javascript&logoColor=black)
![Markup](https://img.shields.io/badge/Structure-HTML5-orange?logo=html5&logoColor=white)
![Styling](https://img.shields.io/badge/Layout-CSS3%20%2F%20Tailwind-blue?logo=tailwind-css&logoColor=white)
![UI Asset](https://img.shields.io/badge/Icons-Lucide%20Vector-purple)
![Architecture](https://img.shields.io/badge/Pattern-OOP%20%2F%20State%20Lifecycle-green)
![Storage](https://img.shields.io/badge/Persistence-Local%20Storage-lightgrey)

---

## 🌐 Engine Overview

MathHub Pro combines three essential academic utilities into an integrated, fluid browser interface. By utilizing object-oriented event-routing architecture, active hardware event interceptors, and real-time canvas rendering pipelines, the application decouples client rendering layout configurations from multi-mode state operations without needing external heavy framework runtimes.

---

## 📦 System Architecture

<div align="center">

```text
┌──────────────────────────────────────────────────────────────┐
│                      USER INTERACTION LAYER                  │
├──────────────────────────────────────────────────────────────┤
│                 Browser DOM / Keyboard Capture               │
│        (Scientific Keys, Text Input, Graph Parametric)       │
└──────────────────────────────┬───────────────────────────────┘
                               ↓
┌──────────────────────────────────────────────────────────────┐
│                 OBJECT-ORIENTED APPLICATION CORE             │
├────────────┬─────────────┬────────────┬─────────────┬────────┤
│Calculator  │ State Logs  │Note Logger │Canvas Context│ Webkit│
│ ES6 Class  │  Private    │ Auto-Save  │2D Coordinate│ UI     │
│ Mechanics  │ Properties  │(LocalStore)│ Math Plotter│ Themes │
└────────────┴─────────────┴────────────┴─────────────┴────────┘
                               ↓
┌──────────────────────────────────────────────────────────────┐
│                     DYNAMIC RENDERING AGENT                  │
├───────────────────────────────────────────────────────────── ┤
│         Responsive Display Layout & Canvas Render Grid       │
└──────────────────────────────────────────────────────────────...

```

| Architectural Layer | Core Components & Strategies | Quick Links / Reference |
| --- | --- | --- |
| **Top: Interaction** | Standard DOM Events & Mechanical Hardware Interceptors | [Application Logic](https://www.google.com/search?q=%23-application-logic-calculatorjs) |
| **Middle: App Core** | Class State Architecture, Vector Assets, and Local Persistence | [Repository Structure](https://www.google.com/search?q=%23-repository-structure-and-module-index) |
| **Bottom: Rendering** | Fluid Tailwind Framework grids & Canvas Context Engine | [Layout Styling](https://www.google.com/search?q=%23-layout-styling-calculatorcss) |

---

## ✨ Key Architecture Features

✅ **Object-Oriented Architecture (`class Calculator`)** - Evaluates scientific mathematical operations cleanly by isolating application roles inside structured ES6 classes.

✅ **State Lifecycle Boundary Tracking** - Explicitly protects operational variables (`this.currentValue`, `this.previousValue`) directly within individual module state matrices.

✅ **Hardware Keyboard Capture Engine** - Binds physical desktop keystrokes directly to matching processing handlers while safely suppressing default browser window scrolling events.

✅ **Persistent Storage Synchronization** - Uses client-side LocalStorage to backup note contents, preserving user logs instantly across active browser refreshes.

✅ **High-Performance Canvas Rendering** - Utilizes raw HTML5 2D contexts to scale grids and map mathematical function profiles dynamically without third-party visualization wrappers.

---

## 📁 Repository Structure and Module Index

The project codebase is organized into the following logical components:

### Structural Framework Modules

* **`calculator.html`** - Semantic HTML5 framework organizing the interactive, multi-column single-page workspace layout.

### Layout Styling

* **`calculator.css`** - Component UI framework managing the custom dark theme variables, custom scrollbars, and fluid animations.

### Functional Engines

* **`calculator.js`** - Pure ES6 script module processing calculation histories, canvas operations, and browser data synchronization.

---

## 🛠️ Tech Stack

| Component | Technology | Quick Links |
| --- | --- | --- |
| **Structure Core** | HTML5 (Semantic Document Object Model) | [W3C HTML5 Spec](https://www.google.com/search?q=https://html.spec.whatwg.org/) |
| **Layout Layer** | CSS3 & Tailwind Utility Classes | [tailwindcss.com](https://www.google.com/search?q=https://tailwindcss.com/) |
| **Logic Engine** | Vanilla JavaScript (ECMAScript 2020+) | [MDN JavaScript Guide](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **Vector Assets** | Lucide Vector Icon Suite | [lucide.dev](https://www.google.com/search?q=https://lucide.dev/) |
| **Persistence Link** | Web Storage API (Browser Native LocalStorage) | [MDN LocalStorage Docs](https://www.google.com/search?q=https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) |

---

## 💻 System Requirements

Ensure your execution environment adheres to the following baseline parameters:

* **Execution Runtime:** Modern Evergreen Web Browser (Chrome 90+, Edge 90+, Firefox 88+, Safari 14+).
* **Display Layout Scale:** Responsive design down to 320px fluid layouts; optimized for 1080p dashboard monitors.
* **Network Status:** 100% Offline Capable (Zero remote dependencies required after initial client bundle load).

---

## 🚀 Setup & Execution Guide

### Step 1: Establish Workspace Directory

Create a dedicated local workspace folder and construct the file paths matching this layout configuration:

```bash
scientific_calculator/
        ├── calculator.html
        ├── calculator.css
                  └── calculator.js

```

### Step 2: Implement Component Files

Paste your semantic structure into `calculator.html`, link your variable configurations inside `calculator.css`, and map your class logic into `calculator.js`.

### Step 3: Run the Application Locally

Since the codebase relies on native client-side web APIs, you can launch the ecosystem instantly by opening the file interface inside your browser profile:

```bash
# macOS/Linux Console
open calculator.html

# Windows PowerShell Console
Start-Process "calculator.html"

```

---

## 📊 Application Core Interfaces

The application partitions its primary workspace operations across three highly optimized core segments:

| Panel Container | Technology Engine | Interface Purpose | Metric Tracker |
| --- | --- | --- | --- |
| **Scientific Calculator** | Math Parsing Engine | Tracks arithmetic parameters, parenthetical blocks, and trigonometric states. | Display String |
| **Notes Suite** | Web Storage Sync | Compiles markdown notes with live local data backups. | Character Weights Counter |
| **Graph Plotter** | HTML5 2D Canvas | Plots parametric lines (e.g., $x^2$) over customized coordinate planes. | Grid Resolution Palette |

---

## 🏗️ Architectural Highlights

### 🎨 Custom Variable Architecture

Implements a modern, structural dark-theme configuration using a curated slate and cyan color palette driven by functional CSS `:root` parameters:

* `--primary-color`: `#06b6d4` (Cyan Accent Highlight)
* `--card-bg`: `#1e293b` (Elevated Dashboard Containers)
* `--input-bg`: `#0f172a` (Deep Grounding Input Surfaces)

### 🎹 Multi-Mode Event Mapping

Structural interaction hooks match clean metadata data tags (`data-value`, `data-operator`, `data-action`). The core input listener catches these attributes and funnels them directly to their corresponding processing methods, ensuring your markup remains separate from processing loops.

### 📐 Trigonometric Conversion Logic

Transforms base input values from standard degrees into functional radians to ensure proper processing before routing arguments into JavaScript standard libraries.
---

## 📄 License & Terms

This project is open-source. Feel free to copy, modify, and redistribute the single-page calculation dashboard application framework as required.

