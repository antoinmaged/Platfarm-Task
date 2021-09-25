import React from 'react';

function DashboardCard10() {

  const info = [
    {
      id: '0',
      title: 'Field size',
      description: '40 ha',
    },
    {
      id: '1',
      title: 'Region',
      description: 'Riyadh, Saudi Arabia',
    },
    {
      id: '2',
      title: 'Sowning date',
      description: '01 April 2020',
    },
    {
      id: '3',
      title: 'Harvest date',
      description: '25 Nov 2020',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Info:</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {
                info.map(info => {
                  return (
                    <tr key={info.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">{info.title}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{info.description}</div>
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

export default DashboardCard10;
