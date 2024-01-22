/**
 * Replaces placeholders in a string template with corresponding values.
 *
 * @param {string} template - The template string containing placeholders.
 * @param {Object} replacements - An object where keys are placeholder names and values are replacements.
 * @returns {string} - The modified string with placeholders replaced by their corresponding values.
 */
export const replacePlaceholders = (template, replacements) => {
    return Object.entries(replacements)
        .reduce((result, [key, value]) => {
            const placeholder = `{${key}}`;
            return result.replace(new RegExp(placeholder, "g"), value);
        }, template);
};
