<template>
  <v-layout 
    row 
    wrap>
    <v-flex xs12>
      <v-text-field
        ref="caller"
        :label="label"
        :placeholder="placeholder"
        :value="title"
        append-icon="search"
        readonly
        hide-details
        class="ma-1 pa-1"
        @click="openSelect"
      />
      <v-dropdown 
        ref="dropdown" 
        :cust-class="custClass" 
        @show-change="dropdownVisible" >
        <v-layout 
          row 
          wrap>
          <!-- 过滤条件 -->
          <v-flex 
            xs12 
            class="px-2">
            <v-text-field
              ref="search"
              :placeholder="searchText"
              v-model="search"
              hide-details
            />
          </v-flex>

          <!-- 操作Action -->
          <v-flex 
            xs12 
            row 
            class="pa-2">
            <v-layout 
              align-center 
              justify-space-between 
              row 
              fill-height>
              <v-btn 
                :disabled="(multipleLimit===0 || list.length <= multipleLimit)?false:true" 
                outline 
                small 
                color="grey"
                @click="doSelectAll">
                {{ i18n.select_all }}
              </v-btn>
              <v-btn 
                outline 
                small 
                color="red lighten-1" 
                @click="doClear">{{ i18n.unselect_all }}</v-btn>
              <template v-if="actions">
                <v-btn 
                  outline 
                  small 
                  color="green lighten-1" 
                  @click="doComplete">
                  {{ i18n.selectComplete }}
                </v-btn>
              </template>
            </v-layout>
          </v-flex>

          <!-- 项目列表 -->
          <v-flex xs12 >
            <v-divider />
            <v-list subheader>
              <template v-if="list.length === 0">
                <v-list-tile key="noData">{{ i18n.no_data }}</v-list-tile>
              </template>
              <template v-else>
                <template v-for="(item, index) in list">
                  <v-list-tile 
                    :key="item.id" 
                    ripple 
                    dense 
                    @click="selectItem(item)">

                    <v-list-tile-content>
                      <v-list-tile-sub-title>
                        <div v-html="formatTitle(item)"/>
                      </v-list-tile-sub-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                      <v-icon 
                        v-if="selected.findIndex(val => val.id === item.id)!==-1" 
                        small 
                        color="primary">
                        check
                      </v-icon>
                    </v-list-tile-action>
                        
                  </v-list-tile>
                  <v-divider 
                    v-if="index + 1 < list.length" 
                    :key="index"/>
                </template>
              </template>
            </v-list>
            <v-divider />
          </v-flex>

          <!-- 分页 -->
          <v-flex 
            v-if="page" 
            xs12 
            class="pa-2">
            <v-layout 
              align-center 
              justify-space-between 
              row 
              fill-height>
              <v-btn 
                :disabled="(list.length === 0 || pageNumber==1)?true:false" 
                outline 
                small 
                icon
                color="grey"
                @click="changePage('prev')">
                <v-icon small>keyboard_arrow_left</v-icon>
              </v-btn>
              <div>
                {{ pageInfo() }}
              </div>
              <v-btn 
                :disabled="(list.length === 0 || pageNumber>=totalPage)?true:false" 
                outline 
                small 
                icon 
                color="grey"
                @click="changePage('next')">
                <v-icon small>keyboard_arrow_right</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-dropdown>
    </v-flex>
  </v-layout>
</template>

<script>
import dropdown from './Dropdown.vue';
import language from './language';

