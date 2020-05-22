import React from 'react'

function usePrevious<T>() {
    const value = React.useRef<T>()

    const setValue = (newValue: T) => value.current = newValue;
    return [value.current, setValue];
}

export default usePrevious