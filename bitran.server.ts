import {
    blockMathName,
    inlineMathName,
} from '@erudit-js/bitran-elements/math/shared';
import {
    blockMathTranspiler,
    inlineMathTranspiler,
} from '@erudit-js/bitran-elements/math/transpiler';

export default defineServerBitran(async () => {
    return {
        [blockMathName]: blockMathTranspiler,
        [inlineMathName]: inlineMathTranspiler,
    };
});
