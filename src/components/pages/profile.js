import {useState, useEffect} from "react"
import { IoMdPerson } from "react-icons/io";
import api from "../../utils/api";
const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [bio, setBio] = useState(null);
    const [userName, setUserName] = useState(null);
    const [images, setImages] = useState(null);

    useEffect(() => {
        // fetch user data
        const fetchData = async () => {
            setLoading(true);
            try{
                const res = await api("/profile");
                const data = await res.json();
                setBio(data?.resultObj?.bio);
                setUserName(data?.resultObj?.userName);
                setImages(data?.resultObj?.images);
            }catch(err){
                console.error(err);
            } finally{
                setLoading(false);
            }
        }
        fetchData()
    }, []);

    console.log()
    
    return (
        <div>
            <div>
                <div>
                    {/* image */}
                    <IoMdPerson />
                </div>
                <div>
                    {/* Bio */}
                </div>
                <div>
                    {/* Freinds */}
                </div>
            </div>
            <div>
                <div className="text-white">
                    {/* Images */}
                    Pending
                </div>
            </div>
        </div>
    )
}

export default Profile;