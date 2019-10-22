import * as vscode from 'vscode';
import { Translate as GTranslate } from '@google-cloud/translate';

const translator = new GTranslate({ projectId: 'YOUR_PROJECT_ID' });

export async function doTranslate(language: 'en' | 'fr' | 'es' | 'de' | 'pt') {
  // Get the active editor
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const selection = editor.selection;
    // Get the word within the selection
    const textSelection = document.getText(selection);
    // Display a status bar message to show progress
    vscode.window.setStatusBarMessage('Translating ....');
    const [translation] = await translator.translate(textSelection, language);
    vscode.window.showInformationMessage(translation);
    vscode.window.setStatusBarMessage('Translated successfully', 2000);
  }
}
