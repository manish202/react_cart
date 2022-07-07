import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import data from "./ApiData";
import {useState} from "react";
import {Header,Items} from "./Comp";
function App(){
  let [apidata,chapidata] = useState(data);
  let len = apidata.length;
  let arr = [];
  for(let val of apidata){
    arr.push(val.price * val.qty);
  }
  let total = arr.reduce((a,b) => a + b,0);
    return <Container maxWidth="lg">
            <Header len={len} />
            <div className="tb-wrapper">
              <table>
                <tbody>
                  {len !== 0 ? apidata.map((val,ind) => { return <Items key={val.id} ind={ind} changer={chapidata} val={val} />}):<tr><td colSpan="5">no data found</td></tr>}
                </tbody>
              </table>
            </div>
            <div className="right">
              <p>card total: <b>{total}₹</b></p>
              <Button variant="contained" onClick={() => {console.log(apidata)}}>checkout</Button>
            </div>
          </Container>
}
export default App;