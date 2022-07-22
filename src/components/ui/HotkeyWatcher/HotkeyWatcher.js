import React, {useCallback, useEffect} from 'react';

const HotkeyWatcher = () => {
    const handleKeyPress = useCallback((event) => {
        console.log(`Key pressed: ${event.key}`)
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [handleKeyPress])

    return (
        <>
        </>
    );
};

export default HotkeyWatcher;