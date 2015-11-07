'use babel';
/* @flow */

import {Range, Point} from 'atom';
import luaparse from 'luaparse';

export var linter: Linter = {
  name: 'Luaparse Linter',
  grammarScopes: ['source.lua'],
  scope: 'file',
  lintOnFly: true,
  async lint(editor: atom$TextEditor): Promise<Array<Message>> {
    try {
      luaparse.parse(editor.getText());
      return [];
    } catch(err) {
      var line = err.line - 1;
      var col = err.column;
      var lineRange = editor.getBuffer().rangeForRow(line, false);

      return [{
        type: 'Error',
        text: err.message,
        filePath: editor.getPath(),
        range: new Range(new Point(line, col), lineRange.end)
      }];
    }
  }
};
