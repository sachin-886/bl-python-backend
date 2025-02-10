/* eslint-disable quotes */
export const scanScheduleDummy = {
	getDomain: {
		executionsAggregate: {
			count: 1,
		},
		executions: [
			{
				id: "0x57f7d",
				name: "test five",
				status: null,
				schedule: {
					cron: "0 0 1 * *",
					status: "ACTIVE",
				},
				updatedAt: "2024-02-12T08:29:31.689598Z",
				params: [
					{
						name: "asset_uuid",
						value: "scan",
						type: "STRING",
					},
					{
						name: "asset_value",
						value: "scan",
						type: "STRING",
					},
					{
						name: "auth_data",
						// eslint-disable-next-line quotes
						value: '{\r\n                  "form_filling_authentication":{\r\n                     "login_url":"dfdf",\r\n                     "logout_url":"dfdfd",\r\n                     "username":"dfdf",\r\n                     "password":"dfdf"\r\n                  }\r\n               }',
						type: "JSON",
					},
					{
						name: "domain",
						value: "domain",
						type: "STRING",
					},
					{
						name: "asset_value",
						value: "scan",
						type: "STRING",
					},
					{
						name: "auth_data",
						// eslint-disable-next-line quotes
						value: '{\r\n                  "form_filling_authentication":{\r\n                     "login_url":"dfdf",\r\n                     "logout_url":"dfdfd",\r\n                     "username":"dfdf",\r\n                     "password":"dfdf"\r\n                  }\r\n               }',
						type: "JSON",
					},
					{
						name: "domain",
						value: "domain2",
						type: "STRING",
					},
					{
						name: "asset_uuid",
						value: "scan2",
						type: "STRING",
					},
					{
						name: "auth_data",
						// eslint-disable-next-line quotes
						value: '{\r\n                  "form_filling_authentication":{\r\n                     "login_url":"dfdf2",\r\n                     "logout_url":"dfdfd2",\r\n                     "username":"dfdf2",\r\n                     "password":"dfdf2"\r\n                  }\r\n               }',
						type: "JSON",
					},
				],
				triggerNow: true,
				isScheduled: true,
				scanOn: "Subdomain",
				runbookName: "ngsam-web-gray",
			},
		],
	},
};

