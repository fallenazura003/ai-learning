import React from 'react'
import {SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar'
import AppSidebar from "@/app/workspace/_components/AppSidebar";

function WorkspaceProvider({children}) {
    return (

        <SidebarProvider>
            <SidebarTrigger/>
            <AppSidebar/>
            <div>{children}</div>
        </SidebarProvider>
    )
}

export default WorkspaceProvider;