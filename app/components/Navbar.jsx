import Image from "next/image";
export default function Navbar(){
    return(
    <nav className="w-full h-24 bg-amber-300 p-2 flex justify-between items-center">
      <Image src='/talsy_logo.png' alt="company logo" width={100} height={100} priority/>
      <h1 className="text-2xl text-orange-600">Welcome to talsy</h1>
    </nav>
    )
}