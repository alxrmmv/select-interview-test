"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { icons } from "lucide-react";

const features: {
  title: string;
  icon: keyof typeof icons;
  href: string;
  description: string;
}[] = [
  {
    title: "Complete cost visibility",
    icon: "Search",
    href: "/",
    description: "Easily explore and monitor Snowflake usage",
  },
  {
    title: "Automated Savings",
    icon: "TrendingUp",
    href: "/",
    description: "Instantly save an average of 10-20% of your compute spend",
  },
  {
    title: "Rich integrations",
    icon: "Share2",
    href: "/",
    description: "Understand consumption from connected data tools",
  },
  {
    title: "Insights",
    icon: "Lightbulb",
    href: "/",
    description:
      "Save hours of work with intelligent optimization recommendations",
  },
  {
    title: "Comprehensive notifications",
    icon: "BellRing",
    href: "/",
    description:
      "Get notifications directly to Slack and Teams for peace of mind",
  },
  {
    title: "Flexible chargebacks and budgets",
    icon: "ChartPie",
    href: "/",
    description:
      "Allocate usage and set budgets for teams or projects by user, role and more",
  },
];

const resources: {
  title: string;
  icon: keyof typeof icons;
  href: string;
  description: string;
}[] = [
  {
    title: "Documentation",
    icon: "BookOpen",
    href: "/",
    description: "Learn how to setup and use SELECT",
  },
  {
    title: "Blog",
    icon: "Pencil",
    href: "/",
    description: "Read our latest Snowflake learnings",
  },
  {
    title: "Snowflake Developer Guide",
    icon: "Wrench",
    href: "/",
    description: "Learn how to build on Snowflake",
  },
  {
    title: "Changelog",
    icon: "List",
    href: "/",
    description: "Stay up to date with our latest features",
  },
  {
    title: "dbt-snowflake-monitoring",
    icon: "Search",
    href: "/",
    description: "Our open-source dbt package for Snowflake monitoring",
  },
  {
    title: "Customers",
    icon: "UserRound",
    href: "/",
    description: "Hear what our customers have to say about SELECT",
  },
];

function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-8">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {features.map((feature) => (
                <ListItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  href={feature.href}
                >
                  {feature.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "h-8")}
            >
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-8">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {resources.map((resource) => (
                <ListItem
                  key={resource.title}
                  title={resource.title}
                  icon={resource.icon}
                  href={resource.href}
                >
                  {resource.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "h-8")}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { icon?: keyof typeof icons }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-accent text-accent-foreground p-3">
              {icon && <Icon name={icon} />}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
