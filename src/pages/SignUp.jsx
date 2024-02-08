import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Web3 
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            It is a knowledge sharing blog for web3 enthusiasts. it is a platform where we can share our knowledge and learn from others.
            it is begginer friendly and we are open to all the suggestions and feedbacks.
          </p>
          </div>
          <div className=""></div>
      </div>
    </div>
  )
}

