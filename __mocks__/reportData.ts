export const getReportingData = {
	data: {
		success: true,
		data: {
			total: 2,
			reports: [
				{
					id: "67127e7ab07d53e0a9e8b7ea",
					name: "TestEditPT_sSMVt21k5S",
					description: null,
					tenant: "sunil-01",
					module: "PTaaS",
					is_private: false,
					is_archived: false,
					pdf_report:
						"TestEditPT_sSMVt21k5S-2024-10-18 15:27:54.877384.pdf",
					csv_report: null,
					created_at: "2024-10-18T15:27:54.877000+00:00",
					updated_at: "2024-10-18T15:27:54.877000+00:00",
					scan_started_at: null,
					created_by: "tenzin",
					updated_by: "tenzin",
					asset_type: null,
					asset_details: null,
					pentest_id: null,
					product_name: "jhscbvdvbhjzvjh",
					is_published: true,
				},
				{
					id: "64959bc512f1b75aea0407ec",
					name: "test123",
					description: "test",
					tenant: "master",
					is_private: false,
					is_archived: false,
					pdf_report: "name-2024-06-26 12:01:08.111937.pdf",
					csv_report: null,
					created_at: "2023-06-23T13:19:01.435000+00:00",
					updated_at: "2023-06-23T13:19:01.435000+00:00",
					created_by: "testblsuperadminABC",
					updated_by: "testblsuperadminABC",
				},
				{
					id: "6676ec850e2989ceefe52b33",
					name: "test report",
					description: "kjhjghgkjghjgf",
					tenant: "testbreachcom",
					module: "APT-WEB",
					is_private: false,
					is_archived: false,
					pdf_report: "test report-2024-06-22 15:23:48.643917.pdf",
					csv_report: null,
					created_at: "2024-06-22T15:23:48.643000+00:00",
					updated_at: "2024-06-22T15:23:48.643000+00:00",
					created_by: "sunil",
					updated_by: "sunil",
					asset_type: null,
					asset_details: null,
				},
			],
		},
		message: "OK",
	},
};

export const reportAssetGroupdummy = {
	aggregateAssetGroup: {
		count: 3,
	},
	queryAssetGroup: [
		{
			name: "aasw",
			id: "0x9ff9",
			ipaddressesAggregate: {
				count: 10,
			},
			assetType: "IP",
			isArchived: true,

			// tags: [],
		},

		{
			name: "Test2",
			id: "0xa17c",
			assetsAggregate: {
				count: 20,
			},
			assetType: "SUBDOMAIN",
			isArchived: false,
			isAutoAdded: false,
			// tags: [],
		},
		{
			name: "bsw",
			id: "0x9ff1",
			ipaddressesAggregate: {
				count: 23,
			},
			assetType: "IP",
			isArchived: false,
			isAutoAdded: true,
			// tags: [],
		},
	],
};

export const reportDomaindummy = {
	aggregateDomain: {
		count: 2,
	},
	queryDomain: [
		{
			id: "breachlock_breachlock.com",
			name: "breachlock.com",
			tags: [],
			__typename: "Domain",
			isArchived: true,
			isAutoAdded: false,
		},
		{
			id: "id.com",
			name: "ddecccc.com",
			tags: [],
			__typename: "Domain",
			isArchived: true,
			isAutoAdded: false,
		},
	],
};

export const reportIpaddressdummy = {
	aggregateIPAddress: {
		count: 23,
	},
	queryIPAddress: [
		{
			id: "0x60d71",
			name: "54.209.32.212",
			tags: [],
			__typename: "IPAddress",
			isArchived: false,
			isAutoAdded: true,
		},
		{
			id: "0x61b8a",
			name: "52.71.57.184",
			tags: [],
			__typename: "IPAddress",
			isArchived: true,
			isAutoAdded: false,
		},
	],
};

export const reportReviewAssetGroupAssetsdummy = {
	getAssetGroup: {
		assets: [
			{
				id: "0x1e",
				name: "webinar.breachlock.com",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "Asset",
			},
			{
				id: "0x3f",
				name: "vids-acc.breachlock.com",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "Asset",
			},
		],
	},
};

