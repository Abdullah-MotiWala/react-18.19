import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Layout from './Layout'
import IncreaseCounter from './increaseCounter'
import { useSelector } from 'react-redux'
import DecreaseCounter from './decreaseCounter'
import ManualCounter from './manualCounter'

function App() {
  const state = useSelector(function (state) { return state })
  console.log(state)
  return (
    <>
      <Layout>
        <p>{state.counter.value}</p>
        <IncreaseCounter />
        <DecreaseCounter />
        <ManualCounter />
      </Layout>
    </>

  )
}

export default App
