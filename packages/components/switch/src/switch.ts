import { ExtractPropTypes } from "vue";

export const SwitchProps = {
  disabled: {
    type: Boolean,
    default: false,
  },
  activeText: { // switch 打开时的文字描述
    type: String,
    default: "",
  },
  activeIcon: { // switch 打开时的 icon
    type: String,
    default: "",
  },
  inactiveText: { // switch 关闭时的文字描述
    type: String,
    default: "",
  },
  inactiveIcon: { // switch 关闭时的 icon
    type: String,
    default: "",
  },
  activeColor: { // switch 打开时的颜色
    type: String,
    default: "#409EFF",
  },
  inactiveColor: { // switch 关闭时的颜色
    type: String,
    default: "#C0CCDA",
  },
  inlinePrompt: {  // icon/文字 显示在控件内部(true)还是外部(false)
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    values: ["large", "default", "small"],
    default: "default"
  },
  modelValue: {
    type: Boolean,
    default: false,
  }
};

export type SwitchProps = ExtractPropTypes<typeof SwitchProps>;
