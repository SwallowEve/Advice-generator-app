'use client'
import Image from "next/image"
import divider from '../public/images/pattern-divider-desktop.svg'
import dividerMobile from '../public/images/pattern-divider-mobile.svg'
import buttonIcon from '../public/images/icon-dice.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col place-items-center content-center">
      <div className="advice-field z-10 w-11/12 md:w-3/5 lg:w-2/5 place-self-center rounded-2xl my-auto">
        <p className="advice-title m-5 md:m-8 mt-14 md:mt-9 uppercase text-center tracking-[0.3em] text-sm" >
          Advice #
        </p>
        <p className="advice-body m-5 md:m-7 text-center text-2xl md:text-4xl font-extrabold tracking-wider md:tracking-normal">
          &lsquo;&lsquo;It is easy to sit up and take notice, what's difficult is getting up and taking action.&rsquo;&rsquo;
        </p>
        <Image
        className="hidden md:block mx-auto w-4/5"
        priority
        src={divider} 
        alt="Divider" />
         <Image
        className="block md:hidden mx-auto w-4/5"
        priority
        src={dividerMobile} 
        alt="Divider" />
        <p className="mt-9"></p>
        <button 
                    //onClick={onsubmit}
                    className="buttonBg block rounded-full border border-black w-14 h-14 mx-auto -mb-7" type="submit"
                >
                    <Image
                        className="w-5 mx-auto"
                        priority
                        src={buttonIcon}
                        alt="Generate" />
                </button>
      </div>

      

      
    
      
    </main>
  )
}
