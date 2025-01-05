```javascript
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function User() {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');

  // Handle cases where userId might be null
  if (!userId) {
    return <p>User not found</p>;
  }

  // ... rest of your component
  return <p>User ID: {userId}</p>;
}

function Home() {/* ... */}
function About() {/* ... */}
export default App;
```