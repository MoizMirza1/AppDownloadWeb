import React from 'react'

const Header = () => {
  return (
    <header className="w-full py-4 bg-brand shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <img
          src="/images/lg.png"
          alt="Logo"
          className="h-10"
        />
      </div>
    </header>
  )
}

export default Header
