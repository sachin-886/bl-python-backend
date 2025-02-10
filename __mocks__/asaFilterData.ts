export const portDummyData = {
	queryIPAddress: [
		{
			services: [
				{
					port: 80,
				},
				{
					port: 70,
				},
			],
		},
		{
			services: [
				{
					port: 90,
				},
			],
		},
	],
};

export const ciphersuiteDummyData = {
	queryAsset: [
		{
			certificate: {
				ciphersuite: "ECDHE-RSA-AES256-GCM-SHA384",
			},
		},
		{
			certificate: {
				ciphersuite: "TLS_AES_128_GCM_SHA256",
			},
		},
	],
};

export const tlsDummyData = {
	queryAsset: [
		{
			certificate: {
				tls_version: "TLSv1.2",
			},
		},
		{
			certificate: {
				tls_version: "TLSv1.2233",
			},
		},
		{
			certificate: {
				tls_version: null,
			},
		},
	],
};

export const firewallDummyData = {
	queryDomain: [
		{
			firewall_name: ["dsfasdfasdfsadfasd", "asdfaswdf"],
		},
		{
			firewall_name: ["Asdfasdfasd", "asdfasdfas"],
		},
		{
			firewall_name: [],
		},
	],
};
