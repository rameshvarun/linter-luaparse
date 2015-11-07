'use babel';
/* @flow */

import log4js from 'log4js';
const logger = log4js.getLogger();

export function activate () {}
export function deactivate() {}

export function provideLinter(): Linter {
	logger.trace('Registering linter.');
	return require('./linter').linter;
}