export const reportreviewAssetGroupIpaddressdummy = {
	getAssetGroup: {
		ipaddresses: [
			{
				id: "0x44",
				name: "54.185.157.253",
				tags: [],
				isArchived: true,
				isAutoAdded: true,
				__typename: "IPAddress",
			},
			{
				id: "0x4eb7",
				name: "54.149.243.244",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "IPAddress",
			},
			{
				id: "0x761f",
				name: "54.68.239.82",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "IPAddress",
			},
			{
				id: "0x7620",
				name: "54.201.8.199",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "IPAddress",
			},
		],
	},
};

export const reportReviewGetDomainAssetsdummy = {
	aggregateAsset: {
		count: 23,
	},
	queryAsset: [
		{
			id: "breachlock_test.testbreachlock.com",
			name: "test.testbreachlock.com",
			tags: [],
			__typename: "Asset",
			isArchived: true,
			isAutoAdded: false,
		},
		{
			id: "breachlock_downloads.breachlock.com",
			name: "downloads.breachlock.com",
			tags: [],
			__typename: "Asset",
			isArchived: true,
			isAutoAdded: true,
		},
		{
			id: "breachlock_offer.breachlock.com",
			name: "offer.breachlock.com",
			tags: [],
			__typename: "Asset",
			isArchived: false,
			isAutoAdded: true,
		},
		{
			id: "breachlock_vids-test.breachlock.com",
			name: "vids-test.breachlock.com",
			tags: [],
			__typename: "Asset",
			isArchived: false,
			isAutoAdded: false,
		},
		{
			id: "breachlock_autodiscover.breachlock.com",
			name: "autodiscover.breachlock.com",
			tags: [],
			__typename: "Asset",
			isArchived: true,
			isAutoAdded: false,
		},
		{
			id: "breachlock_api-acc.breachlock.com",
			name: "api-acc.breachlock.com",
			tags: [],
			__typename: "Asset",
			isArchived: false,
			isAutoAdded: true,
		},
		{
			id: "breachlock_vids-demo-v4.breachlock.com",
			name: "vids-demo-v4.breachlock.com",
			tags: [],
			__typename: "Asset",
			isArchived: false,
			isAutoAdded: false,
		},
	],
};

export const queryDomainAssetsdummy = {
	queryDomain: [
		{
			assets: [
				{
					name: "example.com",
				},
				{
					name: "www.breachlock.com",
				},
			],
		},
		{
			assets: [
				{
					name: "www.breachlock.com",
				},
				{
					name: "app-test-sdk.breachlock.com",
				},
				{
					name: "cirrus.breachlock.com",
				},
				{
					name: "app-test.breachlock.com",
				},
				{
					name: "app.breachlock.com",
				},
				{
					name: "downloads.breachlock.com",
				},
				{
					name: "cirrus-acc.breachlock.com",
				},
				{
					name: "vids-test.breachlock.com",
				},
				{
					name: "vids.breachlock.com",
				},
				{
					name: "staging2.breachlock.com",
				},
			],
		},
	],
};

export const queryDomaindarkwebsdummy = {
	queryDomain: [
		{
			darkwebs: [],
		},
		{
			darkwebs: [
				{
					id: "breachlock_TEST-DARKWEB",
					name: "TEST-DARKWEB",
					site: "TEST-SITE",
				},
			],
		},
	],
};

export const queryDomainDataBreachesdummy = {
	queryDomain: [
		{
			databreaches: [],
		},
		{
			databreaches: [
				{
					id: "breachlock_test@breachlock.com",
					name: "test@breachlock.com",
					email: "test@breachlock.com",
				},
			],
		},
	],
};

