import { ExtractPropTypes } from "vue";

export const SpaceProps = {
  // 容器是否为 inline 元素
  inline: {
    type: Boolean,
    default: false
  },
  // 排列的方向
  direction: {
    type: String,
    values: ['vertical', 'horizontal'],
    default: 'horizontal'
  },
  // 间隔大小
  size: {
    type: Array,
    default: () => [10, 10],
  },
  // 设置是否自动折行
  wrap: {
    type: Boolean,
    default: false,
  },
  // 所有子节点在容器内垂直方向上的对齐方式
  alignment: {
    type: String,
    values: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit'],
    default: 'center'
  }
};

export type SpaceProps = ExtractPropTypes<typeof SpaceProps>;
