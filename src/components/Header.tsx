
import { DarkThemeToggle, Navbar } from "flowbite-react";

export function Header() {
  return (
    <Navbar fluid rounded className=" bg-slate-100  dark:bg-slate-950">
      <Navbar.Brand  href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Logging</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="#">
          Log
        </Navbar.Link>
        <Navbar.Link href="#">Todo</Navbar.Link>
        <Navbar.Link href="#">Goals</Navbar.Link>
        <Navbar.Link href="#">Finance</Navbar.Link>
      </Navbar.Collapse>
      <DarkThemeToggle/>
    </Navbar>
  );
}
