import Link from "next/link"
import Image from "next/image"

export const Navbar = () => {
    return (
        <div>
          <nav className="border-gray-200 bg-indigo-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                <img src="/THLogo2.png" className="h-8" alt="Flowbite Logo" />
                {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-white italic">Chance</span> */}
                  {/* <Image src={"/logo.png"} width={500} height={500} className="h-16 w-16" alt="Access DB Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Access DB</span> */}
              </Link>
                
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li>
                    <Link href="https://1db55667ecdd595d2b.gradio.live/" className="h-8 block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 bg-none">Joseph</Link>
                  </li>
                  <li>
                    <Link href="#" className="h-8 block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 bg-none">Kate</Link>
                  </li>
                  <li>
                    <Link href="#" className="h-8 block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 bg-none">Obama</Link>
                  </li>
                  <li>
                    <Link href="#" className="h-8 block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 bg-none">Alastair</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
}