import {Button} from 'flowbite-react';

export default function CallToActions() {
  return (
    <div>
    <div className="">
        <h2>
            Want to learn more about Web3 
        </h2>
        <p>
            Checkout these resources to learn more about web3
        </p>
        <Button gradientDuoTone='purpleToPink'>
            <a href='https://github.com/0xPARC/zk-bug-tracker?tab=readme-ov-file#dark-forest-1' target='_blank' rel='noopener noreferrer'>
                Web3 Article 
            </a>
        </Button>
    </div>
    <div className='p-7'>
        <img src='https://www.livetradingnews.com/wp-content/uploads/2021/12/web3.0_blog_1200x675p_092921.png' />
    </div>
    </div>
  )
}
