
import itemDetails from '../components/views/itemDetails'
import test from '../components/views/test'

import Inventory from "../components/views/Inventory";
export const routes = [
    { path: '',
        component: Inventory },
    { path: '/item/:id',
        component: itemDetails },
    { path: '/test',
        component: test },
]