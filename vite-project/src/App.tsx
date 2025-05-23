// import "./App.css";

// function App() {
//   return (
//     <>
//       <h1>Hello</h1>
//     </>
//   );
// }

// export default App;

import { Footer } from './components/Footer.tsx';
import { Main } from './components/Main.tsx';

import Navbar from './components/Navbar.tsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
