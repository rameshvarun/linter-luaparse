declare class Linter {
  name: string;
  grammarScopes: Array<string>;
  scope: string;
  lintOnFly: boolean;
  lint: (atom$TextEditor) => Promise<Array<Message>>;
};

declare class Message {
  type: string;
  text?: string;
  html?: string;
  filePath?: string;
  range?: Range;
  trace?: Array<Trace>;
};

declare class Trace {
  type: "Trace";
  text?: string;
  html?: string;
  filePath: string;
  range?: Range;
  class?: string;
}
