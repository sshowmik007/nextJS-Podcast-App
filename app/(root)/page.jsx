import PodcastCard from "@/components/PodcastCard";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";
import React from "react";

const Home = () => {
	return (
		<div className="mt-9  flex flex-col gap-9">
			<section>
				<h1 className="text-20 font-bold  ">Trending Podcasts</h1>

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
