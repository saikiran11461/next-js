import Link from "next/link";

const AboutStudent = ()=>{
    return (
        <div>
            <h1> AboutStudent   </h1>
            <Link href={"/about"}><button>go to about again</button></Link>
        </div>
    )
}


export default AboutStudent;