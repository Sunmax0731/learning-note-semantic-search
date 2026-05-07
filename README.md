# learning-note-semantic-search

学習ノート・セマンティック検索 は、コード横メモ、意味検索、ファイル命名ルールを扱う。入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 何を解決するか

学びや命名規則がプロジェクト知識として残りにくい。

## 差別化

検索結果に自分の学習メモやルールも含める。

## 公開先

- GitHub Release / VSIX

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- VS Code extension + local note index の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/learning-note-semantic-search-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\VSCodeExtension\created_idea_007_learning-note-semantic-search`
- idea ZIP: `D:\AI\VSCodeExtension\created_idea_007_learning-note-semantic-search\idea_007_learning-note-semantic-search.zip`
- PICKUP rank: 37
- Domain: VSCodeExtension
