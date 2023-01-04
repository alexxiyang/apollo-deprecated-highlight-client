
export function ApolloDeprecatedHighlightClient(operation: any) {
    return (response: any) => {
        if (
            !response.extensions ||
            !response.extensions.deprecations ||
            response.extensions.deprecations.length === 0 ||
            !console
        ) {
            return response;
        }

        for (const deprecatedField of response.extensions.deprecations) {
            console.warn(
                `🚨 ${deprecatedField.field} in ${operation.operationName} is deprecated. Because ${deprecatedField.reason}`,
            );
        }
        return response;
    };
}