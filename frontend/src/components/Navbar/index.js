import React from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const Navbar = () => {
  return (
    <Sidebar aria-label="Default sidebar example" className="bg-yellow-600 text-white">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
            className="hover:bg-yellow-400"
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiViewBoards}
            label="Pro"
            labelColor="dark"
            className="hover:bg-yellow-400"
          >
            Tours
          </Sidebar.Item>
          
          <Sidebar.Item
            href="#"
            icon={HiUser}
            className="hover:bg-yellow-400"
          >
            Users
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiUser}
            className="hover:bg-yellow-400"
          >
            Guides
          </Sidebar.Item>

          <Sidebar.Item
            href="#"
            icon={HiShoppingBag}
            className="hover:bg-yellow-400"
          >
            Reports Generated
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default Navbar;
