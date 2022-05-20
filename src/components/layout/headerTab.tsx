import { defineComponent, h } from 'vue'
import './headerTab.scss'
const headerTab = defineComponent({
  name: 'headerTab',
  setup() {
    return	()	=>	{
      return <div class="headerTab">
        <p>数据可视化平台</p>
      </div>
    }
  },
});
export default headerTab