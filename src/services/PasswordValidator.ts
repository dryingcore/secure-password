class PasswordValidator {
	private readonly minLength: number = 8;
	private readonly maxLength: number = 64;
	private readonly requirements: { regex: RegExp; message: string }[] = [
		{ regex: /[A-Z]/, message: "at least one uppercase letter" },
		{ regex: /[a-z]/, message: "at least one lowercase letter" },
		{ regex: /[0-9]/, message: "at least one number" },
		{ regex: /[\W_]/, message: "at least one special character" },
	];

	private validateLength(password: string, errors: string[]): void {
		if (password.length < this.minLength) {
			errors.push(`Password must be at least ${this.minLength} characters long.`);
		}

		if (password.length > this.maxLength) {
			errors.push(`Password must be no more than ${this.maxLength} characters long.`);
		}
	}

	private validateRequirements(password: string, errors: string[]): void {
		for (const requirement of this.requirements) {
			if (!requirement.regex.test(password)) {
				errors.push(`Password must include ${requirement.message}.`);
			}
		}
	}

	public validate(password: string): { valid: boolean; errors?: string[] } {
		const errors: string[] = [];

		this.validateLength(password, errors);
		this.validateRequirements(password, errors);

		return errors.length === 0 ? { valid: true } : { valid: false, errors };
	}
}

export default new PasswordValidator();
