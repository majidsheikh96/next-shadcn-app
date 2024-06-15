import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CheckCircle,
  CircleUser,
  CreditCard,
  DollarSign,
  Eye,
  EyeIcon,
  MailIcon,
  Menu,
  Package2,
  PaperclipIcon,
  Search,
  Slash,
  TextIcon,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center border-b bg-background px-4 md:px-6">
        <div className="flex w-full justify-between items-center">
          <div className="hidden md:flex items-center gap-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">My Workspace</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">
                    My new form
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <nav className="hidden md:flex gap-6 text-lg font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 mx-auto">
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Create
            </Link>
            <Link
              href="#"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Connect
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Share
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Results
            </Link>
          </nav>
          <div className="flex items-center gap-4 justify-between w-full md:w-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  <Link href="#" className="hover:text-foreground">
                    Dashboard
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Orders
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Products
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Customers
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Analytics
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
              <Button variant="outline" size="icon">
                <Eye className="h-4 w-4" />
              </Button>
              <Button>Publish</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 max-w-full mx-auto">
        <div className="w-full md:hidden items-start gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">My Workspace</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">My new form</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <form className="w-full flex justify-center">
          <div className="relative w-full max-w-6xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search integrations"
              className="pl-10 w-full"
            />
          </div>
        </form>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-1 xl:grid-cols-1 w-full max-w-6xl">
          <Card className="flex items-center justify-between p-8 border rounded-lg">
            <div className="flex items-center gap-4">
              <MailIcon className="h-10 w-10" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground">
                  Receive an email every time a user submits their answer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-green-100/50 px-3 py-1 rounded-full">
              <span className="text-sm text-green-500">Active</span>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </div>
          </Card>
          <Card className="flex items-center justify-between p-8 border rounded-lg">
            <div className="flex items-center gap-4">
              <TextIcon className="h-10 w-10" />
              <div>
                <h3 className="text-lg font-semibold">Google Sheets</h3>
                <p className="text-sm text-muted-foreground">
                  Send your data straight to Google Sheets. Automatically syncs
                  as results come in.
                </p>
              </div>
            </div>
            <Button className="ml-auto">Connect</Button>
          </Card>
          <Card className="flex items-center justify-between p-8 border rounded-lg">
            <div className="flex items-center gap-4">
              <PaperclipIcon className="h-10 w-10" />
              <div>
                <h3 className="text-lg font-semibold">Excel</h3>
                <p className="text-sm text-muted-foreground">
                  Send your typeform responses to Excel Online. Turn feedback
                  into graphs, support queries into workflows, and much more.
                </p>
              </div>
            </div>
            <Button className="ml-auto">Connect</Button>
          </Card>
        </div>
      </main>
    </div>
  );
}
