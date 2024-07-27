import NavBar from "@/components/nav/navbar";
import ThemeSwitch from "@/components/misc/(theme)/theme-switch";

export default function Header() {
  return (
    <header className="flex items-center ">
      <div className="pr-2 text-2xl font-bold mr-auto">
        <span>{'{'}</span>D<span>{'}'}</span>Code
      
      </div>
      <NavBar/>
      
      <div className="">
      <ThemeSwitch/>
      </div>
    </header>
  )
}