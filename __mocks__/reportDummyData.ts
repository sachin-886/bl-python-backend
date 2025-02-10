export const reportDummyData = {
	reportSubdomainVulnerabilities: {
		allAssets: [
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
			"webinar.breachlock.com",
		],
		totalSeverityCount: 10,
		severityCounts: [
			{
				count: "13",
				severity: "INFORMATIONAL",
			},
		],
		vulnerabilities: [
			{
				cvssScore: "0",
				cvssVector: "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:N/A:N",
				description:
					"The web application serves cookies without the HttpOnly flag enabled. If this flag is not enabled on a cookie, an attacker can use client-side JavaScript to read or manipulate its value. Conversely, if this flag is enabled, the cookie is no longer accessible via client-side scripts. All cookies not required by client-side scripts (i.e. JavaScript) should have their HttpOnly flags set.",
				id: "0x9f",
				name: "Cookies Without HttpOnly Flag Detected",
				recommendation:
					"Mark/enable the HttpOnly flag on all cookies that are not required by client-side scripts.",
				severity: "INFORMATIONAL",
				impactedAssets: [
					{
						id: "0x63",
						name: "webinar.breachlock.com",
						scanType: "ngsam-nw-0-0-1",
						findingPocs: [
							{
								description:
									"01aa5000-8ca2-4db3-bb3e-4af34dc7f2fe",
								id: "0xc8",
							},
							{
								description:
									"df337306-48b2-45bd-8d8a-0ed48c810bf6",
								id: "0xdb",
							},
							{
								description:
									"13be00e0-1163-461c-8b0e-fae298c4a478",
								id: "0xdc",
							},
						],
					},
				],
			},
			{
				cvssScore: "0",
				cvssVector: "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
				description:
					"We were able to discover a route to the host using the traceroute utility. This is an informational finding only.",
				id: "0xc3",
				name: "Traceroute for the host",
				recommendation:
					"This is an informational finding only. No action is required.",
				severity: "INFORMATIONAL",
				impactedAssets: [
					{
						id: "0x63",
						name: "webinar.breachlock.com",
						scanType: "ngsam-nw-0-0-1",
						findingPocs: [
							{
								description:
									"c7b1229c-862f-4c07-9055-83ff437c4463",
								id: "0xcf",
							},
						],
					},
				],
			},
		],
	},
};

export const assetDummy = {
	queryDomain: [
		{
			id: "0x4",
			assets: [
				{
					id: "0x9",
					name: "offer.breachlock.com",
				},
				{
					id: "0xe",
					name: "app.breachlock.com",
				},
				{
					id: "0x14",
					name: "cirrus.breachlock.com",
				},
				{
					id: "0x15",
					name: "app-test-sdk.breachlock.com",
				},
				{
					id: "0x1a",
					name: "api-acc.breachlock.com",
				},
				{
					id: "0x1b",
					name: "api.breachlock.com",
				},
				{
					id: "0x1d",
					name: "vids-test.breachlock.com",
				},
				{
					id: "0x1e",
					name: "webinar.breachlock.com",
				},
				{
					id: "0x3a",
					name: "jobs.breachlock.com",
				},
				{
					id: "0x3f",
					name: "vids-acc.breachlock.com",
				},
				{
					id: "0x41",
					name: "staging2.breachlock.com",
				},
				{
					id: "0x45",
					name: "events.breachlock.com",
				},
				{
					id: "0x4b",
					name: "autodiscover.breachlock.com",
				},
				{
					id: "0x63",
					name: "app-test.breachlock.com",
				},
				{
					id: "0x65",
					name: "bi.breachlock.com",
				},
				{
					id: "0x67",
					name: "downloads.breachlock.com",
				},
				{
					id: "0x6b",
					name: "cirrus-test.breachlock.com",
				},
				{
					id: "0x6d",
					name: "cirrus-acc.breachlock.com",
				},
				{
					id: "0x7a",
					name: "www.breachlock.com",
				},
				{
					id: "0x7c",
					name: "app-acc.breachlock.com",
				},
				{
					id: "0x8e",
					name: "vids.breachlock.com",
				},
				{
					id: "0x2c99",
					name: "print.exampl.com",
				},
				{
					id: "0x4ea8",
					name: "print.breachlocktestbulk.com",
				},
				{
					id: "0x4eb8",
					name: "api-test.breachlock.com",
				},
			],
		},
	],
};

export const vulWebAssetGroupdummy = {
	getAssetGroup: {
		assets: [
			{
				id: "0x1e",
				name: "webinar.breachlock.com",
				findings: [
					{
						vulnerability: {
							id: "0x27e9",
							name: "Web ASSET GREOP Server has HSTS Disabled",
							cvssScore: 4.8,
							cvssVector:
								"CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N",
							severity: "MEDIUM",
							recommendation:
								"Return an appropriate Strict-Transport-Security HTTP header in server responses.",
							description:
								"The web server was found to have HTTP Strict Transport Security (HSTS) disabled. HSTS is a web security policy mechanism designed to help safeguard against man-in-the-middle (MITM) attacks affecting protocol security such as protocol downgrade attacks, and cookie hijacking caused by transmission of cookies over unencrypted connections. HSTS restricts compliant client software (such as browsers) from interacting with the web server over non-HTTPS connections. HSTS can be enabled by adding a response header with the name Strict-Transport-Security and the value max-age=expireTime, where expireTime is the time in seconds that browsers should remember that the site should only be accessed using HTTPS. Including the includeSubDomains flag will propagate this to all subdomains.",
						},
						findingPocs: [
							{
								poc: "iVBORw0KGgoAAAANSUhEUgAACKIAAANECAIAAAAGpoILAAEAAElEQVR4nOzdeVzTR/4/8A",
								description: "asdfasdfasdfasdf",
							},
						],
					},
				],
			},
		],
	},
};

export const vulExternalAssetGroupdummy = {
	getAssetGroup: {
		ipaddresses: [
			{
				id: "0x1e",
				name: "webinar.breachlock.com",
				findings: [
					{
						vulnerability: {
							id: "0x27e9",
							name: "Web IP ASSET GROUP Server has HSTS Disabled",
							cvssScore: 4.8,
							cvssVector:
								"CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N",
							severity: "MEDIUM",
							recommendation:
								"Return an appropriate Strict-Transport-Security HTTP header in server responses.",
							description:
								"The web server was found to have HTTP Strict Transport Security (HSTS) disabled. HSTS is a web security policy mechanism designed to help safeguard against man-in-the-middle (MITM) attacks affecting protocol security such as protocol downgrade attacks, and cookie hijacking caused by transmission of cookies over unencrypted connections. HSTS restricts compliant client software (such as browsers) from interacting with the web server over non-HTTPS connections. HSTS can be enabled by adding a response header with the name Strict-Transport-Security and the value max-age=expireTime, where expireTime is the time in seconds that browsers should remember that the site should only be accessed using HTTPS. Including the includeSubDomains flag will propagate this to all subdomains.",
						},
						findingPocs: [
							{
								poc: "iVBORw0KGgoAAAANSUhEUgAACKIAAANECAIAAAAGpoILAAEAAElEQVR4nOzdeVzTR/4/8A",
								description: "asdfasdfasdfasdf",
							},
						],
					},
				],
			},
		],
	},
};
