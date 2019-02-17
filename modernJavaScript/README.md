## modern JavaScript

* ECMAScript(エクマスクリプト): JavaScript実装のための仕様
  * ES Versions: ECMAScriptのバージョン名
  * 一般的には、Editionで呼ばれる

|Edition|正式名称|リリース|
| :--   | :--    | :--    |
|ES8	|ES2017	|2017年6月|
|ES7	|ES2016	|2016年6月|
|ES6	|ES2015	|2015年6月|


### Promise

* Promise as a **Constructor**

```
var promise = new Promise(function(resolve, reject) {
    // 非同期の処理
    // 処理が終わったら、resolve または rejectを呼ぶ
});
```

* Promise as a **Instance Method**
  * 生成されたpromiseオブジェクトにはpromiseの値を resolve(成功) / reject(失敗) した時に呼ばれる コールバック関数を登録する

```
promise.then(onFulfilled, onRejected)

// エラー処理だけを書きたい場合( = promise.then(undefined, onRejected) )
promise.catch(onRejected)
```

* Promise as a **Static Method**
  * *Promise.all()* や *Promise.resolve()* など. 複数のpromiseオブジェクトを扱うときなど



### Classes

* Constructor
* Super
* Getters and setters

### Modules

* Importing modules: `import ... from ...`
* Exporting modules: `export function hoge() { }``

### Enhanced Object Literals

* prototype: `obj.Function == Object.prototype.Method`
  * classの継承などに活用する?

### For-of loop

```
// イテレータ
for (const v of ['a', 'b', 'c']) {
  console.log(v);
}

// キーも使う
for (const [i, v] of ['a', 'b', 'c'].entries()) {
  console.log(i, v);
}
```

### Array.prototype.includes()

* 以前の`indexOf`では少し直感的ではなかった


```
# before: 
if (![1,2].indexOf(3) != -1){

# after
if (![1,2].includes(3)) {
  console.log('Not found')
}
```

## refference

* ECMAScript
  * https://qiita.com/rana_kualu/items/422ba6b328c55a9e8edf

* Promise
  * https://flaviocopes.com/javascript-promises/
  * https://azu.github.io/promises-book/
  * https://qiita.com/toshihirock/items/e49b66f8685a8510bd76

* prototype: https://qiita.com/howdy39/items/35729490b024ca295d6c