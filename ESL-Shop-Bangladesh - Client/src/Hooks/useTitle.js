import { useEffect } from "react"


const useTitle = (title) => {
  useEffect(()=> {
    document.title = `ESL Shop - ${title}`
  },[title])
}

export default useTitle;