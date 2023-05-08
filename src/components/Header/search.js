import { useState } from 'react'
import '../../pages/Home/'
function Search(){
const [pesquisar,setPesquisa] = useState("")



return (
    <div className="texto" >
        <h1 >{pesquisar}</h1>
    <input className="pesquisa" onChange={(e)=>setPesquisa(e.target.value)}  type="search"  >
    </input>
    

    </div>

   

)

}


export default Search;