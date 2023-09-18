import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BookMarkCard from './components/BookMarkCard/BookMarkCard'

function KuchBhi() {
  return (
    <div className='app'>
      < BookMarkCard title={"Kuch bhi"} description={"loremloremloremloremloremloremloremloremloremloremlorem"} />
      < BookMarkCard title={"Kuch bhi"} description={"loremloremloremloremloremloremloremloremloremloremlorem"} />
      < BookMarkCard title={"Kuch bhi"} description={"loremloremloremloremloremloremloremloremloremloremlorem"} />
      < BookMarkCard title={"Kuch bhi"} description={"loremloremloremloremloremloremloremloremloremloremlorem"} />
      < BookMarkCard title={"Kuch bhi"} description={"loremloremloremloremloremloremloremloremloremloremlorem"} />
      < BookMarkCard title={"Kuch bhi"} description={"loremloremloremloremloremloremloremloremloremloremlorem"} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<KuchBhi />)
