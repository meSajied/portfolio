import { SetbackList } from "../utils/list-of-setbacks";

function Setbacks({setbacks}) {
  return (
    <div className="flex justify-center">
      <div className="space-y-15 lg:w-[70%]">
          <div>
            <p className="text-xl font-z mb-5">Experiments & Missteps</p>

            <div>
              {<SetbackList setbacks={setbacks} />}
            </div>
          </div>
        </div>
    </div>
  )
}

export {Setbacks}