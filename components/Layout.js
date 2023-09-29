import { motion } from "framer-motion";
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
    <Header />
    <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
  
  
      
      <main>{children}</main>
      
      </motion.div>
      <Footer />
    </>
  )
}