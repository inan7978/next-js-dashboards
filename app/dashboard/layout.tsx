// Dashboards have some sort of navigation that is shared across multiple pages. In Next.js, you can use a special layout.tsx file to create UI that is shared between multiple pages.

//A few things are going on in this code, so let's break it down: First, you're importing the <SideNav /> component into your layout. Any components you import into this file will be part of the layout.The <Layout /> component receives a children prop. This child can either be a page or another layout.

// In your case, the pages inside /dashboard will automatically be nested inside a <Layout />
import SideNav from "@/app/ui/dashboard/sidenav";

export const experimental_ppr = true; // PPR will allow the static parts of website to load asap in production making the app appear faster to the user
// using Suspense allows very minimal changes to code and that is enough for the app to know which routes are static and dynamic

export default function Layout({ children }: { children: React.ReactNode }) {
  // ^^ this is just specifying that children is a property of the props object, and its type is React.ReactNode
  // equivalent to Layout({children}) in JS syntax
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
