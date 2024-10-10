import React from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { selectCars } from '../features/carSlice/car';
import { useSelector } from 'react-redux';



function Header() {
    const[burger, setBurger] = useState(false);
    const cars = useSelector(selectCars)
    console.log(cars);
    return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
          <a key = {index} href = "#">{car}</a>
        ))}
        
      </Menu>

      <RightMenu>
      <a href = "#">Shop</a>
      <a href = "#">Tesla Account</a>
      <CustomMenu onClick={()=>setBurger(true)} />
      </RightMenu>
      <BurgerNav show={burger}>
        <CloseWrapper>
        <CustomClose onClick={() => setBurger(false)} />

        </CloseWrapper>
        {cars && cars.map((car,index)=>(
          <li key = {index}><a href="#">{car}</a></li>
        ))}
        
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-inn</a></li>
        <li><a href="#">Cyber Truck</a></li>
        <li><a href="#">Roadaster </a></li>
      
      </BurgerNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width: 768px) {
      display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
     a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    
    }
`

const CustomMenu = styled(MenuOutlinedIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start; 
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            font-weight: 600;
        }
    }
`;



const CustomClose = styled(CloseIcon)`

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`