"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItem: NavigationMenuItem[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "دوره های ریکت و نکست",
    href: "/courses",
  },
  {
    title: "مطالب و مقالات",
    href: "/blog",
  },
];

export const TopNavigation: React.FC = () => {
  const pathName = usePathname();
  return (
    <ul className="flex gap-8 mr-12">
      {menuItem.map((item) => {
        const isActive = pathName === item.href;
        return (
          <li key={`navigation-${item.href}`}>
            <Link
              className={`dark:hover:text-primary transition-colors pb-2 ${
                isActive &&
                "border-b-2 dark:text-primary dark:border-primary/30"
              }`}
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
