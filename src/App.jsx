import React from 'react'
import "./App.css"
import Header from './components/Header'
import Home from './pages/Home'
import Comfort from './pages/Comfort'
import Info from './pages/Info'
import Control from './pages/Control'

export default function App() {
  return (
    <>
    {/* components start */}
    <Header/>
    {/* components end */}

    {/* pages start */}
    <Home/>
    <Comfort/>
    <Info/>
    <Control/>
    {/* pages end */}
    </>
  );
}
