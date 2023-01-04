"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloDeprecatedHighlightClient = void 0;
function ApolloDeprecatedHighlightClient(operation) {
    return (response) => {
        if (!response.extensions ||
            !response.extensions.deprecations ||
            response.extensions.deprecations.length === 0 ||
            !console) {
            return response;
        }
        for (const deprecatedField of response.extensions.deprecations) {
            console.warn(`🚨 ${deprecatedField.field} in ${operation.operationName} is deprecated. Because ${deprecatedField.reason}`);
        }
        return response;
    };
}
exports.ApolloDeprecatedHighlightClient = ApolloDeprecatedHighlightClient;
