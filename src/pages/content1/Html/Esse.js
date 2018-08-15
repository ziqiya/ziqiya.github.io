import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import Session from '../../../components/Session';
import TableList from '../../../components/TableList';
import NoteTip from '../../../components/NoteTip';
const columns = [{
  title: '显示结果',
  dataIndex: 'Result',
  key: 'Result',
},{
  title: '描述',
  dataIndex: 'Description',
  key: 'Description',
},{
  title: '实体名称',
  dataIndex: 'Name',
  key: 'Name',
},{
  title: '实体编号',
  dataIndex: 'Rank',
  key: 'Rank',
}];

const data = [{
  key: '1',
  Result: ' ',
  Description:'空格',
  Name:'&nbsp;',
  Rank:'&#160;'
}, {
  key: '2',
  Result: '<',
  Description:'小于号',
  Name:'&lt;',
  Rank:'&#60;'
},{
  key: '3',
  Result: '>',
  Description:'大于号',
  Name:'&gt;',
  Rank:'&#62;'
}, {
  key: '4',
  Result: '&',
  Description:'和号',
  Name:'&amp;',
  Rank:'&#38;'
},{
  key: '5',
  Result: '"',
  Description:'引号',
  Name:'&quot;',
  Rank:'&#34;'
}, {
  key: '6',
  Result: '\'',
  Description:'撇号',
  Name:'&apos;',
  Rank:'&#39;'
},{
  key: '7',
  Result: '￠',			
  Description:'分（cent）',
  Name:'&cent;',
  Rank:'&#162;'			
}, {
  key: '8',
  Result: '£',
  Description:'镑（pound）',
  Name:'&pound;',
  Rank:'&#163;'
},{			
  key: '9',
  Result: '¥',
  Description:'元（yen）',
  Name:'&yen;',
  Rank:'&#165;'
}, {			
  key: '10',
  Result: '€',
  Description:'欧元（euro）',
  Name:'&euro;',
  Rank:'&#8364;'
},{
  key: '11',
  Result: '§',
  Description:'小节',
  Name:'&sect;',
  Rank:'&#167;'
}, {						
  key: '12',
  Result: '©',
  Description:'版权（copyright）',
  Name:'&copy;',
  Rank:'&#169;'
},{			
  key: '13',
  Result: '®',
  Description:'注册商标',
  Name:'&reg;',
  Rank:'&#174;'
}, {			
  key: '14',
  Result: '™',
  Description:'商标',
  Name:'&trade;',
  Rank:'&#8482;'
},{			
  key: '15',
  Result: '×',
  Description:'乘号',
  Name:'&times;',
  Rank:'&#215;'
}, {		
  key: '16',
  Result: '÷',
  Description:'除号',
  Name:'&divide;',
  Rank:'&#247;'
}, {
  key: '17',
  Result: '{',
  Description:'大括号左边部分',
  Name:'-',
  Rank:'&#123;'
}, {
  key: '18',
  Result: '}',
  Description:'大括号右边部分',
  Name:'-',
  Rank:'&#125;'
}, {
  key: '19',
  Result: ':',
  Description:'冒号',
  Name:'-',
  Rank:'&#58;'
}, {
  key: '20',
  Result: ';',
  Description:'分号',
  Name:'-',
  Rank:'&#59;'
}];
class Esse extends Component{
    render(){
      return(
        <Panel title="HTML 字符实体">
          <Session title="HTML 实体">
          <dl>
            <dt>HTML 中的预留字符必须被替换为字符实体。</dt>
            <dd>在 HTML 中，某些字符是预留的。</dd>
            <dd>在 HTML 中不能使用小于号（&lt;）和大于号（&gt;），这是因为浏览器会误认为它们是标签。</dd>
            <dd>如果希望正确地显示预留字符，我们必须在 HTML 源代码中使用字符实体（character entities）。</dd>
          </dl>
          <div>如需显示小于号，我们必须这样写：&lt；或 &#60；</div>
          <NoteTip title="提示：使用实体名而不是数字的好处是，名称易于记忆。不过坏处是，
          浏览器也许并不支持所有实体名称（对实体数字的支持却很好）。"/>
          </Session>
          <Session title="不间断空格（non-breaking space）">
          <dl>      
            <dt>HTML 中的常用字符实体是不间断空格(&nbsp；)。</dt>
            <dd>浏览器总是会截短 HTML 页面中的空格。如果您在文本中写 10 个空格，
              在显示该页面之前，浏览器会删除它们中的 9 个。</dd>
            <dd>如需在页面中增加空格的数量，您需要使用 &nbsp; 字符实体。</dd>             
          </dl>        
          </Session>

          <Session title="HTML 中有用的字符实体">
          <NoteTip title="注释：实体名称对大小写敏感！"/>
          <TableList columns={columns} data={data}/>
          </Session>
        </Panel>
        )
    }
  }
export default Esse;