import { Button } from "@/components/ui/button";
import Logo from "@/components/site/logo";
import Navbar from "@/components/site/navbar";
import BookDemoButton from "./book-demo-button";

function Header() {
  return (
    <header className="container mx-auto ">
      <div className="flex items-center justify-between border border-border rounded-md py-3 px-4 my-4">
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
