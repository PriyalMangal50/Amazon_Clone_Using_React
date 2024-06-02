import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { motion } from "framer-motion";
import MenuIcon from '@material-ui/icons/Menu';
import SideNavContent from './SideNavContent';
const HeaderBottom=()=> {
    const [sidebar,setSidebar]=React.useState(false);
    const ref=React.useRef();
    React.useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
            if((e.target.contains(ref.current))){
                setSidebar(false)
            }
        })
    },[ref,sidebar])
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
        <ul className='flex items-center  gap-2 text-sm tracking-wide'>
            <li onClick={()=>setSidebar(true)} className='headerHover flex items-center gap-1'><MenuIcon/>All</li>
            <li className='headerHover'>Best Sellers</li>
            <li className='headerHover'>Customer Service</li>
            <li className='headerHover'>Prime</li>
            <li className='headerHover'>New Releases</li>
            <li className='headerHover'>Today's Deals</li>
            <li className='headerHover '>Books</li>
            </ul>

            {
                sidebar &&(
                
                    <div className='w-full h-screen bg-amazon_blue text-black fixed top-0 left-0 bg-opacity-50'>
                        <div className='w-full h-full relative'>
                            <motion.div ref={ref} initial={{x:-500,opacity:0}} animate ={{x:0,opacity:1}} transition={{duration:0.5}} className='w-[350px] h-full bg-white border border-black' >
                                <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                    <AccountCircleIcon/><h3 className='text-s font-titlefont font-bold text-lg tracking-wide'>Hello, Sign in</h3>
                                </div>
                                

                                <SideNavContent 
                                title="Digital Content & Devices"
                                one="Amazon Music"
                                two="Amazon Appstore"
                                three="Amazon Photos"
                                /> 
                                <SideNavContent
                                title="Shop By Department"
                                one="Electronics"
                                two="Computers"
                                three="Smart Home"
                                four="Arts & Crafts"
                                />   
                                <SideNavContent
                                title="Programs & Features"
                                one="Gift Cards"
                                two="Amazon Live"
                                three="International Shopping"
                                four="Amazon Photos"
                                />
                                <SideNavContent
                                title="Help & Settings"
                                one="Your Account"
                                two="English"
                                three="United States"
                                four="Customer Service"
                                />   
                            </motion.div>
                            <span onClick={()=>setSidebar(false)} className='cursor-pointer absolute top-0 left-[360px] w-8 h-10 text-black flex-items-center justify-center border bg-gray hover:bg-red hover:text-white duration-300'>
                                <CloseIcon/>
                            </span>
                                        
                        </div>
                    </div>
                        )
            }
    </div>
  )
}

export default HeaderBottom