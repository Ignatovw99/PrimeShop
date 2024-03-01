export const addMissingProperties = (obj, propertiesObj) => {
    Object.entries(propertiesObj).forEach(([property, defaultValue]) => {
        if (!obj.hasOwnProperty(property)) {
            obj[property] = defaultValue;
        }
    });
};
