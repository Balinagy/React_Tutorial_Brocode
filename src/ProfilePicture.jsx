
function ProfilePicture()
{
    const imageURL = './src/assets/logo1jo.png'
    const handleClick = (e) => {
        e.target.style.display = "none";
    }
    return(
        <img src={imageURL} onClick={(e) => handleClick(e)}/>
    )
}

export default ProfilePicture