export default {
  name: 'v-select-page',
  components: {
    'v-dropdown': dropdown,
  },
  props: {
    custClass: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    searchText: {
      type: String,
      default: 'Search',
    },
    actions: {
      type: Boolean,
      default: false,
    },
    hasSelected: {
      type: String,
      default: '',
    },
    language: {
      type: String,
      default: 'en',
    },
    ignoreCase: {
      type: Boolean,
      default: true,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    multipleLimit: {
      type: Number,
      default: 0,
    },
    page: {
      type: Boolean,
      default: true,
    },
    pagelimit: {
      type: Number,
      default: 12,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      selected: [],
      search: '',
      pageNumber: 1,
      pageSize: this.pagelimit,
      totalPage: 0,
      totalRows: 0,
      list: this.data,
      i18n: {},
    };
  },
  computed: {
    title() {
      const count = this.selected.length;
      if (count === 0) {
        return '';
      } else if (count === 1) {
        const item1 = this.data.filter(
          item => item.id === this.selected[0].id
        )[0];
        return item1 ? item1.name : '';
      }
      return this.i18n.items_selected.replace(
        'selected_count',
        this.selected.length
      );
    },
    values() {
      return this.selected.map(item => item.id).join(',');
    },
  },
  watch: {
    show(val) {
      if (val) {
        this.$refs.dropdown.$emit('show', true, this.$refs.caller.$el);
        this.$nextTick(() => {
          this.$refs.search.focus();
        });
      }
    },
    search(val) {
      this.pageNumber = 1;
      this.handleList();
    },
    data(val) {
      this.handleList();
    },
  },
  beforeMount() {
    this.i18n = language[this.language];
  },
  created() {
    if (this.hasSelected && this.hasSelected !== '') {
      this.selected = this.hasSelected.split(',').map(item => ({
        id: item,
      }));
    }
    this.handleList();
  },
  methods: {
    dropdownVisible(val) {
      this.show = val;
    },
    openSelect() {
      if (!this.show) {
        this.show = true;
      }
    },
    closeSelect() {
      this.$refs.dropdown.$emit('show', false);
    },
    selectItem(item) {
      const index = this.selected.findIndex(val => val.id === item.id);
      if (index !== -1) {
        this.selected.splice(index, 1);
        this.changeValue();
      } else if (
        this.multipleLimit === 0 ||
        (this.multipleLimit !== 0 && this.selected.length < this.multipleLimit)
      ) {
        this.selected.push(item);
        this.changeValue();
      }
    },
    doSelectAll() {
      this.selected = this.search ? [...this.list] : [...this.data];
      this.changeValue();
    },
    doClear() {
      this.search = '';
      this.pageNumber = 1;
      this.selected = [];
      this.changeValue();
      this.handleList();
    },
    doComplete() {
      this.$emit('on-action', this.values);
      this.closeSelect();
    },
    changeValue() {
      this.$emit('on-change', this.values);
    },
    handleList() {
      const listAll = this.data.filter(
        item =>
          this.ignoreCase && this.search
            ? item.name.toLowerCase().includes(this.search.toLowerCase())
            : item.name.includes(this.search)
      );
      this.totalRows = listAll.length;
      // 开启分页
      if (this.page) {
        if (this.search) {
          this.list = listAll;
          this.pageSize = listAll.length || this.pagelimit;
          this.totalPage = Math.ceil(listAll.length / this.pageSize);
        } else {
          this.pageSize = this.pagelimit;
          this.totalPage = Math.ceil(listAll.length / this.pageSize);
          const start = (this.pageNumber - 1) * this.pageSize;
          const end = start + this.pageSize - 1;
          const list = listAll.filter(
            (val, index) => index >= start && index <= end
          );
          this.list = list;
        }
      } else {
        this.list = listAll;
      }
    },
    changePage(type) {
      switch (type) {
        case 'prev':
          if (this.pageNumber !== 1) this.pageNumber--;
          break;
        case 'next':
          if (this.pageNumber !== this.totalPage) this.pageNumber++;
          break;
        default:
          break;
      }
      this.handleList();
    },
    pageInfo() {
      return this.i18n
        ? this.i18n.page_info
            .replace('page_num', this.pageNumber)
            .replace('page_count', this.totalPage)
            .replace('row_count', this.totalRows)
        : '';
    },
    formatTitle(item) {
      let titleString = item.name;
      if (!titleString) {
        return '';
      }
      if (this.search && this.search.length > 0) {
        // 匹配关键字正则
        const replaceReg = new RegExp(this.search, 'g');
        // 高亮替换v-html值
        const replaceString = `<span class="search-text">${this.search}</span>`;
        // 开始替换
        titleString = titleString.replace(replaceReg, replaceString);
      }
      return titleString;
    },
    clear() {
      this.selected = [];
      this.search = '';
      this.pageNumber = 1;
    },
  },
};
</script>

<style lang="scss">
.v-dropdown-container {
  max-width: 460px;
  .v-list {
    max-height: 300px;
    min-height: 100px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .search-text {
    color: #ff0000;
  }
}
</style>
