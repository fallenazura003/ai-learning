"use client"
import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupContent,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Book, Compass, LayoutDashboard, PencilRulerIcon, UserCircle2Icon, WalletCards} from "lucide-react";
import {usePathname} from "next/navigation";

const SidebarOptions = [{
    title: "Bảng điều khiển",
    icon: LayoutDashboard,
    path: "/workspace",
},
    {
        title: "Khóa học của tôi",
        icon: Book,
        path: "/workspace/my-courses"
    },
    {
        title: "Khám phá",
        icon: Compass,
        path: "/workspace/explore"
    },
    {
        title: "Trợ lý AI",
        icon: PencilRulerIcon,
        path: "/workspace/ai-tool"
    },
    {
        title: "Nâng cấp",
        icon: WalletCards,
        path: "/workspace/billing"
    },
    {
        title: "Tài khoản",
        icon: UserCircle2Icon,
        path: "/workspace/profile"
    }
]

function AppSidebar() {
    const path =usePathname();
    return (
        <Sidebar>
            <SidebarHeader className="p-4"/>
            <Image src={'/logo.svg'} alt="logo" width={40} height={40}/>
            <SidebarContent>
                <SidebarGroup/>
                <Button>Tạo khóa học mới</Button>
                <SidebarGroup/>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SidebarOptions.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild className={"p-5"}>
                                        <Link href={item.path} className={`'text-17px'
                                        ${path.includes(item.path)&&'text-primary bg-gray-400'}`}>
                                            <item.icon className={"h-7 w-7"}/>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter/>
        </Sidebar>
    )
}

export default AppSidebar