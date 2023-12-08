// import {
//   FaTachometerAlt,
//   FaRegSun,
//   FaChevronRight,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="flex bg-logo px-[25px] h-fullq rounded-lg">
//       <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
//         <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
//           Admin panel
//         </h1>
//       </div>
//       <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer">
//         <FaTachometerAlt color="white" />
//         <p className="text-[14px] leading-[20px] font-bold text-white">
//           <Link to="/dashboard">Dashboard</Link>
//         </p>
//       </div>
//       <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
//         <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
//           {" "}
//           INTERFACE
//         </p>

//         <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
//           <div className="flex items-center gap-[10px]">
//             <FaRegSun color="white" />{" "}
//             <p className="text-[14px] leading-[20px] font-normal text-white">
//               <Link to="/admin/dashboard/area ">Areas</Link>
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
//           <div className="flex items-center gap-[10px]">
//             <FaRegSun color="white" />{" "}
//             <p className="text-[14px] leading-[20px] font-normal text-white">
//               <Link to="/admin/dashboard/asamblea ">Asamblea</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
//         <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
//           {" "}
//           ADDONS
//         </p>
//         <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
//           <FaChevronRight color="white" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


'use client';
import { Link } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

const Sidebad =() =>{
  return (
    <Sidebar className="bg-logo mb-2  px-[25px] h-fullq rounded-lg" aria-label="Sidebar with content separator example">
      <Sidebar.Items > 
        <Sidebar.ItemGroup >
          <Sidebar.Item  className='hover:bg-sky-700'href="admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item icon={HiViewBoards}>
          <Link to="/admin/dashboard/area ">Areas</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
export default Sidebad;
