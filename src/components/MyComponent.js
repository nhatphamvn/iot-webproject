import React from 'react';
import FormUser from '../components/FormUser';

class MyComponent extends React.Component{


  state={
    Users:[
      {id: 1,name:'nhat',age:20
      },
      {id: 2,name:'thanh',age:21
      },
      {id: 3,name:'han',age:22
      }

    ]
  }
    

  render() {

    return (
      <>
        <FormUser User={this.state.Users}/>
      </>
    );
  }

}
export default MyComponent