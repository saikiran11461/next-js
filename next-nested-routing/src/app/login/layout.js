import Link from "next/link"
import "./layout.css"
export default function Layout({children}){
    return (
        <div>
            <ul className="login-flex">
                <Link href={"/login"}> <li>Login Dashboard</li></Link>
                <Link href={"/login/teacherlogin"}> <li>Teacher  Login</li></Link>
                <Link href={"/login/studentlogin"}> <li>Student Login</li></Link>
   
            </ul>
            {children}
        </div>
    )
}   