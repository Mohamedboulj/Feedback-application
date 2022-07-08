import React from 'react'

function Header({text,textColor}) {
  return (
    <header>
        <div className='container'>
            <h2 style={{ color:textColor }}>{text}</h2>
        </div>
    </header>
    
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  textColor: '#ff6a95',
}

export default Header