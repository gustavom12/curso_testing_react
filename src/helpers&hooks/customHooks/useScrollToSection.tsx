import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom"

function useSrollTo() {
  const { section } = useParams<any>()
  useLayoutEffect(() => {
    const element: any = document.getElementById(section);
    if(!element)return
    element.scrollIntoView({
      block: "center"
    })
    // const headerOffset = 60;
    // const elementPosition = element.getBoundingClientRect().top;
    // const offsetPosition = elementPosition - headerOffset;
    // window.scrollTo({
    //   top: offsetPosition,
    //   behavior: "smooth"
    // });
  }, [section]);
}
export default useSrollTo
