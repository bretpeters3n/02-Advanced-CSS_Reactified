import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import './css/reset.css'
import './css/fonts.css'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main>
      <section className="row justify-center">
        <Card cardTitleProps="Flexbox Row" cardBodyProps="Use these three properties to create a Flexbox row layout." cardCodeProps=".row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}" />
        <Card cardTitleProps="Flexbox Column" cardBodyProps="Use this to create a Flexbox column layout." cardCodeProps=".column {
  display: flex;
  flex-direction: column
}" />
        <Card cardTitleProps="CSS Grid Layout" cardBodyProps="Build a 12-column layout using CSS Grid." cardCodeProps=".grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
}" />
        <Card cardTitleProps="Linear Gradients" cardBodyProps="This will create a background linear gradient from top to bottom." cardCodeProps=".linear-gradient-background {
  background-image: linear-gradient(
    rgba(232, 102, 236, 0.3) 0%,
    rgba(232, 102, 236, 0.6) 100%
  );
}" />
        <Card cardTitleProps="Box Transition Glow" cardBodyProps="Use transition and box shadows to glow on hover." cardCodeProps=".code-card .card-header {
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
}

.code-card:hover,
.code-card:hover .card-header {
  box-shadow: inset 0px 0px 8px rgba(232, 102, 236, 1), 0 0 15px rgba(232, 102, 236, 1);
}" />
        <Card cardTitleProps="Overlay Card with Title" cardBodyProps="Use position properties and negative margins to raise elements higher than their natural starting point." cardCodeProps=".card-header {
  position: relative;
  margin-top: -20px;
}" />
        <Footer />
      </section>
    </main>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
