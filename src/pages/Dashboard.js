import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import { FaPlusCircle } from "react-icons/fa";

import { earningData } from "../data/Data";
import { useStateContext } from "../contexts/ContextProvider";

import { events } from '../data/events'

const Dashboard = () => {
	const { token, setAdminData, adminData } = useStateContext();

	const myHeaders = new Headers();
	myHeaders.append("Authorization", token);

	const requestOptions = {
		method: "POST",
		headers: myHeaders,
		redirect: "follow",
	};

	useEffect(() => {
		fetch("https://evento-apis.herokuapp.com/user/profile", requestOptions)
			.then((response) => response.json())
			.then((result) => setAdminData(result))
			.catch((error) => {
				console.log(error);
			});
	});

	return adminData ? (
		<div className="mt-20 md:mt-12">
			<div className="w-full flex justify-end items-end px-4 md:px-8">
				<Link to="/create-event">
					<button
						type="button"
						className="flex items-center justify-center gap-3 bg-white text-gray-800 rounded-2xl text-lg font-medium py-4 px-12 hover:drop-shadow-xl"
					>
						<FaPlusCircle />
						Create Event
					</button>
				</Link>
			</div>
			<div className="flex flex-wrap lg:flexs-nowrap justify-center">
				<div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
					<div className="flex justify-between items-center">
						<div>
							<p className="font-bold text-gray-400">Total Events</p>
							<p className="text-2xl font-medium">
								{events?.length || 0}
							</p>
						</div>
					</div>
				</div>
				{/* Cards */}
				<div className="flex m-3 flex-wrap justify-center gap-1 items-center">
					{earningData.map((item) => (
						<div
							key={item.title}
							className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
						>
							<button
								type="button"
								style={{
									color: item.iconColor,
									backgroundColor: item.iconBg,
								}}
								className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
							>
								{item.icon}
							</button>
							<p className="mt-3">
								<span className="text-lg font-semibold">{item.amount}</span>
							</p>
							<p className="text-gray-400 text-sm mt-1">{item.title}</p>
						</div>
					))}
				</div>
			</div>
			<div className="flex gap-8 flex-wrap justify-center">
				<div className="bg-white dark:text-gray-400 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
					<div className="flex justify-between">
						<p className="text-core font-medium md:text-xl font-semibold">
							{" "}
							Events at a glance
						</p>
						<div className="flex items-center gap-4">
							<p className="text-sm md:text-core flex items-center gap-2 hover:drop-shadow-xl text-gray-600">
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Physical</span>
							</p>
							<p className="text-sm md:text-core flex items-center gap-2 hover:drop-shadow-xl text-green-400">
								<span>
									<GoPrimitiveDot />
								</span>
								<span>Virtual</span>
							</p>
						</div>
					</div>
          <div className="flex flex-wrap gap-4">
					{events?.map((event, index) => (
						<div
							key={index}
							className="mt-20 flex cursor-pointer bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full md:w-56 p-0 pb-4 rounded-2xl"
						>
							<Link to={"/event/" + event.id}>
								<div className="w-full h-40 md:h-32 mb-6">
									<img
										src={
											event?.eventImage ||
											"https://1dhtiq2hme231m0xvc3fd4es-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/2017-08-24-at-13-19-01-1.jpg"
										}
										alt={event.eventName}
										className="w-full rounded-t-2xl h-full"
									/>
								</div>
								<div className="text-left ml-2">
									<p className="font-medium text-lg">{event.eventName}</p>
									<p className="mb-6 text-gray-400 text-sm font-medium">
										{event.eventDate}
									</p>
									<p className="font-medium">{event.eventLocation}</p>
								</div>
							</Link>
						</div>
					)) || <p className="p-8 font-medium">No event created</p>}
          </div>
				</div>
			</div>
		</div>
	) : (
		<div className="p-6">
			<p className="text-3xl font-bold"> An error occured </p>
		</div>
	);
};

export default Dashboard;
