import React from 'react';
import { MdDelete, MdEdit, MdFolder } from 'react-icons/md';

const Folder = () => {
  return (
    <div className='h-screen bg-slate-300 w-[80%] flex flex-col gap-2 justify-center items-center'>
      <h1 className='font-bold'>Folders</h1>
      <div className='flex h-[70vh] gap-4'>
        <div className='w-[60rem] bg-white rounded-sm border border-gray-300'>
          <div className='p-4'>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Folder Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <MdFolder className="h-6 w-6 text-gray-400" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Folder 1</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex justify-center text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-900"><MdEdit /> </button>
                    <button className="text-red-600 hover:text-red-900 ml-2"><MdDelete /></button>
                  </td>
                </tr>
                {/* More rows can be added dynamically */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folder;
