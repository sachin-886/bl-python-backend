/* eslint-disable quotes */
export const opneApi2 = {
	swagger: "2.0",
	info: {
		description:
			"This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
		version: "1.0.6",
		title: "Swagger Petstore",
		termsOfService: "http://swagger.io/terms/",
		contact: {
			email: "apiteam@swagger.io",
		},
		license: {
			name: "Apache 2.0",
			url: "http://www.apache.org/licenses/LICENSE-2.0.html",
		},
	},
	host: "petstore.swagger.io",
	basePath: "/v2",
	tags: [
		{
			name: "pet",
			description: "Everything about your Pets",
			externalDocs: {
				description: "Find out more",
				url: "http://swagger.io",
			},
		},
		{
			name: "store",
			description: "Access to Petstore orders",
		},
		{
			name: "user",
			description: "Operations about user",
			externalDocs: {
				description: "Find out more about our store",
				url: "http://swagger.io",
			},
		},
	],
	schemes: ["https", "http"],
	paths: {
		"/pet/{petId}/uploadImage": {
			post: {
				tags: ["pet"],
				summary: "uploads an image",
				description: "",
				operationId: "uploadFile",
				consumes: ["multipart/form-data"],
				produces: ["application/json"],
				parameters: [
					{
						name: "petId",
						in: "path",
						description: "ID of pet to update",
						required: true,
						type: "integer",
						format: "int64",
					},
					{
						name: "additionalMetadata",
						in: "formData",
						description: "Additional data to pass to server",
						required: false,
						type: "string",
					},
					{
						name: "file",
						in: "formData",
						description: "file to upload",
						required: false,
						type: "file",
					},
				],
				responses: {
					"200": {
						description: "successful operation",
						schema: {
							$ref: "#/definitions/ApiResponse",
						},
					},
				},
				security: [
					{
						petstore_auth: ["write:pets", "read:pets"],
					},
				],
			},
		},
		"/pet": {
			post: {
				tags: ["pet"],
				summary: "Add a new pet to the store",
				description: "",
				operationId: "addPet",
				consumes: ["application/json", "application/xml"],
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						in: "body",
						name: "body",
						description:
							"Pet object that needs to be added to the store",
						required: true,
						schema: {
							$ref: "#/definitions/Pet",
						},
					},
				],
				responses: {
					"405": {
						description: "Invalid input",
					},
				},
				security: [
					{
						petstore_auth: ["write:pets", "read:pets"],
					},
				],
			},
			put: {
				tags: ["pet"],
				summary: "Update an existing pet",
				description: "",
				operationId: "updatePet",
				consumes: ["application/json", "application/xml"],
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						in: "body",
						name: "body",
						description:
							"Pet object that needs to be added to the store",
						required: true,
						schema: {
							$ref: "#/definitions/Pet",
						},
					},
				],
				responses: {
					"400": {
						description: "Invalid ID supplied",
					},
					"404": {
						description: "Pet not found",
					},
					"405": {
						description: "Validation exception",
					},
				},
				security: [
					{
						petstore_auth: ["write:pets", "read:pets"],
					},
				],
			},
		},
		"/pet/findByStatus": {
			get: {
				tags: ["pet"],
				summary: "Finds Pets by status",
				description:
					"Multiple status values can be provided with comma separated strings",
				operationId: "findPetsByStatus",
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "status",
						in: "query",
						description:
							"Status values that need to be considered for filter",
						required: true,
						type: "array",
						items: {
							type: "string",
							enum: ["available", "pending", "sold"],
							default: "available",
						},
						collectionFormat: "multi",
					},
				],
				responses: {
					"200": {
						description: "successful operation",
						schema: {
							type: "array",
							items: {
								$ref: "#/definitions/Pet",
							},
						},
					},
					"400": {
						description: "Invalid status value",
					},
				},
				security: [
					{
						petstore_auth: ["write:pets", "read:pets"],
					},
				],
			},
		},
		"/pet/findByTags": {
			get: {
				tags: ["pet"],
				summary: "Finds Pets by tags",
				description:
					"Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
				operationId: "findPetsByTags",
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "tags",
						in: "query",
						description: "Tags to filter by",
						required: true,
						type: "array",
						items: {
							type: "string",
						},
						collectionFormat: "multi",
					},
				],
				responses: {
					"200": {
						description: "successful operation",
						schema: {
							type: "array",
							items: {
								$ref: "#/definitions/Pet",
							},
						},
					},
					"400": {
						description: "Invalid tag value",
					},
				},
				security: [
					{
						petstore_auth: ["write:pets", "read:pets"],
					},
				],
				deprecated: true,
			},
		},
		"/pet/{petId}": {
			get: {
				tags: ["pet"],
				summary: "Find pet by ID",
				description: "Returns a single pet",
				operationId: "getPetById",
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "petId",
						in: "path",
						description: "ID of pet to return",
						required: true,
						type: "integer",
						format: "int64",
					},
				],
				responses: {
					"200": {
						description: "successful operation",
						schema: {
							$ref: "#/definitions/Pet",
						},
					},
					"400": {
						description: "Invalid ID supplied",
					},
					"404": {
						description: "Pet not found",
					},
				},
				security: [
					{
						api_key: [],
					},
				],
			},
			post: {
				tags: ["pet"],
				summary: "Updates a pet in the store with form data",
				description: "",
				operationId: "updatePetWithForm",
				consumes: ["application/x-www-form-urlencoded"],
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "petId",
						in: "path",
						description: "ID of pet that needs to be updated",
						required: true,
						type: "integer",
						format: "int64",
					},
					{
						name: "name",
						in: "formData",
						description: "Updated name of the pet",
						required: false,
						type: "string",
					},
					{
						name: "status",
						in: "formData",
						description: "Updated status of the pet",
						required: false,
						type: "string",
					},
				],
				responses: {
					"405": {
						description: "Invalid input",
					},
				},
				security: [
					{
						petstore_auth: ["write:pets", "read:pets"],
					},
				],
			},
			delete: {
				tags: ["pet"],
				summary: "Deletes a pet",
				description: "",
				operationId: "deletePet",
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "api_key",
						in: "header",
						required: false,
						type: "string",
					},
					{
						name: "petId",
						in: "path",
						description: "Pet id to delete",
						required: true,
						type: "integer",
						format: "int64",
					},
				],
				responses: {
					"400": {
						description: "Invalid ID supplied",
					},
					"404": {
						description: "Pet not found",
					},
				},
				security: [
					{
						petstore_auth: ["write:pets", "read:pets"],
					},
				],
			},
		},
		"/store/order": {
			post: {
				tags: ["store"],
				summary: "Place an order for a pet",
				description: "",
				operationId: "placeOrder",
				consumes: ["application/json"],
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						in: "body",
						name: "body",
						description: "order placed for purchasing the pet",
						required: true,
						schema: {
							$ref: "#/definitions/Order",
						},
					},
				],
				responses: {
					"200": {
						description: "successful operation",
						schema: {
							$ref: "#/definitions/Order",
						},
					},
					"400": {
						description: "Invalid Order",
					},
				},
			},
		},
		"/store/order/{orderId}": {
			get: {
				tags: ["store"],
				summary: "Find purchase order by ID",
				description:
					"For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions",
				operationId: "getOrderById",
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "orderId",
						in: "path",
						description: "ID of pet that needs to be fetched",
						required: true,
						type: "integer",
						maximum: 10,
						minimum: 1,
						format: "int64",
					},
				],
				responses: {
					"200": {
						description: "successful operation",
						schema: {
							$ref: "#/definitions/Order",
						},
					},
					"400": {
						description: "Invalid ID supplied",
					},
					"404": {
						description: "Order not found",
					},
				},
			},
			delete: {
				tags: ["store"],
				summary: "Delete purchase order by ID",
				description:
					"For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors",
				operationId: "deleteOrder",
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "orderId",
						in: "path",
						description: "ID of the order that needs to be deleted",
						required: true,
						type: "integer",
						minimum: 1,
						format: "int64",
					},
				],
				responses: {
					"400": {
						description: "Invalid ID supplied",
					},
					"404": {
						description: "Order not found",
					},
				},
			},
		},
		"/store/inventory": {
			get: {
				tags: ["store"],
				summary: "Returns pet inventories by status",
				description: "Returns a map of status codes to quantities",
				operationId: "getInventory",
				produces: ["application/json"],
				parameters: [],
				responses: {
					"200": {
						description: "successful operation",
						schema: {
							type: "object",
							additionalProperties: {
								type: "integer",
								format: "int32",
							},
						},
					},
				},
				security: [
					{
						api_key: [],
					},
				],
			},
		},
		"/user/createWithArray": {
			post: {
				tags: ["user"],
				summary: "Creates list of users with given input array",
				description: "",
				operationId: "createUsersWithArrayInput",
				consumes: ["application/json"],
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						in: "body",
						name: "body",
						description: "List of user object",
						required: true,
						schema: {
							type: "array",
							items: {
								$ref: "#/definitions/User",
							},
						},
					},
				],
				responses: {
					default: {
						description: "successful operation",
					},
				},
			},
		},
		"/user/createWithList": {
			post: {
				tags: ["user"],
				summary: "Creates list of users with given input array",
				description: "",
				operationId: "createUsersWithListInput",
				consumes: ["application/json"],
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						in: "body",
						name: "body",
						description: "List of user object",
						required: true,
						schema: {
							type: "array",
							items: {
								$ref: "#/definitions/User",
							},
						},
					},
				],
				responses: {
					default: {
						description: "successful operation",
					},
				},
			},
		},
		"/user/{username}": {
			get: {
				tags: ["user"],
				summary: "Get user by user name",
				description: "",
				operationId: "getUserByName",
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "username",
						in: "path",
						description:
							"The name that needs to be fetched. Use user1 for testing. ",
						required: true,
						type: "string",
					},
				],
				responses: {
					"200": {
						description: "successful operation",
						schema: {
							$ref: "#/definitions/User",
						},
					},
					"400": {
						description: "Invalid username supplied",
					},
					"404": {
						description: "User not found",
					},
				},
			},
			put: {
				tags: ["user"],
				summary: "Updated user",
				description: "This can only be done by the logged in user.",
				operationId: "updateUser",
				consumes: ["application/json"],
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "username",
						in: "path",
						description: "name that need to be updated",
						required: true,
						type: "string",
					},
					{
						in: "body",
						name: "body",
						description: "Updated user object",
						required: true,
						schema: {
							$ref: "#/definitions/User",
						},
					},
				],
				responses: {
					"400": {
						description: "Invalid user supplied",
					},
					"404": {
						description: "User not found",
					},
				},
			},
			delete: {
				tags: ["user"],
				summary: "Delete user",
				description: "This can only be done by the logged in user.",
				operationId: "deleteUser",
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "username",
						in: "path",
						description: "The name that needs to be deleted",
						required: true,
						type: "string",
					},
				],
				responses: {
					"400": {
						description: "Invalid username supplied",
					},
					"404": {
						description: "User not found",
					},
				},
			},
		},
		"/user/login": {
			get: {
				tags: ["user"],
				summary: "Logs user into the system",
				description: "",
				operationId: "loginUser",
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						name: "username",
						in: "query",
						description: "The user name for login",
						required: true,
						type: "string",
					},
					{
						name: "password",
						in: "query",
						description: "The password for login in clear text",
						required: true,
						type: "string",
					},
				],
				responses: {
					"200": {
						description: "successful operation",
						headers: {
							"X-Expires-After": {
								type: "string",
								format: "date-time",
								description: "date in UTC when token expires",
							},
							"X-Rate-Limit": {
								type: "integer",
								format: "int32",
								description:
									"calls per hour allowed by the user",
							},
						},
						schema: {
							type: "string",
						},
					},
					"400": {
						description: "Invalid username/password supplied",
					},
				},
			},
		},
		"/user/logout": {
			get: {
				tags: ["user"],
				summary: "Logs out current logged in user session",
				description: "",
				operationId: "logoutUser",
				produces: ["application/json", "application/xml"],
				parameters: [],
				responses: {
					default: {
						description: "successful operation",
					},
				},
			},
		},
		"/user": {
			post: {
				tags: ["user"],
				summary: "Create user",
				description: "This can only be done by the logged in user.",
				operationId: "createUser",
				consumes: ["application/json"],
				produces: ["application/json", "application/xml"],
				parameters: [
					{
						in: "body",
						name: "body",
						description: "Created user object",
						required: true,
						schema: {
							$ref: "#/definitions/User",
						},
					},
				],
				responses: {
					default: {
						description: "successful operation",
					},
				},
			},
		},
	},
	securityDefinitions: {
		api_key: {
			type: "apiKey",
			name: "api_key",
			in: "header",
		},
		petstore_auth: {
			type: "oauth2",
			authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
			flow: "implicit",
			scopes: {
				"read:pets": "read your pets",
				"write:pets": "modify pets in your account",
			},
		},
	},
	definitions: {
		ApiResponse: {
			type: "object",
			properties: {
				code: {
					type: "integer",
					format: "int32",
				},
				type: {
					type: "string",
				},
				message: {
					type: "string",
				},
			},
		},
		Category: {
			type: "object",
			properties: {
				id: {
					type: "integer",
					format: "int64",
				},
				name: {
					type: "string",
				},
			},
			xml: {
				name: "Category",
			},
		},
		Pet: {
			type: "object",
			required: ["name", "photoUrls"],
			properties: {
				id: {
					type: "integer",
					format: "int64",
				},
				category: {
					$ref: "#/definitions/Category",
				},
				name: {
					type: "string",
					example: "doggie",
				},
				photoUrls: {
					type: "array",
					xml: {
						wrapped: true,
					},
					items: {
						type: "string",
						xml: {
							name: "photoUrl",
						},
					},
				},
				tags: {
					type: "array",
					xml: {
						wrapped: true,
					},
					items: {
						xml: {
							name: "tag",
						},
						$ref: "#/definitions/Tag",
					},
				},
				status: {
					type: "string",
					description: "pet status in the store",
					enum: ["available", "pending", "sold"],
				},
			},
			xml: {
				name: "Pet",
			},
		},
		Tag: {
			type: "object",
			properties: {
				id: {
					type: "integer",
					format: "int64",
				},
				name: {
					type: "string",
				},
			},
			xml: {
				name: "Tag",
			},
		},
		Order: {
			type: "object",
			properties: {
				id: {
					type: "integer",
					format: "int64",
				},
				petId: {
					type: "integer",
					format: "int64",
				},
				quantity: {
					type: "integer",
					format: "int32",
				},
				shipDate: {
					type: "string",
					format: "date-time",
				},
				status: {
					type: "string",
					description: "Order Status",
					enum: ["placed", "approved", "delivered"],
				},
				complete: {
					type: "boolean",
				},
			},
			xml: {
				name: "Order",
			},
		},
		User: {
			type: "object",
			properties: {
				id: {
					type: "integer",
					format: "int64",
				},
				username: {
					type: "string",
				},
				firstName: {
					type: "string",
				},
				lastName: {
					type: "string",
				},
				email: {
					type: "string",
				},
				password: {
					type: "string",
				},
				phone: {
					type: "string",
				},
				userStatus: {
					type: "integer",
					format: "int32",
					description: "User Status",
				},
			},
			xml: {
				name: "User",
			},
		},
	},
	externalDocs: {
		description: "Find out more about Swagger",
		url: "http://swagger.io",
	},
};

