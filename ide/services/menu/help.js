/*
 * Copyright (c) 2010-2020 SAP and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * Contributors:
 *   SAP - initial API and implementation
 */
exports.getMenu = function () {
	var menu = {
		"name": "Help",
		"link": "#",
		"order": "900",
		"items": [
			{
				"name": "Help Portal",
				"link": "#",
				"order": "910",
				"event": "open",
				"data": "https://www.dirigible.io/help/"
			},
			{
				"name": "Contact Support",
				"link": "#",
				"order": "915",
				"event": "open",
				"data": "https://github.com/eclipse/dirigible/issues"
			},
			{
				"name": "Suggest a Feature",
				"link": "#",
				"order": "920",
				"event": "open",
				"data": "https://github.com/eclipse/dirigible/issues/new?assignees=&labels=&template=feature_request.md&title=[New%20Feature]"
			},
			{
				"name": "What's New",
				"link": "#",
				"order": "920",
				"event": "open",
				"data": "https://twitter.com/dirigible_io"
			},
			{
				"name": "Check for Update",
				"link": "#",
				"order": "990",
				"event": "open",
				"data": "http://download.dirigible.io/",
				"divider": true
			},
			{
				"name": "About",
				"link": "#",
				"order": "991",
				"event": "openView"
			}
		]
	};
	return menu;
};