export const queryDomainVulnerabilitiesdummy = {
	queryDomain: [
		{
			vulnerabilities: [],
		},
		{
			vulnerabilities: [
				{
					findingsAggregate: {
						count: 2,
					},
					name: "Filtered/Closed Network Ports Found on Server",
					severity: "INFORMATIONAL",
				},
				{
					findingsAggregate: {
						count: 3,
					},
					name: "Fully Qualified Domain Name (FQDN) Resolved",
					severity: "INFORMATIONAL",
				},
				{
					findingsAggregate: {
						count: 1,
					},
					name: "TLS/SSL Certificate Does Not Have a Valid Chain of Trust",
					severity: "INFORMATIONAL",
				},
				{
					findingsAggregate: {
						count: 2,
					},
					name: "Open Network Ports Found on Server",
					severity: "INFORMATIONAL",
				},
				{
					findingsAggregate: {
						count: 1,
					},
					name: "Client-Initiated SSL Renegotiation Permitted",
					severity: "INFORMATIONAL",
				},
				{
					findingsAggregate: {
						count: 1,
					},
					name: "HTTP Methods Enabled",
					severity: "INFORMATIONAL",
				},
				{
					findingsAggregate: {
						count: 1,
					},
					name: "Server Vulnerable to Lucky13 TLS Exploit(CVE-2013-0169)",
					severity: "INFORMATIONAL",
				},
				{
					findingsAggregate: {
						count: 1,
					},
					name: "Web Server has HSTS Disabled",
					severity: "INFORMATIONAL",
				},
				{
					findingsAggregate: {
						count: 2,
					},
					name: "Banner Grabbing Possible",
					severity: "INFORMATIONAL",
				},
				{
					findingsAggregate: {
						count: 1,
					},
					name: "Use of Expired SSL/TLS Certificate",
					severity: "INFORMATIONAL",
				},
			],
		},
	],
};

export const pentestAssetDummy = {
	getPentest: {
		asset: [
			{
				id: "0x1201fb",
				name: "zxf.vulnweb.com",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "Asset",
				assetType: "SUBDOMAIN",
			},
			{
				id: "0x114f0e",
				name: "zyrbocailuntan.vulnweb.com",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "Asset",
				assetType: "OTHERS",
			},
			{
				id: "0x114f0e",
				name: "zyrbocailuntan.vulnweb.com",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "Asset",
				assetType: "MOBILE",
			},
			{
				id: "0x120d0c",
				name: "zyngablog.vulnweb.com",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "Asset",
				assetType: "CLOUD",
			},
			{
				id: "0x2a1e52",
				name: "99.84.66.79",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "IPAddress",
				assetType: "IP",
			},
			{
				id: "0x2a1fa3",
				name: "99.84.66.95",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "IPAddress",
				assetType: "IP",
			},
			{
				id: "0x325bac",
				name: "www.test01.org/news",
				tags: [],
				isArchived: false,
				isAutoAdded: false,
				__typename: "URL",
				assetType: "URL",
			},
		],
		assetAggregate: {
			count: 1,
		},
	},
};

export const pentestURLDummy = {
	getPentest: {
		url: [
			{
				id: "0x1201fbaa",
				name: "zxf.vulnweburl.com",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "Asset",
				assetType: "URL",
			},
		],
		urlAggregate: {
			count: 1,
		},
	},
};

export const pentestIPDummy = {
	getPentest: {
		ipaddress: [
			{
				id: "0x1201fbaaasdf",
				name: "zxf.vulnwebIp.com",
				tags: [],
				isArchived: false,
				isAutoAdded: true,
				__typename: "Asset",
				assetType: "IP",
			},
		],
		ipaddressAggregate: {
			count: 1,
		},
	},
};

