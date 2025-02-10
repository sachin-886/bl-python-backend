export const overAllCommentDummy = {
	organisationPentestComments: {
		total_vuln_comments: 7,
		total_pentest_comments: 36,
		comments: [
			{
				id: "0x356fb5",
				name: "pentest scan test parser",
				unread_vulns_comments: 3,
				unread_pentest_comments: 2,
				vuln_comments: [
					{
						id: "0x36caf1",
						created_at: "2024-11-07T04:16:52Z",
						isRead: false,
						isSeenByAdmin: false,
						isSeenByUser: false,
						message: "test we 10 comments",
						vulnName: "we test 10",
						vulnerabilityId: "0x36caee",
						severity: "LOW",
					},
					{
						id: "0x36caf2",
						created_at: "2024-11-07T04:17:17Z",
						isRead: false,
						isSeenByAdmin: false,
						isSeenByUser: false,
						message: "test vul standard comments",
						vulnName: "Vul Standard A Grey Box Web Application",
						vulnerabilityId: "0x36caea",
						severity: "HIGH",
					},
					{
						id: "0x36caf3",
						created_at: "2024-11-07T04:17:30Z",
						isRead: false,
						isSeenByAdmin: false,
						isSeenByUser: false,
						message: "test vul standard comment 2",
						vulnName: "Vul Standard A Grey Box Web Application",
						vulnerabilityId: "0x36caea",
						severity: "HIGH",
					},
				],
				pentest_comments: [
					{
						id: "0x36caf4",
						pentestId: "0x356fb5",
						message: "pentest scan test parser comment test",
						isSeenByUser: false,
						isSeenByAdmin: false,
						isRead: false,
						created_at: "2024-11-07T04:18:34Z",
					},
					{
						id: "0x36caf5",
						pentestId: "0x356fb5",
						message: "pentest scan test parser comment test",
						isSeenByUser: false,
						isSeenByAdmin: false,
						isRead: false,
						created_at: "2024-11-07T04:18:44Z",
					},
				],
			},
		],
	},
};

export const pentestIdDummyData = {
	getPentest: {
		id: "0x356fb5",
		ptId: "04ad342d-8ca4-4de7-8a8c-52157305254a",
	},
};
