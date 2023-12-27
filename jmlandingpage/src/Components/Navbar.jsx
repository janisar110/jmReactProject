import React from 'react'
import logo from "../assets/whiteprofile.jpg"
import Button from './Button'


const Navbar = () => {

    const navlist = [
        { link: "Home", path: "home" },
        { link: "Components", path: "components" },
        { link: "Pages", path: "pages" },
        { link: "Docs", path: "docs" },

    ]
    return (
        <header className='stick top-0 z-10'>
            <nav className='max-w-full bg-white'>

                <div className="flex justify-evenly items-center">
                    <div>
                        <img src={logo} alt="logo" width={80} height={80} className='rounded-full border border-black inline-block items-center' /> <span className='mx-10 font-extrabold font-serif text-2xl '>JMtravel</span>
                    </div>



                    <ul className='flex space-x-5 '>
                        {
                            navlist.map(({ link, path }) => <a key={link} href={path} className='block font-bold hover:text-gray-300'>{link}</a>)
                        }

                    </ul>

                    <Button type="Login" />


                </div>

            </nav>
        </header>


    )
}

export default Navbar
