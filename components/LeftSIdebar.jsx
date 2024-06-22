"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftSidebar = () => {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<div className="grid min-h-screen  md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
			<div className="hidden border-r bg-muted/5 md:block">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
						<Link href="/" className="flex items-center gap-2 font-semibold">
							<Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
							<h1 className="text-24 font-extrabold text-white max-lg:hidden">
								Podcastr
							</h1>
						</Link>
					</div>
					<div className="flex-1">
						<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
							{sidebarLinks.map(({ route, label, imgURL: Icon }) => {
								const isActive =
									pathname === route || pathname.startsWith(`${route}/`);
								return (
									<Link
										href={route}
										key={label}
										className={cn(
											"flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-secondary",
											{
												"bg-muted text-primary hover:text-primary": isActive,
											}
										)}
									>
										<Icon className="h-4 w-4" alt={label} />
										{label}
									</Link>
								);
							})}
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSidebar;
