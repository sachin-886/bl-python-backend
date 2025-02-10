export const assetGroupdummy = {
	getAssetGroup: {
		assetsAggregate: {
			count: 6,
		},
		assets: [
			{
				id: "0x1d",
				name: "vids-test.breachlock.com",
				title: "vids test",
				isAutoAdded: true,
				isArchived: false,
			},
			{
				id: "0x1e",
				name: "webinar.breachlock.com",
				title: "hgbfcg",
				isAutoAdded: true,
				isArchived: true,
			},
			{
				id: "0x3f",
				name: "vids-acc.breachlock.com",
				title: "vidsc acc",
				isAutoAdded: true,
				isArchived: false,
			},
			{
				id: "0x7a",
				name: "www.breachlock.com",
				title: "gfgfgr",
				isAutoAdded: false,
				isArchived: false,
			},
			{
				id: "0x8e",
				name: "vids.breachlock.com",
				title: "vids vreachlock",
				isAutoAdded: true,
				isArchived: false,
			},
			{
				id: "0x55749",
				name: "www.breachlock12.com",
				title: "vids breachlock 12",
				isAutoAdded: false,
				isArchived: false,
			},
		],
	},
};

export const assetGroupDomaindummy = {
	aggregateAssetGroup: {
		count: 21,
	},
	queryAssetGroup: [
		{
			id: "01",
			name: "Test1",
			assetType: "SUBDOMAIN",
			createdBy: "dilkhush",
			createdAt: "2024-01-23T07:21:11.765276Z",
			ipaddressesAggregate: {
				count: 0,
			},
			assetsAggregate: {
				count: 2,
			},
			description: "test1",
			domain: { id: "0x4", name: "breachlock.com" },
		},
		{
			id: "02",
			name: "Test2",
			assetType: "SUBDOMAIN",
			createdBy: "dilkhush",
			createdAt: "2024-01-24T06:47:33.35656Z",
			ipaddressesAggregate: {
				count: 0,
			},
			assetsAggregate: {
				count: 1,
			},
			description: "test2",
			domain: { id: "0x4", name: "breachlock.com" },
		},
		{
			id: "03",
			name: "hvghvfgfnvgbvncvxcv",
			assetType: "SUBDOMAIN",
			createdBy: "samiksha",
			createdAt: "2024-01-30T12:31:45.665313Z",
			ipaddressesAggregate: {
				count: 0,
			},
			assetsAggregate: {
				count: 1,
			},
			description: "vhgv bvgcb hbnbhv",
			domain: { id: "0x4", name: "breachlock.com" },
		},
		{
			id: "04",
			name: "vgbghcfgbcnvnv",
			assetType: "IP",
			createdBy: "samiksha",
			createdAt: "2024-01-30T13:51:29.666993Z",
			ipaddressesAggregate: {
				count: 0,
			},
			assetsAggregate: {
				count: 1,
			},
			description: "weeeerefefffs",
			domain: { id: "0x4", name: "breachlock.com" },
		},
	],
};

export const AssetGroupVulnerbilitiesdummy = {
	assetGroupVulnerabilities: {
		total: 120,
		vulnerabilities: [
			{
				name: "Banner Grabbing Possible",
				impactedAssetCount: 10,
				findingType: "New Discovered",
				cvssScore: 0,
				severity: "CRITICAL",
			},
			{
				name: "Open Network Ports Found on Server",
				impactedAssetCount: 1,
				findingType: "New Discovered",
				cvssScore: 0,
				severity: "HIGH",
			},
			{
				name: "Inconsistent Forward and Reverse DNS Lookup Results",
				impactedAssetCount: 1,
				findingType: "Rediscovered",
				cvssScore: 4.8,
				severity: "MEDIUM",
			},
			{
				name: "Traceroute for the host",
				impactedAssetCount: 1,
				findingType: "New Discovered",
				cvssScore: 0,
				severity: "LOW",
			},
			{
				name: "Operating System Fingerprinted",
				impactedAssetCount: 1,
				findingType: "New Discovered",
				cvssScore: 0,
				severity: "INFORMATIONAL",
			},
		],
	},
};

export const assetGroupIPdummy = {
	getAssetGroup: {
		id: "0x4e201",
		assetType: "IP",
		name: "Group1_IpAdress",
		ipaddressesAggregate: {
			count: 0,
		},
		ipaddresses: [
			{
				id: "0x39",
				name: "52.96.91.56",
				isAutoAdded: true,
				country: "Netherland",
				org: "breachlock1",
				ipblock: {
					name: "careNeth",
				},
				updatedAt: "2023-12-30T18:42:20.364Z",
			},
			{
				id: "0x44",
				name: "54.185.157.253",
				isAutoAdded: false,
				country: "India",
				org: "breach",
				ipblock: {
					name: "test",
				},
				updatedAt: "2024-01-15T08:45:29.685Z",
			},
			{
				id: "0x4eb7",
				name: "54.149.243.244",
				isAutoAdded: true,
				country: "India",
				org: "breach",
				ipblock: {
					name: "test",
				},
				updatedAt: "2024-01-09T10:12:53.767Z",
			},
			{
				id: "0x761f",
				name: "54.68.239.82",
				isAutoAdded: true,
				country: "India",
				org: "breach",
				ipblock: {
					name: "test",
				},
				updatedAt: "2024-01-15T08:45:29.677Z",
			},
			{
				id: "0x7620",
				name: "54.201.8.199",
				isAutoAdded: true,
				country: null,
				org: null,
				ipblock: null,
				updatedAt: "2024-01-15T08:45:29.678Z",
			},
		],
	},
};

