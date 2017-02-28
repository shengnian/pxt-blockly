/**
 * @license
 * PXT Blockly
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * https://github.com/Microsoft/pxt-blockly
 * 
 * See LICENSE file for details.
 */

'use strict';

goog.provide('Blockly.PXTUtils');

namespace pxtblocky {

    export class PXTUtils {

        public static fadeColour(hex: string, luminosity: number, lighten: boolean): string {
            // #ABC => ABC
            hex = hex.replace(/[^0-9a-f]/gi, '');

            // ABC => AABBCC
            if (hex.length < 6)
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];

            // tweak
            let rgb = "#";
            for (let i = 0; i < 3; i++) {
                let c = parseInt(hex.substr(i * 2, 2), 16);
                c = Math.round(Math.min(Math.max(0, lighten ? c + (c * luminosity) : c - (c * luminosity)), 255));
                let cStr = c.toString(16);
                rgb += ("00" + cStr).substr(cStr.length);
            }

            return rgb;
        }
    }
}

(Blockly as any).PXTUtils = pxtblocky.PXTUtils;