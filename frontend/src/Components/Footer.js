import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <div style={{position:'absolute',bottom:0,left:'50vw'}}>
        <div>
          <div className='text-center py-3'>CopyRight &copy;</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer