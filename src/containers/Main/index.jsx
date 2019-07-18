import React, {useState, useEffect} from 'react'

export default function Main () {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  })

  return (
    loaded && <h1>Hello World!</h1>
  )
}
