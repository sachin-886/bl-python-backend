/* eslint-disable quotes */
export const domainData = {
	data: {
		success: true,
		data: {
			total: 1,
			nodes: [
				{
					uid: "681a38994ebe4948a19944fd163036a8",
					id: "681a38994ebe4948a19944fd163036a8",
					name: "breachlock.com",
					assets: {
						relation_type: "ASSETS",
						node_type: "Asset",
						count: 26,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Tenant",
						count: null,
					},
					asns: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 5,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:24.737226+00:00",
					updated_at: "2023-03-31 12:35:20.826337+00:00",
					node_type: "Domain",
				},
				{
					uid: "681a38994ebe4948a11944fd163036a8",
					id: "681a38994ebe4948a11944fd163036a8",
					name: "breachlocksss.com",
					assets: {
						relation_type: "ASSETS",
						node_type: "Asset",
						count: 26,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Tenant",
						count: null,
					},
					asns: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 5,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:24.737226+00:00",
					updated_at: "2023-03-31 12:35:20.826337+00:00",
					node_type: "Domain",
				},
			],
		},
		message: "OK",
	},
};

export const subDomainData = {
	data: {
		success: true,
		data: {
			total: 25,
			nodes: [
				{
					uid: "3c9cf97c4af64d9aac5e833817bfecf2",
					name: "downloads.breachlock.com",
					dns_records: {
						relation_type: "DNSRECORD",
						node_type: "DNSRecord",
						count: 5,
					},
					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 4,
					},
					is_subdomain: true,
					has_website: true,
					technologies: {
						relation_type: "TECHNOLOGIES",
						node_type: "Technology",
						count: null,
					},
					vulns: {
						relation_type: "VULNS",
						node_type: "Vulnerability",
						count: 2,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Domain",
						count: null,
					},
					created_by: "BL-BOT",
					created_at: "2023-05-23T07:01:33.834326+00:00",
					updated_at: "2023-05-28T04:21:59.810822+00:00",
					node_type: "Asset",
					domain: "breachlock.com",
					is_false_positive: true,
				},
				{
					uid: "b1884825b1064429aef512e8ba7b3377",
					name: "jobs.breachlock.com",
					dns_records: {
						relation_type: "DNSRECORD",
						node_type: "DNSRecord",
						count: 1,
					},
					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 1,
					},
					is_subdomain: true,
					has_website: true,
					technologies: {
						relation_type: "TECHNOLOGIES",
						node_type: "Technology",
						count: null,
					},
					vulns: {
						relation_type: "VULNS",
						node_type: "Vulnerability",
						count: 4,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Domain",
						count: null,
					},
					created_by: "BL-BOT",
					created_at: "2023-05-23T07:01:33.251134+00:00",
					updated_at: "2023-05-27T15:10:34.167919+00:00",
					node_type: "Asset",
					domain: "breachlock.com",
					is_false_positive: true,
				},
				{
					uid: "daf34587706f4d2e9ae715f888b8dbcb",
					name: "autodiscover.breachlock.com",
					dns_records: {
						relation_type: "DNSRECORD",
						node_type: "DNSRecord",
						count: 9,
					},
					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 12,
					},
					is_subdomain: true,
					has_website: true,
					technologies: {
						relation_type: "TECHNOLOGIES",
						node_type: "Technology",
						count: null,
					},
					vulns: {
						relation_type: "VULNS",
						node_type: "Vulnerability",
						count: 1,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Domain",
						count: null,
					},
					created_by: "BL-BOT",
					created_at: "2023-05-23T07:01:28.851846+00:00",
					updated_at: "2023-05-26T12:52:50.658080+00:00",
					node_type: "Asset",
					domain: "breachlock.com",
					is_false_positive: true,
				},
				{
					uid: "950a4858582b47a7879b90a1b2c643c3",
					name: "offer.breachlock.com",
					dns_records: {
						relation_type: "DNSRECORD",
						node_type: "DNSRecord",
						count: 7,
					},
					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 1,
					},
					is_subdomain: true,
					has_website: true,
					technologies: {
						relation_type: "TECHNOLOGIES",
						node_type: "Technology",
						count: null,
					},
					vulns: {
						relation_type: "VULNS",
						node_type: "Vulnerability",
						count: 3,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Domain",
						count: null,
					},
					created_by: "BL-BOT",
					created_at: "2023-05-23T07:01:27.838808+00:00",
					updated_at: "2023-05-26T12:52:50.658080+00:00",
					node_type: "Asset",
					domain: "breachlock.com",
					is_false_positive: true,
				},
				{
					uid: "7bf6f8d839694892a6cad4c1346560a3",
					name: "api-acc.breachlock.com",
					dns_records: {
						relation_type: "DNSRECORD",
						node_type: "DNSRecord",
						count: 3,
					},
					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 2,
					},
					is_subdomain: true,
					has_website: true,
					technologies: {
						relation_type: "TECHNOLOGIES",
						node_type: "Technology",
						count: null,
					},
					vulns: {
						relation_type: "VULNS",
						node_type: "Vulnerability",
						count: 4,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Domain",
						count: null,
					},
					created_by: "BL-BOT",
					created_at: "2023-05-23T07:01:35.428074+00:00",
					updated_at: "2023-05-26T12:52:50.658080+00:00",
					node_type: "Asset",
					domain: "breachlock.com",
					is_false_positive: true,
				},
			],
		},
		message: "OK",
	},
};

