import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Configuration from './Configuration';
import Costumers from './Costumers';
import Main from './Main';
import NotFound from './NotFound';
import Plans from './Plans';
import Products from './Products';
import Sales from './Sales';
import Store from './Store';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/main" />} />
        <Route path="config" element={<Configuration />} />
        <Route path="costumers" element={<Costumers />} />
        <Route path="main" element={<Main />} />
        <Route path="plans" element={<Plans />} />
        <Route path="products" element={<Products />} />
        <Route path="sales" element={<Sales />} />
        <Route path="stores" element={<Store />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Dashboard;
