export const assetfindingsAggregatedummy = {
	getAsset: {
		findingsAggregate: {
			count: 10,
		},
	},
};

export const iPAddressfindingsAggregatedummy = {
	getIPAddress: {
		findingsAggregate: {
			count: 10,
		},
	},
};

export const iPAddressAssetsAggregatedummy = {
	getIPAddress: {
		assetsAggregate: {
			count: 10,
		},
	},
};
export const ipblockdummy = {
	getIPAddress: {
		ipblocks: [
			{
				id: "breachlock_13.35.208.0/21",
				name: "13.35.208.0/21",
				isAutoAdded: true,
				asn: {
					name: "AS16509",
					orgName: "Amazon.com, Inc.",
				},
				ipaddressesAggregate: {
					count: 7,
				},
				updatedAt: "2023-11-19T08:42:44.255986Z",
			},
			{
				id: "breachlock_13.35.224.0/21",
				name: "13.35.224.0/21",
				isAutoAdded: true,
				asn: {
					name: "AS16509",
					orgName: "Amazon.com, Inc.",
				},
				ipaddressesAggregate: {
					count: 8,
				},
				updatedAt: "2023-11-19T08:42:44.256703Z",
			},
			{
				id: "breachlock_18.155.48.0/21",
				name: "18.155.48.0/21",
				isAutoAdded: true,
				asn: {
					name: "AS16509",
					orgName: "Amazon.com, Inc.",
				},
				ipaddressesAggregate: {
					count: 7,
				},
				updatedAt: "2023-11-19T08:42:44.258438Z",
			},
			{
				id: "breachlock_192.124.249.0/24",
				name: "192.124.249.0/24",
				isAutoAdded: true,
				asn: {
					name: "AS30148",
					orgName: "Sucuri",
				},
				ipaddressesAggregate: {
					count: 1,
				},
				updatedAt: "2023-11-19T08:42:44.258657Z",
			},
			{
				id: "breachlock_199.60.103.0/24",
				name: "199.60.103.0/24",
				isAutoAdded: true,
				asn: {
					name: "AS209242",
					orgName: "Cloudflare London, LLC",
				},
				ipaddressesAggregate: {
					count: 2,
				},
				updatedAt: "2023-11-19T08:42:44.258833Z",
			},
			{
				id: "breachlock_2600:9000:2078::/48",
				name: "2600:9000:2078::/48",
				isAutoAdded: true,
				asn: {
					name: "AS16509",
					orgName: "Amazon.com, Inc.",
				},
				ipaddressesAggregate: {
					count: 16,
				},
				updatedAt: "2023-11-19T08:42:44.256128Z",
			},
			{
				id: "breachlock_2600:9000:2085::/48",
				name: "2600:9000:2085::/48",
				isAutoAdded: true,
				asn: {
					name: "AS16509",
					orgName: "Amazon.com, Inc.",
				},
				ipaddressesAggregate: {
					count: 16,
				},
				updatedAt: "2023-11-19T08:42:44.257644Z",
			},
			{
				id: "breachlock_2600:9000:2572::/48",
				name: "2600:9000:2572::/48",
				isAutoAdded: true,
				asn: {
					name: "AS16509",
					orgName: "Amazon.com, Inc.",
				},
				ipaddressesAggregate: {
					count: 16,
				},
				updatedAt: "2023-11-19T08:42:44.258584Z",
			},
			{
				id: "breachlock_2603:1000::/25",
				name: "2603:1000::/25",
				isAutoAdded: true,
				asn: {
					name: "AS8075",
					orgName: "Microsoft Corporation",
				},
				ipaddressesAggregate: {
					count: 4,
				},
				updatedAt: "2023-11-19T08:42:44.258257Z",
			},
			{
				id: "breachlock_2606:2c40::/48",
				name: "2606:2c40::/48",
				isAutoAdded: true,
				asn: {
					name: "AS209242",
					orgName: "Cloudflare London, LLC",
				},
				ipaddressesAggregate: {
					count: 2,
				},
				updatedAt: "2023-11-19T08:42:44.258869Z",
			},
		],
	},
};

export const domainAssetdummy = {
	getDomain: {
		assets: [
			{
				id: "0x10f1bb",
				name: "app-test-sdk.breachlock.com",
				hasWebsite: false,
				updatedAt: "2025-01-22T08:57:27.834484Z",
			},
			{
				id: "0x10f1be",
				name: "app.breachlock.com",
				hasWebsite: true,
				updatedAt: "2025-01-22T08:57:27.837967Z",
			},
			{
				id: "0x10f1cb",
				name: "downloads.breachlock.com",
				hasWebsite: true,
				updatedAt: "2025-01-22T08:57:27.838604Z",
			},
			{
				id: "0x10f1ce",
				name: "offer.breachlock.com",
				hasWebsite: false,
				updatedAt: "2025-01-22T08:57:27.839481Z",
			},
			{
				id: "0x10f1d2",
				name: "cirrus-test.breachlock.com",
				hasWebsite: true,
				updatedAt: "2025-01-22T08:57:27.834888Z",
			},
		],
		assetsAggregate: {
			count: 5,
		},
	},
};

