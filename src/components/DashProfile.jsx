import { useSelector } from "react-redux"

export default function DashProfile() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div>
      <h1>Profile</h1>
      <form>
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
        <img src={currentUser.profilePicture} alt="user" 
        className="rounded-full w-full h-full object-cover border-8 border-[lightgray]" />
        </div>
      </form>
    </div>
  )
}

