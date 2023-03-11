import React,{useState,useEffect, useRef} from 'react';
import { Link } from 'react-scroll'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {RiCloseLine,RiMenu4Line} from 'react-icons/ri'


const Menu = ({menu}:any)=>(
  <>
    <p className="text-white font-Manrope mx-4 my-1 text-base hover:text-gray-300">
    <Link className="cursor-pointer" to="about" smooth={true} duration={500} onClick={menu}>About</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base hover:text-gray-300">
    <Link className="cursor-pointer" to="Projects" smooth={true} duration={500} onClick={menu}>Projects</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base hover:text-gray-300">
    <Link className="cursor-pointer" to="technologies" smooth={true} duration={500} onClick={menu}>Technologies</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base hover:text-gray-300" >
    <Link className="cursor-pointer" to="contact" smooth={true} duration={500} onClick={menu}>Contact</Link></p>
    <p className="text-white font-Manrope mx-4 my-1 text-base hover:text-gray-300">
    <Link className="cursor-pointer" to="/blog" smooth={true} duration={500} onClick={menu}>Blog</Link></p>
  </>
)

const MenuSocialMedia = ()=>(
  <>
    <a className='mr-2 hover:translate-y-1 duration-200' href='https://github.com/jantar25'>
      <AiFillGithub style = {{fontSize: "2rem"}}/></a>
    <a className='mr-2 hover:translate-y-1 duration-200' href='https://www.linkedin.com/in/bulambo-mwendelwa-gloire-5a0755191/'>
      <AiFillLinkedin style = {{fontSize: "2rem"}}/></a>
  </>
)

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  const [navbar,setNavbar]=useState(false); 
  const menuRef = useRef<any>([]);
  const menu = () =>{setToggleMenu(!toggleMenu)} 
  const changeBackground=()=>{
    if(window.scrollY>=80){
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBackground)

  useEffect(()=>{  
    let handeler = (event:any) => {if(!menuRef?.current?.contains (event.target)){setToggleMenu(false)}} 
    document.addEventListener('mousedown',handeler,{ capture: true })
    return ()=> document.removeEventListener('mousedown',handeler,{ capture: true })
  },[])
  


  return <div className={`flex h-[80px] justify-between items-center ${navbar? 'bg-[#000]' : 'bg-transparent'}
  z-20 px-5 sm:px-20 py-2 sticky top-0 `}>
          <div className="flex-1 flex justify-start items-center">
            <Link className="cursor-pointer" to="Home" smooth={true} duration={500}>
              <div className="flex items-center mr-8">
                <h1 className="flex text-3xl font-Manrope text-transparent bg-clip-text 
                bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300">BMG</h1>
              </div>
            </Link>
            <div className="hidden lg:flex">
              <Menu menu={menu}/>
            </div>
          </div>
          <div className="flex-1 hidden sm:flex justify-end items-center">
            <MenuSocialMedia />
          </div>
          <div className='flex lg:hidden ml-4 relative'>
              {toggleMenu ?
              <RiCloseLine style={{cursor:'pointer'}} color="#fff" size={27} onClick={menu}/>
            : <RiMenu4Line style={{cursor:'pointer'}} color="#fff" size={27} onClick={menu}/>}
            {toggleMenu && (
              <div ref={menuRef} className="flex z-30 justify-end items-end flex-col bg-[#040311] text-left p-8 absolute
              top-8 right-0 mt-4 min-w-[210px] rounded shadow-md shadow-blue-600" onClick={menu} >
                  <Menu menu={menu}/>
                  <div className="flex sm:hidden items-left mx-4 my-4">
                    <MenuSocialMedia />
                  </div>
              </div>
            )}
          </div>
        </div>;
};

export default Navbar;
