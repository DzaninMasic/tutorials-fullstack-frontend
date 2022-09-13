import {useEffect} from 'react'

const FirstScreen = () => {

    useEffect(()=>{
        document.body.style.background = '#F9F5E3';
    }, [])

    return(
        <>
            FIRST SCREEN
        </>
    )
}

export default FirstScreen