export const ipAddressSubdomiandummy = {
	getIPAddress: {
		assetsAggregate: {
			count: 10,
		},
		assets: [
			{
				id: "0x9",
				name: "offer.breachlock.com",
				hasWebsite: true,
				createdAt: "2023-12-30T18:42:20.348Z",
			},
			{
				id: "0xe",
				name: "app.breachlock.com",
				hasWebsite: true,
				createdAt: "2023-12-30T18:42:20.411Z",
			},
			{
				id: "0x14",
				name: "cirrus.breachlock.com",
				hasWebsite: true,
				createdAt: "2023-12-30T18:42:20.422Z",
			},
			{
				id: "0x15",
				name: "app-test-sdk.breachlock.com",
				hasWebsite: false,
				createdAt: "2023-12-30T18:42:20.424Z",
			},
			{
				id: "0x1a",
				name: "api-acc.breachlock.com",
				hasWebsite: false,
				createdAt: "2023-12-30T18:42:20.309Z",
			},
			{
				id: "0x2b",
				name: "acc.breachlock.com",
				hasWebsite: false,
				createdAt: "2023-11-03T18:42:20.309Z",
			},
		],
	},
};

export const assetIpAddressdummy = {
	getAsset: {
		ipaddresses: [
			{
				id: "0x10f1f7",
				name: "199.60.103.28",
				country: "United States",
				org: "AS209242",
				ipblock: null,
				updatedAt: "2025-01-10T08:10:19.983664Z",
			},
			{
				id: "0x10f1b6",
				name: "199.60.103.228",
				country: "United States",
				org: "AS209242",
				ipblock: null,
				updatedAt: "2025-01-10T08:10:19.983466Z",
			},
		],
		ipaddressesAggregate: {
			count: 2,
		},
	},
};

export const ipAddressGetDomaindummy = {
	queryIPAddress: [
		{
			id: "breachlock_downloads.breachlock.com",
			name: "44.240.99.13",
			isAutoAdded: true,
			country: "India",
			org: "breach",
			ipblock: {
				name: "test",
			},
			updatedAt: "2024-01-08T13:30:53.108109Z",
		},
		{
			id: "breachlock_downloads1.breachlock.com",
			name: "127.12.12.12",
			isAutoAdded: true,
			country: "India",
			org: "breach",
			ipblock: {
				name: "test",
			},
			updatedAt: "2024-01-08T13:30:53.108109Z",
		},
		{
			id: "breachlock2_downloads.breachlock.com",
			name: "52.84.162.72",
			isAutoAdded: true,
			country: "India",
			org: "breach",
			ipblock: {
				name: "test",
			},
			updatedAt: "2023-12-30T18:42:20.356Z",
		},
		{
			id: "breachlock3_downloads.breachlock.com",
			name: "52.11.120.134",
			isAutoAdded: true,
			country: "abc",
			org: "breach",
			ipblock: {
				name: "test",
			},
			updatedAt: "2024-01-08T13:30:53.108109Z",
		},
		{
			id: "downloads_breachlock.com",
			name: "52.84.162.28",
			isAutoAdded: true,
			country: "India",
			org: "breach",
			ipblock: {
				name: "test",
			},
			updatedAt: "2024-01-08T13:30:53.108109Z",
		},
		{
			id: "breachlock4_breachlock.com",
			name: "52.84.162.28",
			isAutoAdded: true,
			country: "India",
			org: "breach",
			ipblock: {
				name: "test",
			},
			updatedAt: "2024-01-08T13:30:53.108109Z",
		},
		{
			id: "breachlock5_breachlock.com",
			name: "52.84.162.28",
			isAutoAdded: true,
			country: "India",
			org: "breach",
			ipblock: {
				name: "test",
			},
			updatedAt: "2024-01-08T13:30:53.108109Z",
		},
	],
	aggregateIPAddress: {
		count: 7,
	},
};

export const ipaddressOfdomain = {
	queryDomain: [
		{
			ipaddresses: [
				{
					id: "0xc36a6",
					name: "127.0.0.1",
				},
				{
					id: "0xc45e7",
					name: "44.228.249.3",
				},
				{
					id: "0xe4526",
					name: "35.81.188.86",
				},
				{
					id: "0x1276f5",
					name: "52.66.98.37",
				},
				{
					id: "0x1e0fc0",
					name: "52.27.213.147",
				},
				{
					id: "0x1e0fc1",
					name: "3.217.31.200",
				},
				{
					id: "0x1e0fc2",
					name: "3.92.172.178",
				},
				{
					id: "0x1e0fcc",
					name: "12.12.234.34",
				},
			],
			ipaddressesAggregate: {
				count: 8,
			},
		},
		{
			ipaddresses: [],
			ipaddressesAggregate: {
				count: 0,
			},
		},
	],
};
