import { Button } from 'flowbite-react';

export default function CallToAction() {
    
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about Web3.0?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                    Resources
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://media.licdn.com/dms/image/D4D12AQGdc0hpITR_6A/article-cover_image-shrink_720_1280/0/1661183908899?e=2147483647&v=beta&t=oGnff9fKpSFZDyxTXMBOz86l8yO8SZY26EQqcSSq2tM" />
        </div>
    </div>
  )
}