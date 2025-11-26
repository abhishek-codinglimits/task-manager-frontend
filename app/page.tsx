"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar"
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  return (
    <div className="w-screen min-h-screen bg-gray-100 ">
    {/* <nav className="w-full h-24 bg-amber-300 p-2 flex justify-between items-center">
      <Image src='/talsy_logo.png' alt="company logo" width={100} height={100} priority/>
      <h1 className="text-2xl text-orange-600">Welcome to talsy</h1>
    </nav> */}
    <Navbar />
    <main className="flex flex-col justify-center items-center gap-6 h-[calc(100vh-96px)]">
    {/* <h1 className="text-6xl font-bold text-gray-500">Welcome to talsy</h1>
    <Link href='/login' className="px-6 py-3 bg-gray-500 text-white text-sm border rounded-sm">Let's Start</Link>
     */}
     <div className=" flex justify-center items-center">
            <form className="bg-white/90 flex flex-col gap-6 justify-normal items-center
            ackdrop-blur-xl border border-gray-200 p-8 rounded-2xl shadow-2xl ">
            <h1 className="text-3xl font-bold text-orange-600">Welcome to Talsy</h1>
            <div className="flex justify-center flex-col">
            <label htmlFor="email" className="block text-sm text-gray-700 mb-1">Email</label>
            <input className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
            required
            placeholder="eg: abc@gmail.com"/>
            </div>
            <div className="flex justify-center flex-col">
            <label htmlFor="password" className="block text-sm text-gray-700 mb-1">Password</label>
            <input className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800"
            required placeholder="*********"/>
            </div>
            <button className="bg-gray-500 px-4 py-2 border rounded text-white"
            onClick={()=>router.push('/admin/dashboard')}>Login</button>
            </form>
        </div>
    </main>
    </div>
  );
}
