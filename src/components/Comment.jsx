import { useEffect,useState } from "react"

export default function Comment({ comment}) {
    const [user,setUser] = useState({});
    
    useEffect(() => {
        const getUser = async () => {
          try {
            // eslint-disable-next-line react/prop-types
            const res = await fetch(`/api/user/${comment.userId}`);
            const data = await res.json();
            if (res.ok) {
              setUser(data);
            }
          } catch (error) {
            console.log(error.message);
          }
        };
        getUser();
      }, [comment]);
  return (
    <div>
        <div className="">
            <img src={user.profilePicture} alt={user.username} />
        </div>
    </div>
  )
}
