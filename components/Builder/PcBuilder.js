import Parts from './Parts/Parts'
import PartsList from './PartsList/PartsList'

export default function PcBuilder() {

  return(
    <div className="w-11/12 mx-auto pt-16 flex pb-4">
      <Parts />
      <PartsList />
    </div>
  )
}