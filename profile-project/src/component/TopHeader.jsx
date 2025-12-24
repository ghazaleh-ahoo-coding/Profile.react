export default function TopHeader({name, username, avatarImage}){
 return (
    <header className="topHeader">
        <div className="topHeaserInner">
            <div className="avatarRing">
                <div className="avatarCircle avatarImageWrapper">
                    <img src={Avatar.jpg} alt={name}></img>
                </div>
            </div>
            <div className="topHeaderContent">
                <h1 className="profileName">{name}</h1>
                <p className="profileHandle">{username}</p>
            <div className="topHeaserbuttons">
                <button className="btnHeader primary"> Edit Profile</button>
                <button className="btnHeader ghost">Sign Out</button>
            </div>
        

            </div>
        </div>
    </header>
 )
}