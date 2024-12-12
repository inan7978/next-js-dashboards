// loading.tsx is a special Next.js file that shows while the main page.tsx is loading
// sideNav is static which is why it shows immediately

import DashboardSkeleton from "../ui/skeletons";
export default function Loading() {
  return <DashboardSkeleton />;
}
