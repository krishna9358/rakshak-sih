"use client"
import { AppSidebar } from '@/components/dashboard/App-Sidebar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import React, { useState } from 'react'
import { items } from "@/config/data/sidebar";
import ResourceRecord from './resourceRecord/ResourceRecord'
import RepairReplacement from './repairReplacement/RepairReplacement'
import ResourceRequest from './resourceRequest/ResourceRequest'
import InterStationRecords from './interStationRecords/InterStationRecords'

export default function StationMainComponent() {
    const [selectedComponent, setSelectedComponent] = useState<string>("");

    const renderComponent = () => {
      switch (selectedComponent) {
        case "Resource Records":
          return <ResourceRecord/>;
        case "Repair & Replacement":
          return <RepairReplacement />;
        case "Resource Requests":
          return <ResourceRequest />;
        case "Inter-Station Records":
          return <InterStationRecords />;
        default:
          return <ResourceRecord/>;
      }
    };
  return (
    <div>
      <SidebarProvider>
        <AppSidebar
          items={items.stations}
          titles={items.titles.stations}
          user={items.user}
          onSelect={setSelectedComponent}
        />
        <SidebarInset className="">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">GP Store</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Home</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="gap-4 p-4 pt-0">{renderComponent()}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