export const opneApi2fromApi = [
	{
		endpoint: "/pet/%7BpetId%7D/uploadImage",
		request: [
			{
				request: {
					auth: true,
					description: {
						content: "",
						type: "multipart/form-data",
					},
					method: "post",
					name: "uploads an image",
					url: {
						host: ["https://exam.com"],
						path: ["pet", "{petId}", "uploadImage"],
						query: [],
						variable: [
							{
								description: "ID of pet to update",
								disabled: false,
								key: "petId",
								type: "integer",
								value: 10,
							},
						],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/pet/%7BpetId%7D/uploadImage",
	},
	{
		endpoint: "/pet",
		request: [
			{
				request: {
					auth: true,
					body: {
						mode: "raw",
						raw: {
							category: {
								testData: "Breachlock",
							},
							id: 10,
							name: "doggie",
							photoUrls: ["Breachlock", "Pentesting"],
							status: "Breachlock",
							tags: ["Breachlock", "Pentesting"],
						},
					},
					description: {
						content: "",
						type: "application/json",
					},
					method: "post",
					name: "Add a new pet to the store",
					url: {
						host: ["https://exam.com"],
						path: ["pet"],
						query: [],
						variable: [],
					},
				},
				response: [[]],
			},
			{
				request: {
					auth: true,
					body: {
						mode: "raw",
						raw: {
							category: {
								testData: "Breachlock",
							},
							id: 10,
							name: "doggie",
							photoUrls: ["Breachlock", "Pentesting"],
							status: "Breachlock",
							tags: ["Breachlock", "Pentesting"],
						},
					},
					description: {
						content: "",
						type: "application/json",
					},
					method: "put",
					name: "Update an existing pet",
					url: {
						host: ["https://exam.com"],
						path: ["pet"],
						query: [],
						variable: [],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/pet",
	},
	{
		endpoint: "/pet/findByStatus",
		request: [
			{
				request: {
					auth: true,
					description: {
						content:
							"Multiple status values can be provided with comma separated strings",
						type: "",
					},
					method: "get",
					name: "Finds Pets by status",
					url: {
						host: ["https://exam.com"],
						path: ["pet", "findByStatus"],
						query: [
							{
								description:
									"Status values that need to be considered for filter",
								disabled: false,
								key: "status",
								type: "array",
								value: ["Breachlock", "Pentesting"],
							},
						],
						variable: [],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/pet/findByStatus",
	},
	{
		endpoint: "/pet/findByTags",
		request: [
			{
				request: {
					auth: true,
					description: {
						content:
							"Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
						type: "",
					},
					method: "get",
					name: "Finds Pets by tags",
					url: {
						host: ["https://exam.com"],
						path: ["pet", "findByTags"],
						query: [
							{
								description: "Tags to filter by",
								disabled: false,
								key: "tags",
								type: "array",
								value: ["Breachlock", "Pentesting"],
							},
						],
						variable: [],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/pet/findByTags",
	},
	{
		endpoint: "/pet/%7BpetId%7D",
		request: [
			{
				request: {
					auth: true,
					description: {
						content: "Returns a single pet",
						type: "",
					},
					method: "get",
					name: "Find pet by ID",
					url: {
						host: ["https://exam.com"],
						path: ["pet", "{petId}"],
						query: [],
						variable: [
							{
								description: "ID of pet to return",
								disabled: false,
								key: "petId",
								type: "integer",
								value: 10,
							},
						],
					},
				},
				response: [[]],
			},
			{
				request: {
					auth: true,
					description: {
						content: "",
						type: "application/x-www-form-urlencoded",
					},
					method: "post",
					name: "Updates a pet in the store with form data",
					url: {
						host: ["https://exam.com"],
						path: ["pet", "{petId}"],
						query: [],
						variable: [
							{
								description:
									"ID of pet that needs to be updated",
								disabled: false,
								key: "petId",
								type: "integer",
								value: 10,
							},
						],
					},
				},
				response: [[]],
			},
			{
				request: {
					auth: true,
					description: {
						content: "",
						type: "",
					},
					header: [
						{
							key: "api_key",
							value: "string",
						},
					],
					method: "delete",
					name: "Deletes a pet",
					url: {
						host: ["https://exam.com"],
						path: ["pet", "{petId}"],
						query: [],
						variable: [
							{
								description: "Pet id to delete",
								disabled: false,
								key: "petId",
								type: "integer",
								value: 10,
							},
						],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/pet/%7BpetId%7D",
	},
	{
		endpoint: "/store/order",
		request: [
			{
				request: {
					auth: {},
					body: {
						mode: "raw",
						raw: {
							complete: true,
							id: 10,
							petId: 10,
							quantity: 10,
							shipDate: "Breachlock",
							status: "Breachlock",
						},
					},
					description: {
						content: "",
						type: "application/json",
					},
					method: "post",
					name: "Place an order for a pet",
					url: {
						host: ["https://exam.com"],
						path: ["store", "order"],
						query: [],
						variable: [],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/store/order",
	},
	{
		endpoint: "/store/order/%7BorderId%7D",
		request: [
			{
				request: {
					auth: {},
					description: {
						content:
							"For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions",
						type: "",
					},
					method: "get",
					name: "Find purchase order by ID",
					url: {
						host: ["https://exam.com"],
						path: ["store", "order", "{orderId}"],
						query: [],
						variable: [
							{
								description:
									"ID of pet that needs to be fetched",
								disabled: false,
								key: "orderId",
								type: "integer",
								value: 10,
							},
						],
					},
				},
				response: [[]],
			},
			{
				request: {
					auth: {},
					description: {
						content:
							"For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors",
						type: "",
					},
					method: "delete",
					name: "Delete purchase order by ID",
					url: {
						host: ["https://exam.com"],
						path: ["store", "order", "{orderId}"],
						query: [],
						variable: [
							{
								description:
									"ID of the order that needs to be deleted",
								disabled: false,
								key: "orderId",
								type: "integer",
								value: 10,
							},
						],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/store/order/%7BorderId%7D",
	},
	{
		endpoint: "/store/inventory",
		request: [
			{
				request: {
					auth: true,
					description: {
						content: "Returns a map of status codes to quantities",
						type: "",
					},
					method: "get",
					name: "Returns pet inventories by status",
					url: {
						host: ["https://exam.com"],
						path: ["store", "inventory"],
						query: [],
						variable: [],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/store/inventory",
	},
	{
		endpoint: "/user/createWithArray",
		request: [
			{
				request: {
					auth: {},
					body: {
						mode: "raw",
						raw: ["Breachlock", "Pentesting"],
					},
					description: {
						content: "",
						type: "application/json",
					},
					method: "post",
					name: "Creates list of users with given input array",
					url: {
						host: ["https://exam.com"],
						path: ["user", "createWithArray"],
						query: [],
						variable: [],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/user/createWithArray",
	},
	{
		endpoint: "/user/createWithList",
		request: [
			{
				request: {
					auth: {},
					body: {
						mode: "raw",
						raw: ["Breachlock", "Pentesting"],
					},
					description: {
						content: "",
						type: "application/json",
					},
					method: "post",
					name: "Creates list of users with given input array",
					url: {
						host: ["https://exam.com"],
						path: ["user", "createWithList"],
						query: [],
						variable: [],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/user/createWithList",
	},
	{
		endpoint: "/user/%7Busername%7D",
		request: [
			{
				request: {
					auth: {},
					description: {
						content: "",
						type: "",
					},
					method: "get",
					name: "Get user by user name",
					url: {
						host: ["https://exam.com"],
						path: ["user", "{username}"],
						query: [],
						variable: [
							{
								description:
									"The name that needs to be fetched. Use user1 for testing. ",
								disabled: false,
								key: "username",
								type: "string",
								value: "Breachlock",
							},
						],
					},
				},
				response: [[]],
			},
			{
				request: {
					auth: {},
					body: {
						mode: "raw",
						raw: {
							email: "Breachlock",
							firstName: "Breachlock",
							id: 10,
							lastName: "Breachlock",
							password: "Breachlock",
							phone: "Breachlock",
							userStatus: 10,
							username: "Breachlock",
						},
					},
					description: {
						content: "This can only be done by the logged in user.",
						type: "application/json",
					},
					method: "put",
					name: "Updated user",
					url: {
						host: ["https://exam.com"],
						path: ["user", "{username}"],
						query: [],
						variable: [
							{
								description: "name that need to be updated",
								disabled: false,
								key: "username",
								type: "string",
								value: "Breachlock",
							},
						],
					},
				},
				response: [[]],
			},
			{
				request: {
					auth: {},
					description: {
						content: "This can only be done by the logged in user.",
						type: "",
					},
					method: "delete",
					name: "Delete user",
					url: {
						host: ["https://exam.com"],
						path: ["user", "{username}"],
						query: [],
						variable: [
							{
								description:
									"The name that needs to be deleted",
								disabled: false,
								key: "username",
								type: "string",
								value: "Breachlock",
							},
						],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/user/%7Busername%7D",
	},
	{
		endpoint: "/user/login",
		request: [
			{
				request: {
					auth: {},
					description: {
						content: "",
						type: "",
					},
					method: "get",
					name: "Logs user into the system",
					url: {
						host: ["https://exam.com"],
						path: ["user", "login"],
						query: [
							{
								description: "The user name for login",
								disabled: false,
								key: "username",
								type: "string",
								value: "Breachlock",
							},
							{
								description:
									"The password for login in clear text",
								disabled: false,
								key: "password",
								type: "string",
								value: "Breachlock",
							},
						],
						variable: [],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/user/login",
	},
	{
		endpoint: "/user/logout",
		request: [
			{
				request: {
					auth: {},
					description: {
						content: "",
						type: "",
					},
					method: "get",
					name: "Logs out current logged in user session",
					url: {
						host: ["https://exam.com"],
						path: ["user", "logout"],
						query: [],
						variable: [],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/user/logout",
	},
	{
		endpoint: "/user",
		request: [
			{
				request: {
					auth: {},
					body: {
						mode: "raw",
						raw: {
							email: "Breachlock",
							firstName: "Breachlock",
							id: 10,
							lastName: "Breachlock",
							password: "Breachlock",
							phone: "Breachlock",
							userStatus: 10,
							username: "Breachlock",
						},
					},
					description: {
						content: "This can only be done by the logged in user.",
						type: "application/json",
					},
					method: "post",
					name: "Create user",
					url: {
						host: ["https://exam.com"],
						path: ["user"],
						query: [],
						variable: [],
					},
				},
				response: [[]],
			},
		],
		url: "https://exam.com/user",
	},
];

export const postManfromApi = [
	{
		endpoint: "/api/v1/beta_feedback(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/beta_feedback#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "beta_feedback(.:format)"],
						raw: "{{baseUrl}}/api/v1/beta_feedback(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/beta_feedback(.:format)",
	},
	{
		endpoint: "/api/v1/docs(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "redirect(301,",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "docs(.:format)"],
						raw: "{{baseUrl}}/api/v1/docs(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/docs(.:format)",
	},
	{
		endpoint: "/api/v1/tax_documents/:year/:form_id.:format",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tax_documents#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tax_documents",
							":year",
							":form_id.:format",
						],
						raw: "{{baseUrl}}/api/v1/tax_documents/:year/:form_id.:format",
						variable: [
							{
								key: "year",
							},
							{
								key: "form_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tax_documents/:year/:form_id.:format",
	},
	{
		endpoint: "/api/v1/events/event_created(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/events#event_created",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"events",
							"event_created(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/events/event_created(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/events/event_created(.:format)",
	},
	{
		endpoint: "/api/v1/swagger_spec(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/swagger_specs#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "swagger_spec(.:format)"],
						raw: "{{baseUrl}}/api/v1/swagger_spec(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/swagger_spec(.:format)",
	},
	{
		endpoint: "/api/v1/boost_rates(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/boost_rates#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "boost_rates(.:format)"],
						raw: "{{baseUrl}}/api/v1/boost_rates(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/boost_rates(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_proposal_rate_adjustments/bulk_update_facilities_smart_rate_recommended_adjustments(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/shift_proposal_rate_adjustments#bulk_update_facilities_smart_rate_recommended_adjustments",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposal_rate_adjustments",
							"bulk_update_facilities_smart_rate_recommended_adjustments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposal_rate_adjustments/bulk_update_facilities_smart_rate_recommended_adjustments(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposal_rate_adjustments/bulk_update_facilities_smart_rate_recommended_adjustments(.:format)",
	},
	{
		endpoint: "/api/v1/shift_proposal_rate_adjustments(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/shift_proposal_rate_adjustments#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposal_rate_adjustments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposal_rate_adjustments(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposal_rate_adjustments(.:format)",
	},
	{
		endpoint:
			"/api/v1/bill_department_payment_methods/:id/make_default(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/bill_department_payment_methods#make_default",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"bill_department_payment_methods",
							":id",
							"make_default(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/bill_department_payment_methods/:id/make_default(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/bill_department_payment_methods/:id/make_default(.:format)",
	},
	{
		endpoint: "/api/v1/bill_department_payment_methods/:id/hide(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/bill_department_payment_methods#hide",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"bill_department_payment_methods",
							":id",
							"hide(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/bill_department_payment_methods/:id/hide(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/bill_department_payment_methods/:id/hide(.:format)",
	},
	{
		endpoint: "/api/v1/bill_department_payment_methods(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/bill_department_payment_methods#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"bill_department_payment_methods(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/bill_department_payment_methods(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/bill_department_payment_methods#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"bill_department_payment_methods(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/bill_department_payment_methods(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/bill_department_payment_methods(.:format)",
	},
	{
		endpoint: "/api/v1/brands/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/brands#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "brands", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/brands/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/brands/:id(.:format)",
	},
	{
		endpoint: "/api/v1/cases(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/cases#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "cases(.:format)"],
						raw: "{{baseUrl}}/api/v1/cases(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/cases(.:format)",
	},
	{
		endpoint: "/api/v1/cases/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/cases#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "cases", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/cases/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/cases/:id(.:format)",
	},
	{
		endpoint: "/api/v1/calendars(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/calendars#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "calendars(.:format)"],
						raw: "{{baseUrl}}/api/v1/calendars(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/calendars(.:format)",
	},
	{
		endpoint: "/api/v1/communications/:id/viewed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/communications#viewed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"communications",
							":id",
							"viewed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/communications/:id/viewed(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/communications/:id/viewed(.:format)",
	},
	{
		endpoint: "/api/v1/assignments/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/assignments#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "assignments", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/assignments/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/assignments/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/professionals_assignments/claim_bundled_assignment(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professionals_assignments#claim_bundled_assignment",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_assignments",
							"claim_bundled_assignment(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_assignments/claim_bundled_assignment(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_assignments/claim_bundled_assignment(.:format)",
	},
	{
		endpoint: "/api/v1/professionals_assignments/:id(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professionals_assignments#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_assignments",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_assignments/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/professionals_assignments#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_assignments",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_assignments/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_assignments/:id(.:format)",
	},
	{
		endpoint: "/api/v1/professionals_assignments(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professionals_assignments#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_assignments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_assignments(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_assignments(.:format)",
	},
	{
		endpoint: "/api/v1/contract_agreements(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/contract_agreements#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "contract_agreements(.:format)"],
						raw: "{{baseUrl}}/api/v1/contract_agreements(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/contract_agreements(.:format)",
	},
	{
		endpoint: "/api/v1/countries(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/countries#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "countries(.:format)"],
						raw: "{{baseUrl}}/api/v1/countries(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/countries(.:format)",
	},
	{
		endpoint: "/api/v1/countries/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/countries#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "countries", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/countries/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/countries/:id(.:format)",
	},
	{
		endpoint: "/api/v1/country_subdivisions(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/country_subdivisions#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "country_subdivisions(.:format)"],
						raw: "{{baseUrl}}/api/v1/country_subdivisions(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/country_subdivisions(.:format)",
	},
	{
		endpoint: "/api/v1/country_subdivisions/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/country_subdivisions#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"country_subdivisions",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/country_subdivisions/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/country_subdivisions/:id(.:format)",
	},
	{
		endpoint: "/api/v1/credentials(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/credentials#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "credentials(.:format)"],
						raw: "{{baseUrl}}/api/v1/credentials(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/credentials#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "credentials(.:format)"],
						raw: "{{baseUrl}}/api/v1/credentials(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/credentials(.:format)",
	},
	{
		endpoint: "/api/v1/credentials/:id(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/credentials#destroy",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "credentials", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/credentials/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/credentials/:id(.:format)",
	},
	{
		endpoint: "/api/v1/credentials_assets/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/credentials_assets#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"credentials_assets",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/credentials_assets/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/credentials_assets/:id(.:format)",
	},
	{
		endpoint: "/api/v1/financials(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/financials#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "financials(.:format)"],
						raw: "{{baseUrl}}/api/v1/financials(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/financials(.:format)",
	},
	{
		endpoint: "/api/v1/professionals_ach_accounts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professionals_ach_accounts#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_ach_accounts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_ach_accounts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_ach_accounts(.:format)",
	},
	{
		endpoint: "/api/v1/professionals_health_records(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professionals_health_records#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_health_records(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_health_records(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_health_records(.:format)",
	},
	{
		endpoint: "/api/v1/devices/:device_identifier/config(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/configs#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"devices",
							":device_identifier",
							"config(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/devices/:device_identifier/config(.:format)",
						variable: [
							{
								key: "device_identifier",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/devices/:device_identifier/config(.:format)",
	},
	{
		endpoint: "/api/v1/devices/:identifier(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/devices#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "devices", ":identifier(.:format)"],
						raw: "{{baseUrl}}/api/v1/devices/:identifier(.:format)",
						variable: [
							{
								key: "identifier(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/devices#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "devices", ":identifier(.:format)"],
						raw: "{{baseUrl}}/api/v1/devices/:identifier(.:format)",
						variable: [
							{
								key: "identifier(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/devices/:identifier(.:format)",
	},
	{
		endpoint: "/api/v1/direct_booking_requests/:id/reject(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/direct_booking_requests#reject",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"direct_booking_requests",
							":id",
							"reject(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/direct_booking_requests/:id/reject(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/direct_booking_requests/:id/reject(.:format)",
	},
	{
		endpoint:
			"/api/v1/direct_booking_requests/:direct_booking_request_id/direct_booking_availability/confirm(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/direct_booking_availability#confirm",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"direct_booking_requests",
							":direct_booking_request_id",
							"direct_booking_availability",
							"confirm(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/direct_booking_requests/:direct_booking_request_id/direct_booking_availability/confirm(.:format)",
						variable: [
							{
								key: "direct_booking_request_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/direct_booking_requests/:direct_booking_request_id/direct_booking_availability/confirm(.:format)",
	},
	{
		endpoint:
			"/api/v1/direct_booking_requests/:direct_booking_request_id/direct_booking_availability(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/direct_booking_availability#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"direct_booking_requests",
							":direct_booking_request_id",
							"direct_booking_availability(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/direct_booking_requests/:direct_booking_request_id/direct_booking_availability(.:format)",
						variable: [
							{
								key: "direct_booking_request_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/direct_booking_requests/:direct_booking_request_id/direct_booking_availability(.:format)",
	},
	{
		endpoint: "/api/v1/direct_booking_requests/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/direct_booking_requests#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"direct_booking_requests",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/direct_booking_requests/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/direct_booking_requests/:id(.:format)",
	},
	{
		endpoint: "/api/v1/dnr_incidents(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/dnr_incidents#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "dnr_incidents(.:format)"],
						raw: "{{baseUrl}}/api/v1/dnr_incidents(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/dnr_incidents(.:format)",
	},
	{
		endpoint: "/api/v1/do_not_sell_requests(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/do_not_sell_requests#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "do_not_sell_requests(.:format)"],
						raw: "{{baseUrl}}/api/v1/do_not_sell_requests(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/do_not_sell_requests(.:format)",
	},
	{
		endpoint: "/api/v1/electronic_charting_systems(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/electronic_charting_systems#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"electronic_charting_systems(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/electronic_charting_systems(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/electronic_charting_systems(.:format)",
	},
	{
		endpoint: "/api/v1/experience_levels(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/experience_levels#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "experience_levels(.:format)"],
						raw: "{{baseUrl}}/api/v1/experience_levels(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/experience_levels(.:format)",
	},
	{
		endpoint: "/api/v1/external_referrals/member_created(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/external_referrals#member_created",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"external_referrals",
							"member_created(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/external_referrals/member_created(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/external_referrals/member_created(.:format)",
	},
	{
		endpoint:
			"/api/v1/external_shifts/kronos_dimensions/open_shifts_view(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/external_shifts/kronos_dimensions/open_shifts_view#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"external_shifts",
							"kronos_dimensions",
							"open_shifts_view(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/external_shifts/kronos_dimensions/open_shifts_view(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/external_shifts/kronos_dimensions/open_shifts_view(.:format)",
	},
	{
		endpoint:
			"/api/v1/external_shifts/kronos_dimensions/import_shifts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/external_shifts/kronos_dimensions/import_shifts#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"external_shifts",
							"kronos_dimensions",
							"import_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/external_shifts/kronos_dimensions/import_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/external_shifts/kronos_dimensions/import_shifts(.:format)",
	},
	{
		endpoint: "/api/v1/facilities/rate_for_specialties(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities#rate_for_specialties",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facilities",
							"rate_for_specialties(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facilities/rate_for_specialties(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facilities/rate_for_specialties(.:format)",
	},
	{
		endpoint: "/api/v1/facilities/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facilities", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/facilities/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facilities#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facilities", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/facilities/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facilities#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facilities", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/facilities/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facilities/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facilities(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facilities(.:format)"],
						raw: "{{baseUrl}}/api/v1/facilities(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facilities(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_bundle_assignments/modify_shift_bundle_assignment_facilities_professional(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/shift_bundle_assignments#modify_shift_bundle_assignment_facilities_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_bundle_assignments",
							"modify_shift_bundle_assignment_facilities_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_bundle_assignments/modify_shift_bundle_assignment_facilities_professional(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_bundle_assignments/modify_shift_bundle_assignment_facilities_professional(.:format)",
	},
	{
		endpoint: "/api/v1/shift_bundle_assignments/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_bundle_assignments#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_bundle_assignments",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_bundle_assignments/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_bundle_assignments/:id(.:format)",
	},
	{
		endpoint: "/api/v1/smart_rates/sqs_update(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/smart_rates#sqs_update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"smart_rates",
							"sqs_update(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/smart_rates/sqs_update(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/smart_rates/sqs_update(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/professionals/:professional_id/performance_issues(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/performance_issues#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"professionals",
							":professional_id",
							"performance_issues(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/professionals/:professional_id/performance_issues(.:format)",
						variable: [
							{
								key: "professional_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/performance_issues#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"professionals",
							":professional_id",
							"performance_issues(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/professionals/:professional_id/performance_issues(.:format)",
						variable: [
							{
								key: "professional_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/professionals/:professional_id/performance_issues(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/orientation_classes/update_bundle(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/orientation_classes#update_bundle",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_classes",
							"update_bundle(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_classes/update_bundle(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_classes/update_bundle(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/orientation_classes/upcoming_bundles(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/orientation_classes#upcoming_bundles",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_classes",
							"upcoming_bundles(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_classes/upcoming_bundles(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_classes/upcoming_bundles(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/orientation_classes/past_bundles(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/orientation_classes#past_bundles",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_classes",
							"past_bundles(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_classes/past_bundles(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_classes/past_bundles(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/orientation_classes/class_templates(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/orientation_classes#class_templates",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_classes",
							"class_templates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_classes/class_templates(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_classes/class_templates(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/orientation_classes/add_bundles(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/orientation_classes#add_bundles",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_classes",
							"add_bundles(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_classes/add_bundles(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_classes/add_bundles(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/orientation_classes/:id(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/orientation_classes#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_classes",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_classes/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facility_api/orientation_classes#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_classes",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_classes/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_classes/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/orientation_requests/counts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/orientation_requests#counts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_requests",
							"counts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_requests/counts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_requests/counts(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/orientation_requests/batch_review(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/orientation_requests#batch_review",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_requests",
							"batch_review(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_requests/batch_review(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_requests/batch_review(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/orientation_requests(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/orientation_requests#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_requests(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_requests(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_requests(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/facilities/:facility_id/facility_smart_rates(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/facility_smart_rates#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":facility_id",
							"facility_smart_rates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:facility_id/facility_smart_rates(.:format)",
						variable: [
							{
								key: "facility_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/facility_smart_rates#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":facility_id",
							"facility_smart_rates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:facility_id/facility_smart_rates(.:format)",
						variable: [
							{
								key: "facility_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facility_api/facility_smart_rates#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":facility_id",
							"facility_smart_rates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:facility_id/facility_smart_rates(.:format)",
						variable: [
							{
								key: "facility_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facilities/:facility_id/facility_smart_rates(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/facilities/:facility_id/qr_code(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/qr_codes#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":facility_id",
							"qr_code(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:facility_id/qr_code(.:format)",
						variable: [
							{
								key: "facility_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/qr_codes#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":facility_id",
							"qr_code(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:facility_id/qr_code(.:format)",
						variable: [
							{
								key: "facility_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facility_api/qr_codes#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":facility_id",
							"qr_code(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:facility_id/qr_code(.:format)",
						variable: [
							{
								key: "facility_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facilities/:facility_id/qr_code(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/facilities/:id/download_shifts_csv(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/facilities#download_shifts_csv",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":id",
							"download_shifts_csv(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:id/download_shifts_csv(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facilities/:id/download_shifts_csv(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/facilities/:id/recent_rate_adjustments(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/facilities#recent_rate_adjustments",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":id",
							"recent_rate_adjustments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:id/recent_rate_adjustments(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facilities/:id/recent_rate_adjustments(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/facilities/:id/estimated_shift_rates(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/facilities#estimated_shift_rates",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":id",
							"estimated_shift_rates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:id/estimated_shift_rates(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facilities/:id/estimated_shift_rates(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/facilities/:id/enable_automated_smart_rates(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/facilities#enable_automated_smart_rates",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":id",
							"enable_automated_smart_rates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:id/enable_automated_smart_rates(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facilities/:id/enable_automated_smart_rates(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/facilities/:id/disable_automated_smart_rates(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/facilities#disable_automated_smart_rates",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facilities",
							":id",
							"disable_automated_smart_rates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facilities/:id/disable_automated_smart_rates(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facilities/:id/disable_automated_smart_rates(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/facility_employees(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/facility_employees#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facility_employees(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facility_employees(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/facility_employees#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facility_employees(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facility_employees(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facility_employees(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/facility_employees/new(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/facility_employees#new",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facility_employees",
							"new(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facility_employees/new(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facility_employees/new(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/facility_employees/:id/edit(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/facility_employees#edit",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facility_employees",
							":id",
							"edit(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facility_employees/:id/edit(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facility_employees/:id/edit(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/facility_employees/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/facility_employees#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facility_employees",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facility_employees/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/facility_employees#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facility_employees",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facility_employees/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facility_api/facility_employees#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facility_employees",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facility_employees/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facility_employees/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/dashboards/stats_overview(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#stats_overview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"stats_overview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/stats_overview(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/stats_overview(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/bill_rate_stats_overview(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#bill_rate_stats_overview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"bill_rate_stats_overview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/bill_rate_stats_overview(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/bill_rate_stats_overview(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/bill_rate_insights_overview(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#bill_rate_insights_overview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"bill_rate_insights_overview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/bill_rate_insights_overview(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/bill_rate_insights_overview(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/fill_rate_insights_overview(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#fill_rate_insights_overview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"fill_rate_insights_overview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/fill_rate_insights_overview(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/fill_rate_insights_overview(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/dashboards/timecard_overview(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#timecard_overview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"timecard_overview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/timecard_overview(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/timecard_overview(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/upcoming_day_shift_data(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#upcoming_day_shift_data",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"upcoming_day_shift_data(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/upcoming_day_shift_data(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/upcoming_day_shift_data(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/professional_cancel_shift_data(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#professional_cancel_shift_data",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"professional_cancel_shift_data(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/professional_cancel_shift_data(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/professional_cancel_shift_data(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/facility_cancel_shift_data(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#facility_cancel_shift_data",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"facility_cancel_shift_data(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/facility_cancel_shift_data(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/facility_cancel_shift_data(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/dashboards/specialty_filters(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#specialty_filters",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"specialty_filters(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/specialty_filters(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/specialty_filters(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/update_widget_setting(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/dashboards#update_widget_setting",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"update_widget_setting(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/update_widget_setting(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/update_widget_setting(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/upcoming_smart_rates_hard_to_fill_shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#upcoming_smart_rates_hard_to_fill_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"upcoming_smart_rates_hard_to_fill_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/upcoming_smart_rates_hard_to_fill_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/upcoming_smart_rates_hard_to_fill_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/upcoming_smart_rates_easy_to_fill_shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#upcoming_smart_rates_easy_to_fill_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"upcoming_smart_rates_easy_to_fill_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/upcoming_smart_rates_easy_to_fill_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/upcoming_smart_rates_easy_to_fill_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/base_rates_overview(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#base_rates_overview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"base_rates_overview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/base_rates_overview(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/base_rates_overview(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/dashboards/calculate_rate(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/dashboards#calculate_rate",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"calculate_rate(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/calculate_rate(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/calculate_rate(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/dashboards/rate_history/:facility_specialty_professional_rate_id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#rate_history",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards",
							"rate_history",
							":facility_specialty_professional_rate_id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards/rate_history/:facility_specialty_professional_rate_id(.:format)",
						variable: [
							{
								key: "facility_specialty_professional_rate_id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards/rate_history/:facility_specialty_professional_rate_id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/dashboards(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/dashboards#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"dashboards(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/dashboards(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/dashboards(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/facility_operator(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/facility_operators#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"facility_operator(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/facility_operator(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/facility_operator(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/float_settings_for_shifts/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/float_settings_for_shifts#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"float_settings_for_shifts",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/float_settings_for_shifts/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/float_settings_for_shifts/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/hirings/hire_professional(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/hirings#hire_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"hirings",
							"hire_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/hirings/hire_professional(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/hirings/hire_professional(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/kudos(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/kudos#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facility_api", "kudos(.:format)"],
						raw: "{{baseUrl}}/api/v1/facility_api/kudos(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/kudos(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/orientation_status/:id/manager_partner_status_for_professional(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/orientation_status#manager_partner_status_for_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_status",
							":id",
							"manager_partner_status_for_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_status/:id/manager_partner_status_for_professional(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_status/:id/manager_partner_status_for_professional(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/orientation_status/:id/approve_progress(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/orientation_status#approve_progress",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"orientation_status",
							":id",
							"approve_progress(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/orientation_status/:id/approve_progress(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/orientation_status/:id/approve_progress(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/preceptor_shifts/requested_shift/:requisite_scheduling_request_id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/preceptor_shifts#requested_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"preceptor_shifts",
							"requested_shift",
							":requisite_scheduling_request_id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/preceptor_shifts/requested_shift/:requisite_scheduling_request_id(.:format)",
						variable: [
							{
								key: "requisite_scheduling_request_id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/preceptor_shifts/requested_shift/:requisite_scheduling_request_id(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/preceptor_shifts/requested_shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/preceptor_shifts#requested_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"preceptor_shifts",
							"requested_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/preceptor_shifts/requested_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/preceptor_shifts/requested_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/preceptor_shifts/scheduled_shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/preceptor_shifts#scheduled_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"preceptor_shifts",
							"scheduled_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/preceptor_shifts/scheduled_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/preceptor_shifts/scheduled_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/preceptor_shifts/completed_shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/preceptor_shifts#completed_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"preceptor_shifts",
							"completed_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/preceptor_shifts/completed_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/preceptor_shifts/completed_shifts(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/preceptor_shifts/book_shifts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/preceptor_shifts#book_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"preceptor_shifts",
							"book_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/preceptor_shifts/book_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/preceptor_shifts/book_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/preceptor_shifts/approve_shifts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/preceptor_shifts#approve_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"preceptor_shifts",
							"approve_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/preceptor_shifts/approve_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/preceptor_shifts/approve_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/preceptor_shifts/request_new_dates(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/preceptor_shifts#request_new_dates",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"preceptor_shifts",
							"request_new_dates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/preceptor_shifts/request_new_dates(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/preceptor_shifts/request_new_dates(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/preceptor_shifts/mark_request_viewed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/preceptor_shifts#mark_request_viewed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"preceptor_shifts",
							"mark_request_viewed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/preceptor_shifts/mark_request_viewed(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/preceptor_shifts/mark_request_viewed(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/preceptor_shifts/remove_request(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/preceptor_shifts#remove_request",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"preceptor_shifts",
							"remove_request(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/preceptor_shifts/remove_request(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/preceptor_shifts/remove_request(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/preceptor_shifts/create_additional_precepting_requisite(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/preceptor_shifts#create_additional_precepting_requisite",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"preceptor_shifts",
							"create_additional_precepting_requisite(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/preceptor_shifts/create_additional_precepting_requisite(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/preceptor_shifts/create_additional_precepting_requisite(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/provisioning_data/professionals(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/provisioning_data_professionals#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_data",
							"professionals(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_data/professionals(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/provisioning_data/professionals(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/provisioning_data/bulk_transition(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/provisioning_data#bulk_transition",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_data",
							"bulk_transition(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_data/bulk_transition(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/provisioning_data/bulk_transition(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/provisioning_data/download_csv(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/provisioning_data#download_csv",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_data",
							"download_csv(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_data/download_csv(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/provisioning_data/download_csv(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/provisioning_data/:onsite_requisite_progress_id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/provisioning_data#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_data",
							":onsite_requisite_progress_id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_data/:onsite_requisite_progress_id(.:format)",
						variable: [
							{
								key: "onsite_requisite_progress_id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/provisioning_data#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_data",
							":onsite_requisite_progress_id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_data/:onsite_requisite_progress_id(.:format)",
						variable: [
							{
								key: "onsite_requisite_progress_id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facility_api/provisioning_data#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_data",
							":onsite_requisite_progress_id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_data/:onsite_requisite_progress_id(.:format)",
						variable: [
							{
								key: "onsite_requisite_progress_id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/provisioning_data/:onsite_requisite_progress_id(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/provisioning_datum/:onsite_requisite_progress_id/notes(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/provisioning_professional_notes#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum",
							":onsite_requisite_progress_id",
							"notes(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum/:onsite_requisite_progress_id/notes(.:format)",
						variable: [
							{
								key: "onsite_requisite_progress_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/provisioning_professional_notes#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum",
							":onsite_requisite_progress_id",
							"notes(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum/:onsite_requisite_progress_id/notes(.:format)",
						variable: [
							{
								key: "onsite_requisite_progress_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/provisioning_datum/:onsite_requisite_progress_id/notes(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/provisioning_datum/:onsite_requisite_progress_id/notes/:id(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/provisioning_professional_notes#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum",
							":onsite_requisite_progress_id",
							"notes",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum/:onsite_requisite_progress_id/notes/:id(.:format)",
						variable: [
							{
								key: "onsite_requisite_progress_id",
							},
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facility_api/provisioning_professional_notes#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum",
							":onsite_requisite_progress_id",
							"notes",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum/:onsite_requisite_progress_id/notes/:id(.:format)",
						variable: [
							{
								key: "onsite_requisite_progress_id",
							},
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/facility_api/provisioning_professional_notes#destroy",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum",
							":onsite_requisite_progress_id",
							"notes",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum/:onsite_requisite_progress_id/notes/:id(.:format)",
						variable: [
							{
								key: "onsite_requisite_progress_id",
							},
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/provisioning_datum/:onsite_requisite_progress_id/notes/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/provisioning_datum/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/provisioning_datum#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/provisioning_datum#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facility_api/provisioning_datum#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/facility_api/provisioning_datum#destroy",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/provisioning_datum/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/provisioning_datum(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/provisioning_datum#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/provisioning_datum#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"provisioning_datum(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/provisioning_datum(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/provisioning_datum(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_summaries/recommended_smart_rates(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/shift_summaries#recommended_smart_rates",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_summaries",
							"recommended_smart_rates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_summaries/recommended_smart_rates(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_summaries/recommended_smart_rates(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_summaries/bulk_update_rate_adjustments(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/shift_summaries#bulk_update_rate_adjustments",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_summaries",
							"bulk_update_rate_adjustments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_summaries/bulk_update_rate_adjustments(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_summaries/bulk_update_rate_adjustments(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_summaries/bulk_update_smart_rate_recommended_adjustments(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/shift_summaries#bulk_update_smart_rate_recommended_adjustments",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_summaries",
							"bulk_update_smart_rate_recommended_adjustments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_summaries/bulk_update_smart_rate_recommended_adjustments(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_summaries/bulk_update_smart_rate_recommended_adjustments(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/shift_summaries(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/shift_summaries#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_summaries(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_summaries(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_summaries(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/global_shift_view/csv(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/global_shift_view#csv",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"global_shift_view",
							"csv(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/global_shift_view/csv(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/global_shift_view/csv(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/global_shift_view/hospital_facility_unit_groupings(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/global_shift_view#hospital_facility_unit_groupings",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"global_shift_view",
							"hospital_facility_unit_groupings(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/global_shift_view/hospital_facility_unit_groupings(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/global_shift_view/hospital_facility_unit_groupings(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/global_shift_view/shift_filters(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/global_shift_view#shift_filters",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"global_shift_view",
							"shift_filters(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/global_shift_view/shift_filters(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/global_shift_view/shift_filters(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/global_shift_view/can_cancel_shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/global_shift_view#can_cancel_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"global_shift_view",
							"can_cancel_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/global_shift_view/can_cancel_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/global_shift_view/can_cancel_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/global_shift_view/cancel_shifts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/global_shift_view#cancel_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"global_shift_view",
							"cancel_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/global_shift_view/cancel_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/global_shift_view/cancel_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/global_shift_view/shifts_locked(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/global_shift_view#shifts_locked",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"global_shift_view",
							"shifts_locked(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/global_shift_view/shifts_locked(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/global_shift_view/shifts_locked(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/global_shift_view/can_edit_units(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/global_shift_view#can_edit_units",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"global_shift_view",
							"can_edit_units(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/global_shift_view/can_edit_units(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/global_shift_view/can_edit_units(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/global_shift_view/edit_units(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/global_shift_view#edit_units",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"global_shift_view",
							"edit_units(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/global_shift_view/edit_units(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/global_shift_view/edit_units(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/global_shift_view(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/global_shift_view#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"global_shift_view(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/global_shift_view(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/global_shift_view(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_agreements/:shift_agreement_id/split_time_assignments(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/split_time_assignments#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_agreements",
							":shift_agreement_id",
							"split_time_assignments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_agreements/:shift_agreement_id/split_time_assignments(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facility_api/split_time_assignments#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_agreements",
							":shift_agreement_id",
							"split_time_assignments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_agreements/:shift_agreement_id/split_time_assignments(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_agreements/:shift_agreement_id/split_time_assignments(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/timecards/bulk_approve(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/timecards#bulk_approve",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"timecards",
							"bulk_approve(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/timecards/bulk_approve(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/timecards/bulk_approve(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/claimed_shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/claimed_shifts#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"claimed_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/claimed_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/claimed_shifts(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/shifts/:shift_id/remove_unit(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/facility_api/shifts#remove_unit",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shifts",
							":shift_id",
							"remove_unit(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shifts/:shift_id/remove_unit(.:format)",
						variable: [
							{
								key: "shift_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shifts/:shift_id/remove_unit(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/shifts/:shift_id/modify_unit(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/shifts#modify_unit",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shifts",
							":shift_id",
							"modify_unit(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shifts/:shift_id/modify_unit(.:format)",
						variable: [
							{
								key: "shift_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shifts/:shift_id/modify_unit(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/shifts/bulk_remove_unit(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/facility_api/shifts#bulk_remove_unit",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shifts",
							"bulk_remove_unit(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shifts/bulk_remove_unit(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shifts/bulk_remove_unit(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/shifts/bulk_modify_unit(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/shifts#bulk_modify_unit",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shifts",
							"bulk_modify_unit(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shifts/bulk_modify_unit(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shifts/bulk_modify_unit(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/shifts/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/shifts#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shifts",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shifts/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shifts/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/user_management/facility_users(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/user_managements#facility_users",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"user_management",
							"facility_users(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/user_management/facility_users(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/user_management/facility_users(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/user_management/lookup(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/user_managements#lookup",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"user_management",
							"lookup(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/user_management/lookup(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/user_management/lookup(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/:id/remove(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/shift_bundle_assignments#remove",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							":id",
							"remove(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/:id/remove(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/:id/remove(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/upcoming_index(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/shift_bundle_assignments#upcoming_index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							"upcoming_index(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/upcoming_index(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/upcoming_index(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/upcoming_open_index(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/shift_bundle_assignments#upcoming_open_index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							"upcoming_open_index(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/upcoming_open_index(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/upcoming_open_index(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/upcoming_fulfilled_index(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/shift_bundle_assignments#upcoming_fulfilled_index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							"upcoming_fulfilled_index(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/upcoming_fulfilled_index(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/upcoming_fulfilled_index(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/in_progress_index(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/shift_bundle_assignments#in_progress_index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							"in_progress_index(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/in_progress_index(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/in_progress_index(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/past_index(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/shift_bundle_assignments#past_index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							"past_index(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/past_index(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/past_index(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/legal_text_preview(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/shift_bundle_assignments#legal_text_preview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							"legal_text_preview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/legal_text_preview(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/legal_text_preview(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/create_shifts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/shift_bundle_assignments#create_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							"create_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/create_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/create_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/add_shifts_to_assignment(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/shift_bundle_assignments#add_shifts_to_assignment",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							"add_shifts_to_assignment(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/add_shifts_to_assignment(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/add_shifts_to_assignment(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/accept_professional(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/shift_bundle_assignments#accept_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							"accept_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/accept_professional(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/accept_professional(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_api/shift_bundle_assignments/update_facilities_professional_visibility(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_api/shift_bundle_assignments#update_facilities_professional_visibility",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							"update_facilities_professional_visibility(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/update_facilities_professional_visibility(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/update_facilities_professional_visibility(.:format)",
	},
	{
		endpoint: "/api/v1/facility_api/shift_bundle_assignments/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_api/shift_bundle_assignments#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_api/shift_bundle_assignments#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facility_api/shift_bundle_assignments#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_api",
							"shift_bundle_assignments",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_api/shift_bundle_assignments/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_api/shift_bundle_assignments/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_leads(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_leads#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facility_leads(.:format)"],
						raw: "{{baseUrl}}/api/v1/facility_leads(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_leads(.:format)",
	},
	{
		endpoint: "/api/v1/facility_leads/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_leads#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facility_leads", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/facility_leads/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_leads/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_leads_emails(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_leads_emails#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facility_leads_emails(.:format)"],
						raw: "{{baseUrl}}/api/v1/facility_leads_emails(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_leads_emails(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_operators_facilities/batch_upsert(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_operators_facilities#batch_upsert",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_operators_facilities",
							"batch_upsert(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_operators_facilities/batch_upsert(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_operators_facilities/batch_upsert(.:format)",
	},
	{
		endpoint: "/api/v1/facility_operators_facilities(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_operators_facilities#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_operators_facilities(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_operators_facilities(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facility_operators_facilities#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_operators_facilities(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_operators_facilities(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/facility_operators_facilities#destroy",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_operators_facilities(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_operators_facilities(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_operators_facilities(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_signature_documents/:facility_signature_document_id/sign_data(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_signature_documents#sign_data",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_signature_documents",
							":facility_signature_document_id",
							"sign_data(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_signature_documents/:facility_signature_document_id/sign_data(.:format)",
						variable: [
							{
								key: "facility_signature_document_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_signature_documents/:facility_signature_document_id/sign_data(.:format)",
	},
	{
		endpoint:
			"/api/v1/signature_documents/:signature_document_id/sign_data(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/signature_documents#sign_data",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"signature_documents",
							":signature_document_id",
							"sign_data(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/signature_documents/:signature_document_id/sign_data(.:format)",
						variable: [
							{
								key: "signature_document_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/signature_documents/:signature_document_id/sign_data(.:format)",
	},
	{
		endpoint: "/api/v1/facility_shift_assignments(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_shift_assignments#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_shift_assignments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_shift_assignments(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_shift_assignments(.:format)",
	},
	{
		endpoint: "/api/v1/facility_type_cases(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_type_cases#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facility_type_cases(.:format)"],
						raw: "{{baseUrl}}/api/v1/facility_type_cases(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_type_cases(.:format)",
	},
	{
		endpoint: "/api/v1/facility_type_cases/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_type_cases#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_type_cases",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_type_cases/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_type_cases/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_types(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_types#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facility_types(.:format)"],
						raw: "{{baseUrl}}/api/v1/facility_types(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_types(.:format)",
	},
	{
		endpoint: "/api/v1/facility_types/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_types#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "facility_types", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/facility_types/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_types/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_operator_invites/:id/accept(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_operator_invites#accept",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_operator_invites",
							":id",
							"accept(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_operator_invites/:id/accept(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_operator_invites/:id/accept(.:format)",
	},
	{
		endpoint: "/api/v1/facility_operator_invites/:id/decline(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facility_operator_invites#decline",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_operator_invites",
							":id",
							"decline(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_operator_invites/:id/decline(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_operator_invites/:id/decline(.:format)",
	},
	{
		endpoint:
			"/api/v1/facility_operator_invites/:id/register_operator(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_operator_invites#register_operator",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_operator_invites",
							":id",
							"register_operator(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_operator_invites/:id/register_operator(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_operator_invites/:id/register_operator(.:format)",
	},
	{
		endpoint: "/api/v1/facility_operator_invites/batch_create(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_operator_invites#batch_create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_operator_invites",
							"batch_create(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_operator_invites/batch_create(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_operator_invites/batch_create(.:format)",
	},
	{
		endpoint: "/api/v1/facility_operator_invites/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facility_operator_invites#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_operator_invites",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_operator_invites/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_operator_invites/:id(.:format)",
	},
	{
		endpoint: "/api/v1/facility_operator_invites(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facility_operator_invites#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"facility_operator_invites(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/facility_operator_invites(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/facility_operator_invites(.:format)",
	},
	{
		endpoint: "/api/v1/hello_sign/callback(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/hello_sign#callback",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "hello_sign", "callback(.:format)"],
						raw: "{{baseUrl}}/api/v1/hello_sign/callback(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/hello_sign/callback(.:format)",
	},
	{
		endpoint: "/api/v1/invoices/:id/as_csv(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/invoices#as_csv",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"invoices",
							":id",
							"as_csv(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/invoices/:id/as_csv(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/invoices/:id/as_csv(.:format)",
	},
	{
		endpoint: "/api/v1/invoices/configuration(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/invoices#configuration",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"invoices",
							"configuration(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/invoices/configuration(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/invoices/configuration(.:format)",
	},
	{
		endpoint: "/api/v1/invoices/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/invoices#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "invoices", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/invoices/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/invoices/:id(.:format)",
	},
	{
		endpoint: "/api/v1/invoices(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/invoices#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "invoices(.:format)"],
						raw: "{{baseUrl}}/api/v1/invoices(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/invoices(.:format)",
	},
	{
		endpoint: "/api/v1/invoice_push_payments/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/invoice_push_payments#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"invoice_push_payments",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/invoice_push_payments/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/invoice_push_payments#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"invoice_push_payments",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/invoice_push_payments/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/invoice_push_payments#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"invoice_push_payments",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/invoice_push_payments/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/invoice_push_payments/:id(.:format)",
	},
	{
		endpoint: "/api/v1/indeed_postings(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/indeed_postings#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "indeed_postings(.:format)"],
						raw: "{{baseUrl}}/api/v1/indeed_postings(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/indeed_postings(.:format)",
	},
	{
		endpoint: "/api/v1/legal_agreements(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/legal_agreements#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "legal_agreements(.:format)"],
						raw: "{{baseUrl}}/api/v1/legal_agreements(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/legal_agreements(.:format)",
	},
	{
		endpoint: "/api/v1/legal_agreements/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/legal_agreements#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"legal_agreements",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/legal_agreements/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/legal_agreements/:id(.:format)",
	},
	{
		endpoint: "/api/v1/current_legal_agreement(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/current_legal_agreement#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"current_legal_agreement(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/current_legal_agreement(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/current_legal_agreement(.:format)",
	},
	{
		endpoint: "/api/v1/login/mobile(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/logins#create_with_token_rotation",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "login", "mobile(.:format)"],
						raw: "{{baseUrl}}/api/v1/login/mobile(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/login/mobile(.:format)",
	},
	{
		endpoint: "/api/v1/login/captcha(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/logins#create_with_captcha",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "login", "captcha(.:format)"],
						raw: "{{baseUrl}}/api/v1/login/captcha(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/login/captcha(.:format)",
	},
	{
		endpoint: "/api/v1/login(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/logins#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "login(.:format)"],
						raw: "{{baseUrl}}/api/v1/login(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/logins#destroy",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "login(.:format)"],
						raw: "{{baseUrl}}/api/v1/login(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/logins#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "login(.:format)"],
						raw: "{{baseUrl}}/api/v1/login(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/login(.:format)",
	},
	{
		endpoint:
			"/api/v1/manager_partners/:manager_partner_id/employee_data/batch_upsert(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/manager_partner_employee_data#batch_upsert",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"manager_partners",
							":manager_partner_id",
							"employee_data",
							"batch_upsert(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/manager_partners/:manager_partner_id/employee_data/batch_upsert(.:format)",
						variable: [
							{
								key: "manager_partner_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/manager_partners/:manager_partner_id/employee_data/batch_upsert(.:format)",
	},
	{
		endpoint:
			"/api/v1/manager_partners/:manager_partner_id/employee_data/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/manager_partner_employee_data#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"manager_partners",
							":manager_partner_id",
							"employee_data",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/manager_partners/:manager_partner_id/employee_data/:id(.:format)",
						variable: [
							{
								key: "manager_partner_id",
							},
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/manager_partners/:manager_partner_id/employee_data/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/manager_partners/:manager_partner_id/facilities(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/manager_partner_facilities#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"manager_partners",
							":manager_partner_id",
							"facilities(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/manager_partners/:manager_partner_id/facilities(.:format)",
						variable: [
							{
								key: "manager_partner_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/manager_partners/:manager_partner_id/facilities(.:format)",
	},
	{
		endpoint:
			"/api/v1/manager_partners/:manager_partner_id/legal_agreement(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/manager_partner_legal_agreements#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"manager_partners",
							":manager_partner_id",
							"legal_agreement(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/manager_partners/:manager_partner_id/legal_agreement(.:format)",
						variable: [
							{
								key: "manager_partner_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/manager_partners/:manager_partner_id/legal_agreement(.:format)",
	},
	{
		endpoint: "/api/v1/manager_partners/:id/positions(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/manager_partner_positions#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"manager_partners",
							":id",
							"positions(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/manager_partners/:id/positions(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/manager_partners/:id/positions(.:format)",
	},
	{
		endpoint: "/api/v1/manager_partners/:id/professions(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/manager_partner_professions#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"manager_partners",
							":id",
							"professions(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/manager_partners/:id/professions(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/manager_partners/:id/professions(.:format)",
	},
	{
		endpoint: "/api/v1/manager_partners/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/manager_partners#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"manager_partners",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/manager_partners/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/manager_partners/:id(.:format)",
	},
	{
		endpoint: "/api/v1/masked_calls/:id/connect_professional(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/masked_calls#connect_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"masked_calls",
							":id",
							"connect_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/masked_calls/:id/connect_professional(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/masked_calls/:id/connect_professional(.:format)",
	},
	{
		endpoint: "/api/v1/masked_calls/:id/call_completed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/masked_calls#call_completed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"masked_calls",
							":id",
							"call_completed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/masked_calls/:id/call_completed(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/masked_calls/:id/call_completed(.:format)",
	},
	{
		endpoint: "/api/v1/masked_calls(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/masked_calls#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "masked_calls(.:format)"],
						raw: "{{baseUrl}}/api/v1/masked_calls(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/masked_calls(.:format)",
	},
	{
		endpoint: "/api/v1/notifications/ack(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/notifications#ack",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "notifications", "ack(.:format)"],
						raw: "{{baseUrl}}/api/v1/notifications/ack(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/notifications/ack(.:format)",
	},
	{
		endpoint: "/api/v1/notifications/partial_ack(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/notifications#partial_ack",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"notifications",
							"partial_ack(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/notifications/partial_ack(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/notifications/partial_ack(.:format)",
	},
	{
		endpoint: "/api/v1/notifications/:id/clicked(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/notifications#clicked",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"notifications",
							":id",
							"clicked(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/notifications/:id/clicked(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/notifications/:id/clicked(.:format)",
	},
	{
		endpoint: "/api/v1/notifications/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/notifications#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "notifications", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/notifications/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/notifications/:id(.:format)",
	},
	{
		endpoint: "/api/v1/notifications(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/notifications#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "notifications(.:format)"],
						raw: "{{baseUrl}}/api/v1/notifications(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/notifications(.:format)",
	},
	{
		endpoint: "/api/v1/persona/avatar(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/persona_avatars#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "persona", "avatar(.:format)"],
						raw: "{{baseUrl}}/api/v1/persona/avatar(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/persona/avatar(.:format)",
	},
	{
		endpoint: "/api/v1/phone_numbers(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/phone_numbers#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "phone_numbers(.:format)"],
						raw: "{{baseUrl}}/api/v1/phone_numbers(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/phone_numbers#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "phone_numbers(.:format)"],
						raw: "{{baseUrl}}/api/v1/phone_numbers(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/phone_numbers(.:format)",
	},
	{
		endpoint: "/api/v1/presigned_asset_urls(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/presigned_asset_urls#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "presigned_asset_urls(.:format)"],
						raw: "{{baseUrl}}/api/v1/presigned_asset_urls(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/presigned_asset_urls(.:format)",
	},
	{
		endpoint: "/api/v1/presigned_asset_urls/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/presigned_asset_urls#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"presigned_asset_urls",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/presigned_asset_urls/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/presigned_asset_urls/:id(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/assignment_preferences(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/assignment_preferences#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"assignment_preferences(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/assignment_preferences(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_api/assignment_preferences#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"assignment_preferences(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/assignment_preferences(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/assignment_preferences(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/background_check_agreements(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/background_check_agreements#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"background_check_agreements(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/background_check_agreements(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/background_check_agreements(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/drug_screenings/eligibility_status(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/drug_screenings#eligibility_status",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"drug_screenings",
							"eligibility_status(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/drug_screenings/eligibility_status(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/drug_screenings/eligibility_status(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/facility_screenings/form(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/facility_screenings#form",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"facility_screenings",
							"form(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/facility_screenings/form(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/facility_screenings/form(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/facility_screenings/:id/submit(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/facility_screenings#submit",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"facility_screenings",
							":id",
							"submit(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/facility_screenings/:id/submit(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/facility_screenings/:id/submit(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/health_system_screenings/form(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/health_system_screenings#form",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"health_system_screenings",
							"form(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/health_system_screenings/form(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/health_system_screenings/form(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/health_system_screenings/:id/submit(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/health_system_screenings#submit",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"health_system_screenings",
							":id",
							"submit(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/health_system_screenings/:id/submit(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/health_system_screenings/:id/submit(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/professional_promotions(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professional_promotions#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_promotions(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_promotions(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_promotions(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_facility_referrals(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professional_facility_referrals#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_facility_referrals(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_facility_referrals(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/professional_facility_referrals#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_facility_referrals(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_facility_referrals(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_facility_referrals(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_float_settings/batch_update(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/professional_float_settings#batch_update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_float_settings",
							"batch_update(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_float_settings/batch_update(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_float_settings/batch_update(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_float_settings(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professional_float_settings#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_float_settings(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_float_settings(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_float_settings(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_interviews/:id/book_date(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/professional_interviews#book_date",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_interviews",
							":id",
							"book_date(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_interviews/:id/book_date(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_interviews/:id/book_date(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_interviews/:id/cancel_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/professional_interviews#cancel_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_interviews",
							":id",
							"cancel_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_interviews/:id/cancel_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_interviews/:id/cancel_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_interviews/:id/reschedule_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/professional_interviews#reschedule_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_interviews",
							":id",
							"reschedule_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_interviews/:id/reschedule_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_interviews/:id/reschedule_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_interviews/:id/add_lead_to_priority_interview_waitlist(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_api/professional_interviews#add_lead_to_priority_interview_waitlist",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_interviews",
							":id",
							"add_lead_to_priority_interview_waitlist(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_interviews/:id/add_lead_to_priority_interview_waitlist(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_interviews/:id/add_lead_to_priority_interview_waitlist(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_interviews/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professional_interviews#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_interviews",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_interviews/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_interviews/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_lead_sources(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professional_lead_sources#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_lead_sources(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_lead_sources(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_lead_sources(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/performance_reviews/:id/as_pdf(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/performance_reviews#as_pdf",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"performance_reviews",
							":id",
							"as_pdf(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/performance_reviews/:id/as_pdf(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/performance_reviews/:id/as_pdf(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/performance_reviews(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/performance_reviews#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"performance_reviews(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/performance_reviews(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/performance_reviews(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/onsite_requisites/:id/request_dates(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/onsite_requisites#request_dates",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"onsite_requisites",
							":id",
							"request_dates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/onsite_requisites/:id/request_dates(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/onsite_requisites/:id/request_dates(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/onsite_requisites/:id/request_setup(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/onsite_requisites#request_setup",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"onsite_requisites",
							":id",
							"request_setup(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/onsite_requisites/:id/request_setup(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/onsite_requisites/:id/request_setup(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/onsite_requisites/:id/finalize_onsite_requisite_progress_document(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/onsite_requisites#finalize_onsite_requisite_progress_document",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"onsite_requisites",
							":id",
							"finalize_onsite_requisite_progress_document(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/onsite_requisites/:id/finalize_onsite_requisite_progress_document(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/onsite_requisites/:id/finalize_onsite_requisite_progress_document(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/onsite_requisites/add_document_page(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/onsite_requisites#add_document_page",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"onsite_requisites",
							"add_document_page(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/onsite_requisites/add_document_page(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/onsite_requisites/add_document_page(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/onsite_requisites/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/onsite_requisites#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"onsite_requisites",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/onsite_requisites/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/onsite_requisites/:id(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/resource_center(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/resource_center#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"resource_center(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/resource_center(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/resource_center(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/resource_center/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/resource_center#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"resource_center",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/resource_center/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/resource_center/:id(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/help_center(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/help_center#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"help_center(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/help_center(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/help_center(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/help_center/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/help_center#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"help_center",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/help_center/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/help_center/:id(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/shifts/upcoming_shift(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/shifts#upcoming_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"shifts",
							"upcoming_shift(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/shifts/upcoming_shift(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/shifts/upcoming_shift(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/shift_agreements/:id/add_unit(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_api/shift_agreements#add_unit",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"shift_agreements",
							":id",
							"add_unit(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/shift_agreements/:id/add_unit(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/shift_agreements/:id/add_unit(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/shift_agreements/:id/upload_timesheet(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/shift_agreements#upload_timesheet",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"shift_agreements",
							":id",
							"upload_timesheet(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/shift_agreements/:id/upload_timesheet(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/shift_agreements/:id/upload_timesheet(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/shift_agreements/:id/resile_details(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/shift_agreements#resile_details",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"shift_agreements",
							":id",
							"resile_details(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/shift_agreements/:id/resile_details(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/shift_agreements/:id/resile_details(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/shift_agreements/:shift_agreement_id/split_time_assignments(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_api/split_time_assignments#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"shift_agreements",
							":shift_agreement_id",
							"split_time_assignments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/shift_agreements/:shift_agreement_id/split_time_assignments(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/professional_api/split_time_assignments#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"shift_agreements",
							":shift_agreement_id",
							"split_time_assignments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/shift_agreements/:shift_agreement_id/split_time_assignments(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/shift_agreements/:shift_agreement_id/split_time_assignments(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_survey/negative_review_follow_up(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/professional_survey#negative_review_follow_up",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_survey",
							"negative_review_follow_up(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_survey/negative_review_follow_up(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_survey/negative_review_follow_up(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_survey_events(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professional_survey_events#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_survey_events(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_survey_events(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/professional_survey_events#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_survey_events(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_survey_events(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_survey_events(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/feedback_forms/form_options(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/feedback_forms#form_options",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"feedback_forms",
							"form_options(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/feedback_forms/form_options(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/feedback_forms/form_options(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/feedback_forms/submit(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/feedback_forms#submit",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"feedback_forms",
							"submit(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/feedback_forms/submit(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/feedback_forms/submit(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/available_facilities(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/available_facilities#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"available_facilities(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/available_facilities(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/available_facilities(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/preferences(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/preferences#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"preferences(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/preferences(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/preferences#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"preferences(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/preferences(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/preferences(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/home(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/home#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"home(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/home(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/home(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professionals_reliability_scores(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professionals_reliability_scores#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professionals_reliability_scores(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professionals_reliability_scores(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professionals_reliability_scores(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/background_check_forms/:id/agreements(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/background_check_forms#agreements",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"background_check_forms",
							":id",
							"agreements(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/background_check_forms/:id/agreements(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/background_check_forms/:id/agreements(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/background_check_forms/:id/authorize(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_api/background_check_forms#authorize",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"background_check_forms",
							":id",
							"authorize(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/background_check_forms/:id/authorize(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/background_check_forms/:id/authorize(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/background_check_forms/new(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/background_check_forms#new",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"background_check_forms",
							"new(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/background_check_forms/new(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/background_check_forms/new(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/background_check_forms(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/background_check_forms#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"background_check_forms(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/background_check_forms(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/background_check_forms(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/post_shift_surveys(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_api/post_shift_surveys#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"post_shift_surveys(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/post_shift_surveys(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/professional_api/post_shift_surveys#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"post_shift_surveys(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/post_shift_surveys(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/post_shift_surveys(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/shift_bundle_assignments/:id/details(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/shift_bundle_assignments#details",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"shift_bundle_assignments",
							":id",
							"details(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/shift_bundle_assignments/:id/details(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/shift_bundle_assignments/:id/details(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/sign_up(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/sign_up#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"sign_up(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/sign_up(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/sign_up(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_onboardings/:id/onboarding_facilities(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professional_onboardings#onboarding_facilities",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_onboardings",
							":id",
							"onboarding_facilities(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_onboardings/:id/onboarding_facilities(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_onboardings/:id/onboarding_facilities(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_onboardings/:id/start_universal_guide_task(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_api/professional_onboardings#start_universal_guide_task",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_onboardings",
							":id",
							"start_universal_guide_task(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_onboardings/:id/start_universal_guide_task(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_onboardings/:id/start_universal_guide_task(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professional_onboardings/:id(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_api/professional_onboardings#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_onboardings",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_onboardings/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/professional_api/professional_onboardings#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professional_onboardings",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professional_onboardings/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professional_onboardings/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professionals/:id/universal_guide(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professionals#universal_guide",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professionals",
							":id",
							"universal_guide(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professionals/:id/universal_guide(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professionals/:id/universal_guide(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professionals/:id/professional_onboarding(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professionals#professional_onboarding",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professionals",
							":id",
							"professional_onboarding(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professionals/:id/professional_onboarding(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professionals/:id/professional_onboarding(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professionals/:id/eligibility_screening(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professionals#eligibility_screening",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professionals",
							":id",
							"eligibility_screening(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professionals/:id/eligibility_screening(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professionals/:id/eligibility_screening(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professionals/:id/sync_professional_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/professionals#sync_professional_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professionals",
							":id",
							"sync_professional_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professionals/:id/sync_professional_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professionals/:id/sync_professional_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professionals/:id/bookable_interview_slots(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professionals#bookable_interview_slots",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professionals",
							":id",
							"bookable_interview_slots(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professionals/:id/bookable_interview_slots(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professionals/:id/bookable_interview_slots(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/professionals/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professionals#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professionals",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professionals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_api/professionals#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professionals",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professionals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/professional_api/professionals#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professionals",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professionals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professionals/:id(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/resume_uploads(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/resume_uploads#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"resume_uploads(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/resume_uploads(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/resume_uploads(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/resume_builds(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/resume_builds#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"resume_builds(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/resume_builds(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/resume_builds(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/eligibility_screenings/form(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/eligibility_screenings#form",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"eligibility_screenings",
							"form(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/eligibility_screenings/form(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/eligibility_screenings/form(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/eligibility_screenings/:id/submit(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/eligibility_screenings#submit",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"eligibility_screenings",
							":id",
							"submit(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/eligibility_screenings/:id/submit(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/eligibility_screenings/:id/submit(.:format)",
	},
	{
		endpoint: "/api/v1/professional_api/time_off/psst_request(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/time_off#psst_request",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"time_off",
							"psst_request(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/time_off/psst_request(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/time_off/psst_request(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/pre_interview_credentials(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/pre_interview_credentials#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"pre_interview_credentials(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/pre_interview_credentials(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/pre_interview_credentials#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"pre_interview_credentials(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/pre_interview_credentials(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/pre_interview_credentials(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/w2_terms_signature_requests(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/w2_terms_signature_requests#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"w2_terms_signature_requests(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/w2_terms_signature_requests(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/w2_terms_signature_requests(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/conditional_letter_of_employment_signature_requests(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_api/conditional_letter_of_employment_signature_requests#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"conditional_letter_of_employment_signature_requests(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/conditional_letter_of_employment_signature_requests(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/conditional_letter_of_employment_signature_requests(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/legal_agreements/current_for_facility/:facility_id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/legal_agreements#current_for_facility",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"legal_agreements",
							"current_for_facility",
							":facility_id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/legal_agreements/current_for_facility/:facility_id(.:format)",
						variable: [
							{
								key: "facility_id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/legal_agreements/current_for_facility/:facility_id(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_api/professionals_talent_providers/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_api/professionals_talent_providers#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_api",
							"professionals_talent_providers",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_api/professionals_talent_providers/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_api/professionals_talent_providers/:id(.:format)",
	},
	{
		endpoint: "/api/v1/professionals/badge_image(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professionals#badge_image",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals",
							"badge_image(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals/badge_image(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals/badge_image(.:format)",
	},
	{
		endpoint: "/api/v1/professionals/credentials(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals#credentials",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals",
							"credentials(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals/credentials(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals/credentials(.:format)",
	},
	{
		endpoint: "/api/v1/professionals/license_verification(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professionals#license_verification",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals",
							"license_verification(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals/license_verification(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals/license_verification(.:format)",
	},
	{
		endpoint:
			"/api/v1/professionals/:professional_id/professional_stats(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_stats#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals",
							":professional_id",
							"professional_stats(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals/:professional_id/professional_stats(.:format)",
						variable: [
							{
								key: "professional_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals/:professional_id/professional_stats(.:format)",
	},
	{
		endpoint: "/api/v1/professionals/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "professionals", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/professionals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals/:id(.:format)",
	},
	{
		endpoint: "/api/v1/professionals(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "professionals(.:format)"],
						raw: "{{baseUrl}}/api/v1/professionals(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals(.:format)",
	},
	{
		endpoint: "/api/v1/professional_leads/:id/add_phone_number(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_leads#add_phone_number",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_leads",
							":id",
							"add_phone_number(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_leads/:id/add_phone_number(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_leads/:id/add_phone_number(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_leads/:id/add_professions_and_regions(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_leads#add_professions_and_regions",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_leads",
							":id",
							"add_professions_and_regions(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_leads/:id/add_professions_and_regions(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_leads/:id/add_professions_and_regions(.:format)",
	},
	{
		endpoint: "/api/v1/professional_leads/create_lead(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_leads#create_lead",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_leads",
							"create_lead(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_leads/create_lead(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_leads/create_lead(.:format)",
	},
	{
		endpoint: "/api/v1/professional_leads/create_with_user(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_leads#create_with_user",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_leads",
							"create_with_user(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_leads/create_with_user(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_leads/create_with_user(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_leads/create_with_user_with_state(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_leads#create_with_user_with_state",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_leads",
							"create_with_user_with_state(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_leads/create_with_user_with_state(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_leads/create_with_user_with_state(.:format)",
	},
	{
		endpoint: "/api/v1/professional_leads/regions(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_leads#regions",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_leads",
							"regions(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_leads/regions(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_leads/regions(.:format)",
	},
	{
		endpoint: "/api/v1/professional_leads/positions(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_leads#positions",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_leads",
							"positions(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_leads/positions(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_leads/positions(.:format)",
	},
	{
		endpoint: "/api/v1/professional_leads/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_leads#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_leads",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_leads/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_leads#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_leads",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_leads/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/professional_leads#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_leads",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_leads/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_leads/:id(.:format)",
	},
	{
		endpoint: "/api/v1/professional_leads(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_leads#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "professional_leads(.:format)"],
						raw: "{{baseUrl}}/api/v1/professional_leads(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_leads(.:format)",
	},
	{
		endpoint: "/api/v1/professional_background_checks(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_background_checks#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_background_checks(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_background_checks(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_background_checks(.:format)",
	},
	{
		endpoint: "/api/v1/professions(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professions#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "professions(.:format)"],
						raw: "{{baseUrl}}/api/v1/professions(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professions(.:format)",
	},
	{
		endpoint: "/api/v1/professions/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professions#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "professions", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/professions/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professions/:id(.:format)",
	},
	{
		endpoint: "/api/v1/professionals_referrals/dm_short_url(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_referrals#dm_short_url",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_referrals",
							"dm_short_url(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_referrals/dm_short_url(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_referrals/dm_short_url(.:format)",
	},
	{
		endpoint:
			"/api/v1/professionals_referrals/send_referral_email(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professionals_referrals#send_referral_email",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_referrals",
							"send_referral_email(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_referrals/send_referral_email(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_referrals/send_referral_email(.:format)",
	},
	{
		endpoint: "/api/v1/professionals_referrals(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_referrals#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_referrals(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_referrals(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_referrals(.:format)",
	},
	{
		endpoint: "/api/v1/promoter_reviews(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/promoter_reviews#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "promoter_reviews(.:format)"],
						raw: "{{baseUrl}}/api/v1/promoter_reviews(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/promoter_reviews(.:format)",
	},
	{
		endpoint: "/api/v1/push_notifications/received(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/push_notifications#received",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"push_notifications",
							"received(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/push_notifications/received(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/push_notifications/received(.:format)",
	},
	{
		endpoint: "/api/v1/magic_tokens(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/magic_tokens#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "magic_tokens(.:format)"],
						raw: "{{baseUrl}}/api/v1/magic_tokens(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/magic_tokens(.:format)",
	},
	{
		endpoint: "/api/v1/me/account/update_password(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/accounts#update_password",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"account",
							"update_password(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/account/update_password(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/account/update_password(.:format)",
	},
	{
		endpoint: "/api/v1/me/account/password_rules(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/accounts#password_rules",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"account",
							"password_rules(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/account/password_rules(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/account/password_rules(.:format)",
	},
	{
		endpoint: "/api/v1/me/account/deactivate(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/accounts#deactivate",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"account",
							"deactivate(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/account/deactivate(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/account/deactivate(.:format)",
	},
	{
		endpoint: "/api/v1/me/account(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/accounts#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "account(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/account(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/accounts#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "account(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/account(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/accounts#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "account(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/account(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/account(.:format)",
	},
	{
		endpoint: "/api/v1/me/competency_skill_ratings(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_competency_skill_ratings#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"competency_skill_ratings(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/competency_skill_ratings(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_competency_skill_ratings#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"competency_skill_ratings(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/competency_skill_ratings(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/competency_skill_ratings(.:format)",
	},
	{
		endpoint: "/api/v1/me/current_facility/post_shift_data(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/current_facilities#post_shift_data",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"post_shift_data(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/post_shift_data(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/post_shift_data(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals_assignments(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/current_facilities#professionals_assignments",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals_assignments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals_assignments(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals_assignments(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:id/direct_booking_requests(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/direct_booking_requests#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id",
							"direct_booking_requests(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id/direct_booking_requests(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id/direct_booking_requests(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:id/professionals_credentials(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities_professionals#professionals_credentials",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id",
							"professionals_credentials(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id/professionals_credentials(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id/professionals_credentials(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:id/emrs(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities_professionals#emrs",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id",
							"emrs(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id/emrs(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id/emrs(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:id/reviews(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities_professionals#reviews",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id",
							"reviews(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id/reviews(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id/reviews(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:id/shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities_professionals#shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id",
							"shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id/shifts(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id/shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:id/credentials(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities_professionals#credentials",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id",
							"credentials(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id/credentials(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id/credentials(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:id/spoken_languages(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities_professionals#spoken_languages",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id",
							"spoken_languages(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id/spoken_languages(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id/spoken_languages(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:id/professionals_assignments(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities_professionals#professionals_assignments",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id",
							"professionals_assignments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id/professionals_assignments(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id/professionals_assignments(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:id/direct_booking_facilities_config(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/direct_booking_requests_facilities_configs#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id",
							"direct_booking_facilities_config(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id/direct_booking_facilities_config(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id/direct_booking_facilities_config(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:id/document_bundles(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities_professional_document_bundles#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id",
							"document_bundles(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id/document_bundles(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id/document_bundles(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:professional_id/documents_assets/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/documents_assets#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":professional_id",
							"documents_assets",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:professional_id/documents_assets/:id(.:format)",
						variable: [
							{
								key: "professional_id",
							},
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:professional_id/documents_assets/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/me/current_facility/professionals/:professional_id/communications/viewed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_facility_communications#viewed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":professional_id",
							"communications",
							"viewed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:professional_id/communications/viewed(.:format)",
						variable: [
							{
								key: "professional_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:professional_id/communications/viewed(.:format)",
	},
	{
		endpoint: "/api/v1/me/current_facility/professionals/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities_professionals#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/facilities_professionals#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/facilities_professionals#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals/:id(.:format)",
	},
	{
		endpoint: "/api/v1/me/current_facility/professionals(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/facilities_professionals#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/facilities_professionals#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"professionals(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/professionals(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/professionals(.:format)",
	},
	{
		endpoint: "/api/v1/me/current_facility/timecards(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/timecards#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"current_facility",
							"timecards(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/current_facility/timecards(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility/timecards(.:format)",
	},
	{
		endpoint: "/api/v1/me/current_facility(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/current_facilities#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "current_facility(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/current_facility(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/current_facilities#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "current_facility(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/current_facility(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/current_facilities#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "current_facility(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/current_facility(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/current_facility(.:format)",
	},
	{
		endpoint: "/api/v1/me/emr_experiences(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_emr_experiences#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "emr_experiences(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/emr_experiences(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_emr_experiences#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "emr_experiences(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/emr_experiences(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/emr_experiences(.:format)",
	},
	{
		endpoint: "/api/v1/me/mobile_phone_number(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/mobile_phone_numbers#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"mobile_phone_number(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/mobile_phone_number(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/mobile_phone_number(.:format)",
	},
	{
		endpoint: "/api/v1/me/verify_mobile_phone_number(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/verify_mobile_phone_numbers#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"verify_mobile_phone_number(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/verify_mobile_phone_number(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/verify_mobile_phone_number(.:format)",
	},
	{
		endpoint: "/api/v1/me/payouts/statement(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_payouts#statement",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"payouts",
							"statement(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/payouts/statement(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/payouts/statement(.:format)",
	},
	{
		endpoint: "/api/v1/me/payouts/validate_statement_request(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_payouts#validate_statement_request",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"payouts",
							"validate_statement_request(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/payouts/validate_statement_request(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/payouts/validate_statement_request(.:format)",
	},
	{
		endpoint: "/api/v1/me/payouts/configuration(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_payouts#configuration",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"payouts",
							"configuration(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/payouts/configuration(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/payouts/configuration(.:format)",
	},
	{
		endpoint: "/api/v1/me/payouts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_payouts#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "payouts(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/payouts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/payouts(.:format)",
	},
	{
		endpoint: "/api/v1/me/persona(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/personas#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "persona(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/persona(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/persona(.:format)",
	},
	{
		endpoint: "/api/v1/me/professionals_w9s/current(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_w9s#current",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"professionals_w9s",
							"current(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/professionals_w9s/current(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/professionals_w9s/current(.:format)",
	},
	{
		endpoint: "/api/v1/me/professionals_w9s/sign_data(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_w9s#sign_data",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"professionals_w9s",
							"sign_data(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/professionals_w9s/sign_data(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/professionals_w9s/sign_data(.:format)",
	},
	{
		endpoint: "/api/v1/me/professionals_w9s/sign_document(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professionals_w9s#sign_document",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"professionals_w9s",
							"sign_document(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/professionals_w9s/sign_document(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/professionals_w9s/sign_document(.:format)",
	},
	{
		endpoint: "/api/v1/me/qualifications(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_specialties#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "qualifications(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/qualifications(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/qualifications(.:format)",
	},
	{
		endpoint: "/api/v1/me/registration(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/registers#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "registration(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/registration(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/registration(.:format)",
	},
	{
		endpoint: "/api/v1/me/skills(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_skills#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "skills(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/skills(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/skills(.:format)",
	},
	{
		endpoint: "/api/v1/me/spoken_languages(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_spoken_languages#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "spoken_languages(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/spoken_languages(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_spoken_languages#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "spoken_languages(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/spoken_languages(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/spoken_languages(.:format)",
	},
	{
		endpoint: "/api/v1/me/tracking_flags/:flag_code(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/tracking_flags#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"tracking_flags",
							":flag_code(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/tracking_flags/:flag_code(.:format)",
						variable: [
							{
								key: "flag_code(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/tracking_flags#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"me",
							"tracking_flags",
							":flag_code(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/me/tracking_flags/:flag_code(.:format)",
						variable: [
							{
								key: "flag_code(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/tracking_flags/:flag_code(.:format)",
	},
	{
		endpoint: "/api/v1/me/work_regions(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/work_regions#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "work_regions(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/work_regions(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/work_regions#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "work_regions(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/work_regions(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/work_regions#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "work_regions(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/work_regions(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/work_regions(.:format)",
	},
	{
		endpoint: "/api/v1/me/perks(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/perks#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me", "perks(.:format)"],
						raw: "{{baseUrl}}/api/v1/me/perks(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me/perks(.:format)",
	},
	{
		endpoint: "/api/v1/me(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/mes#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "me(.:format)"],
						raw: "{{baseUrl}}/api/v1/me(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/me(.:format)",
	},
	{
		endpoint: "/api/v1/reference_document_states/:id/complete(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/reference_document_states#complete",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"reference_document_states",
							":id",
							"complete(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/reference_document_states/:id/complete(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/reference_document_states/:id/complete(.:format)",
	},
	{
		endpoint: "/api/v1/registration_options(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/registration_options#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "registration_options(.:format)"],
						raw: "{{baseUrl}}/api/v1/registration_options(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/registration_options(.:format)",
	},
	{
		endpoint: "/api/v1/quickbooks(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/quickbooks#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "quickbooks(.:format)"],
						raw: "{{baseUrl}}/api/v1/quickbooks(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/quickbooks(.:format)",
	},
	{
		endpoint: "/api/v1/netsuite(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/netsuites#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "netsuite(.:format)"],
						raw: "{{baseUrl}}/api/v1/netsuite(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/netsuite(.:format)",
	},
	{
		endpoint: "/api/v1/regions/tree(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/regions#tree",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "regions", "tree(.:format)"],
						raw: "{{baseUrl}}/api/v1/regions/tree(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/regions/tree(.:format)",
	},
	{
		endpoint: "/api/v1/regions/tree_by_country_subdivision(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/regions#tree_by_country_subdivision",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"regions",
							"tree_by_country_subdivision(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/regions/tree_by_country_subdivision(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/regions/tree_by_country_subdivision(.:format)",
	},
	{
		endpoint: "/api/v1/region_specialty_suggested_rates(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/region_specialty_suggested_rates#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"region_specialty_suggested_rates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/region_specialty_suggested_rates(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/region_specialty_suggested_rates(.:format)",
	},
	{
		endpoint: "/api/v1/register(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/registers#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "register(.:format)"],
						raw: "{{baseUrl}}/api/v1/register(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register(.:format)",
	},
	{
		endpoint: "/api/v1/register/professional/emrs(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/professional/emrs#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"emrs(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/emrs(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/emrs(.:format)",
	},
	{
		endpoint: "/api/v1/register/professional/profession(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/professional/professions#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"profession(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/profession(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/profession(.:format)",
	},
	{
		endpoint: "/api/v1/register/professional/qualifications(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/professional/qualifications#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"qualifications(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/qualifications(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/qualifications(.:format)",
	},
	{
		endpoint: "/api/v1/register/professional/schedule_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/professional/schedule_interviews#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"schedule_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/schedule_interview(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/schedule_interview(.:format)",
	},
	{
		endpoint: "/api/v1/register/professional/user(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/professional/users#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"user(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/user(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/user(.:format)",
	},
	{
		endpoint: "/api/v1/register/professional/work_regions(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/professional/work_regions#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"work_regions(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/work_regions(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/work_regions(.:format)",
	},
	{
		endpoint:
			"/api/v1/register/professional/finalize_lead/complete_user(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/professional/finalize_leads#complete_user",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"finalize_lead",
							"complete_user(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/finalize_lead/complete_user(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/finalize_lead/complete_user(.:format)",
	},
	{
		endpoint: "/api/v1/register/professional/finalize_lead(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/professional/finalize_leads#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"finalize_lead(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/finalize_lead(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/finalize_lead(.:format)",
	},
	{
		endpoint: "/api/v1/register/professional/manager/finalize(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/professional/manager/finalize#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"manager",
							"finalize(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/manager/finalize(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/manager/finalize(.:format)",
	},
	{
		endpoint: "/api/v1/register/professional/legal(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/register/legals#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"legal(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/legal(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/register/legals#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"legal(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/legal(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/legals#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"legal(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/legal(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/legal(.:format)",
	},
	{
		endpoint: "/api/v1/register/professional/mobile_phone_number(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/mobile_phone_numbers#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"mobile_phone_number(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/mobile_phone_number(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/mobile_phone_number(.:format)",
	},
	{
		endpoint:
			"/api/v1/register/professional/terms_and_conditions_emails(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/terms_and_conditions_emails#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"terms_and_conditions_emails(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/terms_and_conditions_emails(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/terms_and_conditions_emails(.:format)",
	},
	{
		endpoint:
			"/api/v1/register/professional/verify_mobile_phone_number/finalize_lead(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/register/verify_mobile_phone_numbers#finalize_lead",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"verify_mobile_phone_number",
							"finalize_lead(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/verify_mobile_phone_number/finalize_lead(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/verify_mobile_phone_number/finalize_lead(.:format)",
	},
	{
		endpoint:
			"/api/v1/register/professional/verify_mobile_phone_number(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/verify_mobile_phone_numbers#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"professional",
							"verify_mobile_phone_number(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/professional/verify_mobile_phone_number(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/professional/verify_mobile_phone_number(.:format)",
	},
	{
		endpoint: "/api/v1/register/facility/accounts_payable(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/facility/accounts_payables#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"facility",
							"accounts_payable(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/facility/accounts_payable(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/facility/accounts_payable(.:format)",
	},
	{
		endpoint: "/api/v1/register/facility/additional_info(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/facility/additional_infos#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"facility",
							"additional_info(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/facility/additional_info(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/facility/additional_info(.:format)",
	},
	{
		endpoint: "/api/v1/register/facility/basic_info(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/facility/basic_infos#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"facility",
							"basic_info(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/facility/basic_info(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/facility/basic_info(.:format)",
	},
	{
		endpoint: "/api/v1/register/facility/payment_method(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/facility/payment_methods#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"facility",
							"payment_method(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/facility/payment_method(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/facility/payment_method(.:format)",
	},
	{
		endpoint: "/api/v1/register/facility/user(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/facility/users#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"facility",
							"user(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/facility/user(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/facility/user(.:format)",
	},
	{
		endpoint: "/api/v1/register/facility/legal(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/legals#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"facility",
							"legal(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/facility/legal(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/facility/legal(.:format)",
	},
	{
		endpoint: "/api/v1/register/facility/mobile_phone_number(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/mobile_phone_numbers#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"facility",
							"mobile_phone_number(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/facility/mobile_phone_number(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/facility/mobile_phone_number(.:format)",
	},
	{
		endpoint:
			"/api/v1/register/facility/verify_mobile_phone_number(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/register/verify_mobile_phone_numbers#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"register",
							"facility",
							"verify_mobile_phone_number(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/register/facility/verify_mobile_phone_number(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/register/facility/verify_mobile_phone_number(.:format)",
	},
	{
		endpoint: "/api/v1/password_resets/send_sign_up_email(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/password_resets#send_sign_up_email",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"password_resets",
							"send_sign_up_email(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/password_resets/send_sign_up_email(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/password_resets/send_sign_up_email(.:format)",
	},
	{
		endpoint: "/api/v1/password_resets(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/password_resets#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "password_resets(.:format)"],
						raw: "{{baseUrl}}/api/v1/password_resets(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/password_resets(.:format)",
	},
	{
		endpoint: "/api/v1/email_change_proposal(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/email_change_proposals#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "email_change_proposal(.:format)"],
						raw: "{{baseUrl}}/api/v1/email_change_proposal(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/email_change_proposals#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "email_change_proposal(.:format)"],
						raw: "{{baseUrl}}/api/v1/email_change_proposal(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/email_change_proposals#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "email_change_proposal(.:format)"],
						raw: "{{baseUrl}}/api/v1/email_change_proposal(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/email_change_proposal(.:format)",
	},
	{
		endpoint:
			"/api/v1/professional_facility_communications/:id/viewed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_facility_communications#viewed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_facility_communications",
							":id",
							"viewed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_facility_communications/:id/viewed(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_facility_communications/:id/viewed(.:format)",
	},
	{
		endpoint: "/api/v1/professional_facility_communications(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professional_facility_communications#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_facility_communications(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_facility_communications(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professional_facility_communications#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professional_facility_communications(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professional_facility_communications(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professional_facility_communications(.:format)",
	},
	{
		endpoint: "/api/v1/professionals_facilities/:id/requirements(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_facilities#requirements",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							":id",
							"requirements(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/:id/requirements(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_facilities/:id/requirements(.:format)",
	},
	{
		endpoint: "/api/v1/professionals_facilities/:id/shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_facilities#shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							":id",
							"shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/:id/shifts(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_facilities/:id/shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/professionals_facilities/:id/onboarding_progress(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_facilities#onboarding_progress",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							":id",
							"onboarding_progress(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/:id/onboarding_progress(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_facilities/:id/onboarding_progress(.:format)",
	},
	{
		endpoint: "/api/v1/professionals_facilities/previews(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_facilities#previews",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							"previews(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/previews(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_facilities/previews(.:format)",
	},
	{
		endpoint:
			"/api/v1/professionals_facilities/:professionals_facility_id/communications/viewed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professional_facility_communications#viewed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							":professionals_facility_id",
							"communications",
							"viewed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/:professionals_facility_id/communications/viewed(.:format)",
						variable: [
							{
								key: "professionals_facility_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_facilities/:professionals_facility_id/communications/viewed(.:format)",
	},
	{
		endpoint:
			"/api/v1/professionals_facilities/:professionals_facility_id/questions/:id/answer(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professionals_facility_questions#answer",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							":professionals_facility_id",
							"questions",
							":id",
							"answer(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/:professionals_facility_id/questions/:id/answer(.:format)",
						variable: [
							{
								key: "professionals_facility_id",
							},
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_facilities/:professionals_facility_id/questions/:id/answer(.:format)",
	},
	{
		endpoint:
			"/api/v1/professionals_facilities/:professionals_facility_id/questions/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_facility_questions#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							":professionals_facility_id",
							"questions",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/:professionals_facility_id/questions/:id(.:format)",
						variable: [
							{
								key: "professionals_facility_id",
							},
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_facilities/:professionals_facility_id/questions/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/professionals_facilities/:professionals_facility_id/questions(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/professionals_facility_questions#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							":professionals_facility_id",
							"questions(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/:professionals_facility_id/questions(.:format)",
						variable: [
							{
								key: "professionals_facility_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_facilities/:professionals_facility_id/questions(.:format)",
	},
	{
		endpoint: "/api/v1/professionals_facilities/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/professionals_facilities#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/professionals_facilities#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/professionals_facilities#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"professionals_facilities",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/professionals_facilities/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/professionals_facilities/:id(.:format)",
	},
	{
		endpoint: "/api/v1/reviews(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/reviews#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "reviews(.:format)"],
						raw: "{{baseUrl}}/api/v1/reviews(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/reviews#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "reviews(.:format)"],
						raw: "{{baseUrl}}/api/v1/reviews(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/reviews(.:format)",
	},
	{
		endpoint: "/api/v1/reviews/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/reviews#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "reviews", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/reviews/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/reviews#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "reviews", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/reviews/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/reviews#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "reviews", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/reviews/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/reviews#destroy",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "reviews", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/reviews/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/reviews/:id(.:format)",
	},
	{
		endpoint: "/api/v1/s3_hooks/file_uploaded(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/s3_hooks/file_uploaded#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"s3_hooks",
							"file_uploaded(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/s3_hooks/file_uploaded(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/s3_hooks/file_uploaded(.:format)",
	},
	{
		endpoint: "/api/v1/s3_hooks/text_extracted(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/s3_hooks/text_extracted#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"s3_hooks",
							"text_extracted(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/s3_hooks/text_extracted(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/s3_hooks/text_extracted(.:format)",
	},
	{
		endpoint: "/api/v1/shifts/:id/floats_config(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shifts#floats_config",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shifts",
							":id",
							"floats_config(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shifts/:id/floats_config(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shifts/:id/floats_config(.:format)",
	},
	{
		endpoint: "/api/v1/shifts/:id/requirements(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shifts#requirements",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shifts",
							":id",
							"requirements(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shifts/:id/requirements(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shifts/:id/requirements(.:format)",
	},
	{
		endpoint: "/api/v1/shifts/shifts_to_monitor(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shifts#shifts_to_monitor",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shifts",
							"shifts_to_monitor(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shifts/shifts_to_monitor(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shifts/shifts_to_monitor(.:format)",
	},
	{
		endpoint: "/api/v1/shifts/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shifts#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "shifts", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/shifts/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shifts/:id(.:format)",
	},
	{
		endpoint: "/api/v1/shift_summaries(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_summaries#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "shift_summaries(.:format)"],
						raw: "{{baseUrl}}/api/v1/shift_summaries(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_summaries(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_agreements/:shift_agreement_id/shift_agreement_floats(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/shift_agreement_floats#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"shift_agreement_floats(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/shift_agreement_floats(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:shift_agreement_id/shift_agreement_floats(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_agreements/:shift_agreement_id/shift_issues(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/shift_issues#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"shift_issues(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/shift_issues(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/shift_issues#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"shift_issues(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/shift_issues(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:shift_agreement_id/shift_issues(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_agreements/:shift_agreement_id/reviews(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/reviews#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"reviews(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/reviews(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/reviews#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"reviews(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/reviews(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:shift_agreement_id/reviews(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_agreements/:shift_agreement_id/timecard/approve(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/timecards#approve",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"timecard",
							"approve(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/timecard/approve(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:shift_agreement_id/timecard/approve(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_agreements/:shift_agreement_id/timecard/dispute(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/timecards#dispute",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"timecard",
							"dispute(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/timecard/dispute(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:shift_agreement_id/timecard/dispute(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_agreements/:shift_agreement_id/timecard(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/timecards#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"timecard(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/timecard(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/timecards#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"timecard(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/timecard(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/timecards#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"timecard(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/timecard(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:shift_agreement_id/timecard(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_agreements/:shift_agreement_id/punch_in(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/punch_ins#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"punch_in(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/punch_in(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:shift_agreement_id/punch_in(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_agreements/:shift_agreement_id/punch_out(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/punch_outs#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":shift_agreement_id",
							"punch_out(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:shift_agreement_id/punch_out(.:format)",
						variable: [
							{
								key: "shift_agreement_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:shift_agreement_id/punch_out(.:format)",
	},
	{
		endpoint: "/api/v1/shift_agreements/upcoming_shift(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_agreements#upcoming_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							"upcoming_shift(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/upcoming_shift(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/upcoming_shift(.:format)",
	},
	{
		endpoint: "/api/v1/shift_agreements/:id/to_ics(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_agreements#to_ics",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":id",
							"to_ics(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:id/to_ics(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:id/to_ics(.:format)",
	},
	{
		endpoint: "/api/v1/shift_agreements/:id/punch_time_check(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/clock_punches#punch_time_check",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":id",
							"punch_time_check(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:id/punch_time_check(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:id/punch_time_check(.:format)",
	},
	{
		endpoint: "/api/v1/shift_agreements/:id/resile(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/shift_agreements#resile",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":id",
							"resile(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:id/resile(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:id/resile(.:format)",
	},
	{
		endpoint: "/api/v1/shift_agreements/:id/resile_fee(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_agreements#resile_fee",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":id",
							"resile_fee(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:id/resile_fee(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:id/resile_fee(.:format)",
	},
	{
		endpoint: "/api/v1/shift_agreements/:id/sent_home(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/shift_agreements#sent_home",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":id",
							"sent_home(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:id/sent_home(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:id/sent_home(.:format)",
	},
	{
		endpoint: "/api/v1/shift_agreements/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_agreements#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/shift_agreements#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/shift_agreements#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_agreements",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_agreements/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements/:id(.:format)",
	},
	{
		endpoint: "/api/v1/shift_agreements(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_agreements#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "shift_agreements(.:format)"],
						raw: "{{baseUrl}}/api/v1/shift_agreements(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_agreements(.:format)",
	},
	{
		endpoint: "/api/v1/fax_notifications/shift_agreements/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/fax_notifications/shift_agreements#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"fax_notifications",
							"shift_agreements",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/fax_notifications/shift_agreements/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/fax_notifications/shift_agreements/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/fax_notifications/shift_lineup_summaries/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/fax_notifications/shift_lineup_summaries#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"fax_notifications",
							"shift_lineup_summaries",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/fax_notifications/shift_lineup_summaries/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/fax_notifications/shift_lineup_summaries/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_proposals/:shift_proposal_id/bids/:bid_id/messages(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/messages#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposals",
							":shift_proposal_id",
							"bids",
							":bid_id",
							"messages(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposals/:shift_proposal_id/bids/:bid_id/messages(.:format)",
						variable: [
							{
								key: "shift_proposal_id",
							},
							{
								key: "bid_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposals/:shift_proposal_id/bids/:bid_id/messages(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_proposals/:shift_proposal_id/bids/:id/accept(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/shift_proposal_bids#accept",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposals",
							":shift_proposal_id",
							"bids",
							":id",
							"accept(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposals/:shift_proposal_id/bids/:id/accept(.:format)",
						variable: [
							{
								key: "shift_proposal_id",
							},
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposals/:shift_proposal_id/bids/:id/accept(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_proposals/:shift_proposal_id/bids/:id/message_facility(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/shift_proposal_bids#message_facility",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposals",
							":shift_proposal_id",
							"bids",
							":id",
							"message_facility(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposals/:shift_proposal_id/bids/:id/message_facility(.:format)",
						variable: [
							{
								key: "shift_proposal_id",
							},
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposals/:shift_proposal_id/bids/:id/message_facility(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_proposals/:shift_proposal_id/bids/:id/message_professional(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/shift_proposal_bids#message_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposals",
							":shift_proposal_id",
							"bids",
							":id",
							"message_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposals/:shift_proposal_id/bids/:id/message_professional(.:format)",
						variable: [
							{
								key: "shift_proposal_id",
							},
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposals/:shift_proposal_id/bids/:id/message_professional(.:format)",
	},
	{
		endpoint:
			"/api/v1/shift_proposals/:shift_proposal_id/bids/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_proposal_bids#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposals",
							":shift_proposal_id",
							"bids",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposals/:shift_proposal_id/bids/:id(.:format)",
						variable: [
							{
								key: "shift_proposal_id",
							},
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/shift_proposal_bids#destroy",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposals",
							":shift_proposal_id",
							"bids",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposals/:shift_proposal_id/bids/:id(.:format)",
						variable: [
							{
								key: "shift_proposal_id",
							},
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposals/:shift_proposal_id/bids/:id(.:format)",
	},
	{
		endpoint: "/api/v1/shift_proposals/:shift_proposal_id/bids(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_proposal_bids#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposals",
							":shift_proposal_id",
							"bids(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposals/:shift_proposal_id/bids(.:format)",
						variable: [
							{
								key: "shift_proposal_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/shift_proposal_bids#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposals",
							":shift_proposal_id",
							"bids(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposals/:shift_proposal_id/bids(.:format)",
						variable: [
							{
								key: "shift_proposal_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposals/:shift_proposal_id/bids(.:format)",
	},
	{
		endpoint: "/api/v1/shift_proposals/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_proposals#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "shift_proposals", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/shift_proposals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposals/:id(.:format)",
	},
	{
		endpoint: "/api/v1/shift_proposal_bids(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_proposal_bids#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "shift_proposal_bids(.:format)"],
						raw: "{{baseUrl}}/api/v1/shift_proposal_bids(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposal_bids(.:format)",
	},
	{
		endpoint: "/api/v1/shift_proposal_bids/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/shift_proposal_bids#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"shift_proposal_bids",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/shift_proposal_bids/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/shift_proposal_bids/:id(.:format)",
	},
	{
		endpoint: "/api/v1/specialties/tree(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/specialties#tree",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "specialties", "tree(.:format)"],
						raw: "{{baseUrl}}/api/v1/specialties/tree(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/specialties/tree(.:format)",
	},
	{
		endpoint: "/api/v1/specialties/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/specialties#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "specialties", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/specialties/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/specialties/:id(.:format)",
	},
	{
		endpoint: "/api/v1/specialties(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/specialties#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "specialties(.:format)"],
						raw: "{{baseUrl}}/api/v1/specialties(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/specialties(.:format)",
	},
	{
		endpoint: "/api/v1/spoken_languages(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/spoken_languages#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "spoken_languages(.:format)"],
						raw: "{{baseUrl}}/api/v1/spoken_languages(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/spoken_languages(.:format)",
	},
	{
		endpoint: "/api/v1/support_emails(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/support_emails#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "support_emails(.:format)"],
						raw: "{{baseUrl}}/api/v1/support_emails(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/support_emails(.:format)",
	},
	{
		endpoint: "/api/v1/support_emails/new(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/support_emails#new",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "support_emails", "new(.:format)"],
						raw: "{{baseUrl}}/api/v1/support_emails/new(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/support_emails/new(.:format)",
	},
	{
		endpoint: "/api/v1/timecards/:timecard_id/timecard_issues(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/timecard_issues#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"timecards",
							":timecard_id",
							"timecard_issues(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/timecards/:timecard_id/timecard_issues(.:format)",
						variable: [
							{
								key: "timecard_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/timecards/:timecard_id/timecard_issues(.:format)",
	},
	{
		endpoint: "/api/v1/timecards(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/timecards#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "timecards(.:format)"],
						raw: "{{baseUrl}}/api/v1/timecards(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/timecards(.:format)",
	},
	{
		endpoint:
			"/api/v1/salesforce/facilities/:id/required_credentials(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/salesforce/facilities#required_credentials",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"salesforce",
							"facilities",
							":id",
							"required_credentials(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/salesforce/facilities/:id/required_credentials(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/salesforce/facilities/:id/required_credentials(.:format)",
	},
	{
		endpoint:
			"/api/v1/salesforce/professionals/:id/onboarding_requirements(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/salesforce/professionals#onboarding_requirements",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"salesforce",
							"professionals",
							":id",
							"onboarding_requirements(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/salesforce/professionals/:id/onboarding_requirements(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/salesforce/professionals/:id/onboarding_requirements(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/integrations/faxes/create_media_and_send_fax(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/integrations/faxes#create_media_and_send_fax",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"integrations",
							"faxes",
							"create_media_and_send_fax(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/integrations/faxes/create_media_and_send_fax(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/integrations/faxes/create_media_and_send_fax(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/float_config_settings/:id/recalculate_cached_float_config(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/float_config_settings#recalculate_cached_float_config",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"float_config_settings",
							":id",
							"recalculate_cached_float_config(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/float_config_settings/:id/recalculate_cached_float_config(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/float_config_settings/:id/recalculate_cached_float_config(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/float_organizations/:float_organization_id/recalculate_cached_float_config(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/float_organizations#recalculate_cached_float_config",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"float_organizations",
							":float_organization_id",
							"recalculate_cached_float_config(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/float_organizations/:float_organization_id/recalculate_cached_float_config(.:format)",
						variable: [
							{
								key: "float_organization_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/float_organizations/:float_organization_id/recalculate_cached_float_config(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/drug_screenings/eligibility_statuses(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/drug_screenings#eligibility_statuses",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"drug_screenings",
							"eligibility_statuses(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/drug_screenings/eligibility_statuses(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/drug_screenings/eligibility_statuses(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/ghost_units/float_to_facility_shift(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/ghost_units#float_to_facility_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"ghost_units",
							"float_to_facility_shift(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/ghost_units/float_to_facility_shift(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/ghost_units/float_to_facility_shift(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/ghost_units/ghost_shift_cancel(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/ghost_units#ghost_shift_cancel",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"ghost_units",
							"ghost_shift_cancel(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/ghost_units/ghost_shift_cancel(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/ghost_units/ghost_shift_cancel(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/broadcast_schedules/cancel_and_rebroadcast(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/broadcast_schedules#cancel_and_rebroadcast",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"broadcast_schedules",
							"cancel_and_rebroadcast(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/broadcast_schedules/cancel_and_rebroadcast(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/broadcast_schedules/cancel_and_rebroadcast(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/broadcast_schedules/accelerate_current_broadcast(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/broadcast_schedules#accelerate_current_broadcast",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"broadcast_schedules",
							"accelerate_current_broadcast(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/broadcast_schedules/accelerate_current_broadcast(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/broadcast_schedules/accelerate_current_broadcast(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/message_previews/force_rebuild(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/message_previews#force_rebuild",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"message_previews",
							"force_rebuild(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/message_previews/force_rebuild(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/message_previews/force_rebuild(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/message_previews/:id/send_test_message(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/message_previews#send_test_message",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"message_previews",
							":id",
							"send_test_message(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/message_previews/:id/send_test_message(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/message_previews/:id/send_test_message(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/message_previews/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/message_previews#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"message_previews",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/message_previews/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/message_previews/:id(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/message_previews(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/message_previews#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"message_previews(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/message_previews(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/message_previews(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facilities_professional_document_bundles/:id/regenerate(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facilities_professional_document_bundles#regenerate",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facilities_professional_document_bundles",
							":id",
							"regenerate(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facilities_professional_document_bundles/:id/regenerate(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facilities_professional_document_bundles/:id/regenerate(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facility_dormancy_settings/:id/update_professional_dormancies(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facility_dormancy_settings#update_professional_dormancies",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facility_dormancy_settings",
							":id",
							"update_professional_dormancies(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facility_dormancy_settings/:id/update_professional_dormancies(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facility_dormancy_settings/:id/update_professional_dormancies(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facility_shift_rotations/:id/upcoming_summaries(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/facility_shift_rotations#upcoming_summaries",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facility_shift_rotations",
							":id",
							"upcoming_summaries(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facility_shift_rotations/:id/upcoming_summaries(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facility_shift_rotations/:id/upcoming_summaries(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/professional_available_shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/professionals#professional_available_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"professional_available_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/professional_available_shifts(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/professional_available_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/queue_positions_cache_update(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#queue_positions_cache_update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"queue_positions_cache_update(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/queue_positions_cache_update(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/queue_positions_cache_update(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/update_competencies_state(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#update_competencies_state",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"update_competencies_state(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/update_competencies_state(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/update_competencies_state(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/generate_competencies_pdf(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#generate_competencies_pdf",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"generate_competencies_pdf(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/generate_competencies_pdf(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/generate_competencies_pdf(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/reset_background_check_forms(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#reset_background_check_forms",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"reset_background_check_forms(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/reset_background_check_forms(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/reset_background_check_forms(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/reset_drug_screens(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#reset_drug_screens",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"reset_drug_screens(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/reset_drug_screens(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/reset_drug_screens(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/create_active_background_check(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#create_active_background_check",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"create_active_background_check(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/create_active_background_check(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/create_active_background_check(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/reset_competencies(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#reset_competencies",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"reset_competencies(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/reset_competencies(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/reset_competencies(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/fulfill_competencies(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#fulfill_competencies",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"fulfill_competencies(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/fulfill_competencies(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/fulfill_competencies(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/reset_financials(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#reset_financials",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"reset_financials(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/reset_financials(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/reset_financials(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/fulfill_financials(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#fulfill_financials",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"fulfill_financials(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/fulfill_financials(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/fulfill_financials(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/set_dob_from_bgc_reports(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#set_dob_from_bgc_reports",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"set_dob_from_bgc_reports(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/set_dob_from_bgc_reports(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/set_dob_from_bgc_reports(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/professionals/:id/deactivate(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#deactivate",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"deactivate(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/deactivate(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/deactivate(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/professionals/:id/interview_now(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#interview_now",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"interview_now(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/interview_now(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/interview_now(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/:id/update_qual_review_working_status(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#update_qual_review_working_status",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							":id",
							"update_qual_review_working_status(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/:id/update_qual_review_working_status(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/:id/update_qual_review_working_status(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals/create_otf_professional(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals#create_otf_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals",
							"create_otf_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals/create_otf_professional(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals/create_otf_professional(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_credentials/:id/verify(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_credentials#verify",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_credentials",
							":id",
							"verify(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_credentials/:id/verify(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_credentials/:id/verify(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_credentials/:id/reject(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_credentials#reject",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_credentials",
							":id",
							"reject(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_credentials/:id/reject(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_credentials/:id/reject(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_credentials/:id/activate(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_credentials#activate",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_credentials",
							":id",
							"activate(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_credentials/:id/activate(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_credentials/:id/activate(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_credentials/:id/deactivate(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_credentials#deactivate",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_credentials",
							":id",
							"deactivate(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_credentials/:id/deactivate(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_credentials/:id/deactivate(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_credentials/:id/recalculate_satisfied_requirements(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_credentials#recalculate_satisfied_requirements",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_credentials",
							":id",
							"recalculate_satisfied_requirements(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_credentials/:id/recalculate_satisfied_requirements(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_credentials/:id/recalculate_satisfied_requirements(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_credentials/:id/handle_change(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_credentials#handle_change",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_credentials",
							":id",
							"handle_change(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_credentials/:id/handle_change(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_credentials/:id/handle_change(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_credentials/batch_deactivate(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_credentials#batch_deactivate",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_credentials",
							"batch_deactivate(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_credentials/batch_deactivate(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_credentials/batch_deactivate(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_credentials/send_rejection_notifications(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_credentials#send_rejection_notifications",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_credentials",
							"send_rejection_notifications(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_credentials/send_rejection_notifications(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_credentials/send_rejection_notifications(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_licenses/:id/make_compact(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_licenses#make_compact",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_licenses",
							":id",
							"make_compact(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_licenses/:id/make_compact(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_licenses/:id/make_compact(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_licenses/:id/make_not_compact(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_licenses#make_not_compact",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_licenses",
							":id",
							"make_not_compact(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_licenses/:id/make_not_compact(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_licenses/:id/make_not_compact(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/psst_data/average_pay_data(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/psst_data#average_pay_data",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"psst_data",
							"average_pay_data(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/psst_data/average_pay_data(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/psst_data/average_pay_data(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/psst_data/accumulated_psst(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/psst_data#accumulated_psst",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"psst_data",
							"accumulated_psst(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/psst_data/accumulated_psst(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/psst_data/accumulated_psst(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/psst_data/psst_eligibility(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/psst_data#psst_eligibility",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"psst_data",
							"psst_eligibility(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/psst_data/psst_eligibility(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/psst_data/psst_eligibility(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facilities_shift_claim_policies/set_policies(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facilities_shift_claim_policies#set_policies",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facilities_shift_claim_policies",
							"set_policies(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facilities_shift_claim_policies/set_policies(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facilities_shift_claim_policies/set_policies(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/credential_listings(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/credential_listings#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"credential_listings(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/credential_listings(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/credential_listings(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_leads/:id/attempt_unwaitlist(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_leads#attempt_unwaitlist",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_leads",
							":id",
							"attempt_unwaitlist(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_leads/:id/attempt_unwaitlist(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_leads/:id/attempt_unwaitlist(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_leads/:id/waitlist_check(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_leads#waitlist_check",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_leads",
							":id",
							"waitlist_check(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_leads/:id/waitlist_check(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_leads/:id/waitlist_check(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_leads/:id/deactivate(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_leads#deactivate",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_leads",
							":id",
							"deactivate(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_leads/:id/deactivate(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_leads/:id/deactivate(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_leads/parent_specialties_for_signup(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/professional_leads#parent_specialties_for_signup",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_leads",
							"parent_specialties_for_signup(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_leads/parent_specialties_for_signup(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_leads/parent_specialties_for_signup(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_leads/:professional_lead_id/nursys(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/tools_api/nursys#destroy",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_leads",
							":professional_lead_id",
							"nursys(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_leads/:professional_lead_id/nursys(.:format)",
						variable: [
							{
								key: "professional_lead_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/nursys#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_leads",
							":professional_lead_id",
							"nursys(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_leads/:professional_lead_id/nursys(.:format)",
						variable: [
							{
								key: "professional_lead_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/nursys#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_leads",
							":professional_lead_id",
							"nursys(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_leads/:professional_lead_id/nursys(.:format)",
						variable: [
							{
								key: "professional_lead_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_leads/:professional_lead_id/nursys(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_leads/:professional_lead_id/nursys/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/nursys#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_leads",
							":professional_lead_id",
							"nursys",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_leads/:professional_lead_id/nursys/:id(.:format)",
						variable: [
							{
								key: "professional_lead_id",
							},
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_leads/:professional_lead_id/nursys/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_leads/create_professional_lead(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_leads#create_professional_lead",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_leads",
							"create_professional_lead(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_leads/create_professional_lead(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_leads/create_professional_lead(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/weekly_interview_summary(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/professional_interviews#weekly_interview_summary",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							"weekly_interview_summary(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/weekly_interview_summary(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/weekly_interview_summary(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/update_interviews_on_region_change(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_interviews#update_interviews_on_region_change",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							"update_interviews_on_region_change(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/update_interviews_on_region_change(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/update_interviews_on_region_change(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/waitlist_pre_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_interviews#waitlist_pre_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							"waitlist_pre_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/waitlist_pre_interview(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/waitlist_pre_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/:id/pass_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_interviews#pass_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							":id",
							"pass_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/:id/pass_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/:id/pass_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/:id/book_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_interviews#book_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							":id",
							"book_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/:id/book_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/:id/book_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/:id/reschedule_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_interviews#reschedule_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							":id",
							"reschedule_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/:id/reschedule_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/:id/reschedule_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/:id/cancel_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_interviews#cancel_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							":id",
							"cancel_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/:id/cancel_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/:id/cancel_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/:id/void_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_interviews#void_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							":id",
							"void_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/:id/void_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/:id/void_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/:id/no_show_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_interviews#no_show_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							":id",
							"no_show_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/:id/no_show_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/:id/no_show_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/:id/waitlist_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_interviews#waitlist_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							":id",
							"waitlist_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/:id/waitlist_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/:id/waitlist_interview(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_interviews/:id/deny_interview(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_interviews#deny_interview",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_interviews",
							":id",
							"deny_interview(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_interviews/:id/deny_interview(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_interviews/:id/deny_interview(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/professional_stats/index_csv(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/professional_stats#index_csv",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_stats",
							"index_csv(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_stats/index_csv(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_stats/index_csv(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/professional_stats/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/professional_stats#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_stats",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_stats/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_stats/:id(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/facility_rates/debug_from_shift(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facility_rates#debug_from_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facility_rates",
							"debug_from_shift(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facility_rates/debug_from_shift(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facility_rates/debug_from_shift(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facility_rates/update_facility_rate_position_projections(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facility_rates#update_facility_rate_position_projections",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facility_rates",
							"update_facility_rate_position_projections(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facility_rates/update_facility_rate_position_projections(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facility_rates/update_facility_rate_position_projections(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facility_rates/reset_default_boost_levels(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facility_rates#reset_default_boost_levels",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facility_rates",
							"reset_default_boost_levels(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facility_rates/reset_default_boost_levels(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facility_rates/reset_default_boost_levels(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facility_rates/enable_automated_smart_rates(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facility_rates#enable_automated_smart_rates",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facility_rates",
							"enable_automated_smart_rates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facility_rates/enable_automated_smart_rates(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facility_rates/enable_automated_smart_rates(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/facility_rates/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/facility_rates#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facility_rates",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facility_rates/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facility_rates/:id(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/facility_rates(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/facility_rates#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facility_rates(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facility_rates(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facility_rates(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/rate_change_requests/:id/approve(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/rate_change_requests#approve",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"rate_change_requests",
							":id",
							"approve(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/rate_change_requests/:id/approve(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/rate_change_requests/:id/approve(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/rate_change_requests/:id/affected_shifts(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/rate_change_requests#affected_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"rate_change_requests",
							":id",
							"affected_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/rate_change_requests/:id/affected_shifts(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/rate_change_requests/:id/affected_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/rate_change_requests/:id/update_associated_shifts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/rate_change_requests#update_associated_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"rate_change_requests",
							":id",
							"update_associated_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/rate_change_requests/:id/update_associated_shifts(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/rate_change_requests/:id/update_associated_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/onsite_requisite_shifts/approve_document(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/onsite_requisite_shifts#approve_document",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"onsite_requisite_shifts",
							"approve_document(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/onsite_requisite_shifts/approve_document(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/onsite_requisite_shifts/approve_document(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/onsite_requisite_shifts/bulk_approve_documents(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/onsite_requisite_shifts#bulk_approve_documents",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"onsite_requisite_shifts",
							"bulk_approve_documents(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/onsite_requisite_shifts/bulk_approve_documents(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/onsite_requisite_shifts/bulk_approve_documents(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/onsite_requisite_shifts/reject_document(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/onsite_requisite_shifts#reject_document",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"onsite_requisite_shifts",
							"reject_document(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/onsite_requisite_shifts/reject_document(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/onsite_requisite_shifts/reject_document(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/onsite_requisite_shifts/generate_progresses_for_professional(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/onsite_requisite_shifts#generate_progresses_for_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"onsite_requisite_shifts",
							"generate_progresses_for_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/onsite_requisite_shifts/generate_progresses_for_professional(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/onsite_requisite_shifts/generate_progresses_for_professional(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/onsite_requisite_shifts/create_progress_grant(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/onsite_requisite_shifts#create_progress_grant",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"onsite_requisite_shifts",
							"create_progress_grant(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/onsite_requisite_shifts/create_progress_grant(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/onsite_requisite_shifts/create_progress_grant(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/onsite_requisite_shifts/grant_statuses_for_progress(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/onsite_requisite_shifts#grant_statuses_for_progress",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"onsite_requisite_shifts",
							"grant_statuses_for_progress(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/onsite_requisite_shifts/grant_statuses_for_progress(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/onsite_requisite_shifts/grant_statuses_for_progress(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/onsite_requisite_shifts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/onsite_requisite_shifts#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"onsite_requisite_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/onsite_requisite_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/onsite_requisite_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/activation_statuses/:id/toggle_waive_progress(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/activation_statuses#toggle_waive_progress",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							":id",
							"toggle_waive_progress(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/:id/toggle_waive_progress(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/:id/toggle_waive_progress(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/activation_statuses/:id/force_progress_state(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/activation_statuses#force_progress_state",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							":id",
							"force_progress_state(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/:id/force_progress_state(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/:id/force_progress_state(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/activation_statuses/:id/delete_progress(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/activation_statuses#delete_progress",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							":id",
							"delete_progress(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/:id/delete_progress(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/:id/delete_progress(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/activation_statuses/:id/recalculate_progress(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/activation_statuses#recalculate_progress",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							":id",
							"recalculate_progress(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/:id/recalculate_progress(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/:id/recalculate_progress(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/activation_statuses/:id/delete_professional_requisite_and_progress(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/activation_statuses#delete_professional_requisite_and_progress",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							":id",
							"delete_professional_requisite_and_progress(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/:id/delete_professional_requisite_and_progress(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/:id/delete_professional_requisite_and_progress(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/activation_statuses/update_activation_status_for_course(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/activation_statuses#update_activation_status_for_course",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							"update_activation_status_for_course(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/update_activation_status_for_course(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/update_activation_status_for_course(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/activation_statuses/update_activation_status_for_requisite(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/activation_statuses#update_activation_status_for_requisite",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							"update_activation_status_for_requisite(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/update_activation_status_for_requisite(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/update_activation_status_for_requisite(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/activation_statuses/update_activation_status_for_progress(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/activation_statuses#update_activation_status_for_progress",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							"update_activation_status_for_progress(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/update_activation_status_for_progress(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/update_activation_status_for_progress(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/activation_statuses/update_activation_status_orientation_status(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/activation_statuses#update_activation_status_orientation_status",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							"update_activation_status_orientation_status(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/update_activation_status_orientation_status(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/update_activation_status_orientation_status(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/activation_statuses/waive_progresses_for_professionals(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/activation_statuses#waive_progresses_for_professionals",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							"waive_progresses_for_professionals(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/waive_progresses_for_professionals(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/waive_progresses_for_professionals(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/activation_statuses/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/activation_statuses#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"activation_statuses",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/activation_statuses/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/activation_statuses/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/onsite_requisites_synonym_groups/:id/update_synonyms(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/onsite_requisites_synonym_groups#update_synonyms",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"onsite_requisites_synonym_groups",
							":id",
							"update_synonyms(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/onsite_requisites_synonym_groups/:id/update_synonyms(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/onsite_requisites_synonym_groups/:id/update_synonyms(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/orientation_shifts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/orientation_shifts#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"orientation_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/orientation_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/orientation_shifts(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/shift_agreements/cancel(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreements#cancel",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							"cancel(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/cancel(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/cancel(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreements/:id/unsatisfied_requirements(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/shift_agreements#unsatisfied_requirements",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							":id",
							"unsatisfied_requirements(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/:id/unsatisfied_requirements(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/:id/unsatisfied_requirements(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreements/:id/recalculate_estimated_bills(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreements#recalculate_estimated_bills",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							":id",
							"recalculate_estimated_bills(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/:id/recalculate_estimated_bills(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/:id/recalculate_estimated_bills(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreements/:id/log_shift_worked(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreements#log_shift_worked",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							":id",
							"log_shift_worked(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/:id/log_shift_worked(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/:id/log_shift_worked(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreements/:id/send_credential_reminders(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreements#send_credential_reminders",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							":id",
							"send_credential_reminders(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/:id/send_credential_reminders(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/:id/send_credential_reminders(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreements/:id/adjust_latest_split_time_assignment(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreements#adjust_latest_split_time_assignment",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							":id",
							"adjust_latest_split_time_assignment(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/:id/adjust_latest_split_time_assignment(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/:id/adjust_latest_split_time_assignment(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreements/:id/remove_professional(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreements#remove_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							":id",
							"remove_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/:id/remove_professional(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/:id/remove_professional(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreements/:id/update_onsite_requisite_progresses_on_voided_shift(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreements#update_onsite_requisite_progresses_on_voided_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							":id",
							"update_onsite_requisite_progresses_on_voided_shift(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/:id/update_onsite_requisite_progresses_on_voided_shift(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/:id/update_onsite_requisite_progresses_on_voided_shift(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreements/:id/update_worked_state_flow(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreements#update_worked_state_flow",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							":id",
							"update_worked_state_flow(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/:id/update_worked_state_flow(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/:id/update_worked_state_flow(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreements/:id/remove_timecard_from_shift(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreements#remove_timecard_from_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							":id",
							"remove_timecard_from_shift(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/:id/remove_timecard_from_shift(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/:id/remove_timecard_from_shift(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreements/:id/toggle_hide_cancellation_from_score(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreements#toggle_hide_cancellation_from_score",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreements",
							":id",
							"toggle_hide_cancellation_from_score(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreements/:id/toggle_hide_cancellation_from_score(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreements/:id/toggle_hide_cancellation_from_score(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreement_timesheet_uploads/:id/approve(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreement_timesheet_uploads#approve",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreement_timesheet_uploads",
							":id",
							"approve(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreement_timesheet_uploads/:id/approve(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreement_timesheet_uploads/:id/approve(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_agreement_timesheet_uploads/:id/reject(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_agreement_timesheet_uploads#reject",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_agreement_timesheet_uploads",
							":id",
							"reject(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_agreement_timesheet_uploads/:id/reject(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_agreement_timesheet_uploads/:id/reject(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/mock_shifts/create_shift(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/mock_shifts#create_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"mock_shifts",
							"create_shift(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/mock_shifts/create_shift(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/mock_shifts/create_shift(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/mock_shifts/create_shifts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/mock_shifts#create_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"mock_shifts",
							"create_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/mock_shifts/create_shifts(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/mock_shifts/create_shifts(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/onsite_requisite_progresses/refresh_progresses_and_documents(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/onsite_requisite_progresses#refresh_progresses_and_documents",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"onsite_requisite_progresses",
							"refresh_progresses_and_documents(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/onsite_requisite_progresses/refresh_progresses_and_documents(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/onsite_requisite_progresses/refresh_progresses_and_documents(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_payouts/:id/queue_payout_referral_message(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_payouts#queue_payout_referral_message",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_payouts",
							":id",
							"queue_payout_referral_message(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_payouts/:id/queue_payout_referral_message(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_payouts/:id/queue_payout_referral_message(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_background_checks/bulk_set_to_inactive(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_background_checks#bulk_set_to_inactive",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_background_checks",
							"bulk_set_to_inactive(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_background_checks/bulk_set_to_inactive(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_background_checks/bulk_set_to_inactive(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_background_checks/:id/update_from_third_party(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_background_checks#update_from_third_party",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_background_checks",
							":id",
							"update_from_third_party(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_background_checks/:id/update_from_third_party(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_background_checks/:id/update_from_third_party(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_background_checks/:id/handle_change(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_background_checks#handle_change",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_background_checks",
							":id",
							"handle_change(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_background_checks/:id/handle_change(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_background_checks/:id/handle_change(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_background_checks/:id/mark_as_cleared(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_background_checks#mark_as_cleared",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_background_checks",
							":id",
							"mark_as_cleared(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_background_checks/:id/mark_as_cleared(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_background_checks/:id/mark_as_cleared(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_background_checks/:id/mark_as_failed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_background_checks#mark_as_failed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_background_checks",
							":id",
							"mark_as_failed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_background_checks/:id/mark_as_failed(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_background_checks/:id/mark_as_failed(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/background_check_forms/reset_create_and_authorize(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/background_check_forms#reset_create_and_authorize",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"background_check_forms",
							"reset_create_and_authorize(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/background_check_forms/reset_create_and_authorize(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/background_check_forms/reset_create_and_authorize(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/karma_check_cases/:id/one_time_token_url(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/karma_check_cases#one_time_token_url",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"karma_check_cases",
							":id",
							"one_time_token_url(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/karma_check_cases/:id/one_time_token_url(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/karma_check_cases/:id/one_time_token_url(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/karma_check_cases/:id/sync_data_from_case(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/karma_check_cases#sync_data_from_case",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"karma_check_cases",
							":id",
							"sync_data_from_case(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/karma_check_cases/:id/sync_data_from_case(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/karma_check_cases/:id/sync_data_from_case(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/karma_check_cases/:id/onboard_with_fake_data(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/karma_check_cases#onboard_with_fake_data",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"karma_check_cases",
							":id",
							"onboard_with_fake_data(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/karma_check_cases/:id/onboard_with_fake_data(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/karma_check_cases/:id/onboard_with_fake_data(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/karma_check_cases/:id/screening_case_data(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/karma_check_cases#screening_case_data",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"karma_check_cases",
							":id",
							"screening_case_data(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/karma_check_cases/:id/screening_case_data(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/karma_check_cases/:id/screening_case_data(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/karma_check_cases/:id/completed_report_pdf_url(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/karma_check_cases#completed_report_pdf_url",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"karma_check_cases",
							":id",
							"completed_report_pdf_url(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/karma_check_cases/:id/completed_report_pdf_url(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/karma_check_cases/:id/completed_report_pdf_url(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/karma_check_cases/package_list(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/karma_check_cases#package_list",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"karma_check_cases",
							"package_list(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/karma_check_cases/package_list(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/karma_check_cases/package_list(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/karma_check_cases/enqueue_bulk_download_reports(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/karma_check_cases#enqueue_bulk_download_reports",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"karma_check_cases",
							"enqueue_bulk_download_reports(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/karma_check_cases/enqueue_bulk_download_reports(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/karma_check_cases/enqueue_bulk_download_reports(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_primary_source_verifications/send_karma_check_education_verification_invite(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_primary_source_verifications#send_karma_check_education_verification_invite",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_primary_source_verifications",
							"send_karma_check_education_verification_invite(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_primary_source_verifications/send_karma_check_education_verification_invite(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_primary_source_verifications/send_karma_check_education_verification_invite(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_primary_source_verifications/:id/mark_as_cleared(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_primary_source_verifications#mark_as_cleared",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_primary_source_verifications",
							":id",
							"mark_as_cleared(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_primary_source_verifications/:id/mark_as_cleared(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_primary_source_verifications/:id/mark_as_cleared(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_primary_source_verifications/:id/mark_as_failed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_primary_source_verifications#mark_as_failed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_primary_source_verifications",
							":id",
							"mark_as_failed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_primary_source_verifications/:id/mark_as_failed(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_primary_source_verifications/:id/mark_as_failed(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_employment_verifications/:id/mark_as_cleared(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_employment_verifications#mark_as_cleared",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_employment_verifications",
							":id",
							"mark_as_cleared(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_employment_verifications/:id/mark_as_cleared(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_employment_verifications/:id/mark_as_cleared(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_employment_verifications/:id/mark_as_failed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_employment_verifications#mark_as_failed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_employment_verifications",
							":id",
							"mark_as_failed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_employment_verifications/:id/mark_as_failed(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_employment_verifications/:id/mark_as_failed(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/invoices/:id/as_csv(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/invoices#as_csv",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"invoices",
							":id",
							"as_csv(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/invoices/:id/as_csv(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/invoices/:id/as_csv(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/resource_center/broadcast_new_articles_published(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/resource_center#broadcast_new_articles_published",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"resource_center",
							"broadcast_new_articles_published(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/resource_center/broadcast_new_articles_published(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/resource_center/broadcast_new_articles_published(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/resource_center/check_cms_for_new_articles(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/resource_center#check_cms_for_new_articles",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"resource_center",
							"check_cms_for_new_articles(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/resource_center/check_cms_for_new_articles(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/resource_center/check_cms_for_new_articles(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/shift_events/filterable_actions(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_events#filterable_actions",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_events",
							"filterable_actions(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_events/filterable_actions(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_events/filterable_actions(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/shift_events(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/shift_events#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_events(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_events(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_events(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_proposals/bulk_update_rate_adjustments(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_proposals#bulk_update_rate_adjustments",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_proposals",
							"bulk_update_rate_adjustments(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_proposals/bulk_update_rate_adjustments(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_proposals/bulk_update_rate_adjustments(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_proposals/:id/shift_visibility(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/shift_proposals#shift_visibility",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_proposals",
							":id",
							"shift_visibility(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_proposals/:id/shift_visibility(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_proposals/:id/shift_visibility(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/timecards/:id/approve(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/timecards#approve",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"timecards",
							":id",
							"approve(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/timecards/:id/approve(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/timecards/:id/approve(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/timecards/:id/reject_proposed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/timecards#reject_proposed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"timecards",
							":id",
							"reject_proposed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/timecards/:id/reject_proposed(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/timecards/:id/reject_proposed(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/timecards/bulk_approve(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/timecards#bulk_approve",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"timecards",
							"bulk_approve(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/timecards/bulk_approve(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/timecards/bulk_approve(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/users/:id/update_password(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/users#update_password",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"users",
							":id",
							"update_password(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/users/:id/update_password(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/users/:id/update_password(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/claimed_shifts/sync(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/claimed_shifts#sync",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"claimed_shifts",
							"sync(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/claimed_shifts/sync(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/claimed_shifts/sync(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/communications/send_inapp(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/communications#send_inapp",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"communications",
							"send_inapp(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/communications/send_inapp(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/communications/send_inapp(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/dnr_incidents/:id/disable_precepting_access(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/dnr_incidents#disable_precepting_access",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"dnr_incidents",
							":id",
							"disable_precepting_access(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/dnr_incidents/:id/disable_precepting_access(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/dnr_incidents/:id/disable_precepting_access(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/dnr_incidents/:id/dnred_pro_cancel_future_shifts(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/dnr_incidents#dnred_pro_cancel_future_shifts",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"dnr_incidents",
							":id",
							"dnred_pro_cancel_future_shifts(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/dnr_incidents/:id/dnred_pro_cancel_future_shifts(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/dnr_incidents/:id/dnred_pro_cancel_future_shifts(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/dnr_incidents/:id/apply_dns(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/dnr_incidents#apply_dns",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"dnr_incidents",
							":id",
							"apply_dns(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/dnr_incidents/:id/apply_dns(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/dnr_incidents/:id/apply_dns(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/dnr_incidents/:id/overturn_dns(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/dnr_incidents#overturn_dns",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"dnr_incidents",
							":id",
							"overturn_dns(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/dnr_incidents/:id/overturn_dns(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/dnr_incidents/:id/overturn_dns(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/dnr_incidents/:id/void_dns(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/dnr_incidents#void_dns",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"dnr_incidents",
							":id",
							"void_dns(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/dnr_incidents/:id/void_dns(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/dnr_incidents/:id/void_dns(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/dnr_incidents/apply_to_dns_policy_subject(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/dnr_incidents#apply_to_dns_policy_subject",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"dnr_incidents",
							"apply_to_dns_policy_subject(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/dnr_incidents/apply_to_dns_policy_subject(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/dnr_incidents/apply_to_dns_policy_subject(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/timesheets/:id/adopt_shift_agreement(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/timesheets#adopt_shift_agreement",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"timesheets",
							":id",
							"adopt_shift_agreement(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/timesheets/:id/adopt_shift_agreement(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/timesheets/:id/adopt_shift_agreement(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facilities_postable_positions/:id/positions(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/facilities_postable_positions#positions",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facilities_postable_positions",
							":id",
							"positions(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facilities_postable_positions/:id/positions(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facilities_postable_positions/:id/positions(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facilities_postable_positions/postable_positions_by_facility(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facilities_postable_positions#postable_positions_by_facility",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facilities_postable_positions",
							"postable_positions_by_facility(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facilities_postable_positions/postable_positions_by_facility(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facilities_postable_positions/postable_positions_by_facility(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/orientations/:id/book_charting_clinical_session_bundle(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/orientations#book_charting_clinical_session_bundle",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"orientations",
							":id",
							"book_charting_clinical_session_bundle(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/orientations/:id/book_charting_clinical_session_bundle(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/orientations/:id/book_charting_clinical_session_bundle(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/orientations/:id/invite_professional_to_orient(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/orientations#invite_professional_to_orient",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"orientations",
							":id",
							"invite_professional_to_orient(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/orientations/:id/invite_professional_to_orient(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/orientations/:id/invite_professional_to_orient(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/orientations/:id/available_bundles(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/orientations#available_bundles",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"orientations",
							":id",
							"available_bundles(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/orientations/:id/available_bundles(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/orientations/:id/available_bundles(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/events_app/:id/region_recruiting_status_change(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/events_app#region_recruiting_status_change",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"events_app",
							":id",
							"region_recruiting_status_change(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/events_app/:id/region_recruiting_status_change(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/events_app/:id/region_recruiting_status_change(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/performance_reviews/send_to_professionals(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/performance_reviews#send_to_professionals",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"performance_reviews",
							"send_to_professionals(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/performance_reviews/send_to_professionals(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/performance_reviews/send_to_professionals(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/performance_reviews/send_to_all_ready(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/performance_reviews#send_to_all_ready",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"performance_reviews",
							"send_to_all_ready(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/performance_reviews/send_to_all_ready(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/performance_reviews/send_to_all_ready(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/performance_reviews/:id/send_to_professional(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/performance_reviews#send_to_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"performance_reviews",
							":id",
							"send_to_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/performance_reviews/:id/send_to_professional(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/performance_reviews/:id/send_to_professional(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/performance_reviews/:id/calculate_new_rating_attributes(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/performance_reviews#calculate_new_rating_attributes",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"performance_reviews",
							":id",
							"calculate_new_rating_attributes(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/performance_reviews/:id/calculate_new_rating_attributes(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/performance_reviews/:id/calculate_new_rating_attributes(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/performance_reviews/:id/generate_pdf(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/performance_reviews#generate_pdf",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"performance_reviews",
							":id",
							"generate_pdf(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/performance_reviews/:id/generate_pdf(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/performance_reviews/:id/generate_pdf(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_health_records/:id/eligible_to_copy(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/professionals_health_records#eligible_to_copy",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_health_records",
							":id",
							"eligible_to_copy(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_health_records/:id/eligible_to_copy(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_health_records/:id/eligible_to_copy(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_health_records/:id/copy(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_health_records#copy",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_health_records",
							":id",
							"copy(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_health_records/:id/copy(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_health_records/:id/copy(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/addresses/:id/handle_update(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/addresses#handle_update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"addresses",
							":id",
							"handle_update(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/addresses/:id/handle_update(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/addresses/:id/handle_update(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_facilities/:id/reset_screening_responses(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_facilities#reset_screening_responses",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_facilities",
							":id",
							"reset_screening_responses(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_facilities/:id/reset_screening_responses(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_facilities/:id/reset_screening_responses(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_facilities/:id/mark_orientation_as_registered(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_facilities#mark_orientation_as_registered",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_facilities",
							":id",
							"mark_orientation_as_registered(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_facilities/:id/mark_orientation_as_registered(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_facilities/:id/mark_orientation_as_registered(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_facilities/:id/update_onboarding_specialty(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_facilities#update_onboarding_specialty",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_facilities",
							":id",
							"update_onboarding_specialty(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_facilities/:id/update_onboarding_specialty(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_facilities/:id/update_onboarding_specialty(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_facilities/onboarding_progress_status(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/professionals_facilities#onboarding_progress_status",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_facilities",
							"onboarding_progress_status(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_facilities/onboarding_progress_status(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_facilities/onboarding_progress_status(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/professionals_facilities(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_facilities#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_facilities(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_facilities(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_facilities(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facilities/:id/handle_address_update(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facilities#handle_address_update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facilities",
							":id",
							"handle_address_update(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facilities/:id/handle_address_update(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facilities/:id/handle_address_update(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facilities/:id/facility_rate_adjustment_levels(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/facilities#facility_rate_adjustment_levels",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facilities",
							":id",
							"facility_rate_adjustment_levels(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facilities/:id/facility_rate_adjustment_levels(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facilities/:id/facility_rate_adjustment_levels(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/facilities/:id/create_facility_holidays(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facilities#create_facility_holidays",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facilities",
							":id",
							"create_facility_holidays(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facilities/:id/create_facility_holidays(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facilities/:id/create_facility_holidays(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/health_systems/:id/create_health_system_holidays(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/health_systems#create_health_system_holidays",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"health_systems",
							":id",
							"create_health_system_holidays(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/health_systems/:id/create_health_system_holidays(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/health_systems/:id/create_health_system_holidays(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/charting_clinical_session_requirements/:id/delete_session_requirement(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/charting_clinical_session_requirements#delete_session_requirement",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"charting_clinical_session_requirements",
							":id",
							"delete_session_requirement(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/charting_clinical_session_requirements/:id/delete_session_requirement(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/charting_clinical_session_requirements/:id/delete_session_requirement(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_reliability_scores(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_reliability_scores#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_reliability_scores(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_reliability_scores(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_reliability_scores(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/provisioning_forms/:id/handle_changes(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/provisioning_forms#handle_changes",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"provisioning_forms",
							":id",
							"handle_changes(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/provisioning_forms/:id/handle_changes(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/provisioning_forms/:id/handle_changes(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/facility_screenings/:id/sync(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facility_screenings#sync",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facility_screenings",
							":id",
							"sync(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facility_screenings/:id/sync(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facility_screenings/:id/sync(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/facility_screenings(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/facility_screenings#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"facility_screenings(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/facility_screenings(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/facility_screenings(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/health_system_screenings/:id/sync(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/health_system_screenings#sync",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"health_system_screenings",
							":id",
							"sync(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/health_system_screenings/:id/sync(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/health_system_screenings/:id/sync(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/health_system_screenings(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/health_system_screenings#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"health_system_screenings(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/health_system_screenings(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/health_system_screenings(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/forms/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/forms#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"forms",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/forms/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/forms/:id(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/form_responses(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/form_responses#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"form_responses(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/form_responses(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/form_responses(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/form_responses/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/form_responses#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"form_responses",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/form_responses/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/form_responses/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_health_system_screening_responses/:id/approve(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_health_system_screening_responses#approve",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_health_system_screening_responses",
							":id",
							"approve(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_health_system_screening_responses/:id/approve(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_health_system_screening_responses/:id/approve(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_health_system_screening_responses/:id/reject(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_health_system_screening_responses#reject",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_health_system_screening_responses",
							":id",
							"reject(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_health_system_screening_responses/:id/reject(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_health_system_screening_responses/:id/reject(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_health_system_screening_responses/:id/reset(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_health_system_screening_responses#reset",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_health_system_screening_responses",
							":id",
							"reset(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_health_system_screening_responses/:id/reset(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_health_system_screening_responses/:id/reset(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_facility_screening_responses/:id/approve(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_facility_screening_responses#approve",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_facility_screening_responses",
							":id",
							"approve(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_facility_screening_responses/:id/approve(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_facility_screening_responses/:id/approve(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_facility_screening_responses/:id/reject(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_facility_screening_responses#reject",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_facility_screening_responses",
							":id",
							"reject(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_facility_screening_responses/:id/reject(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_facility_screening_responses/:id/reject(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_facility_screening_responses/:id/reset(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_facility_screening_responses#reset",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_facility_screening_responses",
							":id",
							"reset(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_facility_screening_responses/:id/reset(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_facility_screening_responses/:id/reset(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_onboardings/:id/mark_ghosted(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_onboardings#mark_ghosted",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_onboardings",
							":id",
							"mark_ghosted(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_onboardings/:id/mark_ghosted(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_onboardings/:id/mark_ghosted(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_onboardings/:id/reset_interview_waitlisted(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_onboardings#reset_interview_waitlisted",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_onboardings",
							":id",
							"reset_interview_waitlisted(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_onboardings/:id/reset_interview_waitlisted(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_onboardings/:id/reset_interview_waitlisted(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_onboardings/:id/override_interview_waitlisted(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_onboardings#override_interview_waitlisted",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_onboardings",
							":id",
							"override_interview_waitlisted(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_onboardings/:id/override_interview_waitlisted(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_onboardings/:id/override_interview_waitlisted(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_onboardings/:id/mark_ineligible_pre_guide_completion(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_onboardings#mark_ineligible_pre_guide_completion",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_onboardings",
							":id",
							"mark_ineligible_pre_guide_completion(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_onboardings/:id/mark_ineligible_pre_guide_completion(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_onboardings/:id/mark_ineligible_pre_guide_completion(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_onboardings/:id/override_to_universal_guide_started(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_onboardings#override_to_universal_guide_started",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_onboardings",
							":id",
							"override_to_universal_guide_started(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_onboardings/:id/override_to_universal_guide_started(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_onboardings/:id/override_to_universal_guide_started(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professional_onboardings/:id/enqueue_resume_pdf_conversion(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professional_onboardings#enqueue_resume_pdf_conversion",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professional_onboardings",
							":id",
							"enqueue_resume_pdf_conversion(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professional_onboardings/:id/enqueue_resume_pdf_conversion(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professional_onboardings/:id/enqueue_resume_pdf_conversion(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_eligibility_screening_responses/:id/reset(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_eligibility_screening_responses#reset",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_eligibility_screening_responses",
							":id",
							"reset(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_eligibility_screening_responses/:id/reset(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_eligibility_screening_responses/:id/reset(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_eligibility_screening_responses/:id/override_failed_screening(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_eligibility_screening_responses#override_failed_screening",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_eligibility_screening_responses",
							":id",
							"override_failed_screening(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_eligibility_screening_responses/:id/override_failed_screening(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_eligibility_screening_responses/:id/override_failed_screening(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_talent_providers/mark_as_onboarding_allowed_by_carerev(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_talent_providers#mark_as_onboarding_allowed_by_carerev",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_talent_providers",
							"mark_as_onboarding_allowed_by_carerev(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_talent_providers/mark_as_onboarding_allowed_by_carerev(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_talent_providers/mark_as_onboarding_allowed_by_carerev(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_talent_providers/unmark_onboarding_allowed_by_carerev(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_talent_providers#unmark_onboarding_allowed_by_carerev",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_talent_providers",
							"unmark_onboarding_allowed_by_carerev(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_talent_providers/unmark_onboarding_allowed_by_carerev(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_talent_providers/unmark_onboarding_allowed_by_carerev(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_talent_providers/:id/check_status(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_talent_providers#check_status",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_talent_providers",
							":id",
							"check_status(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_talent_providers/:id/check_status(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_talent_providers/:id/check_status(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/professionals_talent_providers/:id/force_start_onboarding(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/professionals_talent_providers#force_start_onboarding",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"professionals_talent_providers",
							":id",
							"force_start_onboarding(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/professionals_talent_providers/:id/force_start_onboarding(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/professionals_talent_providers/:id/force_start_onboarding(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/credentials_assets/:id/enqueue_pdf_conversion(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/credentials_assets#enqueue_pdf_conversion",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"credentials_assets",
							":id",
							"enqueue_pdf_conversion(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/credentials_assets/:id/enqueue_pdf_conversion(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/credentials_assets/:id/enqueue_pdf_conversion(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/qual_reviews/:id/void(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/qual_reviews#void",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"qual_reviews",
							":id",
							"void(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/qual_reviews/:id/void(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/qual_reviews/:id/void(.:format)",
	},
	{
		endpoint: "/api/v1/tools_api/qual_reviews(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/qual_reviews#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"qual_reviews(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/qual_reviews(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/qual_reviews(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/background_check_invites/available_options(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/tools_api/background_check_invites#available_options",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"background_check_invites",
							"available_options(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/background_check_invites/available_options(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/background_check_invites/available_options(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/background_check_invites/:id/send_to_professional(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/background_check_invites#send_to_professional",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"background_check_invites",
							":id",
							"send_to_professional(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/background_check_invites/:id/send_to_professional(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/background_check_invites/:id/send_to_professional(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/shift_bundle_assignments/:id/generate_bill(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/shift_bundle_assignments#generate_bill",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"shift_bundle_assignments",
							":id",
							"generate_bill(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/shift_bundle_assignments/:id/generate_bill(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/shift_bundle_assignments/:id/generate_bill(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/devices/send_silent_test_push_notifications(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/devices#send_silent_test_push_notifications",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"devices",
							"send_silent_test_push_notifications(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/devices/send_silent_test_push_notifications(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/devices/send_silent_test_push_notifications(.:format)",
	},
	{
		endpoint:
			"/api/v1/tools_api/devices/:id/send_test_push_notification(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/tools_api/devices#send_test_push_notification",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"tools_api",
							"devices",
							":id",
							"send_test_push_notification(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/tools_api/devices/:id/send_test_push_notification(.:format)",
						variable: [
							{
								key: "id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/tools_api/devices/:id/send_test_push_notification(.:format)",
	},
	{
		endpoint: "/api/v1/twilio_hooks/professional_canceled_shift(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/twilio_hooks#professional_canceled_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"twilio_hooks",
							"professional_canceled_shift(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/twilio_hooks/professional_canceled_shift(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/twilio_hooks/professional_canceled_shift(.:format)",
	},
	{
		endpoint: "/api/v1/twilio_hooks/professional_claimed_shift(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/twilio_hooks#professional_claimed_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"twilio_hooks",
							"professional_claimed_shift(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/twilio_hooks/professional_claimed_shift(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/twilio_hooks/professional_claimed_shift(.:format)",
	},
	{
		endpoint:
			"/api/v1/twilio_hooks/professional_claimed_onsite_requisite_shift(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/twilio_hooks#professional_claimed_onsite_requisite_shift",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"twilio_hooks",
							"professional_claimed_onsite_requisite_shift(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/twilio_hooks/professional_claimed_onsite_requisite_shift(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/twilio_hooks/professional_claimed_onsite_requisite_shift(.:format)",
	},
	{
		endpoint: "/api/v1/twilio_hooks/message_received(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/twilio_hooks#message_received",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"twilio_hooks",
							"message_received(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/twilio_hooks/message_received(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/twilio_hooks/message_received(.:format)",
	},
	{
		endpoint: "/api/v1/twilio_hooks/shift_avaliable(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/twilio_hooks#shift_avaliable",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"twilio_hooks",
							"shift_avaliable(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/twilio_hooks/shift_avaliable(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/twilio_hooks/shift_avaliable(.:format)",
	},
	{
		endpoint: "/api/v1/twilio_hooks/fax_status_change(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/twilio_hooks#fax_status_change",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"twilio_hooks",
							"fax_status_change(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/twilio_hooks/fax_status_change(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/twilio_hooks/fax_status_change(.:format)",
	},
	{
		endpoint: "/api/v1/twilio_hooks/fax_sent(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/twilio_hooks#fax_sent",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"twilio_hooks",
							"fax_sent(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/twilio_hooks/fax_sent(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/twilio_hooks/fax_sent(.:format)",
	},
	{
		endpoint: "/api/v1/twilio_hooks/fax_received(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/twilio_hooks#fax_received",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"twilio_hooks",
							"fax_received(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/twilio_hooks/fax_received(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/twilio_hooks/fax_received(.:format)",
	},
	{
		endpoint: "/api/v1/messaging_bypass/email(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/messaging_bypass#email",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"messaging_bypass",
							"email(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/messaging_bypass/email(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/messaging_bypass/email(.:format)",
	},
	{
		endpoint: "/api/v1/messaging_bypass/sms(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/messaging_bypass#sms",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"messaging_bypass",
							"sms(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/messaging_bypass/sms(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/messaging_bypass/sms(.:format)",
	},
	{
		endpoint: "/api/v1/ml_credential_reviews(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/ml_credential_reviews#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "ml_credential_reviews(.:format)"],
						raw: "{{baseUrl}}/api/v1/ml_credential_reviews(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/ml_credential_reviews(.:format)",
	},
	{
		endpoint: "/api/v1/ml_shift_scoring_event_handler(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/ml_shift_scoring_event_handler#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"ml_shift_scoring_event_handler(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/ml_shift_scoring_event_handler(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/ml_shift_scoring_event_handler(.:format)",
	},
	{
		endpoint: "/api/v1/checkr_hooks(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/checkr_hooks#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "checkr_hooks(.:format)"],
						raw: "{{baseUrl}}/api/v1/checkr_hooks(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/checkr_hooks(.:format)",
	},
	{
		endpoint: "/api/v1/karma_check_hooks(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/karma_check_hooks#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "karma_check_hooks(.:format)"],
						raw: "{{baseUrl}}/api/v1/karma_check_hooks(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/karma_check_hooks(.:format)",
	},
	{
		endpoint: "/api/v1/document_services_hooks(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/document_services_hooks#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"document_services_hooks(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/document_services_hooks(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/document_services_hooks(.:format)",
	},
	{
		endpoint: "/api/v1/efax_hooks(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/efax_hooks#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "efax_hooks(.:format)"],
						raw: "{{baseUrl}}/api/v1/efax_hooks(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/efax_hooks(.:format)",
	},
	{
		endpoint: "/api/v1/communication_hooks(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/communication_hooks#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "communication_hooks(.:format)"],
						raw: "{{baseUrl}}/api/v1/communication_hooks(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/communication_hooks#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "communication_hooks(.:format)"],
						raw: "{{baseUrl}}/api/v1/communication_hooks(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/communication_hooks(.:format)",
	},
	{
		endpoint: "/api/v1/daily_checkins(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/daily_checkins#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "daily_checkins(.:format)"],
						raw: "{{baseUrl}}/api/v1/daily_checkins(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/daily_checkins(.:format)",
	},
	{
		endpoint: "/api/v1/user(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/users#show",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "user(.:format)"],
						raw: "{{baseUrl}}/api/v1/user(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/user(.:format)",
	},
	{
		endpoint: "/api/v1/user_notification_prefs(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/user_notification_prefs#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"user_notification_prefs(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/user_notification_prefs(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/user_notification_prefs#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"user_notification_prefs(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/user_notification_prefs(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/user_notification_prefs#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"user_notification_prefs(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/user_notification_prefs(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/user_notification_prefs(.:format)",
	},
	{
		endpoint: "/api/v1/user_view_configurations(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/user_view_configurations#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"user_view_configurations(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/user_view_configurations(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/user_view_configurations#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"user_view_configurations(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/user_view_configurations(.:format)",
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/user_view_configurations#update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"user_view_configurations(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/user_view_configurations(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/user_view_configurations(.:format)",
	},
	{
		endpoint: "/api/v1/webflow_documents/professionals_help(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/webflow_documents#professionals_help",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"webflow_documents",
							"professionals_help(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/webflow_documents/professionals_help(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/webflow_documents/professionals_help(.:format)",
	},
	{
		endpoint: "/api/v1/webflow_documents/facilities_help(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/webflow_documents#facilities_help",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"webflow_documents",
							"facilities_help(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/webflow_documents/facilities_help(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/webflow_documents/facilities_help(.:format)",
	},
	{
		endpoint: "/api/v1/webflow_documents/billing_help(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/webflow_documents#billing_help",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"webflow_documents",
							"billing_help(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/webflow_documents/billing_help(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/webflow_documents/billing_help(.:format)",
	},
	{
		endpoint: "/api/v1/webflow_hooks/expire_cache(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/webflow_hooks#expire_cache",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"webflow_hooks",
							"expire_cache(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/webflow_hooks/expire_cache(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/webflow_hooks/expire_cache(.:format)",
	},
	{
		endpoint: "/api/v1/work_proposals/batch_update(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/work_proposals#batch_update",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"work_proposals",
							"batch_update(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/work_proposals/batch_update(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/work_proposals/batch_update(.:format)",
	},
	{
		endpoint: "/api/v1/work_proposals/batch_destroy(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/work_proposals#batch_destroy",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"work_proposals",
							"batch_destroy(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/work_proposals/batch_destroy(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/work_proposals/batch_destroy(.:format)",
	},
	{
		endpoint:
			"/api/v1/work_proposals/:work_proposal_id/communications/thread_summaries(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/work_proposal_communications#thread_summaries",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"work_proposals",
							":work_proposal_id",
							"communications",
							"thread_summaries(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/work_proposals/:work_proposal_id/communications/thread_summaries(.:format)",
						variable: [
							{
								key: "work_proposal_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/work_proposals/:work_proposal_id/communications/thread_summaries(.:format)",
	},
	{
		endpoint:
			"/api/v1/work_proposals/:work_proposal_id/communications/viewed(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/work_proposal_communications#viewed",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"work_proposals",
							":work_proposal_id",
							"communications",
							"viewed(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/work_proposals/:work_proposal_id/communications/viewed(.:format)",
						variable: [
							{
								key: "work_proposal_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/work_proposals/:work_proposal_id/communications/viewed(.:format)",
	},
	{
		endpoint:
			"/api/v1/work_proposals/:work_proposal_id/communications/:id(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/work_proposal_communications#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"work_proposals",
							":work_proposal_id",
							"communications",
							":id(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/work_proposals/:work_proposal_id/communications/:id(.:format)",
						variable: [
							{
								key: "work_proposal_id",
							},
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/work_proposals/:work_proposal_id/communications/:id(.:format)",
	},
	{
		endpoint:
			"/api/v1/work_proposals/:work_proposal_id/communications(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/work_proposal_communications#index",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"work_proposals",
							":work_proposal_id",
							"communications(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/work_proposals/:work_proposal_id/communications(.:format)",
						variable: [
							{
								key: "work_proposal_id",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/work_proposal_communications#create",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"work_proposals",
							":work_proposal_id",
							"communications(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/work_proposals/:work_proposal_id/communications(.:format)",
						variable: [
							{
								key: "work_proposal_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/work_proposals/:work_proposal_id/communications(.:format)",
	},
	{
		endpoint:
			"/api/v1/work_proposals/:work_proposal_id/bids_and_communications(.:format)",
		request: [
			{
				request: {
					header: [],
					method: "GET",
					name: "v1/work_proposal_bids_and_communications#show",
					url: {
						host: ["{{baseUrl}}"],
						path: [
							"api",
							"v1",
							"work_proposals",
							":work_proposal_id",
							"bids_and_communications(.:format)",
						],
						raw: "{{baseUrl}}/api/v1/work_proposals/:work_proposal_id/bids_and_communications(.:format)",
						variable: [
							{
								key: "work_proposal_id",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/work_proposals/:work_proposal_id/bids_and_communications(.:format)",
	},
	{
		endpoint: "/api/v1/work_proposals/:id(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PATCH",
					name: "v1/work_proposals#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "work_proposals", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/work_proposals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "PUT",
					name: "v1/work_proposals#update",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "work_proposals", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/work_proposals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "DELETE",
					name: "v1/work_proposals#destroy",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "work_proposals", ":id(.:format)"],
						raw: "{{baseUrl}}/api/v1/work_proposals/:id(.:format)",
						variable: [
							{
								key: "id(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/work_proposals/:id(.:format)",
	},
	{
		endpoint: "/api/v1/work_proposals(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "v1/work_proposals#create",
					url: {
						host: ["{{baseUrl}}"],
						path: ["api", "v1", "work_proposals(.:format)"],
						raw: "{{baseUrl}}/api/v1/work_proposals(.:format)",
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/api/v1/work_proposals(.:format)",
	},
	{
		endpoint: "/health_check(/:checks)(.:format)",
		request: [
			{
				request: {
					body: {
						mode: "raw",
						options: {
							raw: {
								headerFamily: "json",
								language: "json",
							},
						},
						raw: '{"id": "BreachLock"}',
					},
					header: [
						{
							key: "Content-Type",
							value: "application/json",
						},
					],
					method: "POST",
					name: "health_check/health_check#index",
					url: {
						host: ["{{baseUrl}}"],
						path: ["health_check(", ":checks)(.:format)"],
						raw: "{{baseUrl}}/health_check(/:checks)(.:format)",
						variable: [
							{
								key: "checks)(",
							},
						],
					},
				},
				response: [],
			},
		],
		url: "https://exam.com/health_check(/:checks)(.:format)",
	},
];

export const endpoint = [
	{
		id: 1,
		endpoint: "/sdfasdf",
		url: "www.example.com/v2/",
		request: [
			{
				id: 1,
				auth: true,
				description: "multipart/form-data",
				method: "post",
				name: "uploads an image",
				response: 1,
			},
		],
	},
	{
		id: 2,
		endpoint: "/pet",
		url: "www.example.com/v1/",
		request: [
			{
				id: 2,
				auth: true,
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 10,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				description: "asdfas",
				method: "post",
				name: "Add a new pet to the store",
				response: 1,
			},
			{
				id: 3,
				body: {
					mode: "raw",
					options: {
						raw: {
							headerFamily: "json",
							language: "json",
						},
					},
					raw: { id: "BreachLock" },
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
				method: "POST",
				name: "v1/facility_api/hirings#hire_professional",
				response: 1,
			},
		],
	},
];

export const endpointExcelData = [
	{
		id: 1,
		endpoint: "/sdfdsf",
		url: "www.example.com/v2/",
		request: [
			{
				id: 1,
				method: "post",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 10,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
			{
				id: 2,
				method: "get",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 11,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
		],
		totalRequest: 2,
	},
	{
		id: 2,
		endpoint: "/sdfdsf2",
		url: "www.example.com/v2/",
		request: [
			{
				id: 1,
				method: "post",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 10,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
			{
				id: 2,
				method: "get",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 11,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
		],
		totalRequest: 2,
	},
	{
		id: 3,
		endpoint: "/sdfdsf3",
		url: "www.example.com/v2/",
		request: [
			{
				id: 1,
				method: "post",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 10,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
			{
				id: 2,
				method: "get",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 11,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
		],
		totalRequest: 2,
	},
	{
		id: 4,
		endpoint: "/sdfdsf4",
		url: "www.example.com/v2/",
		request: [
			{
				id: 1,
				method: "post",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 10,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
			{
				id: 2,
				method: "get",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 11,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
		],
		totalRequest: 2,
	},
	{
		id: 5,
		endpoint: "/sdfdsf5",
		url: "www.example.com/v2/",
		request: [
			{
				id: 1,
				method: "post",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 10,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
			{
				id: 2,
				method: "get",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 11,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
		],
		totalRequest: 2,
	},
	{
		id: 6,
		endpoint: "/sdfdsf6",
		url: "www.example.com/v2/",
		request: [
			{
				id: 1,
				method: "post",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 10,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
			{
				id: 2,
				method: "get",
				name: "fsadfasdf",
				description: "sdfasdfas",
				body: {
					mode: "raw",
					raw: {
						category: {
							testData: "Breachlock",
						},
						id: 11,
						name: "doggie",
						photoUrls: ["Breachlock", "Pentesting"],
						status: "Breachlock",
						tags: ["Breachlock", "Pentesting"],
					},
				},
				header: [
					{
						key: "Content-Type",
						value: "application/json",
					},
				],
			},
		],
		totalRequest: 2,
	},
];
