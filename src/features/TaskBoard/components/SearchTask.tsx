import searchSvg from "../assets/search.svg"

export default function SearchTask() {
  return (
    <label className={`min-w-80 flex gap-1 border-2 border-gray-300  bg-red-90 rounded-xl px-2 p-1 `}>
      <img className={"w-8"} src={searchSvg}/>
      <input className='w-full h-full text-2xl outline-none bg-gray-50 font-semibold p-3 ' type="search" placeholder='search in view' />
    </label>
  
  )
}
