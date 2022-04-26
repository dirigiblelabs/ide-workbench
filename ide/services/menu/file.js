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
	return {
		label: "File",
		order: 1,
		items: [
			{
				label: "New",
				order: 1,
				items: [
					{
						label: "Project",
						order: 1,
						event: "workspace.create.project",
					},
					{
						label: "Linked Project",
						order: 2,
						event: "workspace.link.project",
					},
					{
						label: "Workspace",
						order: 3,
						event: "workspace.create.workspace",
					}
				]
			},
			{
				label: "Publish All",
				order: 2,
				event: "workspace.publish.all",
			},
			{
				label: "Export All",
				order: 3,
				event: "workspace.export.all",
			},
			{
				label: "Save All",
				order: 4,
				event: "editor.file.save.all",
				divider: true
			},
		]
	};
}