import { Sidebar } from 'flowbite-react';
import {HiArrowSmRight, HiUser} from 'react-icons/hi';

export default function DashSidebar() {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.Group>
            <Sidebar.Item active icon={HiUser} label={'User'} labelColor='dark'>
                Profile 
            </Sidebar.Item>
            <Sidebar.Item active icon={HiArrowSmRight} label={'User'} labelColor='dark'>
                Signout 
            </Sidebar.Item>
        </Sidebar.Group>
      </Sidebar.Items>
    </Sidebar>
  )
}
