# 魔筷大前端 vscode 插件:mk-vscode-tool



vscode 插件目前支持的功能是后台项目开发，常用代码片段的支持,后期会添加新的功能。

## 用法

直接键入前缀 mk-xxx,箭头切换就可以预览代码


## 目前支持的 snippets 汇总

这个表格是我们开发后台使用频率比较高的代码



|序号| 前缀                  |                        代码                         |
|:----:| :--------------------- | :-------------------------------------------------|
|1.| `mk-formTable`    |                    `formTable 组件代码 `             |
|2.| `mk-dialog`             |               `弹框组件代码片段 `               |
|3.| `mk-dialogForm  `       |               `elementUI 表单弹框组件 `               |
|4.| `mk-get`          |                    `get 请求代码 `                         |
|5.| `mk-post `              |                    `post 请求代码 `                   |
|6.| `mk-push`               |                    `push路由跳转`                   |
|7.| `mk-message`            |                  `elmentUI 消息提示`                  |
|8.| `mk-message-error`      |                `elmentUI 错误消息提示`                |
|9.| `mk-message-warning`    |                `elmentUI 警告消息提示 `               |
|10.| `mk-message-success`    |                `elmentUI 成功消息提示`                |
|11.| `mk-messageBox-alert`   |              `elementUI alert 消息弹框`               |
|12.| `mk-messageBox-confirm` |               `elementUI 提示消息弹框`                |
|13.| `mk-searchFromTable` |               `searchFromTable组件(已经停止维护)`                |

---



 ElementUI 部分
 
|序号 |前缀            |                  Element Tag |
|:---|:--------------|:------------------------------|
|1. | `row` | `<el-row>` |
|2. | `col` | `<el-col>` |
|3. | `elb` | `<el-button>` |

#### Form Part

|序号    |        前缀   |                Element Tag|
|:-----:|:--------------|:-------------------------------|
|1.  | `radio` | `<el-radio>` |
|2.  | `radiogroup` | `<el-radio-group>` |
|3.  | `checkbox` | `<el-checkbox>` |
|4.  | `checkboxgroup` | `<el-checkbox-group>` |
|5.  | `input` | `<el-input>` |
|6.  | `textarea` | `<el-input type="textarea">` |
|7.  | `input-number` | `------` |
|8.  | `select` | `<el-select>` |
|9.  | `option` | `<el-option>` |
|10. | `cascader` | `<el-cascader>` |
|11. | `swtich` | `<el-swtich>` |
|12. | `slider` | `-----------` |
|13. | `timepicker` | `<el-time-picker>` |
|14. | `timeselect` | `-----` |
|15. | `datepicker` | `<el-date-picker>` |
|16. | `datetimepicker` | `<el-date-picker type="datetime">` |
|17. | `upload` | `<el-upload>` |
|18. | `rate` | `<el-rate>` |
|19. | `colorpicker` | `<el-color-picker>` |
|20. | `transfer` | `<el-transfer>` |
|21. | `form` | `<el-form>` |
|22. | `formitem` | `<el-form-item>` |

#### Data Part

|序号|  前缀| Element Tag|
|:------:|:--------------|:--------|
|1. | `table` | `<el-table>` |
|2. | `tablecolumn` | `<el-table-column>` |
|3. | `tag` | `----` |
|4. | `progress` | `----` |
|5. | `progress` | `----` |
|6. | `tree` | `----` |
|7. | `pagination` | `<el-pagination>` |
|8. | `badge` | `<el-badge>` |

#### Navigation Part
|序号|  前缀 | Element Tag|
|:------:|:--------------|:--------|
|1. | `menu` | `<el-menu>` |
|2. | `submenu` | `<el-submenu>` |
|3. | `menuitem` | `<el-menu-item>` |
|4. | `tabs` | `<el-tabs>` |
|5. | `tabpane` | `<el-tab-pane>` |
|6. | `breadcrumb` | `<el-breadcrumb>` |
|7. | `breadcrumbitem` | `<el-breadcrumb-item>` |
|8. | `dropdown` | `<el-dropdown>` |
|9. | `dropdownitem` | `<el-dropdown-item>` |
|10. | `steps` | `<el-steps>` |
|11. | `step` | `<el-step>` |


#### Others Part
|序号|  前缀 | Element Tag|
|:------:|:--------------|:--------|
|1. | `dialog` | `<el-dialog>` |
|2. | `tooltip` | `<el-tooltip>` |
|3. | `popover` | `<el-popover>` |
|4. | `card` | `<el-card>` |
|5. | `carousel` | `<el-carousel>` |
|6. | `carouselitem` | `<el-carousel-item>` |
|7. | `collapse` | `<el-collapse>` |
|8. | `collapseitem` | `<el-collapse-item>` |










## Snippets

Support snippets list:

* `mk-get`

  ```
    let data = {};
    lib.api.get({
        api: '',
        data: data,
        success:(res) => {
        },
        error: (err) => {
        },
        complete: () => {
        }
    })
  ```

* `mk-post`

  ```
    let data = {};
    lib.api.post({
        api: '',
        data: data,
        success:(res) => {
        },
        error: (err) => {
        },
        complete: () => {
        }
    })
  ```

* `mk-alert`

  ```
    this.$alert('这是一段内容', '标题名称', {
    confirmButtonText: '确定',
    callback: action => {
        this.$message({
            type: 'info',
            message: `action: ${ action }`
            });
        }
    });
  ```

* `mk-confirm`

  ```
    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        }).then(() => {
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
        }).catch(() => {
        this.$message({
            type: 'info',
            message: '已取消删除'
        }); 
    });
  ```

* `mk-push`

    ```
     this.$router.push({ path: `` });
    ```
* `mk-message`

    ```
    this.$message('这是一条消息提示');
    ```
* `mk-message-error`

    ```
     this.$message.error('这是一条错误消息提示');
    ```
* `mk-message-success`

    ```
    this.$message.success('这是一条成功消息提示');
    ```
* `mk-message-warning`

    ```
     this.$message.warning('这是一条警告消息提示');
    ```
* `msg`

  ```
  this.$message({
    message: '',
    type: ''
  })
  ```

* `alert`

  ```
  this.$alert('', '', {
    confirmButtonText: '',
    callback: () => {}
  });
  ```

* `confirm`

  ```
  this.$confirm('', '', {
    confirmButtonText: '',
    cancelButtonText: '',
    type: ''
  }).then(() => {})
    .catch(() => {});
  ```

* `prompt`

  ```
  this.$prompt('', '', {
    confirmButtonText: '',
    cancelButtonText: '',
    inputPattern: //,
    inputErrorMessage: ''
  }).then(({ value }) => {})
    .catch(() => {});
  ```

* `msgb`

  ```
  this.$msgbox({
    title: '',
    message: '',
    showCancelButton: '',
    confirmButtonText: '',
    cancelButtonText: '',
    beforeClose: (action, instance, done) => {}
  }).then(action => {});
  ```

* `notify`

  ```
  this.$notify({
    title: '',
    message: ''
  });
  ```
* `dialog`

```
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
```

## 写在最后

一起来顺畅的写代码!目前插件还没有很完善,有任何问题都可以来和我交流一下,期待新的想法,繁杂基础的工作都可以交给工具来处理,我们只负责核心逻辑的构建!

**Enjoy!**
