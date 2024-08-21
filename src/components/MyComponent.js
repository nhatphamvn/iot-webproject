import React from 'react';
import FormUser from '../components/FormUser';

class MyComponent extends React.Component{


 constructor(props) {
    super(props);
    // Khôi phục trạng thái từ localStorage nếu có, nếu không có thì sử dụng dữ liệu mặc định
    const savedUsers = JSON.parse(localStorage.getItem('Users')) || [
      { id: 1, name: 'nhat', age: 20 },
      { id: 2, name: 'thanh', age: 21 },
      { id: 3, name: 'han', age: 22 }
    ];
    console.log(savedUsers);
    
    this.state = {
      Users: savedUsers,
    };
  }
  

  handleAddUsers = (obj) => {
    const newUsers = [obj, ...this.state.Users];
    this.setState({ Users: newUsers }, () => {
      // Lưu trạng thái mới vào localStorage
      localStorage.setItem('Users', JSON.stringify(this.state.Users));
    });
  }
    

  render() {

    return (
      <>
        <FormUser User={this.state.Users}
                  handleAddUsers={this.handleAddUsers}            
        />
      </>
    );
  }

}
export default MyComponent