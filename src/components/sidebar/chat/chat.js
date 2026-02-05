import { IoChatbubblesSharp } from "react-icons/io5";

const Chat = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <div>
                    {/* chat logo */}
                    <IoChatbubblesSharp size={30} />
                </div>
                <div>
                    {/* chat text */}
                    <h2>Chat</h2>
                </div>
            </div>
        </>
    )
}

export default Chat;