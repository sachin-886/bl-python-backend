export const getDomainCountdummy = {
	getDomain: {
		assetsAggregate: {
			count: 12,
		},
		asnsAggregate: {
			count: 26,
		},
		vulnerabilitiesAggregate: {
			count: 50,
		},
	},
};

export const domainDummy = {
	domainCount: {
		count: 46,
	},
};

export const domainvulnerabilitydummy = {
	getDomain: {
		id: "0x4",
		vulnerabilities: [
			{
				id: "0x2711",
				name: "Banner Grabbing Possible",
				severity: "LOW",
				cvssScore: 3.1,
				updatedAt: "2024-02-28T05:51:54.431Z",
			},
			{
				id: "0x2713",
				name: "Open Network Ports Found on Server",
				severity: "HIGH",
				cvssScore: 7.5,
				updatedAt: "2024-02-28T05:51:54.432Z",
			},
			{
				id: "0x271d",
				name: "Inconsistent Forward and Reverse DNS Lookup Results",
				severity: "MEDIUM",
				cvssScore: 4.8,
				updatedAt: "2024-02-23T05:22:04.641Z",
			},
			{
				id: "0x271f",
				name: "Traceroute for the host",
				severity: "CRITICAL",
				cvssScore: 9.1,
				updatedAt: "2024-02-28T05:51:54.43Z",
			},
			{
				id: "0x2720",
				name: "Operating System Fingerprinted",
				severity: "INFORMATIONAL",
				cvssScore: 0,
				updatedAt: "2024-02-28T05:51:54.431Z",
			},
			{
				id: "0xf1e5c",
				name: "SSL Certificate Information",
				severity: "LOW",
				cvssScore: 3.0,
				updatedAt: "2024-05-27T00:07:03.263Z",
			},
			{
				id: "0xf1e5e",
				name: "SSL/TLS Versions Enumerated",
				severity: "MEDIUM",
				cvssScore: 4.6,
				updatedAt: "2024-05-27T00:07:03.265Z",
			},
		],
		vulnerabilitiesAggregate: {
			count: 50,
		},
	},
};

export const domainAsndummy = {
	getDomain: {
		asns: [
			{
				id: "breachlock_api-acc.breachlock.com",
				name: "api-acc.breachlock.com",
				orgName: "test",
				updatedAt: "2023-11-19T08:42:44.258012Z",
			},
			{
				id: "breachlock_api-test.breachlock.com",
				name: "api-test.breachlock.com",
				orgName: "test",
				updatedAt: "2023-11-19T08:42:44.25648Z",
			},
			{
				id: "breachlock_api.breachlock.com",
				name: "api.breachlock.com",
				orgName: "test",
				updatedAt: "2023-11-19T08:42:44.256243Z",
			},
			{
				id: "breachlock_app-acc.breachlock.com",
				name: "app-acc.breachlock.com",
				orgName: "test",
				updatedAt: "2023-11-19T08:42:44.255299Z",
			},
			{
				id: "breachlock_app-test-sdk.breachlock.com",
				name: "app-test-sdk.breachlock.com",
				orgName: "test",
				updatedAt: "2023-11-19T08:42:44.256445Z",
			},
			{
				id: "breachlock_app-test.breachlock.com",
				name: "app-test.breachlock.com",
				orgName: "test",
				updatedAt: "2023-11-19T08:42:44.25654Z",
			},
			{
				id: "breachlock_app.breachlock.com",
				name: "app.breachlock.com",
				orgName: "test",
				updatedAt: "2023-11-19T08:42:44.257656Z",
			},
			{
				id: "breachlock_autodiscover.breachlock.com",
				name: "autodiscover.breachlock.com",
				orgName: "test",
				updatedAt: "2023-11-19T08:42:44.25807Z",
			},
			{
				id: "breachlock_bi.breachlock.com",
				name: "bi.breachlock.com",
				orgName: "test",
				updatedAt: "2023-11-19T08:42:44.255725Z",
			},
			{
				id: "breachlock_cirrus-acc.breachlock.com",
				name: "cirrus-acc.breachlock.com",
				orgName: "test",
				updatedAt: "2023-11-19T08:42:44.256303Z",
			},
		],
		aggregateASN: {
			count: 8,
		},
	},
};

export const queryDomaindummy = {
	queryDomain: [
		{
			id: "breachlock_breachlock.com",
			name: "breachlock.com",
			isAutoAdded: true,
			assetsAggregate: {
				count: 26,
			},
			asnsAggregate: {
				count: 1,
			},
			vulnerabilitiesAggregate: {
				count: 21,
			},
		},
		{
			id: "breachlock.com12",
			name: "example.com",
			isAutoAdded: false,
			assetsAggregate: {
				count: 26,
			},
			asnsAggregate: {
				count: 1,
			},
			vulnerabilitiesAggregate: {
				count: 50,
			},
		},
	],
};
