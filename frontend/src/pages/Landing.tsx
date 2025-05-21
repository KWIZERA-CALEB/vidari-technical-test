import { useState, useEffect } from 'react'
import Preloader from "../components/molecules/Preloader"
import Navigation from '../components/molecules/Navigation'

const Landing = () => {
    const [isPreloaderShown, setIsPreloaderShown] = useState(true)

    const handleHidePreloader = () => {
        setTimeout(() => {
            setIsPreloaderShown(false)
        }, 5000)
    }

    useEffect(() => {
        handleHidePreloader()
    }, [isPreloaderShown])

    return (
        <div>
            {isPreloaderShown && <Preloader />}
            <Navigation />
            
        </div>
    )
}

export default Landing