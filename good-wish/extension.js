const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    vscode.window.showInformationMessage('🌸 У тебя всё получится! 🌸');
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};