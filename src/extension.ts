// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { doTranslate } from './translate';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.translateFrench', () => {
      doTranslate('fr');
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.translateEnglish', () => {
      doTranslate('en');
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.translateSpanish', () => {
      doTranslate('es');
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.translateGerman', () => {
      doTranslate('de');
    })
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.translatePortuguese', () => {
      doTranslate('pt');
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
