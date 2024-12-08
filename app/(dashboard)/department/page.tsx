import {
  Breadcrumb,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbLink,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/App-Sidebar";
import { items } from "@/config/data/sidebar";

// import ActiveComponent from "@/components/dashboard/switch-components";
import Credentials from "@/components/department-modules/credentials";
import Budget from "@/components/department-modules/budget";
import DepartmentInventory from "@/components/department-modules/inventory";
import StationRecord from "@/components/department-modules/station-record";
import AuditPage from "@/components/department-modules/audit-info";
import ResourceRequestPage from "@/components/department-modules/resource-request";
import StaffDetailsPage from "@/components/department-modules/staff-details";
import ResourceAllocation from "@/components/department-modules/resource-allocation";

// import Credentials from "@/components/department_new/credentials";
import Inventory from "@/components/department_new/inventory";
import GpsRecord from "@/components/department_new/gps_record";
import GpsBudgetAllocation from "@/components/department_new/budget_allocation";
export default function Department() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar
          items={items.department}
          titles={items.titles.department}
          user={items.user}
        />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Department</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Home</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          {}
          {/* <Credentials />
          <Budget />
          <DepartmentInventory />
          <StationRecord />
          <AuditPage />
          <ResourceRequestPage />
          <StaffDetailsPage />
          <ResourceAllocation /> */}
          {/* <ActivePage /> */}
          {/* <GpsRecord /> */}
          {/* <GpsRecord /> */}
          {/* <Inventory /> */}
          {/* <Credentials /> */}
          <GpsBudgetAllocation />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
