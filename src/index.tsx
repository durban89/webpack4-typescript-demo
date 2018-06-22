import * as _ from "lodash";

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.padStart("Hello TypeScript!", 20, "-");
    return element;
}

document.body.appendChild(component());