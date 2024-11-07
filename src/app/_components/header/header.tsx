"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const menuItems = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره‌های ری‌اکت و نکست", href: "/courses" },
  { title: "مطالب و مقالات", href: "/blog" },
];

export const Header: React.FC = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuState, setMenuState] = useState("closed");
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (menuState === "closed") {
      setMenuState("open");
      setIsMenuOpen(true);
    } else {
      setMenuState("closing");
      setTimeout(() => {
        setIsMenuOpen(false);
        setMenuState("closed");
      }, 300);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setMenuState("closing");
        setTimeout(() => {
          setIsMenuOpen(false);
          setMenuState("closed");
        }, 300);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b flex dark:border-base-content dark:border-opacity-5">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo-light.svg"
            width={100}
            height={36}
            alt="logo"
          />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <HiMenu size={24} />
          </button>
        </div>

        <ul className="hidden md:flex gap-8 mr-12">
          {menuItems.map((item) => {
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

        <span className="mr-auto">Auth</span>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 ">
          <div
            className="absolute inset-0 bg-black bg-opacity-30"
            onClick={() => {
              setMenuState("closing");
              setTimeout(() => {
                setIsMenuOpen(false);
                setMenuState("closed");
              }, 300);
            }}
          />
          <div
            ref={modalRef}
            className={`dark:bg-base-200 p-5 rounded shadow-lg w-64 h-full mobile-menu ${
              menuState === "open" ? "open" : "close"
            }`}
          >
            {" "}
            <div className="flex justify-between items-center py-3 border-b border-base-50 ">
              <h2 className="text-lg font-bold">انتخاب صفحه</h2>
              <button className="text-lg font-bold" onClick={toggleMenu}>
                <IoCloseOutline size={30} color="red" />
              </button>
            </div>
            <ul className="flex flex-col gap-4 py-4">
              {menuItems.map((item) => (
                <li key={`mobile-navigation-${item.href}`}>
                  <Link
                    className="py-2 text-black hover:text-blue-500"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
