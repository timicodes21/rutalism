"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/dashboardData";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border hidden md:flex flex-col h-screen p-4">
      {/* Logo */}
      <div className="flex items-center space-x-2 font-bold text-lg mb-6">
        <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground">
          B
        </div>
        <span>rutalism</span>
      </div>

      {/* Scrollable nav */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full pr-2 space-y-1">
          {navLinks.map(link => {
            const isActive = pathname === link.href;

            if (link.children) {
              return (
                <Accordion key={link.name} type="single" collapsible>
                  <AccordionItem value={link.name}>
                    <AccordionTrigger className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-gray-200">
                      <div className="flex items-center space-x-2">
                        {link.icon && <link.icon className="w-4 h-4" />}
                        <span>{link.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-6 space-y-1">
                      {link.children.map(child => {
                        const childActive = pathname === child.href;
                        const ChildIcon = child?.icon;
                        return (
                          <Link key={child.href} href={child.href}>
                            <Button
                              variant={childActive ? "default" : "ghost"}
                              className="w-full justify-start font-normal space-x-2"
                            >
                              {ChildIcon && <ChildIcon className="w-4 h-4" />}
                              <span>{child.name}</span>
                            </Button>
                          </Link>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            }

            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start font-normal space-x-2 hover:bg-gray-200"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{link.name}</span>
                </Button>
              </Link>
            );
          })}
        </ScrollArea>
      </div>

      {/* Footer */}
      <div className="mt-6 p-4 border-t border-border">
        <div className="text-sm text-muted-foreground mb-2">
          Are you looking for more features? Check out our pro version!
        </div>
        <Button className="w-full bg-primary text-primary-foreground">
          Upgrade Now
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
