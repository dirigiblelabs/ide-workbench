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
						event: "projects.create.project",
						data: { isMenu: true },
					},
					{
						label: "Linked Project",
						order: 2,
						event: "projects.link.project",
						data: { isMenu: true },
					},
				],
			},
			{
				label: "Save All",
				order: 2,
				event: "editor.file.save.all",
				divider: true,
			},
			{
				label: "Publish All",
				order: 3,
				event: "projects.tree.contextmenu",
				data: { itemId: "publishAll" },
			},
			{
				label: "Unpublish All",
				order: 4,
				event: "projects.tree.contextmenu",
				divider: true,
				data: { itemId: "unpublishAll" },
			},
			{
				label: "Export All",
				order: 5,
				event: "projects.export.all",
			},
		]
	};
}