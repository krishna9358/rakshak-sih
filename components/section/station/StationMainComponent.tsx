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
import Home from './home/Home'

export default function StationMainComponent() {
    const [selectedComponent, setSelectedComponent] = useState<string>("");

    const renderComponent = () => {
      switch (selectedComponent) {
        case "Home":
          return <Home/>;
        case "Resource Records":
          return <ResourceRecord/>;
        case "Repair & Replacement":
          return <RepairReplacement />;
        case "Resource Requests":
          return <ResourceRequest />;
        case "Inter-Station Records":
          return <InterStationRecords />;
        default:
          return <Home />;
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
        <SidebarInset className="bg-white">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1 text-[#563007]" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#" className='text-[#563007]'>Station</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className='text-[#563007]'>Home</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#563007] rounded-md ml-auto ">
              <a href="https://rakshak-sih-hindi.vercel.app/station" className="text-white">Hindi</a>
            </div>
          </header>
          <div className="gap-4 p-4 pt-0">{renderComponent()}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
