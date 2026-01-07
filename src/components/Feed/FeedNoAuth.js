import {useEffect, useState} from "react"
import Post from "./Post"

const FeedNoAuth = () => {
    const token = process.env.REACT_APP_AUTH_TOKEN
    const IP = process.env.REACT_APP_BACKEND_IP
    const [feedData, setFeedData] = useState(null)
    useEffect(() => {
        const fetchFeedData = async () => {
            const res = await fetch(
                `${IP}/api/v1/feed`, 
                {
                    method: "GET", 
                    headers: {
                        "Authorization" : `Bearer ${token}`,
                    }
                }
            );
            const data = await res.json()
            setFeedData(data)
        }
        fetchFeedData()
    }, [token])
    
    return (
        <div className="flex flex-col justify-center w-full h-full gap-4">
            {
                feedData?.resultObj?.items?.map(item => (
                    <Post 
                        key={item.imageId}
                        imageUrl={item.imageUrl}
                        analytics={item.analytics}
                        userName={item.userName}
                        caption={item.caption}
                        location={item.location}
                    />
                ))
            }
        </div>
    )
}

export default FeedNoAuth