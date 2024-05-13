import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
      </p>
    </>
  )
}

export default App
// import { Routes, Route, HashRouter } from "react-router-dom";
// import {
//   ThemeProvider,
//   createTheme,
//   responsiveFontSizes,
// } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import MainPage from "./pages/MainPage";
// // import StockMarketPage from "./CoursePages/StockMarketPage";
// // import CryptoPage from "./CoursePages/CryptoPage";
// // import SwipeCards from "./SwipeCards";
// // import coursesData from "../Data/CoursesData";
// // import RealEstatePage from "./CoursePages/RealEstatePage";

// let theme = createTheme({
//   palette: {
//     primary: {
//       main: "#3C3C3C",
//     },
//     secondary: {
//       main: "#FFFFFF",
//     },
//     background: {
//       default: `#e9edf0`,
//     },
//   },
//   typography: {
//     fontFamily: "Montserrat, sans-serif",
//     h1: {
//       fontSize: "3.5rem",
//       fontWeight: "400",
//     },
//     h2: {
//       fontSize: "3rem",
//       fontWeight: "400",
//     },
//     h3: {
//       fontSize: "2rem",
//       fontWeight: "400",
//     },
//     body1: {
//       fontSize: "1.2rem",
//     },
//   },
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 850,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
// });

// theme = responsiveFontSizes(theme);

// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <HashRouter>
//         <Routes>
//           {/* <Route
//             path="/stock-market"
//             element={<StockMarketPage courseId={"stock-market"} />}
//           />
//           <Route path="/crypto" element={<CryptoPage courseId={"crypto"} />} />
//           <Route
//             path="/real-estate"
//             element={<RealEstatePage courseId={"real-estate"} />}
//           />
//           <Route
//             path="/:courseId/:assetId/:lessonId"
//             element={<SwipeCards data={coursesData} />}
//           /> */}

//           <Route path="/" element={<MainPage />} />
//         </Routes>
//       </HashRouter>
//     </ThemeProvider>
//   );
// };

// export default App;