
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function HeaderMenuMobile({ className }: { className?: string }) {
  return (
    <nav className={className}>
      <ul className="flex flex-col gap-2 px-4">
        <li className="py-2 border-b border-border">خانه</li>
        <li className="py-2 border-b border-border">درباره ما</li>
        <li className="py-2 border-b border-border">خدمات</li>
        <li className="py-2">تماس با ما</li>
      </ul>
    </nav>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col p-6">
      <header className="flex justify-end p-4">
        <ModeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="ghost" className="lg:hidden mr-auto">
              <MenuIcon />
            </Button>
          </DrawerTrigger>

          <DrawerContent className="rounded-none p-0" dir="rtl">
            <DrawerHeader>
              <DrawerTitle className="flex justify-center" />
              <DrawerDescription>تحولی در کسب و کار</DrawerDescription>
            </DrawerHeader>

            <HeaderMenuMobile className="mt-3" />
          </DrawerContent>
        </Drawer>
      </main>
    </div>
  );
}
