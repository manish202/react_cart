import MainBox from "./MainBox";
import data from "./ApiData";
import {useReducer,createContext, useEffect} from "react";
export let MyContext = createContext();
function App(){
  let initialstate = {
    items: data,
    totalitems: 0,
    totalamount: 0
  };
  const reducer = (states,action) => {
    switch(action.type){
      case "INCREMENT":
        let nvalue = states.items.map((val) => {
          return val.id === action.id ? {...val,qty: val.qty + 1} : val;
        })
        return {...states,items: nvalue}
      case "DECREMENT":
        let nvalue2 = states.items.map((val) => {
          return val.id === action.id ? {...val,qty: val.qty - 1} : val;
        }).filter((val) => {
          return val.qty !== 0;
        })
        return {...states,items: nvalue2}
      case "DELETE":
        let nvalue3 = states.items.filter((val) => {
          return val.id !== action.id;
        })
        return {...states,items: nvalue3}
      case "DELALL":
        return {...states,items: []}
      case "GET_TOTAL":
        let {totalitems,totalamount} = states.items.reduce((prev,current) => {
          let {qty,price} = current;
          prev.totalitems += qty;
          prev.totalamount += qty * price;
          return prev;
        },{totalitems:0,totalamount:0});
        return {...states,totalitems,totalamount}
      default:
        return states;
    }
  }
  let [state,dispatch] = useReducer(reducer,initialstate);
  useEffect(() => {
    dispatch({type:"GET_TOTAL"});
  },[state.items]);
  function inc(id){
    dispatch({
      type: "INCREMENT",
      id:id
    });
  }
  function dec(id){
    dispatch({
      type: "DECREMENT",
      id:id
    });
  }
  function del(id){
    dispatch({
      type: "DELETE",
      id:id
    });
  }
  function delall(){dispatch({type:"DELALL"})}
    return <MyContext.Provider value={{...state,inc,dec,del,delall}}>
      <MainBox />
    </MyContext.Provider>
}
export default App;