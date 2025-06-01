"use client";

import {
  Home,
  User,
  FileText,
  BarChart3,
  MessageCircleQuestion,
  LogOut,
  Link,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const NavLink = ({
    to,
    icon,
    label,
    handleClick,
  }: {
    to?: string;
    icon: React.ReactNode;
    label: string;
    handleClick?: () => void;
  }) => {
    const isActive = pathname === to;
    return (
      <a
        onClick={handleClick ? handleClick : () => router.push(to ?? "/")}
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors cursor-default",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-gray-700 hover:bg-secondary hover:text-primary font-medium"
        )}
      >
        {icon}
        {!isCollapsed && <span>{label}</span>}
      </a>
    );
  };

  // Helper function to safely get logo URL
  // const getLogoUrl = () => {
  //   if (!clinic?.logo) return null;
  //   return clinic.logo;
  // };

  return (
    <div
      className={cn(
        "flex flex-col min-h-screen border-r bg-white p-4 shadow-sm transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-clinitt-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="font-bold text-clinitt-primary text-lg">
                Clinitt.ai
              </h1>
              <p className="text-sm text-gray-500">Admin Dashboard</p>
            </div>
          )}

          {/* <Button
            variant="default"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`h-8 w-8 ${isCollapsed && "z-50"} `}
          >
            {isCollapsed ? "→" : "←"}
          </Button> */}
        </div>
      </div>
      <div className="flex items-center justify-between pb-6"></div>

      <nav className="flex flex-1 flex-col  gap-2 ">
        <NavLink to="/user" icon={<Home size={20} />} label="users" />

        <NavLink to="/link" icon={<Link size={20} />} label="link" />
      </nav>

      <div className="space-y-2 mt-2 ">
        <div className="mt-auto pt-2 border-t">
          <Button
            variant="ghost"
            className={cn(
              "flex w-full items-center justify-start gap-3 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-50 hover:text-red-600 cursor-pointer",
              isCollapsed && "justify-center"
            )}
            //   onClick={() => logout(router)}
          >
            <LogOut size={20} />
            {!isCollapsed && <span>Sair</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};
