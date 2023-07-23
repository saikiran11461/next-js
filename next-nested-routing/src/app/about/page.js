import Link from "next/link";

const About = ()=>{
    return (
        <div>
            <h1>About page</h1>

           <Link  href={"/about/aboutteacher"}><button>go to teachers</button></Link>
            <Link href={"/about/aboutstudent"}> <button>go to students</button></Link>
           
            
        </div>
    )
}
export default About;