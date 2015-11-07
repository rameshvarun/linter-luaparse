'use babel';
/* @flow */

import {Range, Point} from 'atom';
import luaparse from 'luaparse';

export var linter: Linter = {
  name: 'Luaparse',
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
      var message = err.message.match(/\[\d+:\d+\] (.*)/)[1];

      return [{
        type: 'Error',
        text: message,
        filePath: editor.getPath(),
        range: new Range(new Point(line, col), lineRange.end)
      }];
    }
  }
};
