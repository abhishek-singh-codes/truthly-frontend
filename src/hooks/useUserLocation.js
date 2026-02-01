import { useEffect, useState } from "react"

const useUserLocation = () => {
  const [location, setLocation] = useState({
    lat: null,
    long: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        loading: false,
        error: "Geolocation not supported",
      }))
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          loading: false,
          error: null,
        })
      },
      (err) => {
        setLocation((prev) => ({
          ...prev,
          loading: false,
          error: err.message,
        }))
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    )
  }, [])

  return location
}

export default useUserLocation
