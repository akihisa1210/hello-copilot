# Hello Copilot - FizzBuzz

TypeScriptで実装されたシンプルなFizzBuzzプログラムです。Deno実行環境で動作します。

## 実行方法

このプロジェクトは[Deno](https://deno.land/)を使用しています。実行前にDenoをインストールしてください。

### プログラムの実行

```bash
# 通常実行
deno task start

# 開発モード（ファイル変更を監視して自動再実行）
deno task dev
```

または直接実行も可能です：

```bash
deno run --allow-read index.ts
```

### hello.tsファイルのみを実行

```bash
deno run hello.ts
```

## プログラムの説明

このプログラムは、FizzBuzzルールに従って数値を変換します：

- 3で割り切れる場合は「Fizz」を返します
- 5で割り切れる場合は「Buzz」を返します
- 3と5の両方で割り切れる場合は「FizzBuzz」を返します
- それ以外の場合は、数値そのものを返します

## 技術スタック

- TypeScript
- Deno
