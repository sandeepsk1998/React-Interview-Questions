import {useEffect} from 'react'

function useDocumentHook(count) {
    useEffect(() => {
        document.title=`Clicked ${count} times`
    },[count])

  
}

export default useDocumentHook
