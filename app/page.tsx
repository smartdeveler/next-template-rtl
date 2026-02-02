
import { ModeToggle } from "@/components/mode-toggle";
import { ExampleCardHebrew } from "@/components/example-card-hebrew";
import { ExampleFormArabic } from "@/components/example-form-arabic";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col p-6">
      <header className="flex justify-end p-4">
        <ModeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-12 items-start max-w-3xl mx-auto w-full">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="ghost" className="lg:hidden mr-auto">
              <Menu />
            </Button>
          </DrawerTrigger>

          <DrawerContent className=" rounded-none p-0  " dir={"rtl"}>
            <DrawerHeader>
              <DrawerTitle className="flex  justify-centerّ" />
              <DrawerDescription>تحولی در کسب و کار</DrawerDescription>
            </DrawerHeader>

            <HeaderMenuMobile className="mt-3" />
          </DrawerContent>
        </Drawer>
        </div>
      </main>
    </div>
  );
}