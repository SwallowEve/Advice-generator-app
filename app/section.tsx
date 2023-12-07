'use client'
import Image from "next/image"
import divider from '../public/images/pattern-divider-desktop.svg'
import dividerMobile from '../public/images/pattern-divider-mobile.svg'
import buttonIcon from '../public/images/icon-dice.svg'
import useSWR from 'swr'

export default function SectionAdvice() {
    const fetcher = (...args:[]) => fetch(...args).then(res => res.json())
    const { data, error, mutate} = useSWR('https://api.adviceslip.com/advice', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      })
 
    if (error) return (
        <div className="advice-field z-10 w-11/12 md:w-3/5 lg:w-2/5 place-self-center rounded-2xl my-auto">
            <p className="advice-title m-5 md:m-8 mt-14 md:mt-9 uppercase text-center tracking-[0.3em] text-sm" >Failed to load advice</p>
        </div>
    )
    if (!data) return (
        <div className="advice-field z-10 w-11/12 md:w-3/5 lg:w-2/5 place-self-center rounded-2xl my-auto">
            <p className="advice-title m-5 md:m-8 mt-14 md:mt-9 uppercase text-center tracking-[0.3em] text-sm" >Loading advice...</p>
        </div>
    )
    
    return (
      <div className="advice-field z-10 w-11/12 md:w-3/5 lg:w-2/5 place-self-center rounded-2xl my-auto">    
          <p className="advice-title m-5 md:m-8 mt-14 md:mt-9 uppercase text-center tracking-[0.3em] text-sm" >
            Advice # {data.slip.id}
          </p>
          <p className="advice-body m-5 md:m-7 text-center text-2xl md:text-4xl font-extrabold tracking-wider md:tracking-normal">
            {data.slip.advice}
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
            onClick={async () => {
            await mutate({...data})
            }}
            className="buttonBg block rounded-full border border-black w-14 h-14 mx-auto -mb-7" type="submit"
          >
            <Image
                className="w-5 mx-auto"
                priority
                src={buttonIcon}
                alt="Generate" />
          </button>
      </div>       
    )
}
  