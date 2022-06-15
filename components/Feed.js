import Stories from "./Stories";
import InputBox from "./InputBox"
import Posts from "./Posts"

function Feed() {
    return (
        <div className="flex flex-grow flex-col h-screen pb-44 pt-6 mx-4">
            <Stories />
            <InputBox />
            <Posts />
        </div>
    );
}

export default Feed;