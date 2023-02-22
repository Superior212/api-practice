import React from 'react'

const ApiCard = ({name}) => {
  return (
    <div className="flex justify-center">
    <div
      className="block w-96 my-4 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
      <div className="p-6">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name.name}
        </h5>
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name.address.city}
        </h5>
        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
          {name.email}
        </p>
        <h5
          className=" text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {name.username}
        </h5>
        <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
          {name.website}
        </p>
      </div>
    </div>
  </div>
  )
}

export default ApiCard