import { IoChatbubblesSharp } from "react-icons/io5";

const Chat = () => {
    return (
        <>
            <div className="flex w-full items-center gap-4 border border-blue-500 bg-blue-400 rounded-md p-2 hover:bg-blue-600 text-white cursor-pointer duration-300">
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