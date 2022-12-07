/**
 * Validate email format
 * @param {String} str
 * @returns {Boolean}
 */
export const validateEmail = str =>
	str.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

/**
 * Validate password format
 * @param {String} str
 * @returns {Boolean}
 */
export const validatePassword = str =>
	str.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