export const getAssetGroupdummy = {
	getAssetGroup: {
		ipaddressesAggregate: {
			count: 4,
		},
		// dnsrecordsAggregate: {
		// 	count: 5,
		// },
		assetsAggregate: {
			count: 21,
		},
	},
};

export const vulCountDatadummy = {
	assetGroupVulnerabilities: {
		total: 120,
	},
};

export const countDataTruedummy = {
	getAssetGroup: {
		assetsAggregate: {
			count: 0,
		},
		ipaddressesAggregate: {
			count: 0,
		},
	},
};

export const countDataFalsedummy = {
	getAssetGroup: {
		assetsAggregate: {
			count: 10,
		},
		ipaddressesAggregate: {
			count: 100,
		},
	},
};

export const AssetGroupAssetdummy = {
	getAssetGroup: {
		id: "0xa17c",
		name: "Test2",
		assets: [
			{
				id: "0x9",
				name: "offer.breachlock.com",
				hasWebsite: true,
				dnsrecordsAggregate: {
					count: 12,
				},
				ipaddressesAggregate: {
					count: 1,
				},
				findingsAggregate: {
					count: 3,
				},
			},
			{
				id: "0x1",
				name: "aaa.care.com",
				hasWebsite: false,
				dnsrecordsAggregate: {
					count: 11,
				},
				ipaddressesAggregate: {
					count: 60,
				},
				findingsAggregate: {
					count: 90,
				},
			},
		],
		assetsAggregate: {
			count: 2,
		},
	},
};

export const AssetGroupAssetActiondummy = {
	getAssetGroup: {
		id: "0xa17c",
		name: "Test2",
		assetsAggregate: {
			count: 1,
		},
		assets: [
			{
				id: "0x9",
				name: "offer.breachlock123.com",
				assetType: "SUBDOMAIN",
				isAutoAdded: true,
				isArchived: false,
			},
			{
				id: "0x1",
				name: "offer.breachlock.com",
				assetType: "SUBDOMAIN",
				isAutoAdded: true,
				isArchived: true,
			},
			{
				id: "0x1",
				name: "offer.breachlock.com",
				assetType: "SUBDOMAIN",
				isAutoAdded: true,
				isArchived: true,
			},
		],
	},
};

export const AssetGroupIpaddressActiondummy = {
	getAssetGroup: {
		id: "0x4e201",
		assetType: "IP",
		name: "Group1_IpAdress",
		ipaddressesAggregate: {
			count: 0,
		},
		ipaddresses: [
			{
				id: "0x761f",
				name: "54.68.239.82",
				isAutoAdded: true,
				isArchived: false,
				__typename: "IPAddress",
			},
			{
				id: "0x44",
				name: "54.185.157.253",
				isAutoAdded: true,
				isArchived: true,
				__typename: "IPAddress",
			},
			{
				id: "0x4eb7",
				name: "54.149.243.244",
				isAutoAdded: true,
				isArchived: true,
				__typename: "IPAddress",
			},
			{
				id: "0x761f",
				name: "54.68.239.82",
				isAutoAdded: true,
				isArchived: true,
				__typename: "IPAddress",
			},
			{
				id: "0x7620",
				name: "54.201.8.199",
				isAutoAdded: true,
				isArchived: false,
				__typename: "IPAddress",
			},
		],
	},
};

export const AssetGroupCountdummy = {
	getAssetGroup: {
		assetsAggregate: {
			count: 1110,
		},
		ipaddressesAggregate: {
			count: 1110,
		},
	},
};

export const AssetgroupInactiveCountdummy = {
	getAssetGroup: {
		assetsAggregate: {
			count: 19,
		},
	},
};

export const assetGroupGetDomsindummy = {
	queryAssetGroup: [
		{
			name: "Test1",
			id: "875e9ac84698417a856fe956c522e0fc",
			assetType: "SUBDOMAIN",
			assetsAggregate: {
				count: 25,
			},
			ipaddressesAggregate: {
				count: 0,
			},
			vulnerabilityCount: 17,
			updatedAt: "2024-01-23T07:21:11.765276Z",
			isArchived: false,
			description: "test1",
			domain: { id: "0x4", name: "breachlock.com" },
		},

		{
			name: "Test2",
			id: "b11f91e847b246f1a3685833f5475a58",
			assetType: "IP",
			assetsAggregate: {
				count: 0,
			},
			ipaddressesAggregate: {
				count: 11,
			},
			vulnerabilityCount: 20,
			updatedAt: "2024-01-24T06:47:33.35656Z",
			isArchived: false,
			description: "vhgv bvgcb hbnbhv",
			domain: { id: "0x4", name: "breachlock.com" },
		},
	],
	aggregateAssetGroup: {
		count: 2,
	},
};
