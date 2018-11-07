<style>
.demo-block .bi-button+.bi-button{
    margin-left: 10px;
}
</style>

<script>
  module.exports = {
    data(){
      return {}
    },
    methods: {
      onClick(e){
        console.log(e)
      }
    }
  }
</script>

# Button
<hr>

## 基础用法

使用`type`、`plain`和`round`属性来定义 Button 的样式。

::: demo

```html
<div class="demo-block">
  <div>
    <bi-button @click="onClick">默认按钮</bi-button>
    <bi-button type="primary">主要按钮</bi-button>
    <bi-button type="success">成功按钮</bi-button>
    <bi-button type="info">信息按钮</bi-button>
    <bi-button type="warning">警告按钮</bi-button>
    <bi-button type="danger">危险按钮</bi-button>
  </div>
  <div>
    <bi-button plain>默认按钮</bi-button>
    <bi-button plain type="primary">主要按钮</bi-button>
    <bi-button plain type="success">成功按钮</bi-button>
    <bi-button plain type="info">信息按钮</bi-button>
    <bi-button plain type="warning">警告按钮</bi-button>
    <bi-button plain type="danger">危险按钮</bi-button>
  </div>
  <div>
    <bi-button round>默认按钮</bi-button>
    <bi-button round type="primary">主要按钮</bi-button>
    <bi-button round type="success">成功按钮</bi-button>
    <bi-button round type="info">信息按钮</bi-button>
    <bi-button round type="warning">警告按钮</bi-button>
    <bi-button round type="danger">危险按钮</bi-button>
  </div>
</div>

<script>
  export default {
    data(){
      return {}
    },
    methods: {
      onClick(e){
        console.log(e)
      }
    }
  }
</script>
```

:::

## 禁用状态

按钮不可用状态

::: demo

```html
<div class="demo-block">
  <div>
    <bi-button disabled>默认按钮</bi-button>
    <bi-button disabled type="primary">主要按钮</bi-button>
    <bi-button disabled type="success">成功按钮</bi-button>
    <bi-button disabled type="info">信息按钮</bi-button>
    <bi-button disabled type="warning">警告按钮</bi-button>
    <bi-button disabled type="danger">危险按钮</bi-button>
  </div>
  <div>
    <bi-button disabled plain>默认按钮</bi-button>
    <bi-button disabled plain type="primary">主要按钮</bi-button>
    <bi-button disabled plain type="success">成功按钮</bi-button>
    <bi-button disabled plain type="info">信息按钮</bi-button>
    <bi-button disabled plain type="warning">警告按钮</bi-button>
    <bi-button disabled plain type="danger">危险按钮</bi-button>
  </div>
  <div>
    <bi-button disabled round>默认按钮</bi-button>
    <bi-button disabled round type="primary">主要按钮</bi-button>
    <bi-button disabled round type="success">成功按钮</bi-button>
    <bi-button disabled round type="info">信息按钮</bi-button>
    <bi-button disabled round type="warning">警告按钮</bi-button>
    <bi-button disabled round type="danger">危险按钮</bi-button>
  </div>
</div>
```

:::