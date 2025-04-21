import {
    blockMathName,
    inlineMathName,
} from '@erudit-js/bitran-elements/math/shared';
import {
    blockMathRenderer,
    inlineMathRenderer,
} from '@erudit-js/bitran-elements/math/renderer';
import {
    blockMathTranspiler,
    inlineMathTranspiler,
} from '@erudit-js/bitran-elements/math/transpiler';

export default defineAppBitran(async () => {
    return {
        [blockMathName]: {
            transpiler: blockMathTranspiler,
            renderer: blockMathRenderer,
        },
        [inlineMathName]: {
            transpiler: inlineMathTranspiler,
            renderer: inlineMathRenderer,
        },
    };
});
