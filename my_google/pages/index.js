
import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className=' flex flex-col justify-between h-screen'>
      <header>
        <Header />
      </header>
      <main>
        <Body />
      </main>
      <Footer />
    </div>
  )
}