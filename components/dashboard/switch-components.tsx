// import React from "react";
// import { items } from "@/config/data/sidebar";
// import Credentials from "@/components/department-modules/credentials";
// import Budget from "@/components/department-modules/budget";
// import DepartmentInventory from "@/components/department-modules/inventory";
// import StationRecord from "@/components/department-modules/station-record";
// import AuditPage from "@/components/department-modules/audit-info";
// import ResourceRequestPage from "@/components/department-modules/resource-request";
// import StaffDetailsPage from "@/components/department-modules/staff-details";
// import ResourceAllocation from "@/components/department-modules/resource-allocation";

// const Budget = () => <Budget />;
// const Inventory = () => <DepartmentInventory />;
// const StationRecord = () => <StationRecord />;
// const Audit = () => <AuditPage />;
// const ResourceRequest = () => <ResourceRequestPage />;
// const StaffDetail = () => <StaffDetailsPage />;
// const ResourceAllocation = () => <ResourceAllocation />;

// const ComponentSwitcher = ({ componentType }) => {
//   let renderedComponent;

//   switch (componentType) {
//     case "credentials":
//       renderedComponent = <Credentials />;
//       break;
//     case "audit":
//       renderedComponent = <Audit />;
//       break;
//     case "budget":
//       renderedComponent = <Budget />;
//       break;
//     case "inventory":
//       renderedComponent = <Inventory />;
//       break;
//     case "resourceAllocation":
//       renderedComponent = <ResourceAllocation />;
//       break;
//     case "resourceRequest":
//       renderedComponent = <ResourceRequest />;
//       break;
//     case "staffDetail":
//       renderedComponent = <StaffDetail />;
//       break;
//     case "stationRecord":
//       renderedComponent = <StationRecord />;
//       break;
//     default:
//       renderedComponent = <Credentials />;
//       break;
//   }

//   return <div>{renderedComponent}</div>;
// };

// const ActiveComponent = () => {
//   const componentType = "credentials";
//   return (
//     <div>
//       <ComponentSwitcher componentType={componentType} />
//     </div>
//   );
// };

// export default ActiveComponent;
