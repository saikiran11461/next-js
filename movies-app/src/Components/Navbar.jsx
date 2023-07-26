import React from 'react'
import "../styles/Navbar.css"
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <div>
                <div className="navbar">

                    <div>
                        <Link href={"/"}><img width="160px" style={{objectFit:"cover"}} src="https://silverspot.net/assets/images/logo.png" alt="" /> </Link>
                    </div>
                    <div>
                        <ul className='nav-ul'>
                            <Link href={"/about"}><li>About</li></Link>
                            <Link href={"/movies"}><li>Movies</li></Link>
                            <Link href={"/contact"}><li>Contact</li></Link>
                            <Link href={"/email"}><li>Email</li></Link>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar