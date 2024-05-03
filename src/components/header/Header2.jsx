import { Container, InputBase, useTheme } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import { ExpandMore } from "@mui/icons-material";


const Search = styled('div')(({ theme }) => ({
  flexGrow: 0.4,
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  miwidth: '277px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '330',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: "#777",
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const options = [
  'All Categories',
  'Car',
  'Clothes',
  'Electronics',
];


const Header2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  return (

      <Container sx={{ my: 3, justifyContent: "space-between"}}>
  
        <Search sx={{ borderRadius: "25px", display: "flex", justifyContent: "space-between" }}>
          <SearchIconWrapper>
            <SearchIcon />  
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
  
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                bgcolor: theme.palette.myColor.main,
                borderTopRightRadius: "25px",
                borderBottomRightRadius: "25px",
                p: "0",
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                  sx={{
                    width: 95, textAlign: "center",
                    "&:hover": {
                      cursor: "pointer",
  
                    }
                  }}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
            </List>
            <Menu
  
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'lock-button',
                role: 'listbox',
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                  sx={{ fontSize: "15px" }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
  
        </Search>
  
  
      </Container>

  )
}

export default Header2;