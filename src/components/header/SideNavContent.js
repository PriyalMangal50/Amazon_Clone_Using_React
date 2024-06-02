    import React from 'react'
    import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
    
    const SideNavContent=({title,one,two,three})=>{
          return (<div>
            <h3 className='text-lg font-semibold   px-6 mb-1 font-titlefont'>  
            {title}</h3>
            <ul>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
                    
                    {one}
                    <span>
                        <KeyboardArrowRightIcon/>
                    </span>
                    
                </li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
                    
                    
                    
                    {two}
                    <span>
                        <KeyboardArrowRightIcon/>
                    </span>
                </li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>
                    {three}
                    <span>
                        <KeyboardArrowRightIcon/>
                    </span>
                </li>
            </ul>   

            <closeIcon/>
            </div>
      )
    }
    
    export default SideNavContent