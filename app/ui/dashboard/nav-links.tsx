// React's "use client" directive (implemented below) will allow you to turn this file into a Client Component.
// this is necessary for the usePathname() hook

"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

// using the <Link> component instead of <a> to navigate between pages allows navigation WITHOUT a full site reload.
// SPA (single Page Apps) typically load every part of web app at once, but using <Link> auto splits your app into route segments.
// This means that it can isolate pages from the entire app and not break the whole app if one page has an issue
// Further, in production, when <Link> component appears in thge browsers viewport, Next.Js automatically prefetches the
// code for the linked route in the background. Essentially making page transitions nearly instant
export default function NavLinks() {
  // pathname is assigned to the pathname variable below
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                // the pathname is recieved from the usePathname() hook and the link.href is from the user defined list of links that is being mapped
                // the clsx syntax is basically clsx() and in the parenthesis you put whatever styels you want and separate conditional values with a comma as seen below with : acting as aa condition checker
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
