export const infoData = {
	data: {
		data: {
			mappings: {
				asset: [
					{
						name: "ASN",
						value: "asn",
					},
					{
						name: "DNS",
						value: "dnsrecord",
					},
					{
						name: "IP BLOCKS",
						value: "ipblock",
					},
					{
						name: "IP ADDRESS",
						value: "ipaddress",
					},
					{
						name: "DOMAINS",
						value: "domain",
					},
					{
						name: "SUBDOMAINS",
						value: "asset",
					},
				],
				vulns: [
					{
						name: "Vulnerabilities",
						value: "vulnerability",
					},
					{
						name: "Findings",
						value: "POC",
					},
				],
				databreach: [
					{
						name: "Data Breach",
						value: "databreach",
					},
				],
			},
		},
	},
};

export const infoCountData = {
	data: {
		success: true,
		data: [
			{
				name: "ASN",
				value: "asn",
				endpoint: "/nodes",
				filters: ["node_type:eq:asn"],
				count: 1,
			},
			{
				name: "DNS",
				value: "dnsrecord",
				endpoint: "/nodes",
				filters: ["node_type:eq:dnsrecord"],
				count: 1,
			},
			{
				name: "Domains",
				value: "domain",
				endpoint: "/nodes",
				filters: ["node_type:eq:domain"],
				count: 1,
			},
			{
				name: "Subdomains",
				value: "asset",
				endpoint: "/nodes",
				filters: ["node_type:eq:asset"],
				count: 27,
			},
			{
				name: "IP Address",
				value: "asset",
				endpoint: "/nodes",
				filters: ["node_type:eq:ipaddress"],
				count: 185,
			},
			{
				name: "IP Blocks",
				value: "ipblock",
				endpoint: "/assets/ipblock",
				filters: ["node_type:eq:ipblock"],
				count: 23,
			},
		],
		message: "OK",
	},
};
