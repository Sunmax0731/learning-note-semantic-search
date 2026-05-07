function activate(context) {
  const disposable = vscode.commands.registerCommand("learning-note-semantic-search.open", () => {
    vscode.window.showInformationMessage("学習ノート・セマンティック検索: npm test で検証できます。");
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}

const vscode = require("vscode");
module.exports = { activate, deactivate };
