"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const PodcastCard = ({ imgURL, title, description, podcastId }) => {
	const router = useRouter();

	const handleViews = () => {
		// increase views
		router.push(`/podcasts/${podcastId}`, {
			scroll: true,
		});
	};

	return (
		<Card className="cursor-pointer" onClick={handleViews}>
			<CardHeader className="p-0">
				<Image
					src={imgURL}
					width={174}
					height={174}
					alt={title}
					className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
				/>
			</CardHeader>
			<CardContent className="flex flex-col gap-2 p-4">
				<CardTitle className="text-16 truncate font-bold">{title}</CardTitle>
				<CardDescription className="text-12 truncate font-normal capitalize">
					{description}
				</CardDescription>
			</CardContent>
		</Card>
	);
};

export default PodcastCard;