export const getDomainExecutiondummy = {
	aggregateTriggerExecution: {
		count: 106,
	},
	queryTriggerExecution: [
		{
			id: "0x864c1",
			name: "testv4",
			status: "PAUSED",
			operation: "PAUSESCHEDULE",
			schedule: {
				cron: "0 0 1 * *",
				status: "ACTIVE",
			},
			updatedAt: "2024-03-07T07:36:38Z",
			params: [
				{
					name: "domain",
					value: "www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_uuid",
					value: "0x60c93",
					type: "STRING",
				},
				{
					name: "asset_value",
					value: "simply.www.test34.com",
					type: "STRING",
				},
				{
					name: "auth_required",
					value: "true",
					type: "BOOLEAN",
				},
				{
					name: "auth_data",
					value: '{"form_filling_authentication":{"login_url":"login.com/sd","logout_url":"logout.com/sds","username":"dsssd","password":"sds"}}',
					type: "JSON",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: "2024-07-26T07:02:05.196469Z",
			scanOn: "Subdomain",
			runbookName: "ngsam-web-gray",
			asset: {
				id: "0x60c93",
				name: "simply.www.test34.com",
			},
			assetGroup: null,
			ipaddress: null,
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
		{
			id: "0x864c4",
			name: "test multi 4-2",
			status: "PAUSED",
			operation: "PAUSESCHEDULE",
			schedule: {
				cron: "0 0 1 * *",
				status: "ACTIVE",
			},
			updatedAt: "2024-03-07T06:37:08Z",
			params: [
				{
					name: "asset_uuid",
					value: "0x608b9",
					type: "STRING",
				},
				{
					name: "domain",
					value: "www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_value",
					value: "xn--tags--0p2i863v.www.test34.com",
					type: "STRING",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: "2024-07-23T02:12:01.879162Z",
			scanOn: "Subdomain",
			runbookName: "ngsam-web",
			asset: {
				id: "0x608b9",
				name: "xn--tags--0p2i863v.www.test34.com",
			},
			assetGroup: null,
			ipaddress: null,
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
		{
			id: "0x864d0",
			name: "test multi 4-3",
			status: "TERMINATED",
			operation: "TERMINATE",
			schedule: {
				cron: "0 0 1 * *",
				status: "ACTIVE",
			},
			updatedAt: "2024-03-07T06:06:39Z",
			params: [
				{
					name: "asset_uuid",
					value: "0x60a21",
					type: "STRING",
				},
				{
					name: "domain",
					value: "www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_value",
					value: "tx17.www.test34.com",
					type: "STRING",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: "2024-07-23T02:08:34.639588Z",
			scanOn: "Subdomain",
			runbookName: "ngsam-web",
			asset: {
				id: "0x60a21",
				name: "tx17.www.test34.com",
			},
			assetGroup: null,
			ipaddress: null,
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
		{
			id: "0x864c2",
			name: "test 5-99",
			status: "FAILED",
			operation: "TERMINATE",
			schedule: {
				cron: "0 0 1 * *",
				status: "ACTIVE",
			},
			updatedAt: "2024-03-07T05:49:58Z",
			params: [
				{
					name: "domain",
					value: "www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_value",
					value: "simply.www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_uuid",
					value: "0x60c93",
					type: "STRING",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: "2024-07-23T01:18:01.765051Z",
			scanOn: "Subdomain",
			runbookName: "ngsam-web",
			asset: {
				id: "0x60c93",
				name: "simply.www.test34.com",
			},
			assetGroup: null,
			ipaddress: null,
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
		{
			id: "0x83f51",
			name: "test 5-99",
			status: "SCHEDULED",
			operation: "TERMINATE",
			schedule: {
				cron: "0 0 1 * *",
				status: "ACTIVE",
			},
			updatedAt: "2024-03-05T07:25:50Z",
			params: [
				{
					name: "asset_uuid",
					value: "0x6067e",
					type: "STRING",
				},
				{
					name: "domain",
					value: "www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_value",
					value: "taipingyangfeilvbinbaijiale.www.test34.com",
					type: "STRING",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: "2024-07-19T12:00:00.949748Z",
			scanOn: "Subdomain",
			runbookName: "ngsam-web",
			asset: {
				id: "0x6067e",
				name: "taipingyangfeilvbinbaijiale.www.test34.com",
			},
			assetGroup: null,
			ipaddress: null,
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
		{
			id: "0x84030",
			name: "test 5-100",
			status: "SCHEDULED",
			operation: "PAUSE",
			schedule: {
				cron: "0 0 1 * *",
				status: "ACTIVE",
			},
			updatedAt: "2024-03-05T07:09:52Z",
			params: [
				{
					name: "domain",
					value: "www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_uuid",
					value: "0x61602",
					type: "STRING",
				},
				{
					name: "asset_value",
					value: "qipaishibanyingyezhizhao.www.test34.com",
					type: "STRING",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: "2024-07-20T03:05:17.104293Z",
			scanOn: "Subdomain",
			runbookName: "ngsam-web",
			asset: {
				id: "0x61602",
				name: "qipaishibanyingyezhizhao.www.test34.com",
			},
			assetGroup: null,
			ipaddress: null,
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
		{
			id: "0x840c7",
			name: "test 5-98",
			status: "SCHEDULED",
			operation: "SUBMIT",
			schedule: {
				cron: "0 0 1 * *",
				status: "ACTIVE",
			},
			updatedAt: "2024-03-05T06:03:18.431144Z",
			params: [
				{
					name: "asset_value",
					value: "aomenzuidadubowangzhan.www.test34.com",
					type: "STRING",
				},
				{
					name: "domain",
					value: "www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_uuid",
					value: "0x61b21",
					type: "STRING",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: "2024-07-26T07:02:04.927119Z",
			scanOn: "Subdomain",
			runbookName: "ngsam-web",
			asset: {
				id: "0x61b21",
				name: "aomenzuidadubowangzhan.www.test34.com",
			},
			assetGroup: null,
			ipaddress: null,
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
		{
			id: "0x83f32",
			name: "test 5-97",
			status: "SCHEDULED",
			operation: "SUBMIT",
			schedule: {
				cron: "0 0 1 * *",
				status: "ACTIVE",
			},
			updatedAt: "2024-03-05T06:03:18.431137Z",
			params: [
				{
					name: "asset_uuid",
					value: "0x6103f",
					type: "STRING",
				},
				{
					name: "domain",
					value: "www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_value",
					value: "esx2.www.test34.com",
					type: "STRING",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: null,
			scanOn: "Subdomain",
			runbookName: "ngsam-web",
			asset: {
				id: "0x6103f",
				name: "esx2.www.test34.com",
			},
			assetGroup: null,
			ipaddress: null,
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
		{
			id: "0x83f31",
			name: "test 5-96",
			status: "SCHEDULED",
			operation: "SUBMIT",
			schedule: {
				cron: "0 0 1 * *",
				status: "ACTIVE",
			},
			updatedAt: "2024-03-05T06:03:18.431131Z",
			params: [
				{
					name: "asset_value",
					value: "g144.www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_uuid",
					value: "0x60e51",
					type: "STRING",
				},
				{
					name: "domain",
					value: "www.test34.com",
					type: "STRING",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: null,
			scanOn: "Subdomain",
			runbookName: "ngsam-web",
			asset: {
				id: "0x60e51",
				name: "g144.www.test34.com",
			},
			assetGroup: null,
			ipaddress: null,
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
		{
			id: "0x83f8b",
			name: "test 5-95",
			status: "SCHEDULED",
			operation: "SUBMIT",
			schedule: {
				cron: "0 0 1 * *",
				status: "ACTIVE",
			},
			updatedAt: "2024-03-05T06:03:18.431126Z",
			params: [
				{
					name: "asset_value",
					value: "huangguanwanghg.www.test34.com",
					type: "STRING",
				},
				{
					name: "domain",
					value: "www.test34.com",
					type: "STRING",
				},
				{
					name: "asset_uuid",
					value: "0x6196c",
					type: "STRING",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: null,
			scanOn: "Subdomain",
			runbookName: "ngsam-web",
			asset: {
				id: "0x6196c",
				name: "huangguanwanghg.www.test34.com",
			},
			assetGroup: null,
			ipaddress: null,
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
		{
			id: "0xf69be",
			name: "test3242342",
			status: "PENDING",
			operation: "SUBMIT",
			schedule: {
				cron: "0 0 * * 0",
			},
			updatedAt: "2024-04-09T05:29:31.64123Z",
			params: [
				{
					name: "domain",
					value: "demo.com",
					type: "STRING",
				},
				{
					name: "asset_uuid",
					value: "0x88d1e",
					type: "STRING",
				},
				{
					name: "asset_value",
					value: "151.101.2.165",
					type: "STRING",
				},
			],
			triggerNow: false,
			isScheduled: true,
			lastScanDate: null,
			scanOn: "IPAddress",
			runbookName: "ngsam-nw",
			asset: null,
			assetGroup: null,
			ipaddress: {
				id: "0x88d1e",
				name: "151.101.2.165",
			},
			domain: {
				id: "0x5f702",
				name: "www.test34.com",
			},
		},
	],
};
