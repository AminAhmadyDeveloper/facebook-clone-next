import Stories from "./Stories";
import InputBox from "./InputBox"

function Feed() {
    return (
        <div className="flex flex-grow flex-col h-screen pb-44 pt-6">
            <Stories />
            <InputBox />
        </div>
    );
}

export default Feed;