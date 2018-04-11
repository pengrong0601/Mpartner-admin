<template>
  <div class="vue_table">
    <el-table
      :data="tableData.datas"
      stripe
      size="small"
      style="width:100%"
      :ref="tableData.ref"
      @selection-change="handleSelectionChange"
      @select-all="selectAll"
      @cell-click="cellClick" >
      <el-table-column
        v-if="tableData.selection"
        :width="tableData.selection.options.width"
        :min-width="tableData.selection.options.minWidth"
        :fixed="tableData.selection.options.fixed"
        :align="tableData.selection.options.align"
        :header-align="tableData.selection.options.headerAlign"
        :sortable="tableData.selection.options.sortable"
        :type="tableData.selection.options.type"
        :index="tableData.selection.options.index"
        :resizable="tableData.selection.options.resizable"
        :class-name="tableData.selection.options.className"
        >
      </el-table-column>
      <template v-for="title in tableData.titles">
        <el-table-column
          v-if="title.prop != 'icon'"
          :key="title.prop"
          :prop="title.prop"
          :label="title.label"
          :width="title.width"
          :min-width="title.minWidth"
          :fixed="title.fixed"
          :align="title.align"
          :header-align="title.headerAlign"
          :sortable="title.sortable"
          :type="title.type"
          :index="title.index"
          :resizable="title.resizable"
          :class-name="title.className"
          >
        </el-table-column>
        <el-table-column
          v-else
          :key="title.prop"
          :prop="title.prop"
          :label="title.label"
          :width="title.width"
          :min-width="title.minWidth"
          :fixed="title.fixed"
          :align="title.align"
          :header-align="title.headerAlign"
          :sortable="title.sortable"
          :type="title.type"
          :index="title.index"
          :resizable="title.resizable"
          :class-name="title.className"
          >
          <template slot-scope="scope"><img class="rowIcon" :src="scope.row.icon" alt="icon图标"></template>
        </el-table-column>
      </template>
      <el-table-column v-if="tableData.btnList"
        :label="tableData.btnList.options.label"
        :width="tableData.btnList.options.width"
        :min-width="tableData.btnList.options.minWidth"
        :fixed="tableData.btnList.options.fixed"
        :align="tableData.btnList.options.align"
        :header-align="tableData.btnList.options.headerAlign"
        :resizable="tableData.btnList.options.resizable"
        :class-name="tableData.btnList.options.className"
        >
        <template slot-scope="scope">
          <el-button
          v-for="btn in tableData.btnList.btns"
          :key="btn.type"
          @click="handleClick(btn.type, scope.row)" v-if="scope.row.btnView ? scope.row.btnView.indexOf(btn.type) > -1 : true" type="text" size="small">{{btn.name}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="pageData.total"
      small
      background
      @current-change="handleCurrentChange"
      :page-size="pageData.pageSize"
      :current-page="pageData.currentPage ? pageData.currentPage : 1"
      layout="prev, pager, next, total, jumper"
      :total="pageData.total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: ['tableData', 'pageData'],
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    handleClick (type, obj) {
      this.$emit('handleBtnClick', type, obj)
    },
    handleCurrentChange (val) {
      this.$emit('pageChage', val)
    },
    handleSelectionChange (val) {
      this.$emit('handleSelectionChange', val)
    },
    selectAll (selection) {
      this.$emit('selectAll', selection)
    },
    cellClick (row, column, cell, event) {
      this.$emit('cellClick', row, column, cell, event)
    }
  }
}
</script>
<style lang="less">
  .vue_table {
    .el-table th {
      background-color: #aaa;
      color: #fff;
      padding: 15px 0;
    }
    .el-pagination {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-pagination__total {
        margin-left: 24px;
        margin-right: 0;
      }
    }
  }
</style>
