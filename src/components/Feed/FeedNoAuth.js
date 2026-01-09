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
        <div className="flex flex-col items-center w-full h-full gap-6 px-4 py-6">
            {
                feedData?.resultObj?.items?.map(item => (
                    <div key={item.imageId} className="w-full max-w-3xl">
                        <Post 
                            imageUrl={item.imageUrl}
                            analytics={item.analytics}
                            userName={item.userName}
                            caption={item.caption}
                            location={item.location}
                            imageId={item.imageId}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default FeedNoAuth