export const dnsRecordData = {
	data: {
		success: true,
		data: {
			total: 450,
			nodes: [
				{
					uid: "04e800332ae1405d99a7d5fe64f62ed0",
					name: "52.25.78.139",
					record: "A",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:29.960796+00:00",
					updated_at: "2023-03-23 06:33:57.582919+00:00",
					node_type: "DNSRecord",
				},
				{
					uid: "d7534b85112f457396098e33d5b4ea9a",
					name: "54.187.238.130",
					record: "A",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:32.006964+00:00",
					updated_at: "2023-03-23 06:33:57.582919+00:00",
					node_type: "DNSRecord",
				},
				{
					uid: "e39ce929a21343ccaeefc38a3a4da6c1",
					name: "blp-rtaas-api-415048545.us-west-2.elb.amazonaws.com.",
					record: "CNAME",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:34.008383+00:00",
					updated_at: "2023-03-27 11:34:53.848591+00:00",
					node_type: "DNSRecord",
				},
				{
					uid: "34c51fe3a67542139650426b692bf8b5",
					name: "192.124.249.161",
					record: "A",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 3,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:42.145006+00:00",
					updated_at: "2023-03-27 11:34:54.207762+00:00",
					node_type: "DNSRecord",
				},
				{
					uid: "084d59b7044e4b30b586b691e2ae44a8",
					name: "breachlock.com.",
					record: "CNAME",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 3,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:44.192089+00:00",
					updated_at: "2023-03-27 11:34:54.247172+00:00",
					node_type: "DNSRecord",
				},
				{
					uid: "db1815f0e83a4e778e50e3c3933d1c14",
					name: "0 breachlock-com.mail.protection.outlook.com.",
					record: "MX",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 3,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:46.138294+00:00",
					updated_at: "2023-03-27 11:34:54.256123+00:00",
					node_type: "DNSRecord",
				},
				{
					uid: "4db2bae0bc844440a93c247d5bf5e35c",
					name: '"atlassian-domain-verification=DcZy7XoraIMBoGTzXncO9EI6NOm/vIS34zSShOBwDwq2lGiVP5UY8JmA/0vXviAv"',
					record: "TXT",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 3,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:48.019249+00:00",
					updated_at: "2023-03-27 11:34:54.264095+00:00",
					node_type: "DNSRecord",
				},
				{
					uid: "490186dae92f4af79bb541c24be3b348",
					name: '"v=spf1 include:spf.protection.outlook.com -all"',
					record: "TXT",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 3,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:49.825046+00:00",
					updated_at: "2023-03-27 11:34:54.271743+00:00",
					node_type: "DNSRecord",
				},
				{
					uid: "0d2c4bd576824f7e812ae17925d3c7fb",
					name: '"google-site-verification=ytxaEQjt4wTv6u_W696WC3JAXH6d2WKKQkLxTHyRPu8"',
					record: "TXT",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 3,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:51.920015+00:00",
					updated_at: "2023-03-27 11:34:54.279390+00:00",
					node_type: "DNSRecord",
				},
				{
					uid: "88da11da6acc4592bf3d2c125b8df051",
					name: "ns26.domaincontrol.com.",
					record: "NS",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 2,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:53.715742+00:00",
					updated_at: "2023-03-09 09:26:14.645802+00:00",
					node_type: "DNSRecord",
				},
			],
		},
		message: "OK",
	},
};

