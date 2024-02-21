import { Table, TableHeadCell } from "flowbite-react";
import { useEffect,useState } from "react"
import {useSelector} from "react-redux"

export default function DashPosts() {
  const {currentUser} = useSelector(state => state.user)
  const [userPosts, setUserPosts] = useState([])
  const [showMore, setShowMore] = useState(true);

  console.log(userPosts);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);
  return (
    <div>
        {currentUser.isAdmin && userPosts.length > 0 ? (
          <Table hoverable className="shadow-md">
              <Table.Head>
                  <Table.HeadCell>Date updated</Table.HeadCell>
              </Table.Head>
          </Table>
        ) : (
          <p>No posts to show</p>
        )}
    </div>
  )
}
