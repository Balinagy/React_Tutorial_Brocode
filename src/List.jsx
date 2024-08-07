import propTypes, { shape } from "prop-types"
function List(props)
{
    const itemList = props.items;
    const itemType = props.itemType;
    /*
    const fruits = [{id: 1, name:"apple", calories:95},
                    {id: 2, name:"coconut", calories:159},
                    {id: 3, name:"orange", calories:45},
                    {id: 4, name:"banana", calories:105},
                    {id: 5, name:"pineapple", calories:37}];
    */

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    //fruits.sort((a,b) => a.calories - b.calories); //NUMERIC
    //fruits.sort((a,b) => b.calories - a.calories); //REVERSE NUMERIC

    //const lowCalFruits = fruits.filter(fruit => fruit.calories<100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);


    /*import List from './List.jsx';

function App() {
  const fruits = [{id: 1, name:"apple", calories:95},
                    {id: 2, name:"coconut", calories:159},
                    {id: 3, name:"orange", calories:45},
                    {id: 4, name:"banana", calories:105},
                    {id: 5, name:"pineapple", calories:37}];

  const vegetables = [{id: 1, name:"potato", calories:95},
                    {id: 2, name:"carrot", calories:159},
                    {id: 3, name:"salad", calories:45},
                    {id: 4, name:"celery", calories:105},
                    {id: 5, name:"sweet potato", calories:37}];

  return(
    <>
      <List items = {fruits} itemType = "Fruits"/>
      <List items = {vegetables} itemType = "Vegetables"/>
    </>
  );
}

export default App
 */

    const listItems = itemList.map(fruit => <li key = {fruit.id}>
                                                        {fruit.name}: &nbsp; <b>{fruit.calories}</b>
                                                        </li>); 
    return(<><h3 className="list-category">{itemType}</h3><ol className="list-items">{listItems}</ol></>);
}
List.propTypes = {
    items : propTypes.arrayOf(shape({id: propTypes.number, name: propTypes.string, calories: propTypes.number})),
    itemType: propTypes.string
}
List.defaultProps = {
    itemType: "Category",
    items: []
}
export default List