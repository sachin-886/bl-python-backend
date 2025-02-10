enum AccessLevel {
	"Super",
	"Standard",
	"Extended",
	"Extensive",
}

enum Role {
	"Admin",
	"SuperAdmin",
	"User",
	"Analyst",
}

export const AccessLevelBasedUsers = {
	super: {
		super: {
			name: "Super User",
			email: "superUser@breachlock.com",
			role: [Role.SuperAdmin],
			accessLevel: AccessLevel.Super,
		},
	},
	standard: {
		admin: {
			name: "Admin User",
			email: "standard_admin@example.com",
			role: [Role.Admin],
			accessLevel: AccessLevel.Standard,
		},
		user: {
			name: "User",
			email: "standard_user@example.com",
			role: [Role.User],
			accessLevel: AccessLevel.Standard,
		},
		analyst: {
			name: "Analyst",
			email: "standard_analyst@example.com",
			role: [Role.Analyst],
			accessLeve: AccessLevel.Standard,
		},
	},
	extensive: {
		admin: {
			name: "Admin User",
			email: "extensive_admin@example.com",
			role: [Role.Admin],
			accessLevel: AccessLevel.Extensive,
		},
		user: {
			name: "User",
			email: "extensive_user@example.com",
			role: [Role.User],
			accessLevel: AccessLevel.Extensive,
		},
		analyst: {
			name: "Analyst",
			email: "extensive_analyst@example.com",
			role: [Role.Analyst],
			accessLeve: AccessLevel.Extensive,
		},
	},
	extended: {
		admin: {
			name: "Admin User",
			email: "extended_admin@example.com",
			role: [Role.Admin],
			accessLevel: AccessLevel.Extended,
		},
		user: {
			name: "User",
			email: "extended_user@example.com",
			role: [Role.User],
			accessLevel: AccessLevel.Extended,
		},
		analyst: {
			name: "Analyst",
			email: "extended_analyst@example.com",
			role: [Role.Analyst],
			accessLeve: AccessLevel.Extended,
		},
	},
};
