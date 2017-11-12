/**
 * Created J/03/12/2009
 * Updated D/11/12/2016
 *
 * Copyright 2008-2017 | Fabrice Creuzot (luigifab) <code~luigifab~info>
 * http://www.luigifab.info/apijs
 *
 * This program is free software, you can redistribute it or modify
 * it under the terms of the GNU General Public License (GPL) as published
 * by the free software foundation, either version 2 of the license, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but without any warranty, without even the implied warranty of
 * merchantability or fitness for a particular purpose. See the
 * GNU General Public License (GPL) for more details.
 */

// #### Fonctions de démonstrations ########################################## //
// = révision : 61
// » Exemple de modification de la configuration (debug)
// » Exemples de fonction pour les dialogues de confirmation (myFuncA), d'options (myFuncB) et d'upload (myFuncC)
// » Affiche soit un dialogue d'information (myFuncA/myFuncB), soit un dialogue photo (myFuncC)
function setApijsConfig() {

	apijs.config.debug = true;
}

function myFuncA(args) {

	apijs.i18n.data.en.myFuncA = "Hello, it's [code]myFuncA(§)[/code] of [a §]demo.js[/a] file.";
	apijs.i18n.data.fr.myFuncA = "Coucou, c'est [code]myFuncA(§)[/code] du fichier [a §]demo.js[/a].";

	apijs.dialog.dialogInformation('myFuncA', apijs.i18n.translate('myFuncA', args, 'href="./javascripts/demo.js" download=""'));
}

function myFuncB(action, args) {

	apijs.i18n.data.en.myFuncBcheck = "Hello, it's myFuncB(§,§) of demo.js file.\n\nWhat to do next?\n» Confirm to return true.\n» Cancel to return false.";
	apijs.i18n.data.fr.myFuncBcheck = "Coucou, c'est myFuncB(§,§) du fichier demo.js.\n\nQue faire ensuite ?\n» Valider pour renvoyer true.\n» Annuler pour renvoyer false.";

	apijs.i18n.data.en.myFuncBsend = "It's [code]myFuncB(§,§)[/code] of [a §]demo.js[/a] file. Here is the contents of the POST variable: [code]§[/code]";
	apijs.i18n.data.fr.myFuncBsend = "C'est [code]myFuncB(§,§)[/code] du fichier [a §]demo.js[/a]. Voici le contenu de la variable POST : [code]§[/code]";

	if (typeof action === 'boolean')
		return confirm(apijs.i18n.translate('myFuncBcheck', action, args));
	else
		apijs.dialog.dialogInformation('myFuncB', apijs.i18n.translate('myFuncBsend', action, args, 'href="./javascripts/demo.js" download=""', apijs.serialize(apijs.dialog.t2)));
}

function myFuncC(image, args) {

	apijs.i18n.data.en.myFuncC = "Image that you sent";
	apijs.i18n.data.fr.myFuncC = "L'image que vous avez envoyée";

	apijs.dialog.dialogPhoto('./upload.php?image=' + image, 'myFuncC(' + image + ', ' + args + ')', 'false', apijs.i18n.translate('myFuncC'));
}