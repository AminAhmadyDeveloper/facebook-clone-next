import facebookLogo from "./../assets/images/facebook.png"
import Image from "next/image";
import {signIn} from "next-auth/react"

function Login() {
    return (
    <div className="flex flex-col items-center justify-center pt-10">
        <Image src={facebookLogo} height={400} width={400} objectFit="contain" alt="facebook-logo"/>
        <button onClick={signIn} className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-full mt-10">
            Login with Facebook
        </button>
    </div>
    );
}

export default Login;