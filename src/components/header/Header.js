import React from 'react'
import {logo} from '../../assests/banner/photos'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ArrowDropDownOutlined from '@material-ui/icons/ArrowDropDownOutlined';
import SearchIcon from '@material-ui/icons/Search';
import {allItems} from '../../constants'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HeaderBottom from './HeaderBottom';

const Header=()=> { 
    const [showAll,setShowAll]=React.useState(false)
    
    return (
    <div className='w-full bg-amazon_blue h-14 ' >
        <div className='max-w-container mx-auto text-white px-4 py-3 flex items-center gap-4 h-14'>
            <div className='headerHover'>
            <img className='w-24 mt-2' src={logo} alt="logo" />
            </div>
            <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer'><LocationOnOutlinedIcon/>
                <p className='text-sm text-lightText font-light flex flex-col'>Deliver to {" "} <span className='text-sm font-semibold mt-1 text-lightText  '> Oman</span></p>
            </div>
            <div className='h-10 rounded-md flex flex-grow relative'>
                <span onClick={()=>setShowAll(!showAll)} className='w-14 h-full bg-white -200 hover:bg-white -300 border-2 cursor-pointer duration-300 text-amazon_blue text-sm font-titleFont  flex items-center justify-center rounded-tl-md rounded-bl-md'>All<span></span>
                <ArrowDropDownOutlined/>
                </span>
                {
                showAll &&(
                    <div>
                        <ul className='absolute left-0 w-56 h-80 overflow-y-scroll overflow-x-hidden top-10 bg-white border-[1px] text-black border-amazon_blue p-2 flex-col gap-1 z-50'>
                            {/* <li 
                            className='text-sm tracking-wide font-titlefont border-b-[1px] border-b-amazon_blue border-b-transparent cursor-pointer-duration-200'>
                                All Departments
                            </li> */}
                            {
                                allItems.map((item)=>(
                                    <li className='text-sm tracking-wide font-titlefont border-b-[1px] border-b-amazon_blue border-b-transparent cursor-pointer-duration-200 key={item._id}'>
                                     {item.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )} 
                <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text'/>
            </div>
    
    
                <div>
               
                <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                    <SearchIcon/>
                </span>
                </div>
                <div className='flex flex-col items-start justify-center headerHover'>
            <p className=' text-xs text-lightText font-light '>
                Hello Sign in
            </p>
            <p className='text-sm font-semibold mt-1 text-whiteText'   >
                Account & Lists{" "}
                <span>
                    <ArrowDropDownOutlined/>
                </span>
            </p>
        </div>  
        <div className='flex flex-col items-start justify-center headerHover'>
            <p className=' text-xs text-lightText font-light '>
                Returns
            </p>
            <p className='text-sm font-semibold mt-1 text-whiteText'   >
                & Orders{" "}
            </p>      
            </div>

            <div className='flex flex-col items-start justify-center headerHover relative'>
            <ShoppingCartIcon />
                <p className='text-sm font-semibold mt-3 text-whiteText'   >
                Cart 
                <span className ='absolute text-xs left-6 top-1 text-amazon_blue rounded-full flex font-semibold p-1 bg-[#f3a847] h-4  items-center justify-center'>0</span>
            </p>
                    
                </div>
            </div>
        <HeaderBottom/>
        </div>
        
        
                    
    )
}

 export default Header