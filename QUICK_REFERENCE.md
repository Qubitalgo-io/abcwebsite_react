# Quick Reference Guide - React Cheat Sheet

## 🎯 Most Common React Patterns in Your Project

### 1. Creating a Component
```jsx
function ComponentName() {
  return (
    <div className="container">
      <h1>Hello</h1>
    </div>
  );
}

export default ComponentName;
```

### 2. Using State
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // [value, updater] = useState(initialValue)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### 3. Props (Passing Data)
```jsx
// Parent Component
<Greeting name="Zoe" age={25} />

// Child Component
function Greeting({ name, age }) {
  return <p>Hello {name}, you are {age} years old</p>;
}
```

### 4. Event Handlers
```jsx
// Simple handler
<button onClick={handleClick}>Click</button>

// Handler with parameter
<button onClick={() => handleClick(id)}>Click</button>

// Form events
<input onChange={(e) => setValue(e.target.value)} />
```

### 5. Conditional Rendering
```jsx
// && operator (if true, show)
{isLoggedIn && <Dashboard />}

// Ternary (if-else)
{isLoggedIn ? <Dashboard /> : <Login />}

// Conditional class
<div className={`menu ${isOpen ? 'active' : ''}`}>
```

### 6. Lists and Keys
```jsx
{items.map((item) => (
  <Card key={item.id} data={item} />
))}
```

### 7. Navigation (React Router)
```jsx
import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/about')}>
      Go to About
    </button>
  );
}
```

### 8. CSS Classes
```jsx
// Static class
<div className="header">

// Multiple classes
<div className="card primary large">

// Dynamic class
<div className={isActive ? 'active' : 'inactive'}>

// Template literal
<div className={`card ${type} ${size}`}>
```

---

## 📝 JSX Rules

| HTML         | JSX             | Example                          |
|--------------|-----------------|----------------------------------|
| `class`      | `className`     | `<div className="box">`         |
| `for`        | `htmlFor`       | `<label htmlFor="name">`        |
| `onclick`    | `onClick`       | `<button onClick={handler}>`    |
| `onchange`   | `onChange`      | `<input onChange={handler}>`    |
| `tabindex`   | `tabIndex`      | `<div tabIndex={0}>`            |
| `<br>`       | `<br />`        | Self-closing tags need `/`      |
| `style=""`   | `style={{}}`    | `style={{ color: 'red' }}`      |

---

## 🎨 Common CSS Patterns

### Flexbox (for horizontal/vertical layouts)
```css
.container {
  display: flex;
  justify-content: center;  /* horizontal: flex-start, center, flex-end, space-between */
  align-items: center;      /* vertical: flex-start, center, flex-end */
  gap: 1em;                 /* space between items */
}
```

### Grid (for 2D layouts)
```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
  gap: 2em;
}
```

### Responsive Design
```css
/* Mobile First */
.element { font-size: 16px; }

/* Tablet */
@media (min-width: 768px) {
  .element { font-size: 18px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .element { font-size: 20px; }
}
```

---

## 🔍 Debugging Commands

### Check for errors
```bash
npm run lint
```

### View in browser
```bash
npm run dev
# Then open: http://localhost:5173/
```

### Build for production
```bash
npm run build
```

### Check build
```bash
npm run preview
```

---

## 🛠️ File Structure Quick Reference

```
src/
├── components/          # Reusable components
│   └── Header.jsx      # Import: import Header from '../components/Header'
├── pages/              # Full pages
│   └── Home.jsx        # Import: import Home from './pages/Home'
├── data/               # Static data
│   └── industries.js   # Import: import { data } from '../data/industries'
├── *.css               # Styles
└── App.jsx             # Main component
```

### Import Paths
- Same folder: `'./Header'`
- Parent folder: `'../components/Header'`
- Data: `'../data/industries'`
- CSS: `'./styles.css'`

---

## 🚀 Common Tasks

### Add a New Page
1. Create `src/pages/NewPage.jsx`:
```jsx
import Header from '../components/Header';
import Footer from '../components/Footer';

function NewPage() {
  return (
    <>
      <Header />
      <section className="new-page">
        <h1>New Page</h1>
      </section>
      <Footer />
    </>
  );
}

export default NewPage;
```

