import './App.css'
import Left_Part from './components/Left_Part'
import Footer from './components/Footer'
import Right_Part from './components/Right_Part'

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#8953ab] to-[#c496d8] min-h-screen flex flex-col justify-center items-center p-6 font-inter font-lato font-SegoeUI font-sans">
        
        <div className="flex bg-[#fff] min-h-[680px] max-w-[990px] w-full rounded-[24px] [box-shadow:0_0_14px_rgba(0,0,0,0.2)] overflow-hidden">
          <Left_Part />
          <Right_Part />
        </div>

        <footer>
          <Footer />
        </footer>

      </div>
    </>
  )
}

export default App