import { useState, useEffect } from 'react'

export const useResize = () => {
    const [screenSize, setScreenSize] = useState({
        width: 0,
        height: 0,
        isMobile: false,
        isResponsive: false
    })

    const updateSize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: window.innerWidth < 768,
            isResponsive: window.innerWidth < 1320
        })
    }

    useEffect(() => {
        window.addEventListener("resize", updateSize)
        updateSize()

        return () => {
            window.removeEventListener("resize", updateSize)
        }
    }, [])

    return screenSize
}

export const useDetectOutsideClick = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState)

    useEffect(() => {
        const handler = e => {
            if (el.current !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive)
            }
        }

        if (isActive) {
            window.addEventListener("click", handler)
        }

        return () => {
            window.removeEventListener("click", handler)
        }
    }, [isActive, el])

    return [isActive, setIsActive]
}