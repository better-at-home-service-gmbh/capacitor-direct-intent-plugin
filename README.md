# cap-android-intents

Capacitor plugin. Enables sending of direct intents

## Install

```bash
npm install cap-android-intents
npx cap sync
```

## API

<docgen-index>

* [`sendIntent(...)`](#sendintent)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### sendIntent(...)

```typescript
sendIntent(options: IntentCall) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#intentcall">IntentCall</a></code> |

--------------------


### Interfaces


#### IntentCall

| Prop            | Type                                 |
| --------------- | ------------------------------------ |
| **`action`**    | <code>string</code>                  |
| **`extra`**     | <code>{ [key: string]: any; }</code> |
| **`data`**      | <code>{ [key: string]: any; }</code> |
| **`isDirect`**  | <code>boolean</code>                 |
| **`component`** | <code>{ [key: string]: any; }</code> |

</docgen-api>
