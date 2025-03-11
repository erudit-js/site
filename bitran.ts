import {
    blockMathElement,
    inlineMathElement,
} from '@erudit-js/bitran-elements/math/element';

export default defineBitranConfig({
    elements: {
        math: blockMathElement,
        imath: inlineMathElement,
    },
});
