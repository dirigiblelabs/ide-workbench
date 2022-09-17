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
const perspectiveData = {
	id: "workbench",
	name: "Workbench",
	link: "../ide/index.html",
	order: "100",
	image: "files-o", // deprecated
	icon: "/services/v4/web/resources/unicons/file-copy-alt.svg",
};
if (typeof exports !== 'undefined') {
	exports.getPerspective = function () {
		return perspectiveData;
	}
}