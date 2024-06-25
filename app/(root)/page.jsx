"use client";

import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Home = () => {
	const tasks = useQuery(api.task.get);

	return (
		<div className="mt-9  flex flex-col gap-9">
			z
			<section>
				<h1 className="text-20 font-bold  text-white">Trending Podcasts</h1>
				<main className="flex  flex-col items-center text-white justify-between ">
					{tasks?.map(({ _id, text }) => (
						<div key={_id}>{text}</div>
					))}
				</main>
				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
					{podcastData?.map(({ id, title, description, imgURL }) => (
						<PodcastCard
							key={id}
							imgURL={imgURL}
							title={title}
							description={description}
							podcastId={id}
						/>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
