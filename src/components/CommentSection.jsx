import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

export default function CommentSection(postId) {
    const {currentUser} = useSelector(state => state.user);
  return (
    <div>
        { currentUser ? 
        (
            <div className=''>
                <p>Signed in as:</p>
                <img src={currentUser.profilePicture} alt=''/>
                <Link to={'/dashboard?tag=profile'}>
                    @ {currentUser.username}
                </Link>
                </div>
        ) 
        :
        (
            <div className=''>
                    you must be signed in to comment
                    <Link to={'/sign-in'}>
                        Sign In 
                    </Link>
                </div>
        )
    }
    </div>
  )
}
