import React from 'react';


class MyComponent extends React.Component{

    state ={
        name:'nhat',
        age:12

    }
    handleSubmit=(e)=>{
        console.log('this is',this.state.name);
        
        this.setState({
            name:'han'
        })

    }

    render(){

        return(
            <>
                <h1>{this.state.name}</h1>
                <button onClick={this.handleSubmit}>Click</button>

            </>
        )

    }

}
export default MyComponent