'use strict';
/***
 *                          __     _  __       __                     
 *       ____ ___   ____   / /_   (_)/ /___   / /_   ___   _____ ____ 
 *      / __ `__ \ / __ \ / __ \ / // // _ \ / __ \ / _ \ / ___// __ \ 
 *     / / / / / // /_/ // /_/ // // //  __// / / //  __// /   / /_/ / 
 *    /_/ /_/ /_/ \____//_.___//_//_/ \___//_/ /_/ \___//_/    \____/ 
 *                                                                    
 *                  mobile solutions for everyday heroes
 *                                                                    
 * @file Babel plugin to replace string references to $.args 
 * @module babel-plugin-titanium-controller-args
 * @author Brenton House <brenton.house@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @copyright Copyright (c) 2017 by Superhero Studios Incorporated.  All Rights Reserved.
 * @license Licensed under the terms of the MIT License (MIT)
 * 
 */

// Walk tree transformer changing "$.args" to $.args
// This will allow you to use controller args in contained views/controllers
module.exports = function (_ref) {
	var types = _ref.types;

	return {
		pre: function (state) {

		},
		visitor: {

			Property: function (path, state) {
				if (types.isStringLiteral(path.node.value)) {
					if (path.node.value.value.startsWith('$.args.')) {
						path.replaceWith(types.ObjectProperty(types.identifier(path.node.key.name), types.Identifier(path.node.value.value)))
					}
				}
			},
		}
	};
};