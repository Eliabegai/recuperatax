// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ItemSidebar = (props:any) => {
  return(
    <div className="flex items-center space-x-3 p-3 text-emerald-400 hover:bg-sky-950">
      {props.children}
    </div>
  )
}

export default ItemSidebar