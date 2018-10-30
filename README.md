## 使用

- Install

```sh
npm install vuetify-selectpage
```

```
<template>
    <v-select-page></v-select-page>
</template>
```

- 全局使用

```vue
<script>
import VSelectPage from 'vuetify-selectpage';
import 'vuetify-selectpage/dist/vuetify-selectpage.css';

Vue.use(VSelectPage);
</script>
```

- 组件内使用

```
<script>
import SelectPage from 'vuetify-selectpage';
import 'vuetify-selectpage/dist/vuetify-selectpage.css';

export default {
  components: { SelectPage.name: SelectPage },
  ...
};
</script>
```

## 参数

| 名称          | 说明               | 默认值                | 类型    |
| ------------- | ------------------ | --------------------- | ------- |
| label         | 标签 Label         |                       | String  |
| placeholder   |                    | Please Select a Item. | String  |
| searchText    | 输入框 Search 文本 | Search                | String  |
| actions       |                    | false                 | Boolean |
| hasSelected   | 初始值             |                       | String  |
| language      | 语言               | en                    | String  |
| ignoreCase    | 忽略大小写         | true                  | Boolean |
| multiple      | 多选模式           | true                  | Boolean |
| multipleLimit | 选取最大项数       | 0 (不限制选择项目数)  | Number  |
| page          | 是否分页           | true                  | Boolean |
| pagelimit     | 每页条数           | 12                    | Number  |
| data          | 列表数据           |                       | Array   |
| custClass     | 自定义样式         |                       | String  |

## 构建

- https://github.com/egoist/bili
- https://github.com/egoist/poi
