<template>
  <div class="home-index">
    <Title>
      <div class="home-title">我管理的小组</div>
    </Title>

    <div class="group-list">
      <div
        class="group-item"
        v-for="(item, index) in groupList"
        :key="index"
        @click="goGroup(item)"
      >
        <div
          class="group-img"
          :style="{
            'background-image': `url(http://118.190.207.166:8890/uploads/image/cut_071918_8935.png)`,
          }"
        />

        <div class="item-name">小组{{ index }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/commonElement/Title.vue";

// 工具函数
export default {
  name: "Button",
  components: {
    Title,
  },
  data() {
    return {
      groupList: [1, 2, 3, 4, 5], // 小组列表
    };
  },
  created() {},
  methods: {
    goGroup() {
      this.pushPage({
        name: "groupData",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home-index {
  .home-title {
    @include fontWeight {
      margin-bottom: 10px;
    }
  }

  .group-list {
    @include clearFix;

    .group-item {
      float: left;
      width: 190px;
      height: 230px;
      background: #f0f0f0;
      margin: 0 30px 30px 0;
      cursor: pointer;

      .group-img {
        width: 100%;
        height: 190px;
        @include bgBase {
          margin-bottom: 10px;
        }
      }

      .item-name {
        @include fontWeight {
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
}
</style>
