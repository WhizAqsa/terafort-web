import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Toast({ show, message }) {
  const [display, setDisplay] = useState(false)
  const showToast = () => {
    if (show) {
      setDisplay(true)
      setTimeout(() => {
        setDisplay(false)
      }, 3000)
    }
  }

  useEffect(() => {
    showToast()
  }, [show])
  return (
    <AnimatePresence>
      {display && (
        <motion.div
          style={{
            position: 'fixed',
            display: 'flex',
            columnGap: '1rem',
            alignItems: 'center',
            bottom: '10%',
            right: '10%',
            backgroundColor: '#fff',
            boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.2)',
            borderRadius: '15px',
            padding: '1rem',
            zIndex: '99',
          }}
          initial={{ opacity: 0, y: '20%', x: '10%' }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: '20%' }}
        >
          <span className='toast-icon'>
            <i className='fas fa-check-circle' style={{ color: 'green' }}></i>
          </span>
          <span>
            <p style={{ fontSize: '0.9rem' }}>{message}</p>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
