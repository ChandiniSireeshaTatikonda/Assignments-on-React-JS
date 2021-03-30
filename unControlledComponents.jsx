import React, { Component } from 'react'
class UnControlled extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Successfully submitted your form")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label> Name: </label>
                    <input type="text" ref={this.input} />
                </div>
                <div>
                    <label>Upload file: </label>
                    <input type="file" ref={this.fileInput} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default UnControlled

