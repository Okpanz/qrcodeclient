import React from 'react';
import { MdDelete, MdOutlineContentCopy } from "react-icons/md";
import { BsFolderSymlink } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";

const QRCodePage = () => {
  return (
    <div className='h-screen bg-slate-300 w-[80%] flex flex-col gap-2 justify-center items-center'>
      <div className='flex h-[70vh] gap-4'>
        <div className='w-[60rem] bg-white rounded-sm border border-gray-300'>
          <div className='flex p-4 flex-row'>
            <div className='flex text-gray-400'>
              <input type="checkbox" value="Select" />
              <MdOutlineContentCopy className='hover:text-black cursor-pointer transition-all ease-in-out duration-200'/>
              <MdDelete className='hover:text-black cursor-pointer transition-all ease-in-out duration-200'/>
              <BsFolderSymlink className='hover:text-black cursor-pointer transition-all ease-in-out duration-200'/>
            </div>
            <div className='text-gray-400 ml-auto'>
              <CiFilter className='hover:text-black cursor-pointer transition-all ease-in-out duration-200'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRCodePage;