export const ipaddressData = {
	data: {
		success: true,
		data: {
			total: 185,
			nodes: [
				{
					uid: "25c532d3ff8c444e8ebf0fff90b41b47",
					ip: "52.25.78.139",
					hostname:
						"ec2-52-25-78-139.us-west-2.compute.amazonaws.com",
					city: "Boardman",
					region: "Oregon",
					country: "US",
					loc: "45.8399,-119.7006",
					org: "AS16509 Amazon.com, Inc.",
					postal: "97818",
					timezone: "America/Los_Angeles",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					ipblock: {
						relation_type: "IPBLOCK",
						node_type: "IPBlock",
						count: 30,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:36.105362+00:00",
					updated_at: "2023-03-29 12:30:15.203000+00:00",
					node_type: "IPAddress",
					is_false_positive: true,
				},
				{
					uid: "a953513dc7b449ecb7aaea442fea354e",
					ip: "54.187.238.130",
					hostname:
						"ec2-54-187-238-130.us-west-2.compute.amazonaws.com",
					city: "Boardman",
					region: "Oregon",
					country: "US",
					loc: "45.8399,-119.7006",
					org: "AS16509 Amazon.com, Inc.",
					postal: "97818",
					timezone: "America/Los_Angeles",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					ipblock: {
						relation_type: "IPBLOCK",
						node_type: "IPBlock",
						count: 2,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:38.355695+00:00",
					updated_at: "2023-03-29 12:30:49.338455+00:00",
					node_type: "IPAddress",
					is_false_positive: true,
				},
				{
					uid: "7bd7a1f216f24b808867980d2ad47ad3",
					ip: "18.164.144.95",
					hostname: "server-18-164-144-95.ccu50.r.cloudfront.net",
					city: "Kolkata",
					region: "West Bengal",
					country: "IN",
					loc: "22.5626,88.3630",
					org: "AS16509 Amazon.com, Inc.",
					postal: "700006",
					timezone: "Asia/Kolkata",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					ipblock: {
						relation_type: "IPBLOCK",
						node_type: "IPBlock",
						count: 30,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:20:37.748031+00:00",
					updated_at: "2023-03-09 09:20:37.748058+00:00",
					node_type: "IPAddress",
					is_false_positive: true,
				},
				{
					uid: "87c45fa5038c42c0aeeb04bca1629ac5",
					ip: "18.164.144.67",
					hostname: "server-18-164-144-67.ccu50.r.cloudfront.net",
					city: "Kolkata",
					region: "West Bengal",
					country: "IN",
					loc: "22.5626,88.3630",
					org: "AS16509 Amazon.com, Inc.",
					postal: "700006",
					timezone: "Asia/Kolkata",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					ipblock: {
						relation_type: "IPBLOCK",
						node_type: "IPBlock",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:20:39.591074+00:00",
					updated_at: "2023-03-09 09:20:39.591101+00:00",
					node_type: "IPAddress",
					is_false_positive: true,
				},
				{
					uid: "0c9a293c2d224f018d54a3becca8fa68",
					ip: "192.124.249.161",
					hostname: "cloudproxy10161.sucuri.net",
					city: "Menifee",
					region: "California",
					country: "US",
					loc: "33.7283,-117.1464",
					org: "AS30148 Sucuri",
					postal: "92584",
					timezone: "America/Los_Angeles",
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 3,
					},
					ipblock: {
						relation_type: "IPBLOCK",
						node_type: "IPBlock",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:19:59.346305+00:00",
					updated_at: "2023-03-31 12:50:43.182467+00:00",
					node_type: "IPAddress",
					is_false_positive: false,
				},
			],
		},
		message: "OK",
	},
};

export const vulnerabilityData = {
	data: {
		success: true,
		data: {
			total: 16,
			nodes: [
				{
					uid: "nnnnn",
					name: "Test Vulnerability LOW",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corredddddddd ddddd ddddd dddd dddddd ddddddd dddddddddddddddd dddddddd dddddddddd ddddd dddddddddddsponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 0,
					severity: "LOW",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:03:46.165555+00:00",
					updated_at: "2023-03-24 07:03:46.165574+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "sssss",
					name: "Test Vulnerability MEDIUM",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 3,
					severity: "MEDIUM",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:06:08.398359+00:00",
					updated_at: "2023-03-24 07:06:08.398374+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "hhh",
					name: "Test Vulnerability HIGH",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 6,
					severity: "HIGH",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:07:55.436821+00:00",
					updated_at: "2023-03-24 07:07:55.436841+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "ggg",
					name: "Test Vulnerability CRITICAL",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 9,
					severity: "CRITICAL",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:17:06.249549+00:00",
					updated_at: "2023-03-24 07:17:06.249556+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "fff-1570-4fbb-ad54-b38806ca49fa",
					name: "Fully Qualified Domain Name (FQDN) Resolved",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					scan_id: "6422cbbdb6951de117cd3b95",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 0,
					severity: "INFORMATIONAL",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-28 11:18:41.663072+00:00",
					updated_at: "2023-03-28 11:18:41.663082+00:00",
					node_type: "Vulnerability",
				},

				{
					uid: "664d503c26ab41f18acafe5ee7b40c6b",
					name: "Test Vulnerability LOW",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corredddddddd ddddd ddddd dddd dddddd ddddddd dddddddddddddddd dddddddd dddddddddd ddddd dddddddddddsponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 0,
					severity: "LOW",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:03:46.165555+00:00",
					updated_at: "2023-03-24 07:03:46.165574+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "53d183dc80974006bd02fb6603fbe3fc",
					name: "Test Vulnerability MEDIUM",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 3,
					severity: "MEDIUM",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:06:08.398359+00:00",
					updated_at: "2023-03-24 07:06:08.398374+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "f750432d0e66413a9a8b0589e4a6c8bd",
					name: "Test Vulnerability HIGH",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 6,
					severity: "HIGH",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:07:55.436821+00:00",
					updated_at: "2023-03-24 07:07:55.436841+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "df4db804e20545c89829e777347c9660",
					name: "Test Vulnerability CRITICAL",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 9,
					severity: "CRITICAL",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:17:06.249549+00:00",
					updated_at: "2023-03-24 07:17:06.249556+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "9264bb77-1570-4fbb-ad54-b38806ca49fa",
					name: "Fully Qualified Domain Name (FQDN) Resolved",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					scan_id: "6422cbbdb6951de117cd3b95",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 0,
					severity: "INFORMATIONAL",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-28 11:18:41.663072+00:00",
					updated_at: "2023-03-28 11:18:41.663082+00:00",
					node_type: "Vulnerability",
				},

				{
					uid: "53d183dc8097fff4006bd02fb6603fbe3fc",
					name: "Test Vulnerability MEDIUM",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 3,
					severity: "MEDIUM",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:06:08.398359+00:00",
					updated_at: "2023-03-24 07:06:08.398374+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "f750432d0e66413a9fffffa8b0589e4a6c8bd",
					name: "Test Vulnerability HIGH",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 6,
					severity: "HIGH",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:07:55.436821+00:00",
					updated_at: "2023-03-24 07:07:55.436841+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "df4dbbbbb804e20545c89829e777347c9660",
					name: "Test Vulnerability CRITICAL",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 9,
					severity: "CRITICAL",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-24 07:17:06.249549+00:00",
					updated_at: "2023-03-24 07:17:06.249556+00:00",
					node_type: "Vulnerability",
				},
				{
					uid: "9264bb777777-1570-4fbb-ad54-b38806ca49fa",
					name: "Fully Qualified Domain Name (FQDN) Resolved",
					description:
						"We were able to resolve the fully-qualified domain name (FQDN) corresponding to the server tested.\r\nThis is an informational finding only.",
					recommendation:
						"No action is required, this is an informational finding only.",
					plugin_id: "176",
					scan_id: "6422cbbdb6951de117cd3b95",
					cvss_vector: "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:N",
					cvss_score: 0,
					severity: "INFORMATIONAL",
					pocs: {
						relation_type: "POCS",
						node_type: "POC",
						count: null,
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Asset",
						count: 1,
					},
					created_at: "2023-03-28 11:18:41.663072+00:00",
					updated_at: "2023-03-28 11:18:41.663082+00:00",
					node_type: "Vulnerability",
				},
			],
		},
		message: "OK",
	},
};

export const pocsData = {
	data: {
		data: {
			total: 3,
			nodes: [
				{
					uid: "58f631ec47524f28a4f0df8590d21f5f",
					order: 1,
					asset: "18.172.122.24",
					description:
						"Here the host is vulnerable to Domain Email Spoofing.",
					vulnerable_urls: ["18.172.122.24"],
					poc: "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",
					is_false_positive: false,
					is_archived: false,
					created_at: "2023-05-01T07:08:54.301914+00:00",
					updated_at: "2023-05-01T07:08:54.301919+00:00",
					node_type: "POC",
				},
				{
					uid: "cab389b3170b49e7b5ee8adaec02df89",
					order: 1,
					asset: "http://example.com",
					description:
						"The host does not pass back a Referrer-Policy header in HTTP responses. The host does not pass back a Referrer-Policy header in HTTP responsesThe host does not pass back a Referrer-Policy header in HTTP responsesThe host does not pass back a Referrer-Policy header in HTTP responsesThe host does not pass back a Referrer-Policy header in HTTP responsesThe host does not pass back a Referrer-Policy header in HTTP responsesThe host does not pass back a Referrer-Policy header in HTTP responses",
					vulnerable_urls: [
						"http://example.com",
						"http://example.comddddddddddddddddddddddddddddddddddddd",
						"http://example.comddddddddddddddddddddddddddddddddddddd",
						"http://example.comdddddddddddddssssss",
						"http://example.comddddddddddddddddddddddddddddddddddddd",
						"http://example.comddddddddddddddddddddddddddddddddddddd",
					],
					vulnerable_endpoints: ["hello"],
					vulnerable_ports: [80, 8080],
					poc: "iVBORw0KGgoAAAANSUhEUg=",
					is_false_positive: true,
					is_archived: false,
					created_at: "2023-03-15 11:38:41.858512+00:00",
					updated_at: "2023-03-15 11:38:41.858581+00:00",
					node_type: "POC",
				},
				{
					uid: "cab389b3170b49e7b5ee8adaec02df89dd",
					order: 1,
					asset: "http://example.com",
					description:
						"The host does not pass back a Referrer-Policy header in HTTP responses.",
					vulnerable_urls: ["http://example.com"],
					vulnerable_endpoints: null,
					vulnerable_ports: null,
					poc: "iVBORw0KGgoAAAANSUhEUg=",
					is_false_positive: false,
					is_archived: false,
					created_at: "2023-03-15 11:38:41.858512+00:00",
					updated_at: "2023-03-15 11:38:41.858581+00:00",
					node_type: "POC",
				},
				{
					uid: "cab389b3170b49e7b5ee8adaec02dfsdsd9dd",
					order: 1,
					asset: "http://example.com",
					description:
						"The host does not pass back a Referrer-Policy header in HTTP responses.",
					vulnerable_urls: ["http://example.com"],
					vulnerable_endpoints: null,
					vulnerable_ports: null,
					poc: "iVBORw0KGgoAAAANSUhEUg=",
					is_false_positive: false,
					is_archived: false,
					created_at: "2023-03-15 11:38:41.858512+00:00",
					updated_at: "2023-03-15 11:38:41.858581+00:00",
					node_type: "POC",
				},
			],
		},
	},
};

export const assetListData = {
	data: {
		data: {
			total: 1,
			nodes: [
				{
					uid: "ce99df0129c640b38419b9d77ef9fa54",
					name: "www.breachlock.com",
					dns_records: {
						relation_type: "DNSRECORD",
						node_type: "DNSRecord",
					},
					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
					},
					is_subdomain: true,
					has_website: true,
					vulns: {
						relation_type: "VULNS",
						node_type: "Vulnerability",
					},
					belongs_to: {
						relation_type: "BELONGSTO",
						node_type: "Domain",
					},
					created_by: "BL-BOT",
					created_at: "2023-03-09 09:26:01.288048+00:00",
					updated_at: "2023-03-22 07:15:25.759515+00:00",
					node_type: "Asset",
				},
			],
		},
		message: "OK",
	},
};

export const asnData = {
	data: {
		success: true,
		data: {
			total: 5,
			nodes: [
				{
					uid: "7e08f55b8ff44f63a9bb128d50acb8af",
					name: "AS16509",
					org_name: "Amazon.com, Inc.",
					domain: "amazon.com",
					ipblocks: {
						relation_type: "IPBLOCK",
						node_type: "IPBlock",
						count: 17,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:30:58.365412+00:00",
					updated_at: "2023-03-31 12:50:24.984219+00:00",
					node_type: "ASN",
				},
				{
					uid: "0f405344c71d4264b461d719f857b36e",
					name: "AS209242",
					org_name: "Cloudflare London, LLC",
					domain: "cloudflare.com",
					ipblocks: {
						relation_type: "IPBLOCK",
						node_type: "IPBlock",
						count: 2,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:38:27.743894+00:00",
					updated_at: "2023-03-31 12:51:37.163466+00:00",
					node_type: "ASN",
				},
				{
					uid: "65ec011f6f6c4177be9249ad0e4361f2",
					name: "AS8075",
					org_name: "Microsoft Corporation",
					domain: "microsoft.com",
					ipblocks: {
						relation_type: "IPBLOCK",
						node_type: "IPBlock",
						count: 2,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:47:49.204368+00:00",
					updated_at: "2023-03-31 12:48:32.213469+00:00",
					node_type: "ASN",
				},
				{
					uid: "4e473d030279479eba17db201244fd63",
					name: "AS398101",
					org_name: "GoDaddy.com, LLC",
					domain: "godaddy.com",
					ipblocks: {
						relation_type: "IPBLOCK",
						node_type: "IPBlock",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:41:14.453902+00:00",
					updated_at: "2023-03-31 12:41:14.453939+00:00",
					node_type: "ASN",
				},
				{
					uid: "3c0bd7298a6a47aa8de5bd2ff156b8f6",
					name: "AS30148",
					org_name: "Sucuri",
					domain: "sucuri.net",
					ipblocks: {
						relation_type: "IPBLOCK",
						node_type: "IPBlock",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:41:36.763398+00:00",
					updated_at: "2023-03-31 12:50:44.914616+00:00",
					node_type: "ASN",
				},
			],
		},
		message: "OK",
	},
};

export const ipblockData = {
	data: {
		success: true,
		data: {
			total: 23,
			nodes: [
				{
					uid: "932cd5c40cc24815b98d593ed0ae24a1",
					name: "44.224.0.0/11",
					asn: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:30:59.003935+00:00",
					updated_at: "2023-03-31 12:42:08.224291+00:00",
					node_type: "IPBlock",
					is_false_positive: true,
				},
				{
					uid: "b6cd5855222c465b83928e6297f14298",
					name: "13.35.208.0/21",
					asn: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:31:39.050084+00:00",
					updated_at: "2023-03-31 12:40:17.987197+00:00",
					node_type: "IPBlock",
					is_false_positive: true,
				},
				{
					uid: "47741736f7d54e40bf096061fa37b030",
					name: "2600:9000:2078::/48",
					asn: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:32:06.549115+00:00",
					updated_at: "2023-03-31 12:41:07.124410+00:00",
					node_type: "IPBlock",
					is_false_positive: true,
				},
				{
					uid: "d243ab6db51e468da589edc35c298302",
					name: "13.35.224.0/21",
					asn: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:33:24.773078+00:00",
					updated_at: "2023-03-31 12:44:09.789302+00:00",
					node_type: "IPBlock",
					is_false_positive: true,
				},
				{
					uid: "72db8638ebc84ddaa56286ec7f7f29ec",
					name: "2600:9000:2085::/48",
					asn: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:33:52.527457+00:00",
					updated_at: "2023-03-31 12:45:00.656039+00:00",
					node_type: "IPBlock",
					is_false_positive: true,
				},
				{
					uid: "d5dea1acb819417690b3b9bd52118381",
					name: "199.60.103.0/24",
					asn: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:38:28.866149+00:00",
					updated_at: "2023-03-31 12:51:28.444971+00:00",
					node_type: "IPBlock",
					is_false_positive: true,
				},
				{
					uid: "cd5ccdaf36bf4afa92cf48ae7dedd7f0",
					name: "2606:2c40::/48",
					asn: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:38:41.477054+00:00",
					updated_at: "2023-03-31 12:51:37.968496+00:00",
					node_type: "IPBlock",
					is_false_positive: true,
				},
				{
					uid: "0516dae655b540f297ab162d5e8efff6",
					name: "35.160.0.0/13",
					asn: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:38:57.749619+00:00",
					updated_at: "2023-03-31 12:38:57.749646+00:00",
					node_type: "IPBlock",
					is_false_positive: true,
				},
				{
					uid: "247a2a0a7f3847f0a78e42b5971a5952",
					name: "52.40.0.0/14",
					asn: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:39:06.146725+00:00",
					updated_at: "2023-03-31 12:39:06.146767+00:00",
					node_type: "IPBlock",
					is_false_positive: true,
				},
				{
					uid: "2df341f26893419fa1fbbaed12ac5ba3",
					name: "35.80.0.0/12",
					asn: {
						relation_type: "ASNS",
						node_type: "ASN",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31 12:39:16.295677+00:00",
					updated_at: "2023-03-31 12:39:16.295722+00:00",
					node_type: "IPBlock",
					is_false_positive: true,
				},
			],
		},
		message: "OK",
	},
};

export const nodeCountData = { data: { data: { total: 30 } } };

export const assetLocationData = {
	data: {
		success: true,
		data: {
			total: 2,
			nodes: [
				{
					country: {
						code: "US",
						name: "United States",
					},
					assets_count: 25,
					impacted_assets_count: 17,
					vulns: [
						// {
						// 	severity: "MEDIUM",
						// 	count: 1,
						// },
						// {
						// 	severity: "LOW",
						// 	count: 18,
						// },
						// {
						// 	severity: "HIGH",
						// 	count: 1,
						// },
						// {
						// 	severity: "CRITICAL",
						// 	count: 1,
						// },
					],
				},
				{
					country: {
						code: "IN",
						name: "India",
					},
					assets_count: 7,
					impacted_assets_count: 5,
					vulns: [
						// {
						// 	severity: "CRITICAL",
						// 	count: 1,
						// },
						// {
						// 	severity: "LOW",
						// 	count: 5,
						// },
					],
				},
			],
		},
		message: "OK",
	},
};

export const dataBreachData = {
	data: {
		success: true,
		data: {
			total: 2,
			nodes: [
				{
					uid: "737391e18d2a411fb1a7aa1c5aefbe53",
					name: "test@breachlock.com",
					email: "test@breachlock.com",
					has_password: true,
					password: "Thf06q56rXcAdvneue35HQ==",
					source: "test",
					created_by: "BL-BOT",
					created_at: "2023-04-03 08:01:21.441601+00:00",
					updated_at: "2023-04-03 08:03:49.500161+00:00",
					node_type: "DataBreach",
				},
				{
					uid: "137c29c43cc2463ea79c41f0ad014ab8",
					name: "temp@breachlock.com",
					email: "temp@breachlock.com",
					has_password: true,
					password: "Thf06q56rXcAdvneue35HQ==",
					source: "test",
					created_by: "BL-BOT",
					created_at: "2023-04-03 08:01:23.435844+00:00",
					updated_at: "2023-04-03 08:03:53.034975+00:00",
					node_type: "DataBreach",
				},
				{
					uid: "457a8afa1353465ba917a5b43743b889",
					name: "dk@breachlock.com",
					email: "dk@breachlock.com",
					has_password: false,
					password: null,
					source: "test",
					created_by: "BL-BOT",
					created_at: "2023-04-03 08:00:35.473183+00:00",
					updated_at: "2023-04-03 08:03:39.529831+00:00",
					node_type: "DataBreach",
				},
			],
		},
	},
};

export const technologyData = {
	data: {
		success: true,
		data: {
			total: 51,
			nodes: [
				{
					name: "HSTS",
					count: 133,
					percentage: 25.49,
				},
				{
					name: "Amazon CloudFront",
					count: 6,
					percentage: 11.76,
				},
				{
					name: "Nginx",
					count: 5,
					percentage: 9.8,
				},
				{
					name: "Ionicons",
					count: 4,
					percentage: 7.84,
				},
				{
					name: "Ubuntu",
					count: 4,
					percentage: 7.84,
				},
				{
					name: "Cloudflare",
					count: 4,
					percentage: 7.84,
				},
				{
					name: "HubSpot CMS Hub",
					count: 3,
					percentage: 5.88,
				},
				{
					name: "HTTP/3",
					count: 3,
					percentage: 5.88,
				},
				{
					name: "React",
					count: 3,
					percentage: 5.88,
				},
				{
					name: "WordPress",
					count: 1,
					percentage: 1.96,
				},
				{
					name: "WP Rocket",
					count: 1,
					percentage: 1.96,
				},
				{
					name: "Yoast SEO",
					count: 1,
					percentage: 1.96,
				},
				{
					name: "Envoy",
					count: 1,
					percentage: 1.96,
				},
				{
					name: "Basic",
					count: 1,
					percentage: 1.96,
				},
				{
					name: "Fourthwall",
					count: 1,
					percentage: 1.96,
				},
			],
		},
		message: "OK",
	},
};

export const ipblockSpecificData = {
	data: {
		success: true,
		data: {
			total: 23,
			nodes: [
				{
					uid: "3b931f8994854d09b5ea01036f7a5cf4",
					name: "2603:1000::/25",
					asn: {
						uid: "65ec011f6f6c4177be9249ad0e4361f2",
						name: "AS8075",
						org_name: "Microsoft Corporation",
						domain: "microsoft.com",
						created_by: "BL-BOT",
						created_at: "2023-03-31T12:47:49.204368+00:00",
						updated_at: "2023-03-31T12:48:32.213469+00:00",
						node_type: "ASN",
					},

					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 4,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31T12:48:13.984869+00:00",
					updated_at: "2023-04-12T07:41:58.821180+00:00",
					node_type: "IPBlock",
				},
				{
					uid: "21a209a04c784b078500a4f74973dce6",
					name: "52.96.0.0/14",
					asn: {
						uid: "65ec011f6f6c4177be9249ad0e4361f2",
						name: "AS8075",
						org_name: "Microsoft Corporation",
						domain: "microsoft.com",
						created_by: "BL-BOT",
						created_at: "2023-03-31T12:47:49.204368+00:00",
						updated_at: "2023-03-31T12:48:32.213469+00:00",
						node_type: "ASN",
					},

					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 4,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31T12:47:50.141253+00:00",
					updated_at: "2023-04-12T07:41:58.821180+00:00",
					node_type: "IPBlock",
				},
				{
					uid: "f3c8e46b63ff42f8bd63163b605d21b6",
					name: "54.70.0.0/15",
					asn: {
						uid: "7e08f55b8ff44f63a9bb128d50acb8af",
						name: "AS16509",
						org_name: "Amazon.com, Inc.",
						domain: "amazon.com",
						created_by: "BL-BOT",
						created_at: "2023-03-31T12:30:58.365412+00:00",
						updated_at: "2023-03-31T12:50:24.984219+00:00",
						node_type: "ASN",
					},

					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31T12:47:02.652330+00:00",
					updated_at: "2023-04-12T07:41:58.821180+00:00",
					node_type: "IPBlock",
				},
				{
					uid: "4852c80785c449ff92e35033cf465a7d",
					name: "2600:9000:2572::/48",
					asn: {
						uid: "7e08f55b8ff44f63a9bb128d50acb8af",
						name: "AS16509",
						org_name: "Amazon.com, Inc.",
						domain: "amazon.com",
						created_by: "BL-BOT",
						created_at: "2023-03-31T12:30:58.365412+00:00",
						updated_at: "2023-03-31T12:50:24.984219+00:00",
						node_type: "ASN",
					},

					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 16,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31T12:46:09.260234+00:00",
					updated_at: "2023-04-12T07:41:58.821180+00:00",
					node_type: "IPBlock",
				},
				{
					uid: "1a8ff975ec874d8da0d4a285f83746ae",
					name: "18.155.48.0/21",
					asn: {
						uid: "7e08f55b8ff44f63a9bb128d50acb8af",
						name: "AS16509",
						org_name: "Amazon.com, Inc.",
						domain: "amazon.com",
						created_by: "BL-BOT",
						created_at: "2023-03-31T12:30:58.365412+00:00",
						updated_at: "2023-03-31T12:50:24.984219+00:00",
						node_type: "ASN",
					},

					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 7,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31T12:45:42.228467+00:00",
					updated_at: "2023-04-12T07:41:58.821180+00:00",
					node_type: "IPBlock",
				},
				{
					uid: "3fea04b4d91b48218a206709f512cc52",
					name: "54.191.0.0/16",
					asn: {
						uid: "7e08f55b8ff44f63a9bb128d50acb8af",
						name: "AS16509",
						org_name: "Amazon.com, Inc.",
						domain: "amazon.com",
						created_by: "BL-BOT",
						created_at: "2023-03-31T12:30:58.365412+00:00",
						updated_at: "2023-03-31T12:50:24.984219+00:00",
						node_type: "ASN",
					},

					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31T12:43:06.374860+00:00",
					updated_at: "2023-03-31T12:43:06.374875+00:00",
					node_type: "IPBlock",
				},
				{
					uid: "55af3f10fb3645269f6a8e86051629fa",
					name: "54.184.0.0/15",
					asn: {
						uid: "7e08f55b8ff44f63a9bb128d50acb8af",
						name: "AS16509",
						org_name: "Amazon.com, Inc.",
						domain: "amazon.com",
						created_by: "BL-BOT",
						created_at: "2023-03-31T12:30:58.365412+00:00",
						updated_at: "2023-03-31T12:50:24.984219+00:00",
						node_type: "ASN",
					},

					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31T12:42:45.284939+00:00",
					updated_at: "2023-03-31T12:42:45.284974+00:00",
					node_type: "IPBlock",
				},
				{
					uid: "31f9b9d931614e6891c2d7b633950cf7",
					name: "54.200.0.0/15",
					asn: {
						uid: "7e08f55b8ff44f63a9bb128d50acb8af",
						name: "AS16509",
						org_name: "Amazon.com, Inc.",
						domain: "amazon.com",
						created_by: "BL-BOT",
						created_at: "2023-03-31T12:30:58.365412+00:00",
						updated_at: "2023-03-31T12:50:24.984219+00:00",
						node_type: "ASN",
					},

					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31T12:42:35.422992+00:00",
					updated_at: "2023-03-31T12:42:35.423020+00:00",
					node_type: "IPBlock",
				},
				{
					uid: "848502bb40da4109b9bb7d9704b64201",
					name: "34.208.0.0/12",
					asn: {
						uid: "7e08f55b8ff44f63a9bb128d50acb8af",
						name: "AS16509",
						org_name: "Amazon.com, Inc.",
						domain: "amazon.com",
						created_by: "BL-BOT",
						created_at: "2023-03-31T12:30:58.365412+00:00",
						updated_at: "2023-03-31T12:50:24.984219+00:00",
						node_type: "ASN",
					},

					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 3,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31T12:42:17.532157+00:00",
					updated_at: "2023-03-31T12:47:22.787426+00:00",
					node_type: "IPBlock",
				},
				{
					uid: "c8a12adbe26f4943bf52570b8ccd65bc",
					name: "54.188.0.0/15",
					asn: {
						uid: "7e08f55b8ff44f63a9bb128d50acb8af",
						name: "AS16509",
						org_name: "Amazon.com, Inc.",
						domain: "amazon.com",
						created_by: "BL-BOT",
						created_at: "2023-03-31T12:30:58.365412+00:00",
						updated_at: "2023-03-31T12:50:24.984219+00:00",
						node_type: "ASN",
					},

					ip_addresses: {
						relation_type: "IP",
						node_type: "IPAddress",
						count: 1,
					},
					created_by: "BL-BOT",
					created_at: "2023-03-31T12:41:56.802222+00:00",
					updated_at: "2023-03-31T12:41:56.802250+00:00",
					node_type: "IPBlock",
				},
			],
		},
		message: "OK",
	},
};

export const darkWebData = {
	data: {
		success: true,
		data: {
			total: 2,
			nodes: [
				{
					uid: "9dd71bca4b044042b63a3c194637945e",
					name: "breachlock.com",
					source: "0X7T0gRYA7bJaNPuf+3LI2t9ew3CNm5mDiAufuScrB+yZAFYdZZ0hL4MFUPjmA/b",
					site: "RansomHouse",
					data: "breachlock.com",
					found: "20221002",
					created_at: "2023-05-01T11:21:14.250188+00:00",
					updated_at: "2023-05-01T11:42:36.950294+00:00",
					node_type: "DarkWeb",
					email: "test.com",
				},
				{
					uid: "7d3a8b1e87a54c8b99263facfdecc756",
					name: "breachlock.com",
					source: "4kAfImKVkrVSbph0edlddHUjaJdqFTHCw2G++gUIMU0/lQOryaRW6/SHgUkhC9X6",
					site: "APT5",
					data: "breachlock.com",
					found: "20221012",
					created_at: "2023-05-01T11:42:40.194463+00:00",
					updated_at: "2023-05-01T11:42:40.194493+00:00",
					node_type: "DarkWeb",
					email: "testinggorlimitssssssssss.com",
				},
			],
		},
		message: "OK",
	},
};

export const overallRiskData = {
	data: {
		success: true,
		data: {
			overall_risk: 0.36,
		},
		message: "OK",
	},
};
