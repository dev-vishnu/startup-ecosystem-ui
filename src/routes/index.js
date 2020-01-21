import React from "react";
import { Icon  } from "antd";

const navButtons = [
	{
		label: "Auctions",
		icon: <Icon type="user" />,
		children: [
			{
				label: "Live",
				path: "/auctions/live",
				icon: <Icon type="video-camera" />
			},
			{
				label: "Archived",
				path: "/auctions/archived",
				icon:<Icon type="upload" />
			}
		]
	},
	{
		label: "Gallery",
		path: "/gallery",
		icon: <Icon type="video-camera" />
	},
	{
		label: "About",
		path: "/about",
		icon:<Icon type="upload" />
	}
];

export default navButtons;