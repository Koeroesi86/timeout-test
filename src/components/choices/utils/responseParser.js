export default function (response) {
    try {
        return JSON.parse(response);
    } catch (e) {
        //TODO: report malformed json
        return Function('"use strict";return (' + response + ')')(); // eslint-disable-line no-new-func
    }
}