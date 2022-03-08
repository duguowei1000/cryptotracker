export default function HomeWLdelete(props){

return(
    <>
    <button onClick={()=> props.removeTickerClick(props)}> delete </button>
    </>
)
}