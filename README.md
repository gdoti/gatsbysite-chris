---
title: winマシンにnodejsをインストール
date: 2021-05-13
---


# gatsbysite-chris


###　win machineにnode.jsが入っていないようだ！


###　Microsoft Build　が　参考になった

Install nvm-windows のインストール, node.js, npm
Windows または WSL のどちらにインストールするかを選択するだけでなく、Node.js をインストールするときには他にも選択することがあります。 バージョンの変更は非常に早いため、バージョン マネージャーを使用することをお勧めします。 多くの場合、作業しているさまざまなプロジェクトのニーズに基づいて、複数の Node.js のバージョンを切り替える必要があります。 ノード バージョン マネージャー (一般的には nvm と呼ばれています) は、複数のバージョンの Node.js をインストールする場合の最も一般的な方法ですが、Mac または Linux にのみ使用でき、Windows ではサポートされていません。 代わりに、ここでは、nvm-windows をインストールし、それを使用して Node.js と Node Package Manager (npm) をインストールする手順について説明します。 代替のバージョン マネージャーについても検討する必要があります。次のセクションで説明します。


 ### 重要

バージョン マネージャーをインストールする前に、ご利用のオペレーティング システムから Node.js または npm の既存のインストールを削除することをお勧めします。インストールの種類が異なると、奇妙で混乱を招く競合が発生する可能性があるためです。 これには、残っている可能性がある既存の nodejs インストール ディレクトリ (例: "C:\Program Files\nodejs") の削除などが含まれます。 NVM によって生成される symlink は、既存のインストール ディレクトリを (空であっても) 上書きしません。 以前のインストールの削除については、「How to completely remove node.js from Windows」 (Windows から node.js を完全に削除する方法) を参照してください。

### How to completely remove node.js from Windows

How to remove Node.js from Windows:
1. Take a deep breath.
2. Run npm cache clean --force
3. Uninstall from Programs & Features with the uninstaller.
4. Reboot (or you probably can get away with killing all node-related processes from Task Manager).
5. Look for these folders and remove them (and their contents) if any still exist. Depending on the version you installed, UAC settings, and CPU architecture, these may or may not exist:

### Install nvm-windows のインストール, node.js, npmcd 

ご使用のインターネット ブラウザーで windows-nvm リポジトリを開いて、 [今すぐダウンロード] を選択します。
最新リリースの nvm-setup.zip をダウンロードします。
ダウンロードが完了したら、ZIP ファイルを開いて、nvm-setup.exe ファイルを開きます。
Setup-NVM-for-Windows インストール ウィザードの指示に従って、セットアップ手順を行います。たとえば、nvm-windows と Node.js の両方をインストールするディレクトリの選択などがあります。

### License agreement

The MIT License (MIT)

Copyright (c) 2014 Corey Butler and contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### installationは一瞬

install node 14.17.0

gatsby-cli をインストールしたが、gatsby new がうまく行かない
コマンドとして認識しない

多分　win8ではだめ　win10ましーんに切り替えてみる