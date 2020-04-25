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
angular.module('about', [])
.controller('AboutController', ['$scope', '$http', function ($scope, $http) {

	$http.get('../../../../../services/v4/version').then(function(response) {
		$scope.version = response.data;
	});


}]).config(function($sceProvider) {
    $sceProvider.enabled(false);
});
