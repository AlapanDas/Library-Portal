'use client'
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar/page";
import Controller from "./components/Controller/page";


export default function Home() {
  const router=usePathname();
  return (
    <>
      <div className="flex">
        <Navbar pathname="/"/>
        <Controller path={'/'} />
      </div>
    </>
  );
}
