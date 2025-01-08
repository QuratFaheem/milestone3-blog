

import Image from "next/image"

export default function Footer(){
    return(
      <div className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12 max-w-[1440px] mx-auto">
      <div>
        <h4 className="text-sm font-medium">Home</h4>
      </div>
      <div>
        <h4 className="text-sm font-medium">My Work</h4>
        
      </div>
      <div>
        <h4 className="text-sm font-medium">Contact Us</h4>
        
      </div>
    
      <div className="w-full md:w-auto mt-2">
        <div className="flex justify-between space-x-3">
          <Image src={'/1.jpg'} alt="" width={40} height={20} />
          <Image src={'/2.png'} alt="" width={40} height={20} />
          <Image src={'/3.jpg'} alt="" width={40} height={20} />
          <Image src={'/4.png'} alt="" width={40} height={20} />
        </div>
      </div>

      <div className="w-full mt-8 text-left text-xs mx-5">
        <p>© 2025 Qurat, Inc. All Rights Reserved</p>
      </div>
  
    
    
    </div>
    
    )
}