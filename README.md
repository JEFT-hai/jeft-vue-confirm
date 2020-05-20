# jeft-vue-confirm

## Installation

``` js
npm install jeft-vue-confirm --save
```

## Usage

### 适用于移动端

### 引入

- opts参数:

``` js
import confirm from 'jeft-vue-confirm'

Vue.use(confirm， {
    title: '标题',
    bg: '...'
})
```

### confirm参数

    | 参数 | 描述 |
    |-------- | :-----: |
    | title | string |
    | msg   | string
    | type  | alert or confirm |
    | alertBtnText | string |
    | yesBtnText   | string |
    | noBtnText    | string |
    | hasMark      | string |
    | bg           | imgUrl(可以在opts里面配置也可以传进来) |

``` js
this.$confirm({
    title: '确认退出登录',
    msg: '',
    type: 'confirm',
    yesBtnText: '确定',
    noBtnText: '取消'
}).then(() => {
    // 确定操作
    this.userLogoutAsync()
}).catch(() => {
    // 取消操作
})
```

### confirm参数会覆盖opts参数

``` js
Object.assign(ConfirmInstance, opts, options)
```
