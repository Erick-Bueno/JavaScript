import ItemComida from "./ItemComida"
function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>Comidas
                    <ul>
                        <ItemComida nome = "banana"></ItemComida>
                        <ItemComida nome = "banana"></ItemComida>
                        <ItemComida nome = "banana"></ItemComida>
                    </ul>
                </li>
                <li>bebidas
                    <ul>
                        <li>suco</li>
                        <li>vitamina</li>
                        <li>Refresco</li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
export default List