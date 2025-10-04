import { Introduction } from "./introduction"
import { Contacts } from "./contacts"

function IntroPart({data, loading, error}) {
  return (
    <div className="flex flex-col">
      <div className="md:flex justify-center">
        <div className="md:flex flex-row justify-center md:w-[80%] items-center md:space-x-10">
          <div className="hidden md:flex justify-end basis-2/4">
            <Contacts />
          </div>
          <div className='basis-4/4'>
            <Introduction intro={data?.intro} loading={loading} error={error}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export {IntroPart}