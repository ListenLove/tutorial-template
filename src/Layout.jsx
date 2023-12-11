import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from "react-router-dom";
import { routes } from './router';

// 根据路由生成菜单
const generateMenu = (rawRoute, parentPath) => {
  const tmpPath = parentPath ? `${parentPath}/${rawRoute.path || ""}` : rawRoute.path
  const path = tmpPath.replace(/\/+/g, "/")
  const RouteMenu = <Link to={path} key={path} className='text-black decoration-none'>
    <MenuItem >
      <ListItemText>{rawRoute.title}</ListItemText>
    </MenuItem>
  </Link>
  if (rawRoute.children) {
    return <div className='pl-2'>
      <Divider  />
        <MenuItem>
        <ListItemText>{rawRoute.title}</ListItemText>
      </MenuItem>
      <MenuList>
        {rawRoute.children.map((route) => {
        return generateMenu(route, path)
      })}
      </MenuList>
      <Divider  />
    </div>
  }
  return RouteMenu
}

export default function Layout() {

  return <div className='app-container flex p-2'>
    <div className='sidebar'>
      <Paper sx={{ width: 220, maxWidth: '100%' }}>
        {routes.map((route) => {
          return <Paper key={route.path}>
            {generateMenu(route)}
          </Paper>
        })}
    </Paper>
    </div>
    <div className='content flex-1 ml-5'>
      <Outlet />
    </div>
  </div>
}
