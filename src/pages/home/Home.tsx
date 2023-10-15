import { Button } from "@/components/ui/button";
import { ChevronsRight, Palette, SunDim, Moon, MonitorDot } from "lucide-react";
import { Link } from "react-router-dom";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/Theme";

export const Home = () => {
	const { toggleTheme } = useTheme();
	return (
		<>
			<header className="fixed w-full">
				<div className="container mx-auto p-3 flex items-center justify-between lg:p-5">
					<h1 className="text-xl font-bold">Atlas chat</h1>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Palette />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>Theme</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem
								onClick={() => {
									toggleTheme("light");
								}}
								className="gap-3 hover:cursor-pointer"
							>
								<SunDim size={16} /> Light
							</DropdownMenuItem>
							<DropdownMenuItem
								className="gap-3 hover:cursor-pointer"
								onClick={() => {
									toggleTheme("dark");
								}}
							>
								<Moon size={16} /> Dark
							</DropdownMenuItem>
							<DropdownMenuItem
								className="gap-3 hover:cursor-pointer"
								onClick={() => {
									toggleTheme("system");
								}}
							>
								<MonitorDot size={16} /> System
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
			<main>
				<section className="text-center p-5 h-screen flex flex-col items-center justify-center gap-3 container max-w-sm md:flex-row-reverse md:text-left md:max-w-none md:gap-5 md:h-[80vh] lg:gap-8 xl:gap-28">
					<img src="/icon.png" alt="Atlas" className="md:max-w-xs" />
					<div className="space-y-3 md:max-w-xs lg:max-w-md xl:max-w-lg">
						<h2 className="text-3xl font-black bg-brand-gradient text-transparent bg-clip-text lg:text-4xl xl:text-5xl">
							Connect with friends, colleagues, and loved ones effortlessly.
						</h2>
						<p className="px-3 md:p-0">
							Enjoy real-time messaging, file sharing, and group chats. Stay
							connected, anytime, anywhere.
						</p>
						<div className="space-x-3 pt-1">
							<Link to="">
								<Button variant="brand">Get Started</Button>
							</Link>
							<Link to="">
								<Button variant="outline" className="gap-2">
									Create Account <ChevronsRight />
								</Button>
							</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};
