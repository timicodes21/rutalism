"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/dashboardData";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

interface IProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const MobileSidebar = ({ open, setOpen }: IProps) => {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="absolute top-4 right-4 md:hidden z-50">
        <Button size="icon" variant="ghost">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64 p-4 flex flex-col">
        {/* Logo */}
        <div className="flex items-center space-x-2 font-bold text-lg mb-6">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center text-primary-foreground">
            B
          </div>
          <span>Brutalism</span>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto space-y-1">
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
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                          >
                            <Button
                              variant={childActive ? "default" : "ghost"}
                              className="w-full justify-start font-normal space-x-2"
                            >
                              {ChildIcon && (
                                <ChildIcon className="w-4 h-4 shrink-0" />
                              )}
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
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start font-normal space-x-2",
                    isActive && "bg-sidebar-accent hover:bg-gray-200"
                  )}
                >
                  {Icon && <Icon className="w-4 h-4 shrink-0" />}
                  <span>{link.name}</span>
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 p-4 border-t border-border">
          <div className="text-sm text-muted-foreground mb-2">
            Are you looking for more features? Check out our pro version!
          </div>
          <Button
            className="w-full bg-primary text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Upgrade Now
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
