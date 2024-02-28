import {Button} from 'flowbite-react';

export default function CallToActions() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
    <div className="flex-1 justify-center flex flex-col">
        <h2 className='text-2xl'>
            Want to learn more about Web3 
        </h2>
        <p className='text-gray-500 my-2'>
            Checkout these resources to learn more about web3
        </p>
        <Button gradientDuoTone='purpleToPink'  className='rounded-tl-xl rounded-bl-none'>
            <a href='https://github.com/0xPARC/zk-bug-tracker?tab=readme-ov-file#dark-forest-1' target='_blank' rel='noopener noreferrer'>
                Web3 Article 
            </a>
        </Button>
    </div>
    <div className='p-7 flex-1'>
        <img src='https://www.livetradingnews.com/wp-content/uploads/2021/12/web3.0_blog_1200x675p_092921.png' />
    </div>
    </div>
  )
}
