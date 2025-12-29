import {useEffect, useState} from "react"
import Post from "./Post"

const FeedNoAuth = () => {

    const [feedData, setFeedData] = useState(null)
    
    useEffect(() => {
        const fetchFeedData = async () => {
            const res = await fetch("http://localhost:8181/api/v1/feed");
            const data = await res.json()
            setFeedData(data)
        }
        fetchFeedData()
    }, [])
    
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