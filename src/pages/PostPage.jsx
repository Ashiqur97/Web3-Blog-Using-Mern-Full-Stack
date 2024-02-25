import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"

export default function PostPage() {
    const {postSlug} = useParams();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
           try {
            const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
            const data = await res.json();
            if(!res.ok){
                setError(true);
                setLoading(false);
                return;
            }
           } catch (error) {

           }
        }
    },[postSlug])

  return (
    <div>
        Post Page       
    </div>
  )
}
