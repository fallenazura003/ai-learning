import React from 'react'
import {SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar'
import AppSidebar from "@/app/workspace/_components/AppSidebar";
import AppHeader from "@/app/workspace/_components/AppHeader";

function WorkspaceProvider({children}) {
    return (

        <SidebarProvider>
            <AppSidebar/>
            <div className={"w-full"}>
            <AppHeader/>
            {children}</div>
        </SidebarProvider>
    )
}

export default WorkspaceProvider;