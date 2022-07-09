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
import { useContext } from 'react';
import {MyContext} from "./App";
function Header(){
    let {items,totalitems} = useContext(MyContext);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="transparent">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button color="inherit"><ArrowBackIcon /> &nbsp;continue shopping</Button>
                        </Typography>
                        <Button color="inherit"><Badge badgeContent={items.length} color="error"><ShoppingCartIcon /></Badge></Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="mybox">
                <h1>shopping cart</h1>
                <span>you have <b>{totalitems}</b> items in shopping cart</span>
            </div>
        </>
    )
}
function Items({id,image,color,price,qty,title}){
    let {inc,dec,del} = useContext(MyContext);
    return <tr>
      <td><img src={`./images/${image}`} alt={title} /></td>
      <td><h3>{title}</h3> <span>{color}</span></td>
      <td>
        <Button color="inherit" onClick={() => dec(id)}><RemoveIcon /></Button>
        <input type="number" value={qty} className="qty" readOnly />
        <Button color="inherit" onClick={() => inc(id)}><AddIcon /></Button>
      </td>
      <td>{price}₹</td>
      <td><Button color="inherit" onClick={() => del(id)}><DeleteIcon color="error" /></Button></td>
    </tr>
}
export {Header,Items}