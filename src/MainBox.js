import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useContext } from 'react';
import {Header,Items} from "./Comp";
import {MyContext} from "./App";
function MainBox(){
    let {items,totalamount,delall} = useContext(MyContext);
    return <Container maxWidth="lg">
              <Header />
              <div className="tb-wrapper">
                <table>
                  <tbody>
                    {items.length !== 0 ? items.map((val) => { return <Items key={val.id} {...val} />}):<tr><td colSpan="5">no data found</td></tr>}
                  </tbody>
                </table>
              </div>
              <div className="right">
                <p>card total: <b>{totalamount}₹</b></p>
                <Button variant="outlined" color="success">checkout</Button>
                <Button variant="outlined" color="error" onClick={delall}>clear all</Button>
              </div>
            </Container>
}
export default MainBox;