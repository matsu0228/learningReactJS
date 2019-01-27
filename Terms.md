## 用語

* Flux:  DOM操作のパフォーマンスを自動でいい感じにしてくれるフレームワーク
  * View      : Reactコンポーネントと同義
  * Action    : ロジック. 処理・動き
  * Dispatcher: データの流れを管理
  * Store     : アプリケーションの状態(state)とロジックを保持


* Redux: Fluxアーキテクチャの一種
  * Reduxの３原則
      * Single source of truth: すべての状態を１つの大きなオブジェクトで管理する
      * State in read-only    : アプリケーションの状態はコンポーネントから参照できるが、直接変更できない.
                              ActionをDispatchすることで、唯一変更できる
      * Changes are made with pure functions: 状態の変更は、純粋関数によってのみ行なわれる. Reducer
  * Reduxの構成要素
      * Reducer: Actionの内容に応じて、状態を変化させる
          * 基本的に参照渡しとする
      * Spread Operator: 変数を展開する記号

* JSX: JavaScript XML
  * コンポーネントのマークアップのためのシンタックス
  * コンパイルするとJSになる