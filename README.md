# tablesetting

全員が同じ環境で作業するため作成

## 設置方法

この repository を clone してからターミナルで下記のコマンドを入力する

```bash
./go
```

## 便利ツール
### autoprefixer
ベンダープレフェックスは自動的に書いてくれる

### postcss-text-remove-gap;
最初、最後の line-heightだけ 0 にしてくれる

使用例
```scss
.className {
	-rm-text-remove-gap: both;
}
```