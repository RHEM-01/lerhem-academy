import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BookOpen, Home, LayoutDashboardIcon, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/web/theme-toggle";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

interface iAppProps {
    name: string;
    email: string;
    image: string;
}

export function UserDropDown({name, email, image}: iAppProps) {
    const router = useRouter();
    
    async function sigOut() {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    // router.push("/login");
                    toast.success("Signed out successfully, and you are being redirected...")
                },  
                onError: () => {
                    toast.error("Failed to sign out, please try again...")
                }
            },
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src={image || "https://github.com/shadcn.png"} />
                    <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            >
                <DropdownMenuGroup>
                    <DropdownMenuLabel className="p-0 font-normal">
                        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                            <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarImage src={image || "https://github.com/shadcn.png"} alt={ name || email} />
                            <AvatarFallback className="rounded-lg">
                                {name}
                            </AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">
                                    {name}
                                </span>
                                <span className="text-muted-foreground truncate text-xs">
                                    {email}
                                </span>
                            </div>
                            <ThemeToggle />
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link href="/">
                            <Home size={16} className="opacity-60" aria-hidden="true" />
                            Home
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/courses">
                            <BookOpen size={16} className="opacity-60" aria-hidden="true" />
                            Courses
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/dashboard">
                            <LayoutDashboardIcon size={16} className="opacity-60" aria-hidden="true" />
                            Dashboard
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={sigOut} className="text-[#FE0101] dark:text-[#FE0101]" >
                        <LogOut color="#FE0101"/>
                        Sign out
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}