/* eslint-disable quotes */
export const endpointsDummy = {
	queryURL: [
		{
			id: "0x32f73b",
			name: "https://djhjfg.com",
			endpoints: [
				{
					id: "0x336e21",
					name: "v1/users",
					methodsAggregate: {
						count: 2,
					},
					methods: [
						{
							headers: "[]",
							body: "{}",
							method: "GET",
							authentication: false,
						},
						{
							headers:
								'[{"key":"Content-Type","value":"application/json"}]',
							body: '"{\\n  \\"name\\": \\"John Doe\\",\\n  \\"email\\": \\"john.doe@example.com\\",\\n  \\"password\\": \\"securepassword\\",\\n  \\"phone\\": \\"+1234567890\\",\\n  \\"address\\": \\"123 Example St, City, Country\\"\\n}"',
							method: "POST",
							authentication: false,
						},
					],
				},
				{
					id: "0x336e1d",
					name: "v1/users/{{userId}}",
					methodsAggregate: {
						count: 3,
					},
					methods: [
						{
							headers: "[]",
							body: "{}",
							method: "GET",
							authentication: false,
						},
						{
							headers:
								'[{"key":"Content-Type","value":"application/json"}]',
							body: '"{\\n  \\"name\\": \\"Updated Name\\",\\n  \\"email\\": \\"updated.email@example.com\\",\\n  \\"password\\": \\"newpassword\\",\\n  \\"phone\\": \\"+1234567890\\",\\n  \\"address\\": \\"456 New Address St, New City, Country\\"\\n}"',
							method: "PUT",
							authentication: false,
						},
						{
							headers: "[]",
							body: "{}",
							method: "DELETE",
							authentication: false,
						},
					],
				},
			],
			endpointsAggregate: {
				count: 2,
			},
		},
	],
};

export const endpointsDetailsDummy = {
	queryEndPoint: [
		{
			id: "0x31e61f",
			name: "/example/{id}",
			methods: [
				{
					id: "0x320ce0",
					name: "sample text",
					description: null,
					method: "POST",
					body: null,
					totalResponses: 12,
					holders: "testing holders",
				},
				{
					id: "0x320ce1",
					name: "sample text",
					description: "test description",
					method: "POST",
					body: null,
					totalResponses: 5,
					holders: "testing holders",
				},
				{
					id: "0x320ce2",
					name: "sample text1",
					description: "test description",
					method: "POST",
					body: '{"mode":"raw","raw":{"category":{"testData":"Breachlock"},"id":10,"name":"doggie","photoUrls":["Breachlock","Pentesting"],"status":"Breachlock","tags":["Breachlock","Pentesting"]}}',
					totalResponses: 5,
					holders: "testing holders",
				},
				{
					id: "0x320ce4",
					name: "sample text2",
					description: "test description",
					method: "UPDATE",
					body: '{"mode":"raw","raw":{"category":{"testData":"Breachlock"},"id":10,"name":"doggie","photoUrls":["Breachlock","Pentesting"],"status":"Breachlock","tags":["Breachlock","Pentesting"]}}',
					totalResponses: 6,
					holders: "testing holders",
				},
				{
					id: "0x320ce5",
					name: "sample text 3",
					description: "test description",
					method: "UPDATE",
					body: '{"mode":"raw","raw":{"category":{"testData":"Breachlock"},"id":10,"name":"doggie","photoUrls":["Breachlock","Pentesting"],"status":"Breachlock","tags":["Breachlock","Pentesting"]}}',
					totalResponses: 7,
					holders: "testing holders",
				},
				{
					id: "0x320ce6",
					name: "sample text 5",
					description: "test description",
					method: "PATCH",
					body: '{"mode":"raw","raw":{"category":{"testData":"Breachlock"},"id":10,"name":"doggie","photoUrls":["Breachlock","Pentesting"],"status":"Breachlock","tags":["Breachlock","Pentesting"]}}',
					totalResponses: 5,
					holders: "testing holders",
				},
				{
					id: "0x320ce7",
					name: "sample text 6",
					description: "test description",
					method: "GET",
					body: '{"mode":"raw","raw":{"category":{"testData":"Breachlock"},"id":10,"name":"doggie","photoUrls":["Breachlock","Pentesting"],"status":"Breachlock","tags":["Breachlock","Pentesting"]}}',
					totalResponses: 8,
					holders: "testing holders",
				},
				{
					id: "0x320ce8",
					name: "sample text 8",
					description: "test description",
					method: "GET",
					body: '{"mode":"raw","raw":{"category":{"testData":"Breachlock"},"id":10,"name":"doggie","photoUrls":["Breachlock","Pentesting"],"status":"Breachlock","tags":["Breachlock","Pentesting"]}}',
					totalResponses: 9,
					holders: "testing holders",
				},
				{
					id: "0x320ce9",
					name: "sample text 9",
					description: "test description",
					method: "GET",
					body: '{"mode":"raw","raw":{"category":{"testData":"Breachlock"},"id":10,"name":"doggie","photoUrls":["Breachlock","Pentesting"],"status":"Breachlock","tags":["Breachlock","Pentesting"]}}',
					totalResponses: 10,
					holders: "testing holders",
				},
				{
					id: "0x320cea",
					name: "sample text 10",
					description: "test description",
					method: "PUT",
					body: '{"mode":"raw","raw":{"category":{"testData":"Breachlock"},"id":10,"name":"doggie","photoUrls":["Breachlock","Pentesting"],"status":"Breachlock","tags":["Breachlock","Pentesting"]}}',
					totalResponses: 15,
					holders: "testing holders",
				},
			],
			methodsAggregate: {
				count: 10,
			},
		},
	],
};

export const updateIsArchivedEndpointsDummy = {
	updateEndPoint: {
		numUids: 1,
	},
};
