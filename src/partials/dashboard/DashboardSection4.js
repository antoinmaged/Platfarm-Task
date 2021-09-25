import React from 'react';
import EditMenu from '../EditMenu';
import { Link } from 'react-router-dom';

function DashboardCard07() {

  const info = [
    {
      Time:'',
      Field:'',
      Field_Unit:'',
      Activity:'',
      Category:'',
      Sub_Category:'',
      Created_by:'',
      id: '0',
    },
    {
      Time:'',

      Field:'',
      Field_Unit:'',
      Activity:'',
      Category:'',
      Sub_Category:'',
      Created_by:'',
      id: '1',
    },
    {
      Time:'',

      Field:'',
      Field_Unit:'',
      Activity:'',
      Category:'',
      Sub_Category:'',
      Created_by:'',
      id: '2',
    },
    {
      Time:'',

      Field:'',
      Field_Unit:'',
      Activity:'',
      Category:'',
      Sub_Category:'',
      Created_by:'',
      id: '3',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Top Channels</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Time</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Field</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Field Unit</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Activity</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Category</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Sub  Category</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Created by</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100">
            {
                info.map(info => {
                  return (
                    <tr key={info.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">{info.Time}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">{info.Field}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">{info.Field_Unit}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">{info.Activity}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">{info.Category}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{info.Sub_Category}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{info.Created_by}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">
                          {/* Menu button */}
                          <EditMenu className="relative inline-flex">
                            <li>
                              <Link className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" to="#0">View</Link>
                            </li>
                            <li>
                              <Link className="font-medium text-sm text-gray-600 hover:text-gray-800 flex py-1 px-3" to="#0">Edit</Link>
                            </li>
                            <li>
                              <Link className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" to="#0">Delete</Link>
                            </li>
                          </EditMenu>
                          </div>
                      </td>
                      
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
