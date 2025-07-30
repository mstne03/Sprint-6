import { useState } from 'react'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import BlobCircle from './components/BlobCircle/BlobCircle'
import { motion, AnimatePresence } from 'motion/react'

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
    <AnimatePresence>
      {
        currentPage === 0 &&
        <motion.header
          initial={{ y: -100, scale: .6, opacity: 0 }}
          animate={{ y: 10, scale: 1, opacity: 1 }}
          exit={{ y: -100, scale: .6, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Home
            changePage={setCurrentPage}
          />
        </motion.header>
      }
      {
        currentPage === 1 &&
        <motion.main
          initial={{ y: 100, scale: .6, opacity: 0 }}
          animate={{ y: 10, scale: 1, opacity: 1 }}
          exit={{ y: 100, scale: .6, opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Services/>
        </motion.main>
      }
    </AnimatePresence>

    <BlobCircle/>
    <BlobCircle leftSide={true}/>
    <BlobCircle rightSide={true}/>
    </>
  )
}

export default App