2. Add route in `src/App.jsx`:
```jsx
const NewPage = lazy(() => import('./pages/NewPage'));

// In <Routes>:
<Route path="/new-page" element={<NewPage />} />
```

3. Add button in `src/components/Header.jsx`:
```jsx
<button className="header-buttons" onClick={() => handleNavigation('/new-page')}>
  New Page
</button>
```

### Add a New Component
1. Create `src/components/Button.jsx`:
```jsx
function Button({ text, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
```

2. Use in any page:
```jsx
import Button from '../components/Button';

function Page() {
  const handleClick = () => alert('Clicked!');
  
  return <Button text="Click Me" onClick={handleClick} />;
}
```

---

## 💡 Tips & Tricks

### 1. Console Log for Debugging
```jsx
function Component() {
  console.log('Component rendered');
  
  const [value, setValue] = useState(0);
  console.log('Current value:', value);
  
  return <div>{value}</div>;
}
```

### 2. Prevent Default Form Submission
```jsx
<form onSubmit={(e) => {
  e.preventDefault();
  handleSubmit();
}}>
```

### 3. Optional Chaining (Prevent Errors)
```jsx
// Instead of: user.address.street (may crash)
// Use: user?.address?.street (safe)

<p>{user?.name || 'Guest'}</p>
```

### 4. Array Methods
```jsx
// Map (transform array)
{items.map(item => <Card key={item.id} {...item} />)}

// Filter (remove items)
{items.filter(item => item.active).map(...)}

// Find (get one item)
const user = users.find(u => u.id === 5);
```

### 5. Spread Operator
```jsx
// Pass all props at once
const props = { name: 'John', age: 30 };
<Component {...props} />

// Same as:
<Component name="John" age={30} />
```

---

## ⚠️ Common Mistakes to Avoid

### ❌ DON'T
```jsx
// Don't modify state directly
count = count + 1;

// Don't use index as key (if list can reorder)
{items.map((item, index) => <div key={index}>)}

// Don't call functions in JSX without arrow function
<button onClick={doSomething()}>  // Runs immediately!

// Don't use class
<div class="container">
```

### ✅ DO
```jsx
// Update state with setter
setCount(count + 1);

// Use unique ID as key
{items.map(item => <div key={item.id}>)}

// Use arrow function or reference
<button onClick={() => doSomething()}>
<button onClick={doSomething}>

// Use className
<div className="container">
```

---

## 🔄 State Management Patterns

### Simple Toggle
```jsx
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
```

### Form Input
```jsx
const [name, setName] = useState('');
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### Multiple States
```jsx
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState(0);
```

### Object State
```jsx
const [user, setUser] = useState({ name: '', email: '' });

// Update one property
setUser({ ...user, name: 'John' });
```

---

## 📦 Useful VS Code Extensions

1. **ES7+ React Snippets** - Quick component templates
2. **Auto Rename Tag** - Rename paired tags
3. **Prettier** - Code formatter
4. **ESLint** - Code quality
5. **Path Intellisense** - Autocomplete paths

---

## ⌨️ React Snippets (if you have the extension)

Type these and press Tab:

- `rfce` → React Function Component Export
- `rafce` → React Arrow Function Component Export
- `useState` → useState hook
- `useEffect` → useEffect hook

---

## 🎓 Learning Progression

### Week 1: Basics
- ✅ Components
- ✅ JSX
- ✅ Props
- ✅ State

### Week 2: Interactivity
- ✅ Event handlers
- ✅ Conditional rendering
- ✅ Lists and keys
- ⏳ Forms

### Week 3: Advanced
- ✅ React Router
- ✅ Lazy loading
- ⏳ useEffect
- ⏳ Custom hooks

### Week 4: Professional
- ⏳ TypeScript
- ⏳ Testing
- ⏳ API integration
- ⏳ State management (Context/Redux)

---

## 🔗 Quick Links

- Your project: `http://localhost:5173/`
- React Docs: `https://react.dev/`
- React Router: `https://reactrouter.com/`
- CSS Reference: `https://cssreference.io/`
- JavaScript Info: `https://javascript.info/`

---

Keep this file open while coding for quick reference! 📖✨