export const getAllProductCategoriesData = {
	data: {
		success: true,
		data: {
			total: 14,
			categories: [
				{
					id: "670e77736042a7441921c59d",
					name: "API APT",
					allowed_asset_types: ["SUBDOMAIN", "URL"],
					scan_type: ["Authenticated API Scan, Unauth API Scan"],
					vid_type: "API",
					category_type: "APT",
					reporting_template: "API APT",
					config_items: {
						Environment: true,
						"Documentation Link": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-10-18T08:04:40.800275+00:00",
					updated_at: "2024-10-18T08:04:40.800284+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc58ed1ce369db3d72c286",
					name: "Web Application Penetration Test",
					allowed_asset_types: ["SUBDOMAIN"],
					scan_type: [
						"GreyBox Web Penetration Test,BlackBox Web Penetration Test",
					],
					vid_type: "Web",
					category_type: "Pentest",
					reporting_template: "GreyBox Web Penetration Test",
					config_items: {
						Environment: true,
						"Exclude URL": true,
						"Authentication Details": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b3a",
					name: "Internal Network Penetration Test",
					allowed_asset_types: ["SUBDOMAIN", "IP"],
					scan_type: ["Network (Internal)"],
					vid_type: "Network",
					category_type: "Pentest",
					reporting_template: "BlackBox Web Penetration Test",
					config_items: {
						Environment: true,
						"Virtual Appliance Mapping": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b3b",
					name: "External Network Penetration Test",
					allowed_asset_types: ["IP", "SUBDOMAIN"],
					scan_type: ["Network (External)"],
					vid_type: "Network",
					category_type: "Pentest",
					reporting_template: "Network",
					config_items: {
						Environment: true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b3c",
					name: "API Penetration Test",
					allowed_asset_types: ["SUBDOMAIN", "URL"],
					scan_type: [
						"GreyBox API Penetration Test,BlackBox API Penetration Test",
					],
					vid_type: "API",
					category_type: "Pentest",
					reporting_template: "API",
					config_items: {
						Environment: true,
						"Documentation Upload": true,
						"Authentication Details": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b3d",
					name: "Mobile Application Penetration Test",
					allowed_asset_types: ["MOBILE"],
					scan_type: ["nan"],
					vid_type: "nan",
					category_type: "Pentest",
					reporting_template: "Mobile",
					config_items: {
						Environment: true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b3e",
					name: "Cloud Security Audit",
					allowed_asset_types: ["CLOUD"],
					scan_type: ["nan"],
					vid_type: "Cloud",
					category_type: "Pentest",
					reporting_template: "Cloud",
					config_items: {
						Environment: true,
						"Cloud Type and account access details of it": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b3f",
					name: "IOT Device Pentration Test",
					allowed_asset_types: ["IOT"],
					scan_type: ["nan"],
					vid_type: "nan",
					category_type: "Pentest",
					reporting_template: "IOT",
					config_items: {
						Environment: true,
						"Documentation Link": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b40",
					name: "Wifi-Assessment",
					allowed_asset_types: ["OTHERS"],
					scan_type: ["nan"],
					vid_type: "nan",
					category_type: "Pentest",
					reporting_template: "Wifi",
					config_items: {
						Environment: true,
						"Documentation Link": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b41",
					name: "Thick Client Application Penetration Test",
					allowed_asset_types: ["OTHERS"],
					scan_type: ["nan"],
					vid_type: "nan",
					category_type: "Pentest",
					reporting_template: "Thick Client",
					config_items: {
						Environment: true,
						"Documentation Link": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b42",
					name: "Custom Test",
					allowed_asset_types: ["OTHERS"],
					scan_type: ["nan"],
					vid_type: "nan",
					category_type: "Pentest",
					reporting_template: "Custom",
					config_items: {
						Environment: true,
						"Documentation Link": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b43",
					name: "ASM",
					allowed_asset_types: ["DOMAIN"],
					scan_type: ["Domain Discovery, Data Breach"],
					vid_type: "nan",
					category_type: "ASM",
					reporting_template: "ASM Report",
					config_items: {
						Environment: true,
						"Documentation Link": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.416000+00:00",
					updated_at: "2024-08-26T09:30:58.416000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b44",
					name: "Web APT",
					allowed_asset_types: ["SUBDOMAIN"],
					scan_type: ["Authenticated Web Scan, Unauth Web Scan"],
					vid_type: "Web",
					category_type: "APT",
					reporting_template: "Web APT Report",
					config_items: {
						Environment: true,
						"Documentation Link": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.417000+00:00",
					updated_at: "2024-08-26T09:30:58.417000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
				{
					id: "66cc4b52a0c43ed374090b45",
					name: "External Network  APT",
					allowed_asset_types: ["IP"],
					scan_type: ["External Network Scan"],
					vid_type: "Network",
					category_type: "APT",
					reporting_template: "External Network APT Report",
					config_items: {
						Environment: true,
						"Documentation Link": true,
						"Documentation Upload": true,
					},
					is_active: true,
					created_at: "2024-08-26T09:30:58.417000+00:00",
					updated_at: "2024-08-26T09:30:58.417000+00:00",
					created_by: null,
					updated_by: null,
					runbook_name: null,
					runbook_version: null,
				},
			],
		},
		message: "OK",
	},
};
