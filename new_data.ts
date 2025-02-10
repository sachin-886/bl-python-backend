export const mockPropsForSubOrgWithValues =   {
	initialValues: {
		// Provide initial values for the form fields
		parent_Org_Name: "parent-org",
		name: "test-org",
		// Add other form fields
		values: {
			tenant: "test-org",
			email: "abcd@gmail.com",
			phone: "91986878946",
			address: "bjdzkjvhbdzjkvbzjbvjz",
			user_count: "10",
			orgType: "Corporations",
			orgSize: "11-50 employees",
		},
		setFieldValue: jest.fn(),
		data: {},
		isSubmitting: false,
		validateAfterSubmit: false,
		validationSchemas: {},
	},
	validationSchema: {
		// Provide the validation schema for the form fields
	},
	onSubmit: jest.fn(),
};
