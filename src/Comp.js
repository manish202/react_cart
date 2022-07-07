import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
function Header({len}){
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button color="inherit"><ArrowBackIcon /> &nbsp;continue shopping</Button>
                        </Typography>
                        <Button color="inherit"><Badge badgeContent={len} color="error"><ShoppingCartIcon /></Badge></Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="mybox">
                <h1>shopping cart</h1>
                <span>you have <b>{len}</b> items in shopping cart</span>
            </div>
        </>
    )
}
function Items(obj){
    let {image,color,title,price,qty} = obj.val;
    let chapidata = obj.changer;
    let [num,setnum] = useState(qty);
    let [nprice,setprice] = useState(price*qty);
    function inc(){
        setnum(num = num+1);
        chapidata((old) => {
            old[obj.ind].qty = num;
            return [...old];
        });
        setprice(price*num);
    }
    function del(){
        chapidata((old) => {
            return old.filter((val,ind) => {
                return obj.ind !== ind;
            });
        });
    }
    function dec(){
        num-1 && setprice(nprice - price);
        num-1 && setnum(num = num-1);
        chapidata((old) => {
            old[obj.ind].qty = num;
            return [...old];
        });
    }
    return <tr>
      <td><img src={`./images/${image}`} alt={title} /></td>
      <td><h3>{title}</h3> <span>{color}</span></td>
      <td>
        <Button color="inherit" onClick={dec}><RemoveIcon /></Button>
        <input type="number" value={num} className="qty" readOnly />
        <Button color="inherit" onClick={inc}><AddIcon /></Button>
      </td>
      <td>{nprice}₹</td>
      <td><Button color="inherit" onClick={del}><DeleteIcon color="error" /></Button></td>
    </tr>
}
export {Header,Items}