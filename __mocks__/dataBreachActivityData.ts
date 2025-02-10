export const dataBreachCountDummy = {
	aggregateDarkWeb: {
		count: 4,
	},
	withoutPassword: {
		count: 2,
	},
	withPassword: {
		count: 2,
	},
};

export const darkWebDomaindummy = {
	queryDarkWeb: [
		{
			id: "breachlock_TEST-DARKWEB",
			name: "TEST-DARKWEB",
			site: "TEST-SITE",
			source: "TEST-SOURCE",
			found: "20210101",
		},
		{
			id: "breachlock_TEST-DARKWEB-HI",
			name: "TEST-DARKWEB",
			site: "TEST-SITE",
			source: "TEST-SOURCE",
			found: "20210101",
		},
		{
			id: "0xa6ad",
			name: "example.com",
			site: "Everest",
			source: "VJfpTFUJk1VQYHbhgg1keeVVuHknaVW9yvo0KCXP6dRcuBAO4ccn9daOlqAbhaLI",
			found: "20210101",
		},
		{
			id: "0xa6ad",
			name: "example.com",
			site: "Everest",
			source: "VJfpTFUJk1VQYHbhgg1keeVVuHknaVW9yvo0KCXP6dRcuBAO4ccn9daOlqAbhaLI",
			found: "20220501",
		},
	],
	aggregateDarkWeb: {
		count: 5,
	},
};

export const dataBreachDomaindummy = {
	withoutPassword: [
		{
			id: "0x44f0d",
			email: "zzzzzzzzzzlllllll@example.com",
			password:
				"$2y$10$jlWKXuZooaQX6SQakxNl2uRY7xEUdWRNlmnPr0ggAdOvc9sNpSM7q",
			source: "wattpad.com",
			createdAt: "2022-04-27T11:57:58.677Z",
		},
		{
			id: "0x44edb",
			email: "zzzzzzzz@example.com",
			password: "zzzzzzzz",
			source: "AntiPublic",
			createdAt: "2023-03-27T11:57:58.677Z",
		},
		{
			id: "0x44ee7",
			email: "zzzzzzz@example.com",
			password: "af28b852857dd4d85561389e29bd7524",
			source: "anstoss-online.de",
			createdAt: "2023-03-27T11:57:58.676Z",
		},
	],
	withPassword: [
		{
			id: "0x44f0d",
			email: "zzzzzzzzzzlllllll@example.com",
			password:
				"$2y$10$jlWKXuZooaQX6SQakxNl2uRY7xEUdWRNlmnPr0ggAdOvc9sNpSM7q",
			source: "wattpad.com",
			createdAt: "2024-01-27T11:57:58.677Z",
		},
		{
			id: "0x44edb",
			email: "zzzzzzzz@example.com",
			password: "zzzzzzzz",
			source: "AntiPublic",
			createdAt: "2024-04-27T11:57:58.677Z",
		},
		{
			id: "0x44ee7",
			email: "zzzzzzz@example.com",
			password: "af28b852857dd4d85561389e29bd7524",
			source: "anstoss-online.de",
			createdAt: "2024-01-27T11:57:58.676Z",
		},
	],
	aggregateDataBreach: {
		count: 204898,
	},
};

export const databreachExposeddummy = {
	queryDataBreach: [
		{
			id: "breachlock_test@breachlock.com",
			email: "test@breachlock.com",
			password: "TESTPASSWD",
			source: "TEST",
			createdAt: "2023-12-19T11:43:58.349977Z",
		},
		{
			id: "breachlock_test1@breachlock.com",
			email: "breachlock_test@breachlock.com",
			password: "While ",
			source: "Disable ",
			createdAt: "2023-12-18T11:54:41.468272Z",
		},
	],
	aggregateDataBreach: {
		count: 10,
	},
};

export const allbreachYearDummy = {
	breaches: [
		{
			count: 1,
			month: 8,
			year: 2024,
			hasPassword: true,
		},
		{
			count: 1,
			month: 6,
			year: 2023,
			hasPassword: false,
		},
	],
	darkwebs: [
		{
			count: 1,
			month: 8,
			year: 2024,
		},
	],
};
