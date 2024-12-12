"use client";
import { useState } from "react";
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
import Barcode from "./barcode/Barcode";
import BudgetPrediction from "./bugdetPrediction/BudgetPrediction";
import StationRecord from "./stationRecord/StationRecord";
import ResourceAllocation from "./resourceAllocation/ResourceAllocation";
import RepairReplacement from "./repairReplacement/RepairReplacement";
import SelfInventory from "./self-Inventory/SelfInventory";
import PurchaseList from "./purchaselist/PurchaseList";
export default function GpsMainComponent() {
  const [selectedComponent, setSelectedComponent] = useState<string>("");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Barcode Code Generate":
        return <Barcode />;
      case "Budget Prediction":
        return <BudgetPrediction />;
      case "Station Record":
        return <StationRecord />;
      case "Item Distribution":
        return <ResourceAllocation />;
      case "Repair & Replacement":
        return <RepairReplacement />;
      case "Self Inventory":
        return <SelfInventory />;
      case "Purchase List":
        return <PurchaseList/>;
      default:
        return <Barcode />;
    }
  };

  return (
    <div>
      <SidebarProvider >
        <AppSidebar
          items={items.gps}
          titles={items.titles.gps}
          user={items.user}
          onSelect={setSelectedComponent}
        />
        {/* TODO: change color of main */}
        <SidebarInset className="bg-white">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1 text-[#563007]" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block text-[#563007]">
                    <BreadcrumbLink href="#">GP Store</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-[#563007]">Home</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#563007] rounded-md ml-auto ">
              <a href="https://rakshak-sih-hindi.vercel.app/gps" className="text-white">Hindi</a>
            </div>
          </header>
          <div className="gap-4 p-4 pt-0">{renderComponent()}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
