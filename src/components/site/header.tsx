import { Button } from "@/components/ui/button";
import Logo from "@/components/site/logo";
import Navbar from "@/components/site/navbar";
import BookDemoButton from "./book-demo-button";

function Header() {
  return (
    <header className="container mx-auto px-20 sticky top-0 z-50 pt-4 bg-background ">
      <div className="flex items-center justify-between border border-border rounded-md py-3 px-4 shadow-[rgba(0,0,0,0.7)_0px_5px_10px_0px]">
        <Logo />
        <Navbar />
        <div className="flex items-center gap-2">
          <Button variant="link" className="h-8 text-primary-foreground">
            Login
          </Button>
          <BookDemoButton size="sm" />
        </div>
      </div>
    </header>
  );
}

export default Header;
