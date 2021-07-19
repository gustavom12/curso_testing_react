import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function useObserver (startWith:string = "",ElementsIds:Array<string>){
  const [navTitle, setNavTitle] = useState(startWith)
  const url = useLocation().pathname
  useEffect(()=>{
    console.log("X")
    const observingElements:any = []
    const obsCallback = (entries:any)=>{
      entries.forEach((entry:any)=>{
        if(!entry.isIntersecting)return;
        ElementsIds.forEach((el)=>{
          if(entry.target.id === el )setNavTitle(el)
        })
      })
    }
    const observer = new IntersectionObserver(obsCallback,{threshold: 0})
    ElementsIds.forEach((el:string)=>{
      const element:any = document.getElementById(el)
      if(element){
        observingElements.push(element)
        observer.observe(element)
      }
    })
    return(()=>{
      observingElements.forEach((el:any)=>{
        observer.disconnect()
      })
    })
  },[ElementsIds, url])
  return navTitle
}
export default useObserver
