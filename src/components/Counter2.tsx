import * as React from 'react';
import {connect} from 'react-redux';
import {Store,Counter2} from '../types';
import actions from '../store/actions/counter';
interface Props{
  number:number,
  increment:any,
  decrement:any
}
class Counter extends React.Component<Props>{
   render(){
       let {number,increment,decrement} = this.props;
       return (
           <div>
               <p>Counter2:{number}</p>
               <button onClick={increment}>+</button>
               <button onClick={decrement}>-</button>
           </div>
       )
   }
}

export default connect(
    (state:Store):Counter2=>state.counter2,
    actions
)(Counter);