import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header>
        <div className="container">
           <div className="head">
            <h1 className="logo">IT-ACADEMY</h1>

            <nav>
                <a href="#">Курсы</a>
                <a href="#">Бесплатный урок</a>
                <a href="#">Филиалы</a>
                <a href="#">Контакты</a>
            </nav>

            <button>Позвонить</button>

           </div>
        </div>
    </header>
  )
}

export default Header
