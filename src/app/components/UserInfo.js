export default function UserInfo({username, userImage}){
    return(
        <div className="rounded-full border border-2-[#fff] w-7 h-7">
            <img className="rounded-full w-7 h-7" src={userImage} alt={username}/>
        </div>
    )
}