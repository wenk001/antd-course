import React from 'react';
import {Card} from 'antd';
import {Tabs} from 'antd';
/*export default () => {
    const style={
      width:'400px',
      margin:'30px',
      boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
      border:'1px solid #e8e8e8',
    };
    return(
      <Card style={style} actions={[<a>操作一</a>,<a>操作二</a>]}>
      <Card.Meta avatar={<img alt="" style={{width:'64px',height:'64px',borderRadius:'32px'}} src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"/>}title="Alipay1" description="123"/>
      </Card>
    );
  }
*/
const TabPane = Tabs.TabPane;
export default ()=>{
  return(
    <Tabs>
      <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
      <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    </Tabs>
  )
}

/*
  class ShoppingList extends React.Component{
    render(){
      return(
        <div className="shopping-list">
           <h1>Shopping List for {this.props.name}</h1>
           <ul>
             <li>1</li>
             <li>2</li>
             <li>3</li>
           </ul>
        </div>
      );
    }
  }
import { from } from 'rxjs';
  const Picture=(props)=>{
    return(
      <div>
        <img src={props.src}/>
        {props.children}
      </div>
    )
  }
  class Content extends React.Component{
    render(){
      const picture={
        src:'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
      };
      return(
        <div className='container'>
          <Picture src={picture.src}>
           {12345}
          </Picture>
        </div>
      )
    }
  }
 class Square extends React.Component{
   constructor(props){
     super(props);
     this.state={
       value:'O',
     };
   }
   render(){
     return(
       <button className="square" onClick={()=>this.setState({value:'X'})}>
         {this.state.value}
       </button>
     );
   }
 }
  
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }
  render(){
    return(
      <div>
        <h1>Hellow</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
} 
  
  export default () =>{
    return(<Clock/>);
  